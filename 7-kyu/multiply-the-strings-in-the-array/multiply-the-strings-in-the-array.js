function arrMultiply(arr){
   return arr.reduce((acc, item) => +acc * +item).toString();
}