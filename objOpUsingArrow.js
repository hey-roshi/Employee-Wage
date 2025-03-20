// UC 11 Object Operations using Arrow Functions

// Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

// Function to Get Employee Working Hours
const getWorkingHours = (empCheck) => {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
};

// Function to Calculate Daily Wage
const calcDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

// Employee Data Array
let empDailyHrsAndWageArr = new Array();
let totalEmpHrs = 0;
let totalWorkingDays = 0;

// Generate Employee Work Data
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;

    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return `\nDay ${this.dayNum} => Working Hours: ${this.dailyHours} | Wage Earned: ${this.dailyWage}`;
        },
    });
}

// Arrow Function for Total Calculation
const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;

// UC 11A: Calculate Total Hours and Wages
let totalHours = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dailyHours) // Extract hours
    .reduce(findTotal, 0);

let totalSalary = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dailyWage) // Extract wages
    .reduce(findTotal, 0);

console.log(`UC 11A Total Hours: ${totalHours} | Total Wages: ${totalSalary}`);

// UC 11B: Log Full Work Days
process.stdout.write("\nUC 11B Logging Full Work Days:");
empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
    .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

// UC 11C: Part Working Day Strings
let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());

console.log("\nUC 11C Part Working Day Strings: " + partWorkingDayStrArr);

// UC 11D: Non-Working Days
let nonWorkingDayNums = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);

console.log("UC 11D Non-Working Day Numbers: " + nonWorkingDayNums);
