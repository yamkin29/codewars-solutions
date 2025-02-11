function scramble(str, arr) {
  let result = [];
  
  arr.forEach((item, index) => {
    result[item] = str[index];
  })
  
  return result.join('');
  
}; 