export function checkCompulsoryFieldsForNonSingaporean(values) {
    return values.age !== "" &&
    values.gender !== "" &&
    values.education !== "" &&
    values.countryOfBirth !== "" &&
    values.countryOfResidence !== "" &&
    values.isNative !== "";
}

export function checkCountryOfBirthSingapore(values) {
    return values.countryOfBirth === "Singapore";
}

export function checkEthnicityFieldFilled(values) {
    return values.ethnicity !== "";
}
