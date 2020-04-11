const array1 = [1, 2, 3];
const array2 = [11, 22, 33];
   const mixedArray = []
   mixedArray.push(array2[0],array1[0],array2[1],array1[1],array2[2],array1[2])
   console.log(mixedArray)


   console.log("")



 function evenorodd(num){

 if (num%2==0) {
    console.log("even");

     
 } 
 else{console.log("odd");}  
}
evenorodd(6);


function frame(arr){
    function fill(str, length, char)
}
let size =arr.map((str) => {
    return str.length;
})
 .reduce((a, b) => {
    return Math.max(a, b);
});

    let line = fill('', size + 5, '*');
    arr =arr.map((element) => {
        return '* '+ fill(element, size, ' ') +'* ';
 })

        arr.unshift(line);
        arr.push(line);

        return arr.join('\n');

        console.log(frame(["write", "good", "code", "every", "day"]));



  function isosceles(num){
    var space=num;
    for(var l=1; l>=num; l++){
        console.log(" ".repeat(space)) +"#".repeat((l*2)-1)
        
    }
    console(4)



 function square(num){
    for(var i=0; i<=num; i++){
        var line="";
    for(var r=0; r<=num; r++){
        line +="#";
    }
    console.log(line);
    }

}
square(2);



function triangle(num){
    for(var i=1; i<=3; i++){
        varline ="";
    for(var s=0; s<=i; s++){
     varline ="#";
    }
    console.log(line);
    }
    
}
triangle(3);



function sayHi(name){

console.log(" Hello "+ name)
}
sayHi("Tshepo!");



function longest(array1){

    varlongestword="";   
    varwordlength=0;
    
    for(var i=0; i<=array1.length; i++){
    if(wordlength<array1[1].length){
        longestword=array1[i];
    }
    }
    console.log(longword)

    longest(["the","quick","brown", "fox", "ate", "my", "chickens"])
}

  }
