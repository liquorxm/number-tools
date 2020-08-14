import assert from 'power-assert';
import { bigNumberMultiply } from '../src/functions/digital-operation';

describe('测试 digital-operation', () => {
  describe('bigNumberMultiply("10000000000000000", "1000000000001")', () => {
    it('should return "10000000000010000000000000000" ', () => {
      assert(bigNumberMultiply('10000000000000000', '1000000000001') === '10000000000010000000000000000');
    });
  });
});

// "use strict";
// var assert = require('power-assert');

// describe('Array', function () {
//   beforeEach(function () {
//     this.ary = [1, 2, 3];
//   });
//   describe('#indexOf()', function () {
//     it('should return index when the value is present', function () {
//       var zero = 0, two = 2;
//       assert(this.ary.indexOf(zero) === two);
//     });
//   });
// });

// describe('various types', function(){
//     function Person(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     beforeEach(function(){
//         this.types = [
//             'string', 98.6, true, false, null, undefined,
//             ['nested', 'array'],
//             {object: true},
//             NaN, Infinity,
//             /^not/,
//             new Person('alice', 3)
//         ];
//     });
//     it('string diff demo', function(){
//         var index = this.types.length -1,
//             bob = new Person('bob', 5);
//         assert(this.types[index].name === bob.name);
//     });
// });