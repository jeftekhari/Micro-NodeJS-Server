const fetch = require('node-fetch');
var Highcharts = require('highcharts');
var path = require('path')
var express = require('express');
var app = express();


module.exports = async () => {
  const request = await fetch('https://data.marincounty.org/resource/mw3d-ud6d.json?month_and_year=2017-03&department=DEPARTMENT OF FINANCE');
  const data = await request.json();

//   app.get('/',function (req, res){ res.sendFile(path.join(__dirname + '/index.html'));
// });
  var x = 0;
  var meta = {}
  while (data[x]) {
    if (!meta[data[x].department]) {
      meta[data[x].department] = parseFloat(data[x].amount);
    } else {
      meta[data[x].department] += parseFloat(data[x].amount);
    }
    x += 1;
  }
  return meta;
}