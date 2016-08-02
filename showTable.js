function showTable(){

  require('console.table');
  // const readline  = require('readline');

  // console.table([{name},1,1,1]);
  const fs = require('fs');
  // window.onload = function(){
  //   showTable();
  // }



  fs.readFile('./data.json',(err,data)=>{
    if (err) return console.log(err);
    let fileData = getData(data);
    console.table(fileData);
    // fs.close(1);

  });

}

function getData(data){
  try{
    var sData=JSON.parse(data);
  }catch(e){
    sData = [];
  }
  return sData;
}

module.exports = {showTable,getData};
