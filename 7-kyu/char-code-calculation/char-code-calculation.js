function calc(x){
  const total1 = [...x].map(item => item.charCodeAt(0)).join('');
  const total2 = [...total1].map(item => {
    if (item === '7') {
      return 1;
    }
    return item;
  }).join('')
  
  const sum1 = [...total1].map(item => +item).reduce((acc, item) => acc + item, 0);
  const sum2 = [...total2].map(item => +item).reduce((acc, item) => acc + item, 0);
  
  return sum1 - sum2;
}