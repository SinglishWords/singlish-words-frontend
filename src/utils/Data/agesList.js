/* Generates an age range from start age to end age */
function ageRange(start, end) {
    return new Array(end - start + 1)
      .fill()
      .map((d, i) => i + start)
  }
  
  /* Age range : < 18, 18-80, >80 
  <18 is represented by 0
  >80 is represented by 1 */
  const agesList = ageRange(18, 80);
  const lessThanEighteen = 17;
  const moreThanEighty = 81;
  agesList.unshift(lessThanEighteen);
  agesList.push(moreThanEighty);

export default agesList;