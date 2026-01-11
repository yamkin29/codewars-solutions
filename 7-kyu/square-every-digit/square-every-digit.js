function squareDigits(num){
  return Number([...String(num)].map(item => Math.pow(item, 2)).join(''));
}