/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    console.log(payable);
    return payable;
}

function createEmployeeRecord(input){

    let employee = {
        firstName : input[0],
        familyName : input[1],
        title: input[2],
        payPerHour: input[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

    return employee;
}

function createEmployeeRecords(inputArray){
      
    let groupArray=[];
    for(let element of inputArray){
     groupArray.push(createEmployeeRecord(element));
    }
 
    return groupArray;
 
 }

 function createTimeInEvent(date){
    
    let timeIn={
        type: "TimeIn",
        hour: parseInt(date.slice(-4)),
        date: date.slice(0,10),
      }
      
      this["timeInEvents"].push(timeIn);
      return this;

 }

 function createTimeOutEvent(date){

    let timeOut={
      type: "TimeOut",
      hour: parseInt(date.slice(-4)),
      date: date.slice(0,10),
    }
    
    this["timeOutEvents"].push(timeOut);
    return this;   
}

function hoursWorkedOnDate(date){
    
    let timeIn;
    let timeOut;

    this.timeInEvents.forEach(element => {
        if(element.date===date.slice(0,10)){
            timeIn=element.hour/100;
            //timeIn= parseInt(element.hour)/100;
           // timeIn= Math.trunc(timeIn);
        }
        
    });

    this.timeOutEvents.forEach(element => {
        if(element.date===date.slice(0,10)){
            timeOut=element.hour/100;
         // timeOut= parseInt(element.hour)/100;
        // timeOut= Math.trunc(timeOut);
        }
        
    });

    return  timeOut-timeIn;
}

function wagesEarnedOnDate(date){

    let totalTime=hoursWorkedOnDate.call(this,date);
    let wage=this.payPerHour*totalTime;
    return wage;

}


function findEmployeeByFirstName(records,firstName){
    for(let record of records){
        if(record.firstName===firstName){
            return record;
        }
    }
}




function calculatePayroll(records){

    let totalPayroll=0;
    for(let record of records){
    totalPayroll+=allWagesFor.call(record);
    
    }
    console.log(totalPayroll);
    return totalPayroll;
 
 }