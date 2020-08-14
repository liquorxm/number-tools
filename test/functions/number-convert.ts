import assert from 'power-assert';
import { convertToDols, convertToRMB, numberSeparate } from '../../src/functions/number-convert';

describe('测试 digital-operation', () => {
  describe('convertToDols(32)', () => {
    it('should return "32$" ', () => {
      assert(convertToDols(32) === '32$');
    });
  });

  describe('convertToRMB(100)', () => {
    it('should return "100￥" ', () => {
      assert(convertToRMB('100') === '100￥');
    });
  });

  describe('numberSeparate(10000000000)', () => {
    it('should return "10,000,000,000" ', () => {
      assert(numberSeparate({ input: 10000000000 }) === '10,000,000,000');
    });
  });
});