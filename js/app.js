'use strict';

let salesSection = document.getElementById('store-sales');

let bhours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randCustom(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customer: 0,
  total: 0,
  getCust: function () {
    seattle.customer = randomCust(this.custMin, this.custMax);
  }
  cookiesTotal: function (numCookies) {
    return Math.round(numCookies * this.avg);
  },
  render: function () {
    let uElem = document.createElement('ul');
    uElem.textContent = this.name;
    storesSection.appendChild(uElm);

    for ( let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${hours[i]}: ${this.cookiesTotal(this.customer)} cookies`;
      this.total += this.cookiesTotal(this.customer);
      uElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.text.content = `Total: ${this.total} cookies`;
    uElem.appendChild(liElem);
  }
};

seattle.render();




//function tHeader() {
  //let newRow = document.createElement('tr')
  //storeSelecton.appendChild(newRow);
  //let newTabHead = document.createElement('th');
  //newRow.appendChild(newTabHead);
//}

let tokyo = {
  location: 'tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  customer: 0,
  total: 0,

  getCust: function () {
    seattle.customer = randomCust(this.custMin, this.custMax);
  }
  cookiesTotal: function (numCookies) {
    return Math.round(numCookies * this.avg);
  },
  render: function () {
    let uElem = document.createElement('ul');
    uElem.textContent = this.name;
    storesSection.appendChild(uElm);

    for ( let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${hours[i]}: ${this.cookiesTotal(this.customer)} cookies`;
      this.total += this.cookiesTotal(this.customer);
      uElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.text.content = `Total: ${this.total} cookies`;
    uElem.appendChild(liElem);
  }

}



//this.numCookiesSold =0;
//min = Math.ceil(min);
//max = Math.floor(max);

//new Store('Seattle', 23, 65, 6.3);
//new Store('tokyo, 3 25, 1.2);
//new Store('Lima', 2, 16, 4.6)
//renderAllStores();
//tHeader();