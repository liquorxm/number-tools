import { hasDecimals } from './isUtils';
/**
 * 每个位可能大于10，先处理进位，再把位相加
 * @param list 相乘或相加后 位的值列表
 */
const getNumberFromDigitList = (list: number[]) => {
  const nList = [...list];
  // 单独处理进位
  for (let k = nList.length - 1; k > 0; k--) {
    if (nList[k] >= 10) {
      nList[k - 1] += Math.floor(nList[k] / 10);
      nList[k] %= 10;
    }
  }

  // 获取结果字符串
  let res = '';
  const nLen = nList.length;
  let i = 0;
  // 去除前置0
  while (nList[i] === 0 && i < nLen - 1) {
    i += 1;
  }

  for (; i < nLen; i += 1) {
    res += String(nList[i]);
  }
  return res;
}

/**
 * 获取大数字符串前缀和后缀
 * @param str 
 */
const getNumberPrefixAndSuffix = (str: string) => {
  const strArr = str.split('.');
  const prefix = strArr[0];
  const suffix = strArr[1] || '';
  return [prefix, suffix];
}

/**
 * 整数相加，返回数字数组
 * @param num1 
 * @param num2 
 */
const integerAddToNumArr = (num1: string, num2: string): number[] => {
  const maxLen = Math.max(num1.length, num2.length);
  const result = [0];
  for (let i = 0; i < maxLen; i++) {
    result[maxLen - i - 1] = Number(num1[num1.length - i - 1] || 0) +
      Number(num2[num2.length - i - 1] || 0);
  }
  return result;
}

/**
 * 大数相乘
 * @param num1 
 * @param num2 
 */
export const bigNumberMultiply = (num1: string, num2: string): string => {
  const result = [0];
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      result[i + j] = Number(num1[i]) * Number(num2[j]) + (result[i + j] || 0);
    }
  }
  const res = getNumberFromDigitList(result);
  return res;
}

/**
 * 大数相加
 * @param num1 
 * @param num2 
 */
export const bigNumberAdd = (num1: string, num2: string): string => {
  if (!hasDecimals(num1) && !hasDecimals(num2)) {
    // 没有小数
    return getNumberFromDigitList(integerAddToNumArr(num1, num2));
  }

  const [num1Prefix, num1Suffix] = getNumberPrefixAndSuffix(num1);
  const [num2Prefix, num2Suffix] = getNumberPrefixAndSuffix(num2);
  const prefixSumArr = integerAddToNumArr(num1Prefix, num2Prefix);
  const suffixSumArr = integerAddToNumArr(num1Suffix, num2Suffix);
  const maxDigit = Math.max(num1Suffix.length, num2Suffix.length);
  console.log(prefixSumArr, suffixSumArr, maxDigit);
  let suffixSumStr = getNumberFromDigitList(suffixSumArr);
  const suffixCarry = suffixSumStr.substr(0, suffixSumStr.length - maxDigit - 1);
  suffixSumStr = suffixSumStr.substr(suffixSumStr.length - maxDigit, suffixSumStr.length - 1);
  prefixSumArr[0] = (prefixSumArr[0] || 0) + Number(suffixCarry);
  return getNumberFromDigitList(prefixSumArr) + '.' + suffixSumStr;
}

/**
 * 字符分隔
 * @param str 传入的字符串
 * @param separator 分隔符
 * @param digits 间隔位数
 */
export const separate = (str: string, separator: string, digits: number) => {
  if (!str) {
    return '';
  }
  const newStrArr = [];
  let result = '';
  for (let i = 0; i < str.length / digits; i += 1) {
    newStrArr.push(str.substr(i * digits, digits));
  }
  result = newStrArr.join(separator);
  return result;
}
