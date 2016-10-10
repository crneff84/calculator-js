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
});
