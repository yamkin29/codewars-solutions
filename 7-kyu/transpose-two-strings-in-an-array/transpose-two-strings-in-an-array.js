function transposeTwoStrings (array) {
  let length = Math.max(array[0].length, array[1].length);
  let result = [];
  
  for (let i = 0; i < length; i++) {
    let char1 = array[0][i] || ' ';
    let char2 = array[1][i] || ' ';
    result.push(`${char1} ${char2}`);
  }
  
  return result.join('\n');
}
