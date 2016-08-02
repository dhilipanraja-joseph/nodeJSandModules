var moment = require('moment');

function age(datestr){

  let day = moment(datestr,"MM-DD-YYYY");
  let agems = day.diff(moment()); // milliseconds
  let dur = moment.duration(agems).humanize(true);

  return `${day.format('LL')} was ${dur}\n`;

}

module.exports= age;
