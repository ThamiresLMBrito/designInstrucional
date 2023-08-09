


function pirTurn(el) {

    var txtPir = el.querySelector('.pir-content');
    var numPir = el.querySelector('.pir-num');
    
    el.classList.toggle('viraPiramide');
    txtPir.classList.toggle('show-content');
    numPir.classList.toggle('hide-content');
   
}

