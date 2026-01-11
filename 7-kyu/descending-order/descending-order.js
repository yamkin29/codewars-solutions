function descendingOrder(number){
  return +[...String(number)].sort((a, b) => b - a).join('')
}