'use script';

require('console.table');
const commands = require('./commands.js');
const tableShow = require('./showTable.js').showTable;
const readline  = require('readline');

// console.table([{name},1,1,1]);
const fs = require('fs');
// window.onload = function(){
//   showTable();
// }
tableShow();
commands();
