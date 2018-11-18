const TextCell = require("./node_modules/@alu0100693737/oop-ale-ivan/src/textcell");
const UnderlinedCell = require("./node_modules/@alu0100693737/oop-ale-ivan/src/underlinedcell");
const ColorCell = require("./node_modules/@alu0100693737/colorcellplugin/colorCell");
const DataTable = require("./node_modules/@alu0100693737/oop-ale-ivan/src/tabla.js");
var input = require("./inputs/input2.json");
const fs = require("fs");



  var table = dataTable(input);
  console.log(drawTable(table));
