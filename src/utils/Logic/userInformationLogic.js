const userInformationLogic = {
  checkFieldsForSingaporean:
    values.age.length > 0 &&
    values.gender.length > 0 &&
    values.education.length > 0 &&
    values.countryOfBirth.length > 0 &&
    values.ethnicity.length > 0 &&
    values.countryOfResidence.length > 0 &&
    values.isNative.length > 0,

  checkFieldsForNonSingaporean:
    values.age.length > 0 &&
    values.gender.length > 0 &&
    values.education.length > 0 &&
    values.countryOfBirth.length > 0 &&
    values.countryOfResidence.length > 0 &&
    values.isNative.length > 0,
};

export default userInformationLogic;
