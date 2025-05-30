function explode(x){
  let result;
  
  if (x.every((item) => typeof item === 'number')) {
    result = x[0] + x[1];
  } else if (x.some((item, index) => typeof item === 'number')) {
    result = x.find((item) => typeof item === 'number');
  } else {
    result = 'Void!';
  }
  
  
  return result !== 'Void!' ? new Array(result).fill(x) : 'Void!'
}