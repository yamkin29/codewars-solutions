function decodePass( passArr, bin ){
  let strBin = bin.split(' ').map((item) => {
    return String.fromCharCode(parseInt(item, 2));
  }).join('')
  
  return passArr.find((item) => item === strBin) ? strBin : false;
}