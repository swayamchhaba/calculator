let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == '='){
            try {
                screen.value = eval(screenValue)
            } catch(err) {
                screenValue = "error";
                screen.value = screenValue;
            }            
            screenValue = "";
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}