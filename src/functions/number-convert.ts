import _ from 'lodash';
import { separate } from '../utils/utils';
// import { NumberSeparate } from '../../typings/functions/number-convert';
interface NumberSeparateProps {
  input: number | string;
  separator?: string;
  digits?: number;
}
interface NumberSeparate {
  (params: NumberSeparateProps): number | string;
}

const convertToDols = (input: string | number) => {
  if (_.isNaN(Number(input))) {
    throw new Error("input type should be string or number");
  }
  return `${input}$`;
};

const convertToRMB = (input: string | number) => {
  if (_.isNaN(Number(input))) {
    throw new Error("input type should be string or number");
  }
  return `${input}￥`;
};

const numberSeparate: NumberSeparate = ({ input, separator = ',', digits = 3 }) => {
  if (!input || _.isNaN(Number(input))) {
    throw new Error("please input correct value");
  }
  const inputStr = String(input);
  const hasPoint = inputStr.indexOf('.') !== -1;
  let inputArr: string[] = [];
  if (hasPoint) {
    inputArr = inputStr.split('.');
  } else {
    inputArr = [inputStr, ''];
  }

  let prefix = inputArr[0];
  const suffix = inputArr[1];
  // 翻转字符串
  prefix = prefix.split('').reverse().join('');

  const resPrefix = separate(prefix, separator, digits).split('').reverse().join('');
  const resSuffix = separate(suffix, separator, digits);
  if (resSuffix) {
    return `${resPrefix}.${resSuffix}`;
  }
  return resPrefix;
}

export {
  convertToDols,
  convertToRMB,
  numberSeparate
};
