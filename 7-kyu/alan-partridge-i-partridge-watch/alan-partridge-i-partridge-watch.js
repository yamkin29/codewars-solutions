function part(x){
  let termins = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa','Nomad']
  
  let result = `Mine's a Pint`;
  
  x.forEach((item) => {
    if (termins.includes(item)) {
      result += '!'
    }
  })
  
  if (result === `Mine's a Pint`) {
    return `Lynn, I've pierced my foot on a spike!!`
  } else {
    return result;
  }
}
