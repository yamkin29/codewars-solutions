function highAndLow(numbers){
  const arrayNumbers = numbers.split(' ').map(item => +item)
  return [Math.max(...arrayNumbers), Math.min(...arrayNumbers)].join(' ');
}