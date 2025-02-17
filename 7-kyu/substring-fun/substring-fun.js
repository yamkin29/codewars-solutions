function nthChar(words){
  if (words.length === 0) {
    return '';
  }
  
  let result = [];
  
  words.forEach((item, index) => {
    result.push(item[index]);
  })
  
  return result.join('');
}
