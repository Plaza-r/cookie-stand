'use strict';

let salesSection = document.getElementById('stores');

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
    seattle.customer = randCustom(this.minCust, this.maxCust);
  },
  cookiesTotal: function (numCookies) {
    return Math.round(numCookies * this.avgCookieSale);
  },
  render: function () {
    let uElem = document.createElement('ul');
    uElem.textContent = this.location;
    salesSection.appendChild(uElem);

    for ( let i = 0; i < bhours.length; i++) {
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${bhours[i]}: ${this.cookiesTotal(this.customer)} cookies`;
      this.total += this.cookiesTotal(this.customer);
      uElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    //liElem.textcontent = `Total: ${this.total} cookies`;
    this.total = this.total + this.cookiesTotal(this.customer);
    uElem.appendChild(liElem);
  }
};

seattle.render();



let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  customer: 0,
  total: 0,
  getCust: function () {
    tokyo.customer = randCustom(this.minCust, this.maxCust);
  },
  cookiesTotal: function (numCookies) {
    return Math.round(numCookies * this.avgCookieSale);
  },
  render: function () {
    let uElem = document.createElement('ul');
    uElem.textContent = this.location;
    salesSection.appendChild(uElem);

    for ( let i = 0; i < bhours.length; i++) {
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${bhours[i]}: ${this.cookiesTotal(this.customer)} cookies`;
      this.total += this.cookiesTotal(this.customer);
      uElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    //liElem.textcontent = `Total: ${this.total} cookies`;
    this.total = this.total + this.cookiesTotal(this.customer);
    uElem.appendChild(liElem);
  }
};
tokyo.render();

let dubai = {
  location: 'Dubai',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customer: 0,
  total: 0,
  getCust: function () {
    dubai.customer = randCustom(this.minCust, this.maxCust);
  },
  cookiesTotal: function (numCookies) {
    return Math.round(numCookies * this.avgCookieSale);
  },
  render: function () {
    let uElem = document.createElement('ul');
    uElem.textContent = this.location;
    salesSection.appendChild(uElem);

    for ( let i = 0; i < bhours.length; i++) {
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${bhours[i]}: ${this.cookiesTotal(this.customer)} cookies`;
      this.total += this.cookiesTotal(this.customer);
      uElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    //liElem.textcontent = `Total: ${this.total} cookies`;
    this.total = this.total + this.cookiesTotal(this.customer);
    uElem.appendChild(liElem);
  }
};
dubai.render();

let paris = {
  location: 'Paris',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customer: 0,
  total: 0,
  getCust: function () {
    paris.customer = randCustom(this.minCust, this.maxCust);
  },
  cookiesTotal: function (numCookies) {
    return Math.round(numCookies * this.avgCookieSale);
  },
  render: function () {
    let uElem = document.createElement('ul');
    uElem.textContent = this.location;
    salesSection.appendChild(uElem);

    for ( let i = 0; i < bhours.length; i++) {
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${bhours[i]}: ${this.cookiesTotal(this.customer)} cookies`;
      this.total += this.cookiesTotal(this.customer);
      uElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    //liElem.textcontent = `Total: ${this.total} cookies`;
    this.total = this.total + this.cookiesTotal(this.customer);
    uElem.appendChild(liElem);
  }
};
paris.render();

let lima = {
  location: 'Lima',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customer: 0,
  total: 0,
  getCust: function () {
    lima.customer = randCustom(this.minCust, this.maxCust);
  },
  cookiesTotal: function (numCookies) {
    return Math.round(numCookies * this.avgCookieSale);
  },
  render: function () {
    let uElem = document.createElement('ul');
    uElem.textContent = this.location;
    salesSection.appendChild(uElem);

    for ( let i = 0; i < bhours.length; i++) {
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${bhours[i]}: ${this.cookiesTotal(this.customer)} cookies`;
      this.total += this.cookiesTotal(this.customer);
      uElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    //liElem.textcontent = `Total: ${this.total} cookies`;
    this.total = this.total + this.cookiesTotal(this.customer);
    uElem.appendChild(liElem);
  }
};
lima.render();