setTimeout(() => {
    //inicia o script de contagem de módulos completos
    moduleComplete();
    updateStars();
    updateExercicios();
}, 100);



function moduleComplete() {

    let itemsModules = modulos.querySelectorAll('.modules-item');
    let itemsModulesComplete = modulos.querySelectorAll('.module-item--complete');

    let scoreModules = score.querySelector('.score-modules');
    let modulesText = scoreModules.querySelector('.score-text');
    let menuTextModules = menu.querySelector('.modules-text');


    modulesText.textContent = itemsModulesComplete.length + "/" + itemsModules.length;
    menuTextModules.textContent = itemsModulesComplete.length + "/" + itemsModules.length;
    updateStars();
    updateExercicios();
    
}



function updateStars() {

    let itemsModules = modulos.querySelectorAll('.modules-item');
    let itemsExercicios = modulos.querySelectorAll('.modules-item-exercicios');
    let scoreStars = score.querySelector('.score-stars');
    let starText = scoreStars.querySelector('.score-text');
    let menuTextStar = menu.querySelector('.star-text');

    totalStars = itemsModules.length + (itemsModules.length * 5) + (itemsExercicios.length * 6);

    starText.textContent = currentScoreStars + '/' + totalStars;
    menuTextStar.textContent = currentScoreStars + '/' + totalStars;
    

//     for (let i = 0; i < stars[numb]; i++) {
          
//         moduleStars[i].classList.add('star-light') 
// }
}




function updateExercicios() {

    let itemsModules = modulos.querySelectorAll('.modules-item');
    let itemsExercicios = modulos.querySelectorAll('.modules-item-exercicios');
    let scoreExercicios = score.querySelector('.score-exercicios');
    let exText = scoreExercicios.querySelector('.score-text');
    let menuTextEx = menu.querySelector('.exercicios-text');

    totalExercicios = itemsModules.length + (itemsExercicios.length * 6);

    exText.textContent = currentScoreExercicios + '/' + totalExercicios;
    menuTextEx.textContent = currentScoreExercicios + '/' + totalExercicios;
   
}