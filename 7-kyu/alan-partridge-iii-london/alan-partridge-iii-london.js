function alan(x){
  let stations = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway']
  
  if (stations.every((station) => x.includes(station))) {
    return `Smell my cheese you mother!`
  } else {
    return 'No, seriously, run. You will miss it.'
  }
}