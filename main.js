function rot13(str) {
  let accumulator = "";
  for (let i = 0; i < str.length; i++){
    let ascNum = str[i].charCodeAt();
    if (ascNum >= 65 && ascNum <= 77){
      accumulator += String.fromCharCode(ascNum + 13);
    } else if (ascNum >= 78 && ascNum <= 90){
      accumulator += String.fromCharCode(ascNum - 13);
    } else {
      accumulator += str[i];
    }
  }
  return accumulator;
}

console.log(rot13("AKU ANAK INDONESIA"));
