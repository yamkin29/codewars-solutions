function popShift(s){
  let arr = s.split('');
  let firstStr = [];
  let secondStr = [];
  
  while (arr.length >= 2) {
    firstStr.push(arr.pop());
    secondStr.push(arr.shift());
  }
  
  return [firstStr.join(''), secondStr.join(''), arr[0] ?? '']
}
