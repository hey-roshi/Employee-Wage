// Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

// Function to Get Employee Working Hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Function to Calculate Daily Wage
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

// Variables to Track Work
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = [];

// Generate Employee Wage Data
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

// Display Summary
console.log("UC6 - Total Days: " + totalWorkingDays + " | Total Hrs: " + totalEmpHrs + " | Emp Wage: " + calcDailyWage(totalEmpHrs));

// UC 7A - Calculate Total Wage using Array forEach and reduce
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + " | Total Hrs: " + totalEmpHrs + " | Emp Wage: " + totEmpWage);

console.log("UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce((total, dailyWage) => total + dailyWage, 0));

// UC 7B - Show Day and Daily Wage using map
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// UC 7C - Show Days when Full-time wage of 160 was earned
function fulltimeWage(dailyWage) {
    return dailyWage === 160;
}
let fullDayWageArr = empDailyWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when Full-Time Wage was earned
console.log("UC 7D - First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find((day) => day.includes("160")));

// UC 7E - Check if Every Element in Full-Time Wage Array holds Full-Time Wage
console.log("UC 7E - Check All Elements have Full Time Wage: " + fullDayWageArr.every((wage) => wage === 160));

// UC 7F - Check if there is any Part-Time Wage (80)
console.log("UC 7F - Check If Any Part Time Wage: " + empDailyWageArr.some((wage) => wage === 80));

// UC 7G - Count the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    return dailyWage > 0 ? numOfDays + 1 : numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));
