
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