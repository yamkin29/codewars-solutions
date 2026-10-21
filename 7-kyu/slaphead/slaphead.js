function bald(x){
  let hairs = [...x].filter((item) => item === '/').length;
  
  let clean = '-'.repeat(x.length);
  
  let message = '';
  
  switch (hairs) {
      case 0:
        message = 'Clean!'
        break;
      case 1:
        message = 'Unicorn!'
        break;
      case 2:
        message = 'Homer!'
        break;
      case 3:
      case 4:
      case 5:
        message = 'Careless!'
        break;
      default:
        message = 'Hobo!'
  }
  
  return [clean, message]
}
