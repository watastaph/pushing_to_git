var count = 1;
var countElement = document.querySelector("#count");

console.log(countElement);

function add(){
    count++;
    countElement.innerText = "The count is " + count;
    console.log(count);
}

function message() {
    alert("Timeout!");  
}
    
console.log("Start");
setTimeout(message, 3000);
console.log("End");

function over(element) {
    element.style.backgroundColor = "lime";    
}
    
function out(element) {
    element.style.backgroundColor = "silver";   
}

function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}