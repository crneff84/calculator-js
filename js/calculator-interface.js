var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $('#add').submit(function(event) {
    event.preventDefault();
    var firstAdd = parseInt($('#firstAdd').val());
    var secondAdd = parseInt($('#secondAdd').val());
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.add(firstAdd, secondAdd);
      $('#output').append("<p>" + output + "</p>");
  });

  $('#subtract').submit(function(event) {
    event.preventDefault();
    var firstSubtract = parseInt($('#firstSubtract').val());
    var secondSubtract = parseInt($('#secondSubtract').val());
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.subtract(firstSubtract, secondSubtract);
      $('#output').append("<p>" + output + "</p>");
  });

  $('#multiply').submit(function(event) {
    event.preventDefault();
    var firstMultiply = parseInt($('#firstMultiply').val());
    var secondMultiply = parseInt($('#secondMultiply').val());
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.multiply(firstMultiply, secondMultiply);
      $('#output').append("<p>" + output + "</p>");
  });

  $('#divide').submit(function(event) {
    event.preventDefault();
    var firstDivide = parseInt($('#firstDivide').val());
    var secondDivide = parseInt($('#secondDivide').val());
    var simpleCalculator = new Calculator();
    var output = simpleCalculator.divide(firstDivide, secondDivide);
      $('#output').append("<p>" + output + "</p>");
  });
});
