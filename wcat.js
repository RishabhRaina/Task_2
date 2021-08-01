let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);
// let filePath = inputArr[0];
// let filePaths = inputArr;

// divide kruga -> - option Array main
// aur ->  file main
let optionsArr = [];
let filePaths = [];

for(let i=0; i<inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar== "-"){
        optionsArr.push(inputArr[i]);
    }else{
        filePaths.push(inputArr[i]);
    }

}
for(let i=0 ; i<filePaths.length;i++){
    let ans = fs.existsSync(filePaths[i]);
    if(ans==false){
        console.log("Error:: file does not exist ✌");
        return;
    }

}
let content = ""; 
for(let i=0; i<filePaths.length; i++){

    content = content + fs.readFileSync(filePaths[i]) + "\r\n";
   
}
let contentArr = content.split("\r\n");

// console.log(optionsArr);
// -s check 

let isPresent = optionsArr.includes("-s");
if(isPresent){
    for(let i=1; i<contentArr.length; i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i] = null;
         }
         else if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i] =null;

        }
    }
    let tempArr= [];
    for(let i=0; i<contentArr.length;i++){ 
        if(contentArr[i] !== null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr; 
    
}
let isNPresent = optionsArr.includes("-n");
if(isNPresent==true){
    let temp ="1";
    for(let i=0; i<contentArr.length;i++){
        contentArr[i] = temp + contentArr[i];
        temp++;
    }
}

let isBPresent = optionsArr.includes("-b");
if(isBPresent==true){
    let temp ="1";
    for(let i=0; i<contentArr.length;i++){
        if(contentArr[i]!= ""){
        contentArr[i] = temp +" " + contentArr[i];
        temp++;
     }
    }
}

console.log(contentArr.join("\n"));
 

