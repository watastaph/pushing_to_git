var count=1;
var countElement = document.querySelector("#count");

function countNumber(){
    count++;
    countElement.innerText = "Welcome to my Webpage" ;
    alert("The count is " + count);
   
}

function decrement(){
   count--;
    countElement.innerText = "The count is " + count;
   
}


function displayMessage(){
    alert("Welcome to my webpage");
}

function message() {
    alert("Delayed message");    
}

