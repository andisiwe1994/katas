function drawSquare(num) {
  str = "#";
  strRow = str.repeat(num) + "\n";
  return strRow.repeat(num);
}
console.log(drawSquare(4));
  