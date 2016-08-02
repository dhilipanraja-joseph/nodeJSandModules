const PORT = 8000;

const http = require('http');
// var _= require('lodash');
// require('nodemon');
const age = require('./age.js');

let server = http.createServer((req,res) => {
  // Request Handler
  console.log('req.method',req.method);
  console.log('req.url',req.url);

  let urlParts = req.url.match(/[^/]+/g) || [];
  let path = urlParts[0]; //square

  switch(path){

    case 'square' : let num = Math.pow(parseInt(urlParts[1]),2);
                    res.write(`${num}`);
                    res.end('\n');

                    break;

    case 'age'    : //let age = parseInt(urlParts[1]);
                    // let day = moment(urlParts[1],"MM-DD-YYYY");
                    // let agems = day.diff(moment()); // milliseconds
                    // let dur = moment.duration(agems).humanize(true);
                    res.write(age(`${urlParts[1]}`));
                    res.end('\n');
                    break;

    default       : res.statusCode = 404;
                    res.end('NOT FOUND.\n');
                    break;
  }
  
  // if(path === 'square'){
  //
  //   let num = parseInt(urlParts[1]);
  //   let square = Math.pow(num, 2);
  //
  //   res.write(`${square}\n`);
  //   res.end();
  //
  // }if (path === 'age'){
  //   let age = parseInt(urlParts[1]);
  //
  //   res.write(`${age}`);
  //   res.end();
  // }
  // else{
  //   res.statusCode = 404;
  //   res.end('NOT FOUND.\n');
  //
  // }
  // res.write('test\n');
  // res.end();
});

server.listen(PORT,err => {
  console.log(err || `Sever Listening on Port : ${PORT}`);
});
