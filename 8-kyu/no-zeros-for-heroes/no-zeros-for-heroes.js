function noBoringZeros(n) {
  if (n === 0) {
    return n;
  }
  let str = n.toString();
  
  while(str.endsWith('0')) {
    str = str.slice(0, -1);
  }
  
  return Number(str);
}