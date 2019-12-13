//phrasetweet.js
//a javascript version of phrasetweet.py
//em folsom, 2019, copyleft

let tlOutput = "";
let tfOutput = "";
function main(){
    let phr1 = document.getElementById("1").value;
    let phr2 = document.getElementById("2").value;
    trimLast(phr1);
    trimFirst(phr2);
    let output = document.getElementById("result");
    output.innerHTML= tlOutput + tfOutput;
    tlOutput = "";
    tfOutput = "";
    //document.writeln(tfOutput);
    //document.writeln('<button id="submitButton" onClick="javascript:window.location.reload(true)">Go back!</button> <link rel="stylesheet" href="main.css"></link>');
}    


function trimLast(string){
    for(i = string.length; i > 0; i--){
        if (string.charAt(i) == " "){
            //do nothing
        } else {
            tlOutput = tlOutput.concat(string.substr(0,i), "<BR/>");
        }
    }  
}


function trimFirst(string){
    for(i = 1; i < string.length+1; i++){
        if (string.charAt(i) == " "){
            //do nothing
        } else {
            tfOutput = tfOutput.concat(string.substr(0,i), "<BR/>");
        }
    }  
}
