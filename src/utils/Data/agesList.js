/* Generates an age range from start age to end age (Current data type is String) */
function ageRange(start, end) {
    return new Array(end - start + 1)
      .fill()
      .map((d, i) => i + start)
      .map(String);
  }
  
  /* Age range : < 18, 18-80, >80 */
  const agesList = ageRange(18, 80);
  agesList.unshift("Less Than 18");
  agesList.push("More Than 80");

export default agesList;