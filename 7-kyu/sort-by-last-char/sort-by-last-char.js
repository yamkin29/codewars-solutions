function last(x){
  return x.split(' ').sort((a, b) => {
    let lastCharA = a[a.length - 1];
    let lastCharB = b[b.length - 1];
    
    if (lastCharA < lastCharB) {
      return -1;
    }
    
    if (lastCharA > lastCharB) {
      return 1;
    }
    
    return 0;
  })
}