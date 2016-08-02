
const readline  = require('readline');
const readData = require('./showTable').getData;
const fs = require('fs');

function commands(){

  console.log("Enter `new` or `delete` to add and remove row ");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // rl.question('What do you think of Node.js? ', (answer) => {
  //
  //   console.log('Thank you for your valuable feedback:', answer);

  rl.on('line', (input) => {
    // console.log(`Received: ${input}`);
    // console.log(input.split(' '));
    switch(input){
      case 'new' : rl.close();addRow();break;
      case 'delete' : rl.close();deleteRow();break;
      case 'modify' : rl.close();modifyRow();break;
      case 'close' : rl.close();break;
    }

  });

}

function deleteRow(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter Row # to delete the row [starts from 0] ',(rowInput)=>{
    fs.readFile('./data.json',(err,data)=>{
      let index = parseInt(rowInput);
      if (err) return console.log(err);
      let fileData = JSON.parse(data);
      fileData.splice(index,1);
      rl.close();
      let writeData = JSON.stringify(fileData);
      fs.writeFile('./data.json',writeData,(err)=>{
        if (err) return console.log(err);
        // showTable();
        console.log(`Last Row ${index} deleted`);
      });


    });
  });
  // tableShow();
}
function addRow(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter Values in following order eg. first[space]last[space]email[space]phone : ',(rowInput)=>{
    fs.readFile('./data.json',(err,data)=>{
      if (err) return console.log(err);
      let fileData = JSON.parse(data);
      let rowInputs = rowInput.split(' ');
      let newRow = new Person(rowInputs[0],rowInputs[1],rowInputs[2],rowInputs[3]);
      fileData.push(newRow);
      rl.close();
      let writeData = JSON.stringify(fileData);
      fs.writeFile('./data.json',writeData,(err)=>{
        if (err) return console.log(err);
        // showTable();
        // console.log('Write : ', writeData);
      });
      // fs.close(2);
    });
  });
  // tableShow();
}
//
function Person(firstName,lastName,Email,Phone){
    this.first_name = firstName;
    this.last_name = lastName;
    this.email= Email;
    this.phone= Phone;
}


module.exports = commands;
