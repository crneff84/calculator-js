function Calculator() {
  
}

Calculator.prototype.add = function(firstAdd, secondAdd) {
  var output = firstAdd + secondAdd;
  return output;
};

Calculator.prototype.subtract = function(firstSubtract, secondSubtract) {
  var output = firstSubtract - secondSubtract;
  return output;
};

Calculator.prototype.multiply = function(firstMultiply, secondMultiply) {
  var output = firstMultiply * secondMultiply;
  return output;
};

Calculator.prototype.divide = function(firstDivide, secondDivide) {
  var output = firstDivide / secondDivide;
  return output;
};

exports.calculatorModule = Calculator;
