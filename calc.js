const userInput = document.querySelector(".userInput");
const result = document.querySelector(".result");
const options = document.querySelectorAll(".options");
const equals = document.querySelector("#equals");

function doCalculation(){
    //const update = userInput.value;
    result.innerHTML = eval(userInput.value);
    userInput.value = "";
}

equals.addEventListener("click", doCalculation);

for(let i = 0; i < options.length; i++){
    options[i].addEventListener("click", (e) => {
        userInput.value = userInput.value + e.target.value;
    })
}

