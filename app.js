//Wrap code in an IIFE
(function(){
  
//   selection 
    const screen = document.getElementById('screen');
    const btns = document.querySelectorAll('.btn');
    const btnEqual = document.querySelector('.btn-equal');
    const btnClear = document.querySelector('.btn-clear');

    btns.forEach(btn => {
        btn.addEventListener('click', event => {
            const number = event.target.dataset.num;
            showValue(number);
        })
    })

    // showing value on screen 
    function showValue(number) {
        screen.value += number;
    }

    // evaluate the value
    btnEqual.addEventListener('click', () => {
        if (screen.value === '') {
            screen.value = 'Please Enter the value'
        } else {
            screen.value = eval(screen.value);
        }
    })

    // clearing screen 
    btnClear.addEventListener('click', () => {
        screen.value = null;
    })
 
})(); //end IIFE
