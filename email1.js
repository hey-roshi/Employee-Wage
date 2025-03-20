function validateEmailUC1(email) {
    let regexUC1 = /^[a-zA-Z0-9._+-]+/; // Ensures the email starts with valid characters (abc)
    if (!regexUC1.test(email)) {
        return "Invalid Email! The first part of the email (abc) is mandatory.";
    }
    return "Valid Email!";
}

// Example
console.log(validateEmailUC1("abc.xyz@bridgelabz.co.in"));  // Valid
console.log(validateEmailUC1("123@bridgelabz.co.in"));      // Valid
console.log(validateEmailUC1("@bridgelabz.co.in"));         // Invalid
