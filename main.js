'use strict';

// let nums=[1,2,3];
// // let sum=nums.reduce((sum,num)=> sum+num);
// //
//  let sum = require('./math');
//  console.log('sum:',sum(nums));
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question('Enter Name? ', (name) => {
  // T: Log the answer in a database
  // console.log('Thank you for your valuable feedback:', answer);
  let uName = name;

  rl.close();
  console.log(uName);
});
// const fs = require('fs');
// let fileData;
// fs.readFile('./data.json',(err,data) => {
//   if(err) return console.log(err);
//   fileData = JSON.parse(data);
//   var showTab = fileData.reduce((a,b)=> a+'\t'+b);
//   console.log(showTab);
//   // fileData.push(Date.now());
//   // fs.writeFile('./data.json',JSON.stringify(fileData),err => {
//   //   if(err) return console.log(err);
//   //   console.log("done !");
//   // });
// });
