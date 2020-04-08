//phrasetweet.js
//a javascript version of phrasetweet.py
//em folsom, 2019, copyleft

let tlOutput = "";
let tfOutput = "";
function main(){
    let phr1 = document.getElementById("1").value;
    let phr2 = document.getElementById("2").value;
    let validationResult = validate(phr1, phr2);
    if (validationResult){
        trimLast(phr1);
        trimFirst(phr2);
        let output = document.getElementById("result");
        output.innerText= tlOutput + tfOutput;
    } else {
        let output = document.getElementById("result");
        output.innerText= '<p id="errorText">First characters of strings do not match.</p>';
    }   
    tlOutput = "";
    tfOutput = "";
}


function trimLast(string){
    for(i = string.length; i > 0; i--){
        if (string.charAt(i) == " "){
            //do nothing
        } else {
            tlOutput = tlOutput.concat(string.substr(0,i), "\n");
        }
    }  
}


function trimFirst(string){
    for(i = 1; i < string.length+1; i++){
        if (string.charAt(i) == " "){
            //do nothing
        } else {
            tfOutput = tfOutput.concat(string.substr(0,i), "\n");
        }
    }  
}

function validate(str1, str2){
    return str1.charAt(0) == str2.charAt(0);
}