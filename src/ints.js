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
 
// Botão expansível 
function btnExpand(btn) {
    let btnContent = btn.querySelector(".btn-expand-content");
    let icon = btn.querySelector(".expand-icon");
    
    icon.classList.toggle("expand-icon--active");
    btnContent.classList.toggle("show-flex");
    btn.classList.toggle('btn-expand--active');
    
}
 
// Função do BTN de Informação
function btnInfo(btn) {
    btn.classList.toggle("btn-info-active");
}
 
function slideCP(btn) {
    let containerCP = btn.parentNode.parentNode;
    let conteudoBox = containerCP.querySelector('.container-conteudo');
    let conteudoAtualCP = conteudoBox.querySelector('.ativo');
    let nextConteudoCP = conteudoAtualCP.nextElementSibling;
    let prevConteudoCP = conteudoAtualCP.previousElementSibling;
    let prevButtom = containerCP.querySelector('.prev');
    let nextButtom = containerCP.querySelector('.next');

    let boxIndicador = containerCP.querySelector('.indicador-conteudo');
    let indicadorAtual = boxIndicador.querySelector('.ativado');
    let nextIndicador = indicadorAtual.nextElementSibling;

    let prevIndicador = indicadorAtual.previousElementSibling;


    if (btn.classList.contains('next')) {

        if (nextConteudoCP !== null) {
            nextConteudoCP.classList.add('ativo');
            nextConteudoCP.classList.remove('hide');
            conteudoAtualCP.classList.add('hide');
            conteudoAtualCP.classList.remove('ativo');

            indicadorAtual.classList.remove('ativado');
            nextIndicador.classList.add('ativado');

        } else {
            btn.classList.add('btn-inativo');
        }

        prevButtom.classList.remove('btn-inativo');
    }

    if (btn.classList.contains('prev')) {
        if (prevConteudoCP !== null) {
            prevConteudoCP.classList.add('ativo');
            prevConteudoCP.classList.remove('hide');
            conteudoAtualCP.classList.add('hide');
            conteudoAtualCP.classList.remove('ativo');

            indicadorAtual.classList.remove('ativado');
            prevIndicador.classList.add('ativado');

        } else {
            btn.classList.add('btn-inativo');
        }

        nextButtom.classList.remove('btn-inativo');
    }
}

function playCP(btn) {

    let container = btn.parentNode;
    let selectPrev = container.querySelector(".prev");
    let selectNext = container.querySelector(".next")
    selectPrev.classList.add("btn-inativo");
    selectPrev.classList.remove("hide");
    selectNext.classList.remove("hide");
    btn.classList.add("hide");
}
 

// const ddContainer = document.querySelectorAll('.dd-container');
let log = document.querySelector('.log');



function showTutoDD(el) {
    var containerCatch = el.parentNode;

    var ddTuto = containerCatch.querySelector('.dd-tuto');
    ddTuto.style.display = "flex";


}




function tutoDD(el) {

    var rowCatch = el.parentNode;
    var containerCatch = rowCatch.parentNode;



    var ddTuto = containerCatch.querySelector('.dd-tuto');

    ddTuto.style.display = "none";

}


function initDD(el) {

    createDrag(el);
    el.removeAttribute('onmouseover');

}

// createDrag();


function createDrag(el) {

    const Drags = el.querySelectorAll('.draggable-piece');

    Draggable.create(Drags, {

        bounds: el,

        onDragStart: drag,
        onDragEnd: dragEnd,
        onDrag: dragando,
    });
}

function createReDrag(el) {

    //console.log(el);
    const reDrag = el.querySelectorAll('.re-draggable-piece');

    Draggable.create(reDrag, {

        bounds: el,

        onDragStart: drag,
        onDragEnd: reDragEnd,
        onDrag: redragando,


    });

}





function drag() {

    this.lastX = 0;
    this.lastY = 0;

    this.target.parentNode.querySelector('.draggable-piece').classList.remove('dd-demo');
    this.target.style.zIndex = "1";


}





function dragEnd() {

    var rowCatch = this.target.parentNode;
    var containerCatch = rowCatch.parentNode;



    const drops = containerCatch.querySelectorAll('.dd-drop');
    this.target.classList.remove('dragging');

    var dropped_0 = drops[0].querySelector('.dropped-piece');
    var dropped_1 = drops[1].querySelector('.dropped-piece');
    var dropped_2 = drops[2].querySelector('.dropped-piece');
    var redraggable_0 = drops[0].querySelector('.re-draggable-piece');
    var redraggable_1 = drops[1].querySelector('.re-draggable-piece');
    var redraggable_2 = drops[2].querySelector('.re-draggable-piece');

    if (this.hitTest(drops[0]) && this.target.classList.contains('true') && dropped_0 == null && redraggable_0 == null) {

        var newDragTrue = document.createElement('DIV');
        drops[0].appendChild(newDragTrue);
        newDragTrue.classList.add('dropped-piece', 'true');
        newDragTrue.textContent = this.target.textContent;
        this.target.remove();
        newDragTrue.parentNode.classList.add('drop-true');
        // this.target.textContent = "bateu";

    } else if (this.hitTest(drops[0]) && this.target.classList.contains('false') && dropped_0 == null && redraggable_0 == null) {

        var newDragFalse = document.createElement('DIV');
        drops[0].appendChild(newDragFalse);
        newDragFalse.classList.add('re-draggable-piece', 'false');
        newDragFalse.textContent = this.target.textContent;
        this.target.remove();
        newDragFalse.parentNode.classList.add('drop-false');
        createReDrag(containerCatch);

    } else {
        // this.target.textContent = "não bateu";
        TweenLite.to(this.target, 0.3, { x: this.lastX, y: this.lastY });
        this.target.style.zIndex = "0";

    }

    if (this.hitTest(drops[1]) && this.target.classList.contains('true') && dropped_1 == null && redraggable_1 == null) {

        var newDragTrue = document.createElement('DIV');
        drops[1].appendChild(newDragTrue);
        newDragTrue.classList.add('dropped-piece', 'true');
        newDragTrue.textContent = this.target.textContent;
        this.target.remove();
        newDragTrue.parentNode.classList.add('drop-true');
        // this.target.textContent = "bateu";

    } else if (this.hitTest(drops[1]) && this.target.classList.contains('false') && dropped_1 == null && redraggable_1 == null) {

        var newDragFalse = document.createElement('DIV');
        drops[1].appendChild(newDragFalse);
        newDragFalse.classList.add('re-draggable-piece', 'false');
        newDragFalse.textContent = this.target.textContent;
        this.target.remove();
        newDragFalse.parentNode.classList.add('drop-false');
        createReDrag(containerCatch);

    } else {
        // this.target.textContent = "não bateu";
        TweenLite.to(this.target, 0.3, { x: this.lastX, y: this.lastY });
        this.target.style.zIndex = "0";

    }

    if (this.hitTest(drops[2]) && this.target.classList.contains('true') && dropped_2 == null && redraggable_2 == null) {

        var newDragTrue = document.createElement('DIV');
        drops[2].appendChild(newDragTrue);
        newDragTrue.classList.add('dropped-piece', 'true');
        newDragTrue.textContent = this.target.textContent;
        this.target.remove();
        newDragTrue.parentNode.classList.add('drop-true');
        // this.target.textContent = "bateu";

    } else if (this.hitTest(drops[2]) && this.target.classList.contains('false') && dropped_2 == null && redraggable_2 == null) {

        var newDragFalse = document.createElement('DIV');
        drops[2].appendChild(newDragFalse);
        newDragFalse.classList.add('re-draggable-piece', 'false');
        newDragFalse.textContent = this.target.textContent;
        this.target.remove();
        newDragFalse.parentNode.classList.add('drop-false');
        createReDrag(containerCatch);

    } else {
        // this.target.textContent = "não bateu";
        TweenLite.to(this.target, 0.3, { x: this.lastX, y: this.lastY });
        this.target.style.zIndex = "0";

    }



    for (let i = 0; i < drops.length; i++) {
        drops[i].classList.remove('dd-target');

    }


    verificaPecas(containerCatch);
}

function reDragEnd() {

    var dropCatch = this.target.parentNode;
    var rowCatch = dropCatch.parentNode;
    var containerCatch = rowCatch.parentNode;

   // console.log(containerCatch);

    const drops = containerCatch.querySelectorAll('.dd-drop');
    const rowDrag = containerCatch.querySelector('.dd-row-drag');


    //console.log(rowDrag);
    this.target.classList.remove('dragging');
    var dropped_0 = drops[0].querySelector('.dropped-piece');
    var dropped_1 = drops[1].querySelector('.dropped-piece');
    var dropped_2 = drops[2].querySelector('.dropped-piece');
    var redraggable_0 = drops[0].querySelector('.re-draggable-piece');
    var redraggable_1 = drops[1].querySelector('.re-draggable-piece');
    var redraggable_2 = drops[2].querySelector('.re-draggable-piece');

    if (this.hitTest(drops[0]) && this.target.classList.contains('false') && dropped_0 == null && redraggable_0 == null) {

        var newDragFalse = document.createElement('DIV');
        drops[0].appendChild(newDragFalse);
        newDragFalse.classList.add('re-draggable-piece', 'false');
        newDragFalse.textContent = this.target.textContent;
        this.target.remove();
        newDragFalse.parentNode.classList.add('drop-false');
        createReDrag(containerCatch);

    } else {
        TweenLite.to(this.target, 0.3, { x: this.lastX, y: this.lastY });

    }

    if (this.hitTest(drops[1]) && this.target.classList.contains('false') && dropped_1 == null && redraggable_1 == null) {

        var newDragFalse = document.createElement('DIV');
        drops[1].appendChild(newDragFalse);
        newDragFalse.classList.add('re-draggable-piece', 'false');
        newDragFalse.textContent = this.target.textContent;
        this.target.remove();
        newDragFalse.parentNode.classList.add('drop-false');
        createReDrag(containerCatch);

    } else {
        TweenLite.to(this.target, 0.3, { x: this.lastX, y: this.lastY });

    }
    if (this.hitTest(drops[2]) && this.target.classList.contains('false') && dropped_2 == null && redraggable_2 == null) {

        var newDragFalse = document.createElement('DIV');
        drops[2].appendChild(newDragFalse);
        newDragFalse.classList.add('re-draggable-piece', 'false');
        newDragFalse.textContent = this.target.textContent;
        this.target.remove();
        newDragFalse.parentNode.classList.add('drop-false');
        createReDrag(containerCatch);

    } else {
        TweenLite.to(this.target, 0.3, { x: this.lastX, y: this.lastY });

    }



    if (this.hitTest(rowDrag) && this.target.classList.contains('false')) {

        var newDragTrue = document.createElement('DIV');
        rowDrag.appendChild(newDragTrue);
        newDragTrue.classList.add('draggable-piece', 'false');
        newDragTrue.textContent = this.target.textContent;
        this.target.remove();

        createDrag(containerCatch);

    } else {
        TweenLite.to(this.target, 0.3, { x: this.lastX, y: this.lastY });
    }



}




function dragando() {
    this.target.classList.add('dragging');
    var rowCatch = this.target.parentNode;
    var containerCatch = rowCatch.parentNode;

    const drops = containerCatch.querySelectorAll('.dd-drop');

    for (let i = 0; i < drops.length; i++) {
        drops[i].classList.add('dd-target');

    }

}

function redragando() {
    if (this.target.parentNode.classList.contains('dd-drop')) {
        this.target.parentNode.classList.remove('drop-false');
    }

}


function verificaPecas(containerCatch) {

    const dropped = containerCatch.querySelectorAll('.dropped-piece');
    let rowDrop = containerCatch.querySelector('.dd-row-drop');

    if (dropped.length == 3) {
        //console.log(rowDrop);
        rowDrop.classList.add('dd-win');
    }

}





function removeTuto(el) {

    el.querySelector('.draggable-piece').classList.remove('dd-demo');

}
 
function flashcards(atvFlash) {
    let flashCardTextFront = atvFlash.querySelector('.flashcard-front');
    let flashCardTextBack = atvFlash.querySelector('.flashcard-back');    
    let flashFront = atvFlash;
    
    flashFront.classList.toggle('flash-card-active');
    flashCardTextBack.classList.toggle('flashcard-text-active');    
    flashCardTextFront.classList.toggle('flashcard-text');

}
 
function showflx_cas(btn) {

    let btnFlx = btn.querySelector('.flx_cas_btn');
    //let btnAnima = btn.querySelector('.animaTouchCas');
    let nextLine = btn.querySelector('.flx_cas_line');
    let btnPrev = btn.previousSibling.previousElementSibling;
    let rowCatch = btnPrev.querySelector(".flx_cas_btn")

   // console.log(nextLine);

    
    if (btnFlx.classList.contains('flx_cas_btn-default') && rowCatch.classList.contains('flx_cas_btn-ativo')) {
       btnFlx.classList.remove("flx_cas_btn-default");
       btnFlx.classList.add("flx_cas_btn-ativo");
    } 

    if (nextLine != null && nextLine.classList.contains('flx_cas-line_default')) {
        nextLine.classList.remove("flx_cas-line_default");
        nextLine.classList.add("flx_cas-line_ativo");
    }

    if (btnFlx.classList.contains('animaTouchCas')) {
        btnFlx.classList.remove("animaTouchCas");
    }

}
 
function showflx_org(btn) {
    let col = btn.parentNode.parentNode;
    let blockText = col.querySelector('.flx_org_block');

    //console.log(blockText);

    if (!btn.classList.contains('flx_org_block')) {

        btn.classList.add('flx_org-btn-ativo');
        btn.classList.remove('animaTouchOrg');

        if (blockText !== null) {
            blockText.classList.remove('flx_org_block');
        }
    }
}


function showAllflx_org(btn){
    let rowBox = btn.parentNode;
    let nextRow = rowBox.nextElementSibling.nextElementSibling;
    let box = nextRow.querySelectorAll(".flx_org-box");

    btn.classList.remove('animaTouchOrg');

    for(let i = 0; i < box.length; i++){
        
        //console.log(box [i]);
        box[i].classList.add('flx_org-btn-ativo');
    }
}
 
function showTrilha(btn) {
    let container = btn.parentNode.parentNode;
    let blockText = container.querySelector('.flx_tr_block');
    let lineText = container.querySelector('.flx_tr-line-dashed');

    if ( !btn.classList.contains('flx_tr_block')) {
        
        btn.classList.add('flx_tr-box-ativo');
        btn.classList.remove('flx_tr-box-default');
        btn.classList.remove('animaTouch');
        
        setTimeout(() => {
            lineText.classList.remove('flx_tr-line-dashed');
            lineText.classList.add('flx_tr-line-ative');
        }, 500);

        if(blockText !== null) {
            blockText.classList.remove('flx_tr_block');
        }
    } 
}  
 
function initLP(el) {


    createLpDrag(el);
    el.removeAttribute('onmouseover');
}


function hideTutoLP(el) {

    el.style.display = "none";
}


function createLpDrag(el) {

    const lpDrags = el.querySelectorAll('.lp-pieces');

    Draggable.create(lpDrags, {

        bounds: el,
        onDragStart: lpDrag,
        onDragEnd: lpDragEnd,
        // onDrag: lpDragging

    });
}

function LpReDrag(el) {

    const lpReDrag = el.querySelectorAll('.lp-false');

    Draggable.create(lpReDrag, {

        bounds: el,
        onDragStart: lpDrag,
        onDragEnd: lpReDragEnd,
        onDrag: lpRedragando,
        // autoScroll:1


    });

}









function lpDrag() {

    this.lastX = 0;
    this.lastY = 0;
}




function lpDragEnd() {

    var rowCatch = this.target.parentNode;
    var lpRowCatch = rowCatch.parentNode;
    var containerCatch = lpRowCatch.parentNode;

    var lpDrops = containerCatch.querySelectorAll('.lp-drop');


    lpDrops.forEach(element => {

        var droppeds = element.querySelector('.lp-dropped');

        if (this.hitTest(element) && this.target.id == element.id && droppeds == null) {

          //  console.log(this.target.id + element.id);

            var newLpTrue = document.createElement('DIV');
            element.appendChild(newLpTrue);
            newLpTrue.classList.add('lp-dropped', 'lp-true');
            newLpTrue.textContent = this.target.textContent;
            newLpTrue.parentNode.classList.add('lp-drop-true');
            this.target.remove();


            // element.appendChild(this.target);

        } else if (this.hitTest(element) && this.target.id !== element.id && droppeds == null) {

            var newLpFalse = document.createElement('DIV');
            element.appendChild(newLpFalse);
            newLpFalse.id = this.target.id;
            newLpFalse.classList.add('lp-dropped', 'lp-false');
            newLpFalse.textContent = this.target.textContent;
            newLpFalse.parentNode.classList.add('lp-drop-false');
            this.target.remove();
            LpReDrag(containerCatch);

        }




        else {
            TweenLite.to(this.target, 0.3, { x: this.lastX, y: this.lastY });
        }

    });



}



function lpReDragEnd() {


    var rowCatch = this.target.parentNode;
    var lpRowCatch = rowCatch.parentNode;
    var containerCatch = lpRowCatch.parentNode;



    var colLpPieces = containerCatch.querySelector('.lp-col-drag')
    var lpDrops = containerCatch.querySelectorAll('.lp-drop')


    if (this.hitTest(colLpPieces)) {


        var newLpPiece = document.createElement('DIV');
        colLpPieces.appendChild(newLpPiece);
        newLpPiece.id = this.target.id;
        newLpPiece.classList.add('lp-pieces');
        newLpPiece.textContent = this.target.textContent;

        this.target.remove();
        createLpDrag(containerCatch);


    } else {
        TweenLite.to(this.target, 0.3, { x: this.lastX, y: this.lastY });
    }

    lpDrops.forEach(element => {

        var droppeds = element.querySelector('.lp-dropped');

        if (this.hitTest(element) && this.target.id == element.id && droppeds == null) {

            //console.log(this.target.id + element.id);

            var newLpTrue = document.createElement('DIV');
            element.appendChild(newLpTrue);
            newLpTrue.classList.add('lp-dropped', 'lp-true');
            newLpTrue.textContent = this.target.textContent;
            newLpTrue.parentNode.classList.add('lp-drop-true');
            this.target.remove();


        } else if (this.hitTest(element) && this.target.id !== element.id && droppeds == null) {

            var newLpFalse = document.createElement('DIV');
            element.appendChild(newLpFalse);
            newLpFalse.id = this.target.id;
            newLpFalse.classList.add('lp-dropped', 'lp-false');
            newLpFalse.textContent = this.target.textContent;
            newLpFalse.parentNode.classList.add('lp-drop-false');
            this.target.remove();
            LpReDrag(containerCatch);

        }




        else {
            TweenLite.to(this.target, 0.3, { x: this.lastX, y: this.lastY });
        }

    });

}







function lpRedragando() {

    this.target.parentNode.classList.remove('lp-drop-false')

}
 

 
function openMtz(mtz) {
        var container = mtz.parentNode.parentNode;
        var rows = container.querySelectorAll('.matriz-row');

        mtz.classList.toggle('pulse');

        for (let i = 0; i < rows.length; i++) {
            if(!rows[i].classList.contains('mtz-disable')){
                rows[i].classList.toggle('mtz-visible');
            }
            
        }


}
 



function pirTurn(el) {

    var txtPir = el.querySelector('.pir-content');
    var numPir = el.querySelector('.pir-num');
    
    el.classList.toggle('viraPiramide');
    txtPir.classList.toggle('show-content');
    numPir.classList.toggle('hide-content');
   
}


 
function changeButtonColor(btn){
    
    let divQuestion = btn.parentNode;
    let button = divQuestion.querySelector('button');
   

    button.classList.add("buttonChange")
    //console.log(button);
}

function addTextDissertativa(btn, id) {

        let divQuestion = btn.parentNode.parentNode;
        let inputBox = divQuestion.querySelector("textarea");
        let inputText = inputBox.value;
        //let inputDiv = input.parentNode;

    
        // Salvar texto no localStorage
        if (localStorage.getItem('modulo' + numModulo) == null) {
            localStorage.setItem('modulo' + numModulo, '[]'); // cria array vazia
        }
    
        var oldValue = JSON.parse(localStorage.getItem('modulo' + numModulo));
        oldValue[id] = inputText;
    
        localStorage.setItem('modulo' + numModulo, JSON.stringify(oldValue));
   

        if (inputText !== '') {

        inputBox.remove();
        //console.log(input);
   
       let textDiv = document.createElement("DIV");
           textDiv.classList.add("q-dis-text");
   
           divQuestion.appendChild(textDiv);
           textDiv.textContent = inputText;
   
       let button = divQuestion.querySelector(".buttonCheck");
    
            button.classList.remove("buttonChange");
            button.classList.add("buttonCheckOK");
        }else{
           // console.log('ta vazio');
            inputBox.placeholder = 'Escreva aqui sua resposta';
        }
        let buttonEdit = divQuestion.querySelector(".buttonEdit");
             buttonEdit.classList.remove("buttonCheckOK");
         
}

function editTextDissertativa(btn){
    let divQuestion = btn.parentNode.parentNode;
    let divTextBox = divQuestion.querySelector('.q-dis-text');
    let textContentDiv = divTextBox.textContent;

    //console.log(textContentDiv);
    divTextBox.remove();

    let textAreaNew = document.createElement("textarea");
        textAreaNew.classList.add('q-dis-resposta');

        divQuestion.appendChild(textAreaNew);
        textAreaNew.textContent = textContentDiv;

    let  button = btn;
    let  buttonDiv= btn.parentNode;
    let  buttonCheck = buttonDiv.querySelector(".buttonCheck");


    button.classList.add('buttonCheckOK');
    buttonCheck.classList.remove("buttonCheckOK");

}


function loadTextDQuestion() {

    var questions = content.querySelectorAll('.q-dissertativa');

for (let i = 0; i < questions.length; i++) {

    let inputBox = questions[i].querySelector("textarea");
    let qResposta = questions[i].querySelector('.q-dis-resposta');

    let inputText = inputBox.value;

    var lsText = JSON.parse(localStorage.getItem('modulo' + numModulo));

    if (lsText[i] !== undefined) {
        
    inputBox.remove();

    


    let textDiv = document.createElement("DIV");
        textDiv.classList.add("q-dis-text");
 
       qResposta.appendChild(textDiv);
        textDiv.textContent = lsText[i];
 
    let button = questions[i].querySelector(".buttonCheck");
    let buttonEdit = questions[i].querySelector(".buttonEdit")
 
         button.classList.remove("buttonChange");
         button.classList.add("buttonCheckOK");
    }

}

}

//  function addTextDissertativa(btn){
    
//      if (btn.classList.contains('buttonCheck')) {
        
//         let divQuestion = btn.parentNode;
//         let inputBox = divQuestion.querySelector("textarea");
//         let inputText = inputBox.value;
//         //let inputDiv = input.parentNode;
   
//         inputBox.remove();
//         //console.log(input);
   
//        let textDiv = document.createElement("DIV");
//            textDiv.classList.add("q-dis-text");
   
//            divQuestion.appendChild(textDiv);
//            textDiv.textContent = inputText;
   
//        let button = divQuestion.querySelector(".buttonCheck");
    
//             button.classList.remove("buttonCheck");
//             button.classList.add("buttonEdit");
//            //console.log(button);
//      }

//      if (btn.classList.contains('buttonEdit')) {
         
//         setTimeout(() => {

//             let divQuestion = btn.parentNode;
//             let divTextResp = divQuestion.querySelector('.q-dis-text');
//             let textContentDiv = divTextResp.textContent;
    
//             divTextResp.remove();
    
//             let textAreaNew = document.createElement("textarea");
//                 textAreaNew.classList.add("q-dis-resposta");
//                 textAreaNew.textContent = textContentDiv;
    
//                 divQuestion.appendChild(textAreaNew);
//         }, 150);

//      }
   

// }

// function editTextDissertativa(btn){
//         let divQuestion = btn.parentNode;
//         let divTextResp = divQuestion.querySelector('.q-dis-text');
//         let textContentDiv = divTextResp.textContent;

//         divTextResp.remove();

//         let textAreaNew = document.createElement("textarea");
//             textAreaNew.classList.add("q-dis-resposta");
//             textAreaNew.textContent = textContentDiv;

//             divQuestion.appendChild(textAreaNew);

// }

// function removeTextDissertativa(btn){

//     let buttonDiv = btn.parentNode;
//     let inputDiv = buttonDiv.nextElementSibling;
//     let questionBox = btn. parentNode.parentNode;
    
//     inputDiv.remove();
//     //console.log(questionBox);
   

//     let inputBox = document.createElement("textarea");
//         inputBox.classList.add("q-dis-resposta");

//         questionBox.appendChild(inputBox);
//         inputBox.placeholder = 'Escreva aqui sua resposta';

//     let inputButtonTrash = btn;
//     let iconeButtonTrash = inputButtonTrash.querySelector('i')

//         iconeButtonTrash.style ="color: purple";  
    
//     let inputButtonCheck = btn.previousElementSibling.previousElementSibling;
//     let iconeButtonCheck = inputButtonCheck.querySelector('i')

//         //console.log(inputButtonCheck);
//         iconeButtonCheck.style ="color:#e6e6e6;"
// }



// function saveDQuestion(form, id) {

// }
 
function expandAnswer(btnAnsw) {
    let content = btnAnsw.parentNode.parentNode;
    let btnExp = content.querySelector(".btn-answ-expand");
    let icon = content.querySelector(".answer-icon");


    btnAnsw.classList.toggle("btn-answer-header--active");
    btnExp.classList.toggle("btn-answ-expand--active");
    icon.classList.toggle("btn-answ-header-icon--active");

}
 
function sliderIMG(btn) {
    let slideShow = btn.parentNode;
    let figures = slideShow.querySelector('.conteudo-figure');
    let figureAtual = figures.querySelector(".show-flex");
    let nextFigure = figureAtual.nextElementSibling;
    let prevFigure = figureAtual.previousElementSibling;
    let prevBtn = slideShow.querySelector('.prev-btn');
    let nextBtn = slideShow.querySelector('.next-btn');
 
    let dots = slideShow.querySelector('.dots');
    let dotAtual = dots.querySelector('.dot-active');
    let nextDot = dotAtual.nextElementSibling;
    let prevDot = dotAtual.previousElementSibling;
 
 
     console.log(nextDot);
 
     if (btn.classList.contains('next-btn')) {
 
         if ( nextFigure !== null) {
             figureAtual.classList.remove('show-flex');
             nextFigure.classList.add('show-flex');
 
             dotAtual.classList.remove('dot-active');
             nextDot.classList.add('dot-active')
 
         } else {
             btn.classList.add('inative-btn');
           }
 
           prevBtn.classList.remove('inative-btn');
     }
 
     if (btn.classList.contains('prev-btn')) {
 
         if ( prevFigure !== null) {
             figureAtual.classList.remove('show-flex');
             prevFigure.classList.add('show-flex');
 
             dotAtual.classList.remove('dot-active');
             prevDot.classList.add('dot-active');
         } else {
             btn.classList.add('inative-btn');
           }
 
           nextBtn.classList.remove('inative-btn');
     }
     
 }
 
 
function OpenContentTL (btn){

    let col3 = btn.parentNode;
    let rowBox = col3.parentNode;
    let tl_icon = rowBox.querySelector (".tl-icon");
    let tl_btn_text = rowBox.querySelector (".tl-btn-text");

    tl_icon.classList.toggle("stopAnimaTl");
    tl_btn_text.classList.toggle("show-txt");
}