function alphaSeq (str) {
  let result = [];
  let arr = str.split('');
  
  arr.forEach((item) => {
    let a = item.toUpperCase() + item.repeat(25 - (122 - item.toLowerCase().charCodeAt(0))).toLowerCase();
    result.push(a);
  })
  
  return result.sort().join(',');
}