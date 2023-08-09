function mudaAmbiente1(botao) {

    var rowCatch = botao.parentNode;
    var colCatch = rowCatch.parentNode;
    var containerCatch = colCatch.parentNode;
    var idCatch = containerCatch.id;
    var idAmb = idCatch.split('-')[1];

    let ambContainer = document.querySelector('#amb-' + idAmb);
    let cicleContainer = ambContainer.querySelectorAll('.container-cicle-amb');
    let centroAmb = ambContainer.querySelectorAll('.cicle-amb-centro');
    let btnAmb1 = ambContainer.querySelectorAll('.btn-amb1');
    let btnAmb2 = ambContainer.querySelectorAll('.btn-amb2');
    let txtAmb1 = ambContainer.querySelectorAll('.txt-amb1');
    let txtAmb2 = ambContainer.querySelectorAll('.txt-amb2');
    let bolAmb1 = ambContainer.querySelectorAll('.bol-amb1');
    let bolAmb2 = ambContainer.querySelectorAll('.bol-amb2');


    
    for (let i = 0; i < btnAmb1.length; i++) {
      
        if(btnAmb1[i].classList.contains('btn-amb-ativo')){
            btnAmb1[i].classList.add('btn-amb-ativo');
            
        }else{
    
            btnAmb1[i].classList.add('btn-amb-ativo');
            btnAmb2[i].classList.remove('btn-amb-ativo');
         }
    }

    for (let i = 0; i < txtAmb1.length; i++) {
        
        txtAmb1[i].classList.add('txt-amb-active');
        bolAmb1[i].classList.add('bol-active1');
    }
    for (let i = 0; i < txtAmb2.length; i++) {
        txtAmb2[i].classList.remove('txt-amb-active');
        bolAmb2[i].classList.remove('bol-active2');
    }

    for (let i = 0; i < cicleContainer.length; i++) {
        cicleContainer[i].classList.add('active-cicle-amb1');
        cicleContainer[i].classList.remove('active-cicle-amb2');
        centroAmb[i].classList.add('active-centro-amb1');
        centroAmb[i].classList.remove('active-centro-amb2');
    }


    if(botao.classList.contains('brilho')) {
        botao.classList.remove('brilho');
    }
}





















// function mudaAmbiente1(botao) {

//     var rowCatch = botao.parentNode;
//     var colCatch = rowCatch.parentNode;
//     var containerCatch = colCatch.parentNode;
//     var idCatch = containerCatch.id;
//     var idAmb = idCatch.split('-')[1];

//     let ambContainer = document.querySelector('#amb-' + idAmb);

//     let cicleContainer = ambContainer.querySelectorAll('.container-cicle-amb');
//     let centroAmb = ambContainer.querySelectorAll('.cicle-amb-centro');
//     let btnAmb1 = ambContainer.querySelectorAll('.btn-amb1');
//     let btnAmb2 = ambContainer.querySelectorAll('.btn-amb2');
//     let txtAmb1 = ambContainer.querySelectorAll('.txt-amb1');
//     let txtAmb2 = ambContainer.querySelectorAll('.txt-amb2');
//     let bolAmb1 = ambContainer.querySelectorAll('.bol-amb1');
//     let bolAmb2 = ambContainer.querySelectorAll('.bol-amb2');


    
//     for (let i = 0; i < btnAmb1.length; i++) {
      
//         if(btnAmb1[i].classList.contains('btn-amb-ativo')){
//             btnAmb1[i].classList.add('btn-amb-ativo');
            
//         }else{
    
//             btnAmb1[i].classList.add('btn-amb-ativo');
//             btnAmb2[i].classList.remove('btn-amb-ativo');
//          }
//     }

//     for (let i = 0; i < txtAmb1.length; i++) {
        
//         txtAmb1[i].classList.add('txt-amb-active');
//         bolAmb1[i].classList.add('bol-active1');
//     }
//     for (let i = 0; i < txtAmb2.length; i++) {
//         txtAmb2[i].classList.remove('txt-amb-active');
//         bolAmb2[i].classList.remove('bol-active2');
//     }

//     for (let i = 0; i < cicleContainer.length; i++) {
//         cicleContainer[i].classList.add('active-cicle-amb1');
//         cicleContainer[i].classList.remove('active-cicle-amb2');
//         centroAmb[i].classList.add('active-centro-amb1');
//         centroAmb[i].classList.remove('active-centro-amb2');
//     }


//     if(botao.classList.contains('brilho')){
//         botao.classList.remove('brilho');
//     }


// }



function mudaAmbiente2(botao){

    var rowCatch = botao.parentNode;
    var colCatch = rowCatch.parentNode;
    var containerCatch = colCatch.parentNode;
    var idCatch = containerCatch.id;
    var idAmb = idCatch.split('-')[1];

    //('o número do seu id é ' + idAmb);

    let ambContainer = document.querySelector('#amb-' + idAmb);

    let cicleContainer = ambContainer.querySelectorAll('.container-cicle-amb');
    let centroAmb = ambContainer.querySelectorAll('.cicle-amb-centro');
    let btnAmb1 = ambContainer.querySelectorAll('.btn-amb1');
    let btnAmb2 = ambContainer.querySelectorAll('.btn-amb2');
    let txtAmb1 = ambContainer.querySelectorAll('.txt-amb1');
    let txtAmb2 = ambContainer.querySelectorAll('.txt-amb2');
    let bolAmb1 = ambContainer.querySelectorAll('.bol-amb1');
    let bolAmb2= ambContainer.querySelectorAll('.bol-amb2');


    for (let i = 0; i < btnAmb2.length; i++) {
      
        if(btnAmb2[i].classList.contains('btn-amb-ativo')){
            btnAmb2[i].classList.add('btn-amb-ativo');
            
        }else{
    
            btnAmb2[i].classList.add('btn-amb-ativo');
            btnAmb1[i].classList.remove('btn-amb-ativo');
         }
    }
    for (let i = 0; i < txtAmb2.length; i++) {
        txtAmb2[i].classList.add('txt-amb-active');
        bolAmb2[i].classList.add('bol-active2');
    }
    for (let i = 0; i < txtAmb1.length; i++) {
        txtAmb1[i].classList.remove('txt-amb-active');
        bolAmb1[i].classList.remove('bol-active1');
    }
    for (let i = 0; i < cicleContainer.length; i++) {
        cicleContainer[i].classList.add('active-cicle-amb2');
        cicleContainer[i].classList.remove('active-cicle-amb1');
        centroAmb[i].classList.add('active-centro-amb2');
        centroAmb[i].classList.remove('active-centro-amb1');
    }
    
    if(botao.classList.contains('brilho')){
        botao.classList.remove('brilho');
    }

}