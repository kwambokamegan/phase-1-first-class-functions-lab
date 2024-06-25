
 //returnFirstTwoDrivers

const returnFirstTwoDrivers = function(drivers)

{return drivers.slice(0,2);};


const drivers = ['Antonia' , 'Nuru' , 'Amari' , 'Mo'];

console.log(returnFirstTwoDrivers(drivers));



//retuenLastTwoDrivers

const returnLastTwoDrivers = function(drivers)

{return drivers.slice(-2);};

 
//selecting Drivers

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


//createFareMultiplier

const createFareMultiplier =

function(multiplier)

{ return function(fare)

    {return fare *multiplier;};
};


//fareDoubler

const fareDoubler = createFareMultiplier (2)


//fareTripler

const fareTripler =createFareMultiplier (3)


//selectDifferentDrivers

 const selectDifferentDrivers = function(drivers, selectFunction)
 
 {return selectFunction(drivers);};


