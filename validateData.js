// UC 14 - Validation of Employee Details

class EmployeePayrollData {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    // Validate ID and Salary as non-zero positive numbers
    validateIdAndSalary() {
        if (this.id <= 0 || this.salary <= 0) {
            throw "ID and Salary must be non-zero positive numbers!";
        }
    }

    // Validate Gender as M or F using Regex
    validateGender() {
        let genderRegex = RegExp('^[MF]$');
        if (!genderRegex.test(this.gender)) {
            throw "Gender must be 'M' or 'F'!";
        }
    }

    // Validate Start Date is not a future date
    validateStartDate() {
        let currentDate = new Date();
        if (this.startDate > currentDate) {
            throw "Start Date cannot be a future date!";
        }
    }

    // Validate all attributes
    validateEmployeeDetails() {
        try {
            this.validateIdAndSalary();
            this.validateGender();
            this.validateStartDate();
            console.log("Validation Successful: ", this.toString());
        } catch (error) {
            console.error("Validation Error: ", error);
        }
    }

    // Display employee details
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "undefined";
        return `ID=${this.id}, Name=${this.name}, Salary=${this.salary}, Gender=${this.gender}, Start Date=${empDate}`;
    }
}

// Example Usage
let employee1 = new EmployeePayrollData(1, "Alice", 30000, "F", new Date("2025-03-20"));
employee1.validateEmployeeDetails();

let employee2 = new EmployeePayrollData(-1, "Bob", -5000, "X", new Date("2026-01-01"));
employee2.validateEmployeeDetails();
