function modifyMultiply (str,loc,num) {
  return `${str.split(' ')[loc]}-`.repeat(num - 1) + `${str.split(' ')[loc]}`;
} 