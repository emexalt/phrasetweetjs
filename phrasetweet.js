//phrasetweet.js
//a javascript version of phrasetweet.py
//em folsom, 2019, copyleft

function main(){
    let phr1 = document.getElementById("1").value;
    let phr2 = document.getElementById("2").value;
    trimLast(phr1);
    trimFirst(phr2);
}

function trimLast(string){
    for(i = string.length; i > 0; i--){
        if (string.charAt(i) == " "){
            //do nothing
        } else {
            document.writeln(string.substr(0, i));
            document.writeln("<BR/>");
        }
    }  
}


function trimFirst(string){
    for(i = 1; i < string.length+1; i++){
        if (string.charAt(i) == " "){
            //do nothing
        } else {
            document.writeln(string.substr(0, i));
            document.writeln("<BR/>");
        }
    }  
}
