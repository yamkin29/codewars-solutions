function switcher(x){
  let result = [];
  
  x.forEach((item) => {
    if (item === '27') {
      result.push('!')
    } else if (item === '28') {
      result.push('?')
    } else if (item === '29') {
      result.push(' ')
    } else {
      result.push(String.fromCharCode(123 - item))
    }
  });
  
  return result.join('');
}