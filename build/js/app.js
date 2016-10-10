(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/calculator.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
