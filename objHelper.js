// UC 7 - Using Objects and Arrow Functions

const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;

const empDailyHrsAndWageArr = [
    { dayNum: 1, dailyHours: 8, dailyWage: 160 },
    { dayNum: 2, dailyHours: 4, dailyWage: 80 },
    { dayNum: 3, dailyHours: 0, dailyWage: 0 },
    { dayNum: 4, dailyHours: 8, dailyWage: 160 },
    { dayNum: 5, dailyHours: 4, dailyWage: 80 }
];

// a. Calculate Total Wage
const findTotal = (totalVal, dailyVal) => totalVal + dailyVal.dailyWage;
let totalWages = empDailyHrsAndWageArr.reduce(findTotal, 0);
console.log("Total Wages: " + totalWages);

// b. Show the Day along with Daily Wage using Map helper function
let mapDayWithWageArr = empDailyHrsAndWageArr.map(dailyHrsAndWage => 
    `Day ${dailyHrsAndWage.dayNum} => Wage Earned = ${dailyHrsAndWage.dailyWage}`);
console.log("Day with Daily Wages: ", mapDayWithWageArr);

// c. Show Days when Full time wage of 160 was earned
let fullTimeWageDays = empDailyHrsAndWageArr.filter(dailyHrsAndWage => 
    dailyHrsAndWage.dailyWage === 160).map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("Days with Full Time Wage: ", fullTimeWageDays);

// d. Find the first occurrence when Full Time Wage was earned
let firstFullTimeWageDay = empDailyHrsAndWageArr.find(dailyHrsAndWage => 
    dailyHrsAndWage.dailyWage === 160);
console.log("First Full Time Wage Day: ", firstFullTimeWageDay.dayNum);

// e. Check if Every Element of Full Time Wage is truly holding Full Time Wage
let isEveryFullTimeWage = empDailyHrsAndWageArr.every(dailyHrsAndWage => 
    dailyHrsAndWage.dailyWage === 160 ? dailyHrsAndWage.dailyHours === FULL_TIME_HOURS : true);
console.log("Is Every Full Time Wage Valid: ", isEveryFullTimeWage);

// f. Check if there is any Part Time Wage
let isAnyPartTimeWage = empDailyHrsAndWageArr.some(dailyHrsAndWage => 
    dailyHrsAndWage.dailyHours === PART_TIME_HOURS);
console.log("Is There Any Part Time Wage: ", isAnyPartTimeWage);

// g. Find the number of days the Employee Worked
let totalDaysWorked = empDailyHrsAndWageArr.reduce((numOfDays, dailyHrsAndWage) =>
    dailyHrsAndWage.dailyHours > 0 ? numOfDays + 1 : numOfDays, 0);
console.log("Total Days Worked: ", totalDaysWorked);
