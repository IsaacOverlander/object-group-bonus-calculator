class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 );
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

//loop through each employee of employees
for (let employee of employees){
  //call BonusCalc function
  //console.log the results
  console.log(bonusCalc(employee));
}




//console.log( employees );


//function takes an employee and returns a new object
function bonusCalc(employee) {
  //set base bonus for each employee
  let bonusPercent = 0;
  //determining bonus percentage based on rating
  if(employee.reviewRating <= 2){
    bonusPercent = 0;
  }
  else if (employee.reviewRating == 3){
    bonusPercent = 0.04;
  }
  else if (employee.reviewRating == 4){
    bonusPercent = 0.06;
  }
  else if (employee.reviewRating == 5){
    bonusPercent = 0.1;
  }
  let totalBonus = totalBonusPercent(employee, bonusPercent);
  let employeeInfo = {};
  employeeInfo.name = employee.name;
  employeeInfo.bonusPercentage = totalBonus;
  employeeInfo.totalCompensation = totalBonus * Number(employee.annualSalary) + Number(employee.annualSalary);
  employeeInfo.totalBonus = totalBonus * Number(employee.annualSalary);
  return employeeInfo;
}



//totalBonus function
function totalBonusPercent(employee, bonusPercent){
  if (employee.employeeNumber.length == 4 ){
    bonusPercent += 0.05;
  }
  if( Number(employee.annualSalary) > 65000){
    bonusPercent -= 0.01;
  }
  if(bonusPercent > 0.13){
    bonusPercent = 0.13;
  }else if( bonusPercent < 0){
    bonusPercent = 0;
  }
  return bonusPercent;
}
