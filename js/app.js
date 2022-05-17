'use strict';

let salesSection = document.getElementById('store-sales');

let businessHours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randCustomer(min, max) {
  //min = Math.ceil(min);
  //max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
};