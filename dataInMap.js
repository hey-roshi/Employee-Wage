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

// Variables
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

// Generate Employee Wage Data
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

// Print the Map
console.log("UC7A – Employee Daily Wage Map:");
console.log(empDailyWageMap);

// Function to Calculate Total Wages from Map
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

// Calculate and Print Total Wages using `reduce`
console.log("UC7A – Emp Wage Map totalHrs: " +
    Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
