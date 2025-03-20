function validateEmailUC3(email) {
    let regexUC3 = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.co/; // Ensures "." and "co"
    if (!regexUC3.test(email)) {
        return "Invalid Email! The third part (.co) after bridgelabz is mandatory.";
    }
    return "Valid Email!";
}

// Example
console.log(validateEmailUC3("abc.xyz@bridgelabz.co.in"));  // Valid
console.log(validateEmailUC3("abc@bridgelabz.in"));         // Invalid
console.log(validateEmailUC3("abc@bridgelabz.co"));         // Valid
