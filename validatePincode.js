function validatePinCodeUC1(pinCode) {
    let regexUC1 = /^[0-9]{6}$/;
    if (!regexUC1.test(pinCode)) {
        return "Invalid PIN Code! It should be a 6-digit number.";
    }
    return "Valid PIN Code!";
}

// Example
console.log(validatePinCodeUC1("400088"));  // Output: Valid PIN Code!
console.log(validatePinCodeUC1("40008"));   // Output: Invalid PIN Code!
