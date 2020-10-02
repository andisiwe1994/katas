function isosceles(num) {
  var arr = [];
  for (let i = 0; num > arr.length; i++) {
    if (i % 2 != 0) {
      arr.push(i);
    }
  }
  hash = "#";
  space = " ";
  for (let i = 0; i < arr.length; i++) {
    invisibleSpace = arr.length - i;
    isoscelesLine = space.repeat(invisibleSpace);
    hashRepeat = hash.repeat(arr[i]);
    console.log(isoscelesLine + hashRepeat + isoscelesLine);
  }
}
isosceles(4);
