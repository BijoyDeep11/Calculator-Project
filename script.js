let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
        input.value = string;
        }
        
    })
})

// --- Keyboard functionality ---
document.addEventListener('keydown', function(e) {
    // Allow numbers, operators, decimal point
    if (
        (e.key >= '0' && e.key <= '9') ||
        ['+', '-', '*', '/', '.'].includes(e.key)
    ) {
        string += e.key;
        input.value = string;
    }
    // Enter or '=' to calculate
    else if (e.key === 'Enter' || e.key === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }
    // Backspace to delete last character
    else if (e.key === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
        e.preventDefault();
    }
    // Escape or Delete to clear
    else if (e.key === 'Escape' || e.key === 'Delete') {
        string = "";
        input.value = string;
        e.preventDefault();
    }
});