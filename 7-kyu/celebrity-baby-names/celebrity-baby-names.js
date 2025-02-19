function validName(array) {
  if (array.length === 0) {
    return "You must test at least one name.";
  }

  if (array.length === 1) {
    return "Congratulations, you can choose any name you like!";
  }

  function getFirstLetter(name) {
    for (let i = 0; i < name.length; i++) {
      if (name[i].toLowerCase() !== ' ' && name[i] !== '-') {
        return name[i].toLowerCase();
      }
    }
  }

  function getLastLetter(name) {
    for (let i = name.length - 1; i >= 0; i--) {
      if (name[i].toLowerCase() !== ' ' && name[i] !== '-') {
        return name[i].toLowerCase();
      }
    }
  }

  for (let i = 0; i < array.length - 1; i++) {
    let lastCharCurrent = getLastLetter(array[i]);
    let firstCharNext = getFirstLetter(array[i + 1]);
    if (lastCharCurrent !== firstCharNext) {
      return "Back to the drawing board, your baby names are not compatible.";
    }
  }

  return "Congratulations, your baby names are compatible!";
}