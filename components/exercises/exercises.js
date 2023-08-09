function checkAlt(alternativa) {

    var exContent = alternativa.parentNode;
    var btn = exContent.querySelector('.exercicio-btn-confirm');
    var alternativas = exContent.querySelectorAll('.alternativa-exercicio');


    if (!exContent.classList.contains('question-complete') && !exContent.classList.contains('question-complete-ex') && !exContent.classList.contains('question-complete-dark-ex')) {
        for (let i = 0; i < alternativas.length; i++) {

            alternativas[i].classList.remove('alternativa--selected');
            alternativa.classList.add('alternativa--selected');

        }
    }

    btn.classList.remove('btn-question-retry');
    btn.textContent = 'Confirmar';
}


function btnCheckAlt(btn, unidade) {

    currentUnidade = capitulos[numModulo].unidade;

    var numb = numModulo - 1;
    var exContent = btn.parentNode;
    var exStars = exContent.querySelector('.exercicio-score');
    var starsScore = exStars.querySelectorAll('.exStar');
    var alternativaSelecionada = exContent.querySelector('.alternativa--selected');
    var starMenu = menu.querySelector('.menu-progress-percent');
    var starLineMenu = menu.querySelector('.menu-progress-star');
    let moduleItemStars = itemModule.querySelector('.info_stars');
    let moduleStars = moduleItemStars.querySelectorAll('.fa-star');



    if (alternativaSelecionada.classList.contains('true')) {

        starMenu.classList.add('star-light-menu');
        starLineMenu.classList.add('star-line-menu');

        questions[numb] = true;
        capitulos[numb].completed = true;

       




        if (!exContent.classList.contains('question-complete')) {
            currentScoreStars += capitulos[numb].estrelaExercicio;
            currentScoreExercicios += 1;
            updateStars();
            updateExercicios();
            startNotify('Você finalizou um exercício!', 'exercicios', capitulos[numb].estrelaExercicio);
            
            let itemsModules = modulos.querySelectorAll('.modules-item');

            // if(numModulo >=  itemsModules.length){
            //     numModulo = numModulo - 1;
            // }

            var item = itemsModules[numModulo];
            // console.log('numModulo: ' + numModulo + ' itemsModules: ' + (itemsModules.length - 1));

//unidade == null
//console.log(numModulo);

        if(capitulos[numModulo].tipo === 1 && capitulos[numModulo] !== undefined){

            
            btn.classList.add('btn-next-module');
            btn.textContent = 'Próximo módulo';
            btn.removeAttribute('onclick');
            btn.setAttribute("onclick", "btnNextModule()");
            

        }else{
            btn.classList.add('btn-next-module');
            btn.textContent = 'Responder teste';
            btn.removeAttribute('onclick');
            btn.setAttribute("onclick", "btnNextExercise()");
        }
    
        }
            exContent.classList.add('question-complete');

        for (let i = 0; i < capitulos[numb].estrelaExercicio; i++) {

            starsScore[i].classList.add('star-light');
            moduleStars[i].classList.add('star-module-light');

        }


    } else {


        if (capitulos[numb].estrelaExercicio <= 1) {
            capitulos[numb].estrelaExercicio= 1;
        } else {
            capitulos[numb].estrelaExercicio += -1;
        }

        alternativaSelecionada.classList.add('wrong-alt');
        alternativaSelecionada.classList.remove('alternativa--selected');


        btn.classList.add('btn-question-retry');
        btn.textContent = 'Tente novamente';
    }

}










function btnConfirmAlt_Ex(btn, num) {

    var uni = currentUnidade - 1;
    var exContent = btn.parentNode;
    var alternativaSelecionada = exContent.querySelector('.alternativa--selected');
    var starMenuExContainer = menu.querySelector('.menu-exContainer');
    var starsMenuEx = starMenuExContainer.querySelectorAll('.fa-star');

    var starLine = menu.querySelector('.exLine-percent');
    let moduleItemStars = itemExercise.querySelector('.exercicios_info');
    let moduleStars = moduleItemStars.querySelectorAll('.fa-star');





    if (alternativaSelecionada.classList.contains('true')) {

        //console.log( capitulos[numModulo]);
        // result[uni][num] = true;
        capitulos[numModulo].questions[num] = true;
       // console.log(capitulos[numModulo].questions[num]);

        if (!exContent.classList.contains('question-complete-ex') && !exContent.classList.contains('question-complete-dark-ex')) {

            if (exContent.classList.contains('exercicio-test-dark')) {
                exContent.classList.add('question-complete-dark-ex');
            } else {
                exContent.classList.add('question-complete-ex');
            }

            starsMenuEx[num].classList.remove('star-red--ex');
            starsMenuEx[num].classList.add('star-light--ex');
            moduleStars[num].classList.add('star-light--ex');

            startNotify('Você respondeu um exercício!', 'exercicios', 1);
            currentScoreStars += 1;
            currentScoreExercicios += 1;
            updateStars();
            updateExercicios();
        }

        btn.classList.add('btn-question-correct');
        btn.textContent = 'Acertou!';

    } else {



        alternativaSelecionada.classList.add('wrong-alt');
        alternativaSelecionada.classList.remove('alternativa--selected');
        starsMenuEx[num].classList.add('star-red--ex');
        btn.classList.add('btn-question-retry');
        btn.textContent = 'Tente novamente';

        btn.classList.add('btn-question-retry');
        btn.textContent = 'Tente novamente';
    }

    verificaStars(starMenuExContainer);

}


function verificaStars(starMenuExContainer) {

    setTimeout(() => {

        currentUnidade = capitulos[numModulo].unidade;

        //console.log(currentUnidade);
        var starsMenuExComplete = starMenuExContainer.querySelectorAll('.star-light--ex');
        var modalUnidade = content.querySelector('.modal-container');
        var unidades = modulos.querySelectorAll('.unidade');
        var itemsToUnlock = unidades[currentUnidade - 1].querySelectorAll('.module-item--block');

        if (starsMenuExComplete.length == 6 && itemsToUnlock !== null) {

            modalUnidade.style.display = 'flex';

            for (let i = 0; i < itemsToUnlock.length; i++) {

                itemsToUnlock[i].classList.remove('module-item--block');

            }

        } else {

            console.log('no');

        }

    }, 100);

}



function btnNextUnidade() {

    window.scrollTo(0, 0);

    let itemsModules = modulos.querySelectorAll('.modules-item');
    var item = itemsModules[4 * currentUnidade];
    var unidades = modulos.querySelectorAll('.unidade');
    itemModule = itemsModules[4 * currentUnidade];
    numModulo = 4 * currentUnidade + 1;
    let menuProgress = menu.querySelector('.menu-progress');
    let menuModuleName = menu.querySelector('.menu-module-name');
    let menuInfo = menu.querySelector('.menu-info');
    let menuInfoBtn = menu.querySelector('.menu-info-btn');
    var starMenu = menu.querySelector('.menu-progress-percent');
    var starLineMenu = menu.querySelector('.menu-progress-star');
    const moduleName = item.querySelector('.module-name');
    const moduleNum = item.querySelector('.module-num');
    let menuExercises = menu.querySelector('.menu-exercises');



    //console.log(itemsModules[4 * currentUnidade]);

    // ativa ou desativa componentes
    home.classList.add('cover-module');
    home.classList.remove('cover-module--complete');
    home.removeAttribute('style');
    modulos.style.display = "none";
    score.style.display = "none";
    video.style.display = "none";
    content.classList.add('content--opened');
    menuExercises.classList.remove('show-flex');
    menuProgress.classList.remove('hide');


    menuProgress.classList.add('show-flex');
    menuModuleName.classList.add('show-inline');
    menuInfo.classList.add('visible');
    menuInfoBtn.classList.add('visible');

    if (item.classList.contains('.module-item--complete')) {
        home.classList.add('cover-module--complete');
    }


    //Injeta o conteudo do HTML do módulo no componente "Content"
    $.get('contents/Modulo--' + (4 * currentUnidade + 1) + '.html', function (response) {
        $('.content').html(response);
    });

    // Inicia a captura de evento do scroll para atualizar a porcentagem do módulo
    window.addEventListener('scroll', scrollStart);

    // Captura o nome e o número do módulo e coloca no menu
    setTimeout(() => {
        menuModuleName.textContent = moduleNum.textContent + " - " + moduleName.textContent;
    }, 50);


    // Captura o nome e o número do módulo e coloca no título do conteúdo
    setTimeout(() => {
        let contentModuleName = content.querySelector('.module-name');
        let contentModuleNum = content.querySelector('.content-module-num');
        contentModuleNum.textContent = 'Módulo ' + moduleNum.textContent;
        contentModuleName.textContent = moduleName.textContent;
    }, 50);


    setTimeout(() => {
        if (questions[numModulo - 1] === true) {

            var exercicio = content.querySelector('.exercicio-module');
            var btn = exercicio.querySelector('.exercicio-btn-confirm');
            var exStars = exercicio.querySelector('.exercicio-score');
            var starsScore = exStars.querySelectorAll('.exStar');

            starMenu.classList.add('star-light-menu');
            starLineMenu.classList.add('star-line-menu');

            exercicio.classList.add('question-complete');

            btn.classList.add('btn-question-next');
            btn.textContent = 'Acertou!';

            for (let i = 0; i < stars[num - 1]; i++) {

                starsScore[i].classList.add('star-light');

            }

        } else {

            starMenu.classList.remove('star-light-menu');
            starLineMenu.classList.remove('star-line-menu');


        }
    }, 100);



    // inicia o script para criar os botões de salvar item
    createSaveBtns();


}



function btnNextModule() {

    let itemsModules = modulos.querySelectorAll('.modules-item');
    var nextModule = numModulo + 1;
    var item = itemsModules[numModulo];

    

    if (!item.classList.contains('module-item--block') && capitulos[numModulo].tipo === 1) {
        window.scrollTo(0, 0);

        itemModule = itemsModules[numModulo];
        numModulo = numModulo + 1;

    

        

        //console.log("numModulo agora é: " + numModulo);
    
        let menuModuleName = menu.querySelector('.menu-module-name');
    
        var starMenu = menu.querySelector('.menu-progress-percent');
        var starLineMenu = menu.querySelector('.menu-progress-star');
        const moduleName = item.querySelector('.module-name');
        const moduleNum = item.querySelector('.module-num');
        let menuExercises = menu.querySelector('.menu-exercises');
        // let progressBar = menu.querySelector('.menu-progress-bar');
        // let percent = menu.querySelector('.menu-percent-txt');
        let progressContainer = menu.querySelector('.menu-progress-container');
    
    
    
    
    
        starMenu.classList.remove('star-light-menu');
        starLineMenu.classList.remove('star-line-menu');
    
        //coloca/tira classe de conclusão na capa do módulo
        if (item.classList.contains('.module-item--complete')) {
            home.classList.add('cover-module--complete');
        } else {
            home.classList.remove('cover-module--complete');
        }
    
        //Injeta o conteudo do HTML do módulo no componente "Content"
        $.get('contents/Modulo--' + nextModule + '.html', function (response) {
            $('.content').html(response);
        });
    
    
    
    
        var numb = numModulo;
    



        progressContainer.classList.remove('module-end');
        menuModuleName.classList.remove('opacity-1');
    
    
    
        window.removeEventListener('scroll', scrollStart);
    
        setTimeout(() => {
            // Inicia a captura de evento do scroll para atualizar a porcentagem do módulo
            window.addEventListener('scroll', scrollStart);
        }, 100);
    
        // Captura o nome e o número do módulo e coloca no menu
        setTimeout(() => {
          
            menuModuleName.textContent = capitulos[numModulo - 1].numero + " - " + capitulos[numModulo - 1].titulo;
            
            let progressBar = menu.querySelector('.menu-progress-bar');
            let percent = menu.querySelector('.menu-percent-txt');
            percent.textContent = 0 + "%"; 
            progressBar.style.width = 0 + "%";
        }, 300);
    
    
        // Captura o nome e o número do módulo e coloca no título do conteúdo
        setTimeout(() => {
            let contentModuleName = content.querySelector('.module-name');
            let contentModuleNum = content.querySelector('.content-module-num');
            contentModuleNum.textContent = 'Módulo ' + capitulos[numModulo - 1].numero;
            contentModuleName.textContent = capitulos[numModulo - 1].titulo;
        }, 50);
    
    
        

    }else{
        startNotify('Você precisa responder o teste!', 'module', 0);
    } 
    addClass();
    // slideShowId();
}



function btnNextExercise() {
    //console.log(currentUnidade);

    window.scrollTo(0, 0);
    let menuExercises = menu.querySelector('.menu-exercises');
    let menuProgress = menu.querySelector('.menu-progress');
    let menuModuleName = menu.querySelector('.menu-module-name');
    let menuInfo = menu.querySelector('.menu-info');
    let itemExModules = modulos.querySelectorAll('.modules-item-exercicios');

        //Injeta o conteudo do HTML de exercicios no componente "Content"
        $.get('contents/Exercicios--UNI' + capitulos[numModulo].unidade + '.html', function (response) {
            $('.content').html(response);
          });

          home.classList.remove('cover-module');
          home.style.display = 'none';
          menuExercises.classList.add('show-flex');
          menuProgress.classList.remove('show-flex');
          menuModuleName.classList.remove('show-inline');
          menuInfo.classList.remove('show-flex');

          itemExercise = itemExModules[currentUnidade - 1];


          setTimeout(() => {
      

            // for (let i = 0; i < result[currentUnidade - 1].length; i++) {
      
            //   var starMenuExContainer = menu.querySelector('.menu-exContainer');
            //   var starsMenuEx = starMenuExContainer.querySelectorAll('.fa-star');
      

            //   if (result[currentUnidade - 1][i] == true) {
      
            //     var exerciciosTest = content.querySelectorAll('.exercicio-test');
      
      
            //     if(exerciciosTest[i].classList.contains('exercicio-test-dark')){
            //       exerciciosTest[i].classList.add('question-complete-dark-ex');
            //   }else{
            //     exerciciosTest[i].classList.add('question-complete-ex');
            //   }
      
      
            //     starsMenuEx[i].classList.add('star-light--ex');
      
            //   }else{
            //     starsMenuEx[i].classList.remove('star-light--ex');
            //   }
            // }
          }, 50);

          setTimeout(() => {

            

            for (let i = 0; i < capitulos[numModulo].questions.length; i++) {

                var starMenuExContainer = menu.querySelector('.menu-exContainer');
                var starsMenuEx = starMenuExContainer.querySelectorAll('.fa-star');

                //console.log(starsMenuEx);
                if (capitulos[numModulo].questions[i] == true) {

                    var exerciciosTest = content.querySelectorAll('.exercicio-test');


                    if (exerciciosTest[i].classList.contains('exercicio-test-dark')) {
                        exerciciosTest[i].classList.add('question-complete-dark-ex');
                    } else {
                        exerciciosTest[i].classList.add('question-complete-ex');
                    }


                    starsMenuEx[i].classList.add('star-light--ex');

                } else {
                    starsMenuEx[i].classList.remove('star-light--ex');
                }
            }
        }, 200);
      
}