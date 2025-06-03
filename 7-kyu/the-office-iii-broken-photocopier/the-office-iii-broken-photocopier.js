function broken(x){
  return [...x].map(item => +item === 0 ? 1 : 0).join('')
}