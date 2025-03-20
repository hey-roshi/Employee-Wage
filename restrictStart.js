function validatePinCodeUC2(pinCode) {
    let regexUC2 = /^[0-9]{6}$/; // Same as UC1, ensures only 6 digits are allowed
    if (!regexUC2.test(pinCode)) {
        return "Invalid PIN Code! It should not start with alphabets or special characters.";
    }
    return "Valid PIN Code!";
}

// Example
console.log(validatePinCodeUC2("A400088")); // Output: Invalid PIN Code!
console.log(validatePinCodeUC2("400088"));  // Output: Valid PIN Code!
