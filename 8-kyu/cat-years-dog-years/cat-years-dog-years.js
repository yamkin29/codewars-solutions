var humanYearsCatYearsDogYears = function(humanYears) {
  let catYear;
  let dogYear;
  
  if (humanYears === 1) {
    catYear = 15;
    dogYear = 15;
  } else if (humanYears === 2) {
    catYear = 24;
    dogYear = 24;
  } else {
    catYear = 15 + 9 + (4 * (humanYears - 2));
    dogYear = 15 + 9 + (5 * (humanYears - 2));
  }
  return [humanYears, catYear, dogYear];
}
​