function well(x){
  let arr = x.flat();
  
  let count = arr.filter((item) => typeof item === 'string' && item.toLowerCase() === 'good').length;
  
  if (count === 0) {
    return 'Fail!';
  } else if (count <= 2) {
    return 'Publish!';
  } else {
    return 'I smell a series!'
  }
}
