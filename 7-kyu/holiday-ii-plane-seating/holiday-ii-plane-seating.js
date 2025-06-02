function planeSeat(a){
  const letter = a[a.length - 1];
  const number = parseInt(a.slice(0, a.length - 1), 10)
  
  if (isNaN(number) || number < 1 || number > 60) {
    return "No Seat!!";
  }
  
  let validLetters = ["A","B","C","D","E","F","G","H","K"];
  if (!validLetters.includes(letter)) {
    return 'No Seat!!'
  }
  
  let region;
  if (number <= 20) {
    region = "Front";
  } else if (number <= 40) {
    region = "Middle";
  } else {
    region = "Back";
  }
  
  let side;
  if (["A","B","C"].includes(letter)) {
    side = "Left";
  } else if (["D","E","F"].includes(letter)) {
    side = "Middle";
  } else {
    side = "Right";
  }
  
  return `${region}-${side}`;
}