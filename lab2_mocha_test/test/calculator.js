// test/calculator.js
import { expect } from 'chai';
import { add, sub, mul, div } from '../app/calculator.js';



// ここにcalculatorモジュールをインポートするnp
// const calculator = require('../path_to_calculator_module');

describe('Calculator tests', function() {
  // 加算のテスト
  describe('Addition', function() {
    it('add(5, 2) should return 7', function() {
      expect(calculator.add(5, 2)).to.equal(7);
    });

    it('add(5, 2) should not return 8', function() {
      expect(calculator.add(5, 2)).to.not.equal(8);
    });
  });

  // 減算のテスト
  describe('Subtraction', function() {
    it('sub(5, 2) should return 3', function() {
      expect(calculator.sub(5, 2)).to.equal(3);
    });

    it('sub(5, 2) should not return 5', function() {
      expect(calculator.sub(5, 2)).to.not.equal(5);
    });
  });

  // 乗算のテスト
  describe('Multiplication', function() {
    it('mul(5, 2) should return 10', function() {
      expect(calculator.mul(5, 2)).to.equal(10);
    });

    it('mul(5, 2) should not return 12', function() {
      expect(calculator.mul(5, 2)).to.not.equal(12);
    });
  });

  // 除算のテスト
  describe('Division', function() {
    it('div(10, 2) should return 5', function() {
      expect(calculator.div(10, 2)).to.equal(5);
    });

    it('div(10, 2) should not return 2', function() {
      expect(calculator.div(10, 2)).to.not.equal(2);
    });
  });
});
