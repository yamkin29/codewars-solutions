function tidyNumber(n){
  const array = n.toString().split('').map((item) => Number(item));
  return array.every((item, index) => index === 0 || item >= array[index - 1]);
}