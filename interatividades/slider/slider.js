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
 