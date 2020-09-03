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
    invisiblespace = arr.length - i;
    isoscelesline = space.repeat(invisiblespace);
    hashrepeat = hash.repeat(arr[i]);
    console.log(isoscelesline + hashrepeat + isoscelesline);
  }
}
isosceles(4);
