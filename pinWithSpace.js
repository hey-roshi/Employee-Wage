function validatePinCodeUC4(pinCode) {
    let regexUC4 = /^[0-9]{6}$|^[0-9]{3}\s[0-9]{3}$/;
    if (!regexUC4.test(pinCode)) {
        return "Invalid PIN Code! Ensure it is either 6 continuous digits or has a valid space.";
    }
    return "Valid PIN Code!";
}

// Example
console.log(validatePinCodeUC4("400088"));    // Output: Valid PIN Code!
console.log(validatePinCodeUC4("400 088"));   // Output: Valid PIN Code!
console.log(validatePinCodeUC4("400 088B"));  // Output: Invalid PIN Code!
