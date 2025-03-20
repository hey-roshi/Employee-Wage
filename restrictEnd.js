function validatePinCodeUC3(pinCode) {
    let regexUC3 = /^[0-9]{6}$/; // Ensures only numbers are allowed
    if (!regexUC3.test(pinCode)) {
        return "Invalid PIN Code! It should not end with alphabets or special characters.";
    }
    return "Valid PIN Code!";
}

// Example
console.log(validatePinCodeUC3("400088B")); // Output: Invalid PIN Code!
console.log(validatePinCodeUC3("400088"));  // Output: Valid PIN Code!
