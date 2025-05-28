function twoSort(s) {
  const sortArray = s.sort();
  const first = sortArray[0];
  const result = first.split('').join('***');
  
  return `${result}`
}