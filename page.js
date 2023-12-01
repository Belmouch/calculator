// ------------variabales----------
 let  screen = document.getElementById("screen");
 let numChar ;
 let currentChar , previousChar;
 let operators = ['+' , '-' , '*' , '/']


//  -----------------function ------------

 function display (c){
    screen.value +=  c ;
    numChar = screen.value.length ;
    currentChar = c;
    getprevious(); 
 }
 function clearscreen(){
    screen.value = "";
 }
 function calculat(){
    screen.value =eval(screen.value);
 }
 function getprevious(){
   previousChar = screen.value.substring(numChar-2,numChar-1)
   checksuntax();
   
 }
 function checksuntax(){
    if (operators.includes(currentChar) && numChar == 1){
        removchar()
    }
    if (operators.includes(previousChar) && operators.includes(currentChar)){
        if(currentChar == previousChar) {
            removchar()
        }else {
          lastop()
        }   
    }
   

 }
 function removchar(){
    screen.value = screen.value.substring(0,numChar-1)
 }
 function lastop(){
    screen.value = screen.value.slice(0,numChar-2) + screen.value.slice(numChar-1)
 }
 
