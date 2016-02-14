/*
var moment = require('moment');
var now = moment();

console.log(now.toString());
console.log(now.format('X'));

console.log(now.format("dd, mm"));
console.log(now.format("h:mm:ss a"));

var dift = now.subtract(1, 'year').subtract(2, 'month');

console.log(dift.format("MMM Do YYYY h:mm:ssa"));
*/

var moment = require('moment');
var now = moment();

console.log(now.format('x'));
console.log(now.valueOf());

var timestamp = now;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('hh:mm a'));
