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