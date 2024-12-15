const userInput = document.querySelector(".userInput");
const result = document.querySelector(".result");
const options = document.querySelectorAll(".options");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

function myClearFunction(){
    userInput.value = "";
 }

function doCalculation(){
    //const update = userInput.value;
    result.innerHTML = eval(userInput.value);
    userInput.value = "";
}

equals.addEventListener("click", doCalculation);

for(let i = 0; i < options.length; i++){
    options[i].addEventListener("click", (e) => {
        userInput.value = userInput.value + e.target.value;
    });
}

let years = 100;
if ((years % 4) !== 0){
  console.log(years + " is not a leap year");
}
else if (years % 4 === 0){
     if (years%100 === 0 && years%400 === 0){
        console.log(years + "is a leap year");
     }
     else if (years%100 === 0 && years%400 !== 0){
        console.log(years + " is not a leap year");
     }
     else{
        console.log(years + "is a leap year");
     }
}

let n = 4;
while (n > 0){
    console.log("we have "+ n + " ties");
    if (n%2 === 0){
        console.log(n + " is divisible by 2");
    }
    else{
        console.log(n + " is not divisible by 2");
    }
    n--;
}

