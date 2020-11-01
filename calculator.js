
const button = document.querySelectorAll("button");
const display = document.querySelector(".display");

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", calculate);
};
 

/*buttons.forEach(function(button){
    button.addEventListener("click", calculate)
});*/


function calculate(digits){
    const calculateDigits = digits.target.value;
    if(calculateDigits === "="){
        if(display.value !== ""){
            display.value = eval(display.value);
        }
    }else if(calculateDigits === "C"){
        display.value = "";
    }else if(calculateDigits === "DEL"){
        display.value = display.value.
    }else{
        display.value += calculateDigits;
    }

}
