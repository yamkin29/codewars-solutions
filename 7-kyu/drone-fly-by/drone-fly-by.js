function flyBy(lamps, drone){
  const length = drone.length;
  
  return lamps.split('').map((item, index) => {
    while (index < length) {
      return item = 'o';
    }
    
    return item;
  }).join('');
}
