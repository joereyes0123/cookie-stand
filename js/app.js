'use strict';

//Time Stamp Array for all stores
var timeSale = ['6am ', '7am ', '8am ' , '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ','3pm ', '4pm ', '5pm ','6pm ', '7pm ', '8pm '];


//Object 1st and Pike
var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  cookieAmount: function(){
    var ulElGet = document.getElementById('Pike');
    var cookieTotal = 0;
    for(var i = 0; i < timeSale.length; i++){
      var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
      cookieTotal += cookieHour;
      var liEl = document.createElement('li');
      liEl.textContent = 'Cookies sold at  ' + timeSale[i] +  ' : ' + cookieHour;
      ulElGet.appendChild(liEl);
    } 
    var liEl1 = document.createElement('li');
    liEl1.textContent = 'Total number of cookie sold today  ' + cookieTotal;
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
    var cookieTotal = 0;
    for(var i = 0; i < timeSale.length; i++){
      var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
      cookieTotal += cookieHour;
      var liEl = document.createElement('li');
      liEl.textContent = 'Cookies sold at  ' + timeSale[i] + ' : ' + cookieHour;
      ulElGet.appendChild(liEl);
    }
    var liEl1 = document.createElement('li');
    liEl1.textContent = 'Total number of cookie sold today  ' + cookieTotal;
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
    var cookieTotal = 0;
    for(var i = 0; i < timeSale.length; i++){
      var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
      cookieTotal += cookieHour;
      var liEl = document.createElement('li');
      liEl.textContent = 'Cookies sold at  ' + timeSale[i] + ' : ' + cookieHour;
      ulElGet.appendChild(liEl);
    }
    var liEl1 = document.createElement('li');
    liEl1.textContent = 'Total number of cookie sold today  ' + cookieTotal;
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
    var cookieTotal = 0;
    for(var i = 0; i < timeSale.length; i++){
      var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
      cookieTotal += cookieHour;
      var liEl = document.createElement('li');
      liEl.textContent = 'Cookies sold at  ' + timeSale[i] + ' : ' + cookieHour;
      ulElGet.appendChild(liEl);
    }
    var liEl1 = document.createElement('li');
    liEl1.textContent = 'Total number of cookie sold today  ' + cookieTotal;
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
    var cookieTotal = 0;
    for(var i = 0; i < timeSale.length; i++){
      var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
      cookieTotal += cookieHour;
      var liEl = document.createElement('li');
      liEl.textContent = 'Cookies sold at  ' + timeSale[i] + ' : ' + cookieHour;
      ulElGet.appendChild(liEl);
    }
    var liEl1 = document.createElement('li');
    liEl1.textContent = 'Total number of cookie sold today  ' + cookieTotal;
    ulElGet.appendChild(liEl1);

  }
};

firstPike.cookieAmount();
seaTacAir.cookieAmount();
seattleCenter.cookieAmount();
capitolHill.cookieAmount();
alki.cookieAmount();

