'use strict';

//Time Stamp Array for all stores
var timeSale = ['6am ', '7am ', '8am ' , '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ','3pm ', '4pm ', '5pm ','6pm ', '7pm ', '8pm '];
var cookieTotal = [];

//Object 1st and Pike
var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  cookieAmount: function(){
    var ulElGet = document.getElementById('Pike');
    var firstCookieTotal = 0;
    for(var i = 0; i < timeSale.length; i++){
      var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
      firstCookieTotal += cookieHour;
      var liEl = document.createElement('li');
      liEl.textContent = 'Cookies sold at  ' + timeSale[i] +  ' : ' + cookieHour;
      ulElGet.appendChild(liEl);
    } 
    cookieTotal.push(firstCookieTotal);
    var liEl1 = document.createElement('li');
    liEl1.textContent = 'Total number of cookie sold today  ' + cookieTotal[0];
    ulElGet.appendChild(liEl1);
  }
};

//Object SeaTac Aiport
var seaTacAir = {
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,
  cookieAmount: function(){
    var ulElGet = document.getElementById('Airport');
    var seaCookieTotal = 0;
    for(var i = 0; i < timeSale.length; i++){
      var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
      seaCookieTotal += cookieHour;
      var liEl = document.createElement('li');
      liEl.textContent = 'Cookies sold at  ' + timeSale[i] + ' : ' + cookieHour;
      ulElGet.appendChild(liEl);
      
    }
    cookieTotal.push(seaCookieTotal);
    var liEl1 = document.createElement('li');
    liEl1.textContent = 'Total number of cookie sold today  ' + cookieTotal[1];
    ulElGet.appendChild(liEl1);
  }
};


//Object Seattle Center
var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,
  cookieAmount: function(){
    var ulElGet = document.getElementById('Center');
    var centerCookieTotal = 0;
    for(var i = 0; i < timeSale.length; i++){
      var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
      centerCookieTotal += cookieHour;
      var liEl = document.createElement('li');
      liEl.textContent = 'Cookies sold at  ' + timeSale[i] + ' : ' + cookieHour;
      ulElGet.appendChild(liEl);
    }
    cookieTotal.push(centerCookieTotal);
    var liEl1 = document.createElement('li');
    liEl1.textContent = 'Total number of cookie sold today  ' + cookieTotal[2];
    ulElGet.appendChild(liEl1);

  }
};


//Object Capitol Hill
var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,
  cookieAmount: function(){
    var ulElGet = document.getElementById('Hill');
    var hillCookieTotal = 0;
    for(var i = 0; i < timeSale.length; i++){
      var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
      hillCookieTotal += cookieHour;
      var liEl = document.createElement('li');
      liEl.textContent = 'Cookies sold at  ' + timeSale[i] + ' : ' + cookieHour;
      ulElGet.appendChild(liEl);
    }
    cookieTotal.push(hillCookieTotal);
    var liEl1 = document.createElement('li');
    liEl1.textContent = 'Total number of cookie sold today  ' + cookieTotal[3];
    ulElGet.appendChild(liEl1);

  }
};


//Object Alki
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCust: 4.6,
  cookieAmount: function(){
    var ulElGet = document.getElementById('Alki');
    var alkiCookieTotal = 0;
    for(var i = 0; i < timeSale.length; i++){
      var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
      alkiCookieTotal += cookieHour;
      var liEl = document.createElement('li');
      liEl.textContent = 'Cookies sold at  ' + timeSale[i] + ' : ' + cookieHour;
      ulElGet.appendChild(liEl);
    }
    cookieTotal.push(alkiCookieTotal);
    var liEl1 = document.createElement('li');
    liEl1.textContent = 'Total number of cookie sold today  ' + cookieTotal[4];
    ulElGet.appendChild(liEl1);

  }
};

firstPike.cookieAmount();
seaTacAir.cookieAmount();
seattleCenter.cookieAmount();
capitolHill.cookieAmount();
alki.cookieAmount();

