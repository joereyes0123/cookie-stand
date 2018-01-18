'use strict';

//Time Stamp Array for all stores
var timeSale = ['6am ', '7am ', '8am ' , '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ','3pm ', '4pm ', '5pm ','6pm ', '7pm ', '8pm '];
var allStore = [];
var storeTable = document.getElementById('salmon_table');
var storeForm = document.getElementById('newStore');
var cookieTotal1 = 0;

//Creates Cookies Store location Obkects
function StoreLoc(sTname, minCust, maxCust, avgCust){
  this.sTname = sTname;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.cookiePerH = [];
  allStore.push(this);
}




//Method for the Cookie Store Locations
StoreLoc.prototype.cookieAmount = function(){
  var cookieTotal = 0;
  var tbTr = document.createElement('tr');
  var tbTd = document.createElement('td');
  tbTd.textContent = this.sTname;
  tbTr.appendChild(tbTd);
  for(var i = 0; i < timeSale.length; i++){
    var cookieHour = Math.ceil(this.avgCust * (Math.random() * (this.maxCust - this.minCust) + this.minCust));
    this.cookiePerH.push(cookieHour);
    cookieTotal += cookieHour;
    tbTd = document.createElement('td');
    tbTd.textContent = cookieHour;
    tbTr.appendChild(tbTd);
  }
  for(var t = 0; t < allStore.length; t++){
    cookieTotal1 += cookieTotal;
  } 
  tbTd = document.createElement('td');
  tbTd.textContent = cookieTotal;
  tbTr.appendChild(tbTd);
  storeTable.appendChild(tbTr);
  return cookieTotal;
};


//Creates headers for cookie data table
function cookieHeader(){
  var tbTr = document.createElement('tr');
  var tbTh = document.createElement('th');
  tbTh.textContent = '';
  tbTr.appendChild(tbTh);
  for(var i = 0; i < timeSale.length; i++){
    tbTh = document.createElement('th');
    tbTh.textContent = timeSale[i];
    tbTr.appendChild(tbTh);
  }
  tbTh = document.createElement('th');
  tbTh.textContent = 'Total';
  tbTr.appendChild(tbTh);
  storeTable.appendChild(tbTr);
  return timeSale;
}

//Creates footer for cookie data table
function tableFooter(){
  var arrayAdd = [];
  var tbTr = document.createElement('tr');
  var tbTh = document.createElement('th');
  tbTh.textContent = 'Total';
  tbTr.appendChild(tbTh);

  for(var i = 0; i < timeSale.length; i++){
    arrayAdd[i] = 0;
    for(var j = 0; j < allStore.length; j++){
      console.log('before add ',arrayAdd[i]);
      arrayAdd[i] += allStore[j].cookiePerH[i];
      console.log('after add ',arrayAdd[i]);
      console.log('allsote at j ',allStore[j]);
      console.log(allStore[j].cookiePerH[i]);
    }
    tbTh = document.createElement('th');
    tbTh.textContent = arrayAdd[i];
    tbTr.appendChild(tbTh);
    console.log(arrayAdd);
  }

  tbTh = document.createElement('th');
  tbTh.textContent = cookieTotal1;
  tbTr.appendChild(tbTh);
  storeTable.appendChild(tbTr);
}


//Creates cookie Objects
var firstPike = new StoreLoc('firstPike', 23, 65, 6.3);
var seaTacAirport = new StoreLoc('seaTacAir', 3, 24, 1.2);
var seaCenter = new StoreLoc('seaCenter', 11, 38, 3.7);
var capitolHill = new StoreLoc('capitolHill', 20, 38, 2.3);
var alki = new StoreLoc('alki', 2, 16, 4.6);

function renderAllStores(){
  for(var i in allStore){
    allStore[i].cookieAmount();
  }
}

function addNewStore(event){
  event.preventDefault();
  var sTname1 = event.target.sTnamef.value;
  var minCust1 = event.target.minCustf.valueAsNumber;
  console.log('test' , minCust1);
  console.log('test' , typeof minCust1);
  var maxCust1 = event.target.maxCustf.valueAsNumber;
  var avgCust1 = event.target.avgCustf.valueAsNumber;

  new StoreLoc(sTname1, minCust1, maxCust1, avgCust1);

  storeTable.innerHTML = '';
  cookieHeader();
  renderAllStores();
  tableFooter();
}


storeForm.addEventListener('submit', addNewStore);


//Call Objects
cookieHeader();
renderAllStores();
// firstPike.cookieAmount();
// seaTacAirport.cookieAmount();
// seaCenter.cookieAmount();
// capitolHill.cookieAmount();
// alki.cookieAmount();
tableFooter();



























