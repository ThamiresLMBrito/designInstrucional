start_components();
populaArray();



let capitulos = [{
        id: 0,
        unidade: 1,
        tipo: 1,
        titulo: `Educação Financeira`,
        descricao: `
        É fundamental que a escola colabore com a Educação Financeira de seus alunos para evitar formar cidadãos que não se relacionam de forma saudável com o dinheiro.
    `,
        numero: 1,
        estrelaExercicio: 5,
        completed: false,
        opened: false,
        progresso: 0,
        height: 0,
        scrollTop: 0,
        scrolled: 0
    },
    {
        id: 1,
        unidade: 1,
        tipo: 1,
        titulo: `Aprendendo a lidar com o dinheiro`,
        descricao: `
        Uma vida financeira saudável, sem dívidas, sem “buracos” no orçamento e com as contas equilibradas, é o sonho (e o desafio) de muitas famílias.`,
        numero: 2,
        estrelaExercicio: 5,
        completed: false,
        opened: false,
        progresso: 0,
        height: 0,
        scrollTop: 0,
        scrolled: 0
    },
    {
        id: 2,
        unidade: 1,
        tipo: 2,
        titulo: `Teste de aprendizado`,
        descricao: `Agora vamos exercitar todo o aprendizado desta unidade.`,
        numero: 1,
        estrelaExercicio: 6,
        completed: false,
        questions: [
            false,
            false,
            false,
            false,
            false,
            false
        ]



    },
]


let disciplina = {

    totalCapitulos: 0,
    totalExercicios: 0,
    totalEstrelas: 0

}







// Variáveis Globais
let progress = [];
let height = [];
let scrollTops = [];
let scrolled = [];
let stars = [];
let questions = [];
var result = [];



var numModulo = 0;
var itemModule = '';
var itemExercise = '';
var totalStars = 0;
var currentScoreStars = 0;
var currentUnidade = 0;
var totalExercicios = 0;
var currentScoreExercicios = 0;

// seletores globais
let home = document.querySelector('.home');
let modulos = document.querySelector('.modules');
let content = document.querySelector('.content');
let video = document.querySelector('.video');
let score = document.querySelector('.score');
let menu = document.querySelector('.menu');
let tools = document.querySelector('.tools');
let save = document.querySelector('.save');




function populaArray() {

    // Insere o valor inicial em todos os arrays e acordo com a quantidade de módulos
    setTimeout(() => {
        let itemsModules = modulos.querySelectorAll('.modules-item');
        var num = 0;
        var numStars = 5;
        var checkQuestions = false;

        for (let i = 0; i < itemsModules.length; i++) {
            progress.push(num);
            stars.push(numStars);
            height.push(num);
            scrollTops.push(num);
            scrolled.push(num);
            questions.push(checkQuestions);
        }

    }, 100);

    setTimeout(() => {

        var unidades = document.querySelectorAll('.unidade');
        var index = 0;
        let resultadoTeste = new Array();


        for (var i = 0; i < unidades.length; i++) {
            resultadoTeste[i] = new Array();
        }



        result = resultadoTeste;


    }, 100);


    setTimeout(() => {

        let unidades = modulos.querySelectorAll('.unidade');


        for (let index = 0; index < unidades.length; index++) {
            for (let i = 0; i < 6; i++) {

                result[index].push(false);

            }

        }


    }, 250);



}
 
function start_components() {

  // Injeta o html do componente "Home".
  $.get('components/home/home.html', function (response) {
    $('.home').html(response);
  });

  // Injeta o html do componente "Módulos".
  $.get('components/modulos/modules.html', function (response) {
    $('.modules').html(response);
  });

  // Injeta o html do componente "Menu".
  $.get('components/menu/menu.html', function (response) {
    $('.menu').html(response);
  });

  // Injeta o html do componente "Score".
  $.get('components/score/score.html', function (response) {
    $('.score').html(response);
  });

  // Injeta o html do componente "Tools".
  $.get('components/ferramentas/tools.html', function (response) {
    $('.tools').html(response);
  });

  // Injeta o html do componente "Video".
  $.get('components/video/video.html', function (response) {
    $('.video').html(response);
  });

  // Injeta o html do componente "notas".
  $.get('components/notes/notes.html', function (response) {
  $('.notes').html(response);
  });


  // Injeta o html do componente "save itens".
  $.get('components/save/save.html', function (response) {
  $('.save').html(response);
   });

     // Injeta o html do componente "config".
  $.get('components/configStart/config.html', function (response) {
    $('.config').html(response);
     });

}



 
function btnChangeMode(btn){
    btn.classList.toggle('mode--active');

    if(btn.classList.contains('mode--active')){
        document.documentElement.setAttribute('start-theme', 'dark');
    }else{
        document.documentElement.removeAttribute('start-theme');
    }
    
}


function changeTextSize(btn, size) {

    btns = btn.parentNode.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('text--active');
    }
    
    btn.classList.add('text--active');

    if(size == 1){
        document.documentElement.setAttribute('text-size', '1');
    }
    else if(size == 2){
        document.documentElement.setAttribute('text-size', '2');
    }else{
        document.documentElement.removeAttribute('text-size');
    }
}
 
//Função para zoom das imgs
function addClass(){
        setTimeout(() => {    
            let figura = document.getElementsByTagName("FIGURE");
           

            for (let i = 0; i < figura.length; i++) {
                figura[i].setAttribute("onclick", "zoomImg(this)"); 
                
                let span = document.createElement("SPAN");
                figura[i].appendChild(span);
                span.setAttribute("onclick", "closeZoom(this)");
            
                span.textContent = 'x';
            }

        }, 300);
}


function zoomImg(img){
    let body = document.querySelector("BODY");
    img.classList.add('imgZoom');
    img.removeAttribute("onclick");

    body.style.overflowY="hidden";

    
}

function closeZoom(btn) {
    let figure = document.querySelector(".imgZoom");
    let body = document.querySelector("BODY");
    
    figure.classList.remove('imgZoom');
    body.style.overflowY="hidden";

    body.style.overflowY="auto";
    addClass();    
}

//Fim da Função para zoom das imgs



// Fim Função do BTN expansível 

// Função do BTN de Informação
function btnInfo(btn) {
    let txtBox = btn.querySelector(".btn-txtbox");
    let iconBox = btn.querySelector(".btn-icon")

    txtBox.classList.toggle("btn-txtbox--active")
    iconBox.classList.toggle("btn-icon--active")
} 

function supTeste() {
    //console.log('Sup!');
    
}




 
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
 
// const { set } = require("grunt");

function openTools(tools){

let toolsMain = tools.parentNode;
let btnsTools = toolsMain.querySelectorAll('.tools-btn');
//console.log(btnsTools);

for (let i = 0; i < btnsTools.length; i++) {
    btnsTools[i].classList.toggle('openTools')
}

tools.classList.toggle('turnBtnTools');

}

function openNote(){
    
    let btn = document.querySelector('.notes');
    let body = document.querySelector("BODY");
    
    btn.classList.toggle('show-flex');
    //body.style.overflowY="hidden";
     btn = document.querySelector('.notes');
    if (btn.classList.contains('show-flex')){
        body.style.overflowY="hidden";
    }else{
        body.style.overflowY="auto";
    }

   // btn.style.transition ="display 0.2s" 

}

function btnCloseNote(){
    let boxNotes = document.querySelector('.notes');
    let body = document.querySelector("BODY");

    boxNotes.classList.toggle('show-flex');
    body.style.overflowY="auto";
}



function openSave(){
    
    save.querySelector('.save-container').scrollTo(0, 0);
    let boxSave = document.querySelector('.save');
    var btnBack = menu.querySelector('.menu_btn_back');
    var progress = menu.querySelector('.menu-progress');
    var info = menu.querySelector('.menu-info');
    let menuProgress = menu.querySelector('.menu-progress');
    let menuExercises = menu.querySelector('.menu-exercises');
    let exCover = content.querySelector('.exCover');
    let body = document.querySelector("BODY");

   

    // if(exCover !== null){
    //     menuProgress.classList.remove('show-flex');
    //     console.log('sim');
    // }
    
    
    boxSave.classList.toggle('show-flex');
    // progress.classList.remove('show-flex');
    // info.classList.remove('visible')

   //document.querySelector('body').classList.toggle('flow-none');
   
    if(boxSave.classList.contains('show-flex')){
        btnBack.setAttribute('onclick', "backOrClose('save')");
        body.style.overflowY="hidden";
        
    }else{
        btnBack.setAttribute('onclick', 'backToHome()');
        body.style.overflowY="auto";
    }


   


   
}


function btnCloseSave(){
    let boxSave = document.querySelector('.save');
    var progress = menu.querySelector('.menu-progress');
    var info = menu.querySelector('.menu-info');

    boxSave.classList.toggle('visible');
    progress.classList.add('show-flex');
    info.classList.add('show-flex')
}


function openConfig(){
    
    let config = document.querySelector('.config');
    
    config.classList.toggle('show-flex');
   

}
 
function homeScrollDown() {
    window.scrollTo(0, 650);
}
 
function backToHome(btn) {

    let menuProgress = menu.querySelector('.menu-progress');
    let menuModuleName = menu.querySelector('.menu-module-name');
    let menuInfo = menu.querySelector('.menu-info');
    let menuInfoBtn = menu.querySelector('.menu-info-btn');
    let menuExercises = menu.querySelector('.menu-exercises');
    //let menuLogo = menu.querySelector('.menu-logo-home');

    if (btn == 'exercicios') {
        var modalUnidade = content.querySelector('.modal-container');
        modalUnidade.style.display = 'none';

    }


    // ativa ou desativa componentes
    content.classList.remove('content--opened');
    home.classList.remove('cover-module');
    home.style.display = "flex";
    modulos.style.display = "flex";
    score.style.display = "flex";
    video.style.display = "flex";

    menuProgress.classList.remove('show-flex');
    menuModuleName.classList.remove('show-inline');
    menuModuleName.classList.remove('opacity-1');
    menuInfo.classList.remove('visible');
    menuInfo.classList.remove('show-flex');
    menuInfoBtn.classList.remove('visible');
    menuInfoBtn.classList.remove('menu-info-btn--active');
    menuExercises.classList.remove('show-flex');
    home.classList.remove('cover-module--complete');
    //menuLogo.classList.remove('hide');

    // Para o evento de captura do scroll
    window.removeEventListener('scroll', scrollStart);


    // direciona o scroll para a seção de módulos
    window.scrollTo(0, 1300);

    // verifica e atualiza a quantidade de módulos completos
    moduleComplete();




}

function backOrClose(type) {

    var btnBack = menu.querySelector('.menu_btn_back');
    let menuProgress = menu.querySelector('.menu-progress');
    let menuModuleName = menu.querySelector('.menu-module-name');
    let menuInfo = menu.querySelector('.menu-info');
    let menuInfoBtn = menu.querySelector('.menu-info-btn');
    let menuExercises = menu.querySelector('.menu-exercises');
    let body = document.querySelector("BODY");

    if (type == 'save') {
        document.querySelector('body').classList.remove('flow-none');
        save.classList.remove('show-flex');
        btnBack.setAttribute('onclick', 'backToHome()');
        body.style.overflowY="auto";

        // menuProgress.classList.add('show-flex');
        // menuModuleName.classList.add('show-inline');
        // menuModuleName.classList.add('opacity-1');
        // menuInfo.classList.add('visible');
        // menuInfo.classList.add('show-flex');
        // menuInfoBtn.classList.add('visible');
        // menuInfoBtn.classList.add('menu-info-btn--active');
        // menuExercises.classList.add('show-flex');



    }



}




function scrollStart() {

    var item = itemModule;
    var numb = numModulo - 1;
    var lastScrollTop = capitulos[numb].scrollTop; //registra o último dado de scroll de acordo com o módulo


    setTimeout(() => {
        if (capitulos[numb].opened == false) {
            capitulos[numb].scrolled = 0;
        } else {
            capitulos[numb].opened = true;
        }
    }, 300);

    let progressBar = menu.querySelector('.menu-progress-bar');
    let moduleProgressBar = item.querySelector('.module-progress-bar');
    let percent = menu.querySelector('.menu-percent-txt');
    let percentModule = item.querySelector('.percent-module');
    let progressContainer = menu.querySelector('.menu-progress-container');


    // atualiza o número da porcentagem do módulo no menu
    percent.textContent = capitulos[numb].progresso + "%";
    progressBar.style.width = Math.round(capitulos[numb].progresso) + "%";


    capitulos[numb].scrollTop = document.documentElement.pageYOffset || document.documentElement.scrollTop; // captura o número do scroll da página
    capitulos[numb].height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // captura a altura de cada conteúdo de módulo
    capitulos[numb].scrolled = (capitulos[numb].scrollTop / (capitulos[numb].height - 500)) * 100; // divide altura com o scroll e transforma em porcentagem

    if (capitulos[numb].scrolled > 100) {
        capitulos[numb].scrolled = 100;
    }

    // if (capitulos[numb].scrolled == infinity) {
    //     capitulos[numb].scrolled = 0;
    // }

    // atualiza os dados de porcentagem apenas se o scroll for para baixo e se o conteúdo aberto
    if (capitulos[numb].scrollTop > lastScrollTop && capitulos[numb].scrolled > capitulos[numb].progresso && content.classList.contains('content--opened')) {

        capitulos[numb].progresso = Math.round(capitulos[numb].scrolled);
        progressBar.style.width = Math.round(capitulos[numb].scrolled) + "%";
        percent.textContent = Math.round(capitulos[numb].scrolled) + "%";
        moduleProgressBar.style.width = Math.round(capitulos[numb].progresso) + "%";
        percentModule.textContent = capitulos[numb].progresso + "%";

    } else {
        capitulos[numb].progresso = capitulos[numb].progresso;
    }

    // console.log(progress);

       // -------------- Apacere / desaparece o nome do módulo no menu
       let menuModuleName = menu.querySelector('.menu-module-name');
        if (capitulos[numb].scrollTop < 250) {
            menuModuleName.classList.remove('opacity-1');
        } else {
            menuModuleName.classList.add('opacity-1');
        }

    // -------------- o que acontece quando a porcentagem chega em 100% 



    if (capitulos[numb].progresso == 100) {



        // window.removeEventListener('scroll', scrollStart);
        

        // adiciona 1 estrela quando finaliza um módulo
        if (!item.classList.contains('module-item--complete')) {
            currentScoreStars += 1;
            startNotify('Você concluiu um módulo!', 'module', 1);

            var starMenu = menu.querySelector('.menu-progress-percent');
            var starLineMenu = menu.querySelector('.menu-progress-star');
            var starModule = item.querySelector('.star-module');

            starMenu.classList.add('star-light-menu');
            starLineMenu.classList.add('star-line-menu');

            capitulos[numb].completed = true;
        }

        // adiciona classe de módulo completo e atualiza número de módulos
        progressContainer.classList.add('module-end');
        item.classList.add('module-item--complete');
        starModule.classList.add('star-light-module');
        home.classList.add('cover-module--complete');
        moduleComplete();

    } else {
        progressContainer.classList.remove('module-end');
    }






}



function startNotify(text, type, stars) {


    let notifyContainer = menu.querySelector('.notify-container');

    let notification = document.createElement("DIV");
    let icon = document.createElement("DIV");
    let contentBox = document.createElement("DIV");
    let star = document.createElement("SPAN");
    let starNumb = document.createElement("P");
    let title = document.createElement("DIV");
    let txt = document.createElement("P");

    notifyContainer.appendChild(notification);
    notification.classList.add('notify-cation');

    notification.appendChild(icon);
    icon.classList.add('notify-icon');

    notification.appendChild(contentBox);
    contentBox.classList.add('notify-text');

    contentBox.appendChild(title);
    title.classList.add('notify-title');

    if (stars > 0) {
        title.appendChild(star);
        star.classList.add('inline-icon-star');

        title.appendChild(starNumb);
        starNumb.classList.add('star-numb');
    }

    contentBox.appendChild(txt);

    starNumb.textContent = "+" + stars;
    txt.textContent = text;


    if (type === 'module') {
        icon.classList.add('icon-module');
    } else if (type === 'exercicios') {
        icon.classList.add('icon-exercicios');
    } else if (type === 'note') {
        icon.classList.add('icon-notes');
    }


    setTimeout(() => {

        notification.classList.add('notify-back');

        setTimeout(() => {
            notification.remove();
        }, 1000);

    }, 3000);

}


function toggleMenuInfo(btn) {

    let menuInfo = menu.querySelector('.menu-info');
    menuInfo.classList.toggle('show-flex');

    btn.classList.toggle('menu-info-btn--active');
}
 
window.onload = function() {
    setTimeout(() => {
        ConstCapitulos();
    }, 500);
};



function ConstCapitulos() {

    var unidade = document.querySelector(".unidade");


    // -------------------- Cria container do módulo -------------------------------
    for (let i = 0; i < capitulos.length; i++) {

        if (capitulos[i].tipo === 1) { // ----- Criar módulos de conteúdo

            var containerCapitulo = document.createElement('DIV');
            containerCapitulo.classList.add('modules-item');
            containerCapitulo.setAttribute('onclick', 'modules(this,' + (capitulos[i].id + 1) + ")")
            unidade.appendChild(containerCapitulo);

            // -------------------------------- Cria badge ------------------------------
            var badgeCapitulo = document.createElement('DIV');
            var tituloBadge = document.createElement('H1');
            badgeCapitulo.classList.add('modules-item_badge');
            badgeCapitulo.innerHTML = `<p>Módulo</p>`;
            containerCapitulo.appendChild(badgeCapitulo);
            badgeCapitulo.appendChild(tituloBadge);
            tituloBadge.textContent = capitulos[i].numero;

            // ----------------------- Cria área de título e descrição -------------------------
            var contentCapitulo = document.createElement('DIV');
            var tituloCapitulo = document.createElement('H2');
            var descricaoCapitulo = document.createElement('P');

            contentCapitulo.classList.add('modules-item_content');
            containerCapitulo.appendChild(contentCapitulo);
            contentCapitulo.appendChild(tituloCapitulo);
            contentCapitulo.appendChild(descricaoCapitulo);

            tituloCapitulo.innerHTML = capitulos[i].titulo;
            descricaoCapitulo.innerHTML = capitulos[i].descricao;

            // ---------------------- Cria área de progresso e estrelas do exercicio ----------------------------------

            var infoCapitulo = document.createElement('DIV');
            var containerProgress = document.createElement('DIV');
            var progress = document.createElement('DIV');
            var progressBar = document.createElement('DIV');
            var percent = document.createElement('SPAN');
            var progName = document.createElement('P');
            progName.textContent = "Progresso:";
            var testeName = document.createElement('P');
            testeName.textContent = "Exercício:";
            var containerStar = document.createElement('DIV');
            var starRow = document.createElement('DIV');



            infoCapitulo.classList.add('modules-item_info');
            containerProgress.classList.add('item_info_progress');
            progress.classList.add('info_progress');
            progressBar.classList.add('module-progress-bar');
            percent.classList.add('percent-module');
            percent.textContent = capitulos[i].progresso + "%";
            containerStar.classList.add('item_info_stars');
            starRow.classList.add('info_stars');

            var star = document.createElement('I');
            star.classList.add('fas', 'fa-star', 'star-module');
            


            containerCapitulo.appendChild(infoCapitulo);
            containerProgress.appendChild(progName);
            infoCapitulo.appendChild(containerProgress);
            containerProgress.appendChild(progress);
            containerStar.appendChild(testeName);
            progress.appendChild(progressBar);
            progress.appendChild(percent);
            progress.appendChild(star);
            infoCapitulo.appendChild(containerStar);
            containerStar.appendChild(starRow);


            progressBar.style.width = capitulos[i].progresso + "%";



            var numStar = capitulos[i].estrelaExercicio;

            // ---------------- Cria estrelas ----------------------------

            for (let i = 0; i < numStar; i++) {
                var star = document.createElement('I');
                star.classList.add('fas', 'fa-star');
                starRow.appendChild(star);
            }
        }


        // /\|/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/


        if (capitulos[i].tipo === 2) { // ----- Criar módulos de conteúdo


            var containerCapitulo = document.createElement('DIV');
            containerCapitulo.classList.add('modules-item-exercicios');
            containerCapitulo.setAttribute('onclick', 'exModules(this,' + (capitulos[i].id) + ")")
            unidade.appendChild(containerCapitulo);


            // -------------------------------- Cria badge ------------------------------
            var badgeCapitulo = document.createElement('DIV');
            var iconBadge = document.createElement('i');
            iconBadge.classList.add('fas', 'fa-puzzle-piece');
            badgeCapitulo.classList.add('modules-exercicios_badge');
            containerCapitulo.appendChild(badgeCapitulo);
            badgeCapitulo.appendChild(iconBadge);


            // ----------------------- Cria área de título e descrição -------------------------
            var contentCapitulo = document.createElement('DIV');
            var tituloCapitulo = document.createElement('H2');
            var descricaoCapitulo = document.createElement('P');

            contentCapitulo.classList.add('exercicios_content');
            containerCapitulo.appendChild(contentCapitulo);
            contentCapitulo.appendChild(tituloCapitulo);
            contentCapitulo.appendChild(descricaoCapitulo);

            tituloCapitulo.innerHTML = capitulos[i].titulo;
            descricaoCapitulo.innerHTML = capitulos[i].descricao;

            // ---------------------- Cria área de progresso e estrelas do exercicio ----------------------------------

            var infoCapitulo = document.createElement('DIV');
            var containerProgress = document.createElement('DIV');
            // var progress = document.createElement('DIV');
            // var progressBar = document.createElement('DIV');
            // var percent = document.createElement('SPAN');
            var progName = document.createElement('P');
            progName.textContent = "Resultado:";
            // var testeName = document.createElement('P');
            // testeName.textContent = "Exercício:";
            // var containerStar = document.createElement('DIV');
            // var starRow = document.createElement('DIV');



            infoCapitulo.classList.add('exercicios_info');
            containerProgress.classList.add('exercicios_info-resultado');
            // progress.classList.add('info_progress');
            // progressBar.classList.add('module-progress-bar');
            // percent.classList.add('percent-module');
            // percent.textContent = capitulos[i].progresso + "%";
            // containerStar.classList.add('item_info_stars');
            // starRow.classList.add('info_stars');


            containerCapitulo.appendChild(infoCapitulo);
            infoCapitulo.appendChild(progName);
            infoCapitulo.appendChild(containerProgress);
            // containerProgress.appendChild(progress);
            // containerStar.appendChild(testeName);
            // progress.appendChild(progressBar);
            // progress.appendChild(percent);
            // infoCapitulo.appendChild(containerStar);
            // containerStar.appendChild(starRow);



            // ---------------- Cria estrelas ----------------------------

            for (let i = 0; i < 6; i++) {
                var star = document.createElement('I');
                star.classList.add('fas', 'fa-star');
                containerProgress.appendChild(star);
            }

        }
    }

    moduleComplete();
    updateStars();
    updateExercicios();
}



















function modules(item, num) {


//console.log(numModulo);







    //window.scrollTo(0, scrollTops[num - 1]); // Faz ir para o último registro de scroll (inicia de onde parou)
    numModulo = num; // parâmetro de numero do modulo
    itemModule = item; // objeto do modulo




    if (!item.classList.contains('module-item--block')) { // bloqueia o módulo se tiver a classe, caso contrário, continua o codigo...
        window.scrollTo(0, 0);
        let menuProgress = menu.querySelector('.menu-progress');
        let menuModuleName = menu.querySelector('.menu-module-name');
        let menuInfo = menu.querySelector('.menu-info');
        let menuInfoBtn = menu.querySelector('.menu-info-btn');
        var starMenu = menu.querySelector('.menu-progress-percent');
        var starLineMenu = menu.querySelector('.menu-progress-star');
        // let menuLogo = menu.querySelector('.menu-logo-home');
       let videoLocal = menu.parentNode.querySelector(".video-local");
    //    let videoAzure = menu.parentNode.querySelector('.vjs-tech');

       

        let moduleName = item.querySelector('.module-name');
        let moduleNum = item.querySelector('.module-num');

        if( capitulos[num - 1].completed == true){

            var starMenu = menu.querySelector('.menu-progress-percent');
            var starLineMenu = menu.querySelector('.menu-progress-star');

            starMenu.classList.add('star-light-menu');
            starLineMenu.classList.add('star-line-menu');


            

           
        }else{
            var starMenu = menu.querySelector('.menu-progress-percent');
            var starLineMenu = menu.querySelector('.menu-progress-star');

            starMenu.classList.remove('star-light-menu');
            starLineMenu.classList.remove('star-line-menu');
        }



        // ativa ou desativa componentes
        home.classList.add('cover-module');
        modulos.style.display = "none";
        score.style.display = "none";
        video.style.display = "none";
        content.classList.add('content--opened');

        menuProgress.classList.remove('hide');
        menuProgress.classList.add('show-flex');
        menuModuleName.classList.add('show-inline');
        menuModuleName.classList.add('opacity-0');
        menuInfo.classList.add('visible');
        menuInfoBtn.classList.add('visible');
        // menuLogo.classList.add('hide');
        videoLocal.pause();
        // videoAzure.pause();

        if (item.classList.contains('.module-item--complete')) {
            home.classList.add('cover-module--complete');
        }


        //Injeta o conteudo do HTML do módulo no componente "Content"
        $.get('contents/Modulo--' + num + '.html', function(response) {
            $('.content').html(response);
        });


        setTimeout(() => {

            

                let contentModuleName = content.querySelector('.module-name');
                let contentModuleNum = content.querySelector('.content-module-num');
                contentModuleNum.textContent = 'Módulo ' + capitulos[num - 1].numero;
                contentModuleName.textContent = capitulos[num - 1].titulo;
    
                // nome do capitulo no menu
                menuModuleName.textContent = capitulos[num - 1].numero + " - " + capitulos[num - 1].titulo;
            

            loadTextDQuestion();

        }, 300);

        if (capitulos[num - 1].opened == false) {
            capitulos[num - 1].scrolled = 0;

        }
        // Inicia a captura de evento do scroll para atualizar a porcentagem do módulo
 
        window.addEventListener('scroll', scrollStart);
        



        // Captura o nome e o número do módulo e coloca no menu
        // setTimeout(() => {
        //   menuModuleName.textContent = moduleNum.textContent + " - " + moduleName.textContent;
        // }, 10);


        // Captura o nome e o número do módulo e coloca no título do conteúdo
        setTimeout(() => {
            // const moduleName = item.querySelector('.module-name');
            // const moduleNum = item.querySelector('.module-num');
            // let contentModuleName = content.querySelector('.module-name');
            // let contentModuleNum = content.querySelector('.content-module-num');
            // contentModuleNum.textContent = 'Capítulo ' + moduleNum.textContent;
            // contentModuleName.textContent = moduleName.textContent;


            // Função para texto Sup 
            SUP = content.querySelectorAll("SUP");

            SUP.forEach(element => {
                element.addEventListener('click', function() {
                    let supText = element.getAttribute("data-content");

                   // console.log(supText);


                    let supDiv = document.createElement("DIV");
                    supDiv.classList.add("style-sup");
                    element.appendChild(supDiv);

                    supDiv.textContent = supText;


                });
            });



        }, 100);


        setTimeout(() => {
            if (questions[num - 1] === true) {

                var exercicio = content.querySelector('.exercicio-module');
                var btn = exercicio.querySelector('.exercicio-btn-confirm');
                var exStars = exercicio.querySelector('.exercicio-score');
                var starsScore = exStars.querySelectorAll('.exStar');

                starMenu.classList.add('star-light-menu');
                starLineMenu.classList.add('star-line-menu');

                exercicio.classList.add('question-complete');


                btn.classList.add('btn-question-correct');
                btn.textContent = 'Acertou!';

                for (let i = 0; i < stars[num - 1]; i++) {

                    starsScore[i].classList.add('star-light');

                }

            } 
        }, 100);

    }

    // inicia o script para criar os botões de salvar item
    createSaveBtns();
    addClass();
    // slideArray();

    //slideShowId();


}



function exModules(item, num) {

    itemExercise = item;

    numModulo = num;

    //console.log(numModulo);


    if (!item.classList.contains('module-item--block')) { // bloqueia o módulo se tiver a classe, caso contrário, continua o codigo...
        let menuExercises = menu.querySelector('.menu-exercises');
        var starMenuExContainer = menu.querySelector('.menu-exContainer');
        var starsMenuEx = starMenuExContainer.querySelectorAll('.star-light--ex');
        let menuInfo = menu.querySelector('.menu-info');
        // let menuLogo = menu.querySelector('.menu-logo-home');
       let videoLocal = menu.parentNode.querySelector(".video-local");
    //    let videoAzure = menu.parentNode.querySelector('.vjs-tech');


        // console.log(starsMenuEx);
        // ativa ou desativa componentes
        home.style.display = "none";
        modulos.style.display = "none";
        score.style.display = "none";
        video.style.display = "none";
        content.classList.add('content--opened');
        menuExercises.classList.add('show-flex');
        menuInfo.classList.add('visible');
        // menuLogo.classList.add("hide");
        videoLocal.pause();
        // videoAzure.pause();

        // for (let i = 0; i < starsMenuEx.length; i++) {
        //   exerciciosTest[i].classList.add('question-complete-ex');
        // }


        currentUnidade = num;

        //Injeta o conteudo do HTML de exercicios no componente "Content"
        $.get('contents/Exercicios--UNI' + capitulos[numModulo].unidade + '.html', function(response) {
            $('.content').html(response);
        });




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



        window.scrollTo(0, 0);
    }
}
 
// mudar cor da nota
function changeNoteColor(btn) {

    var notePallet = btn.parentNode;
    var noteTools = notePallet.parentNode;
    var note = noteTools.parentNode;

    var btnColors = notePallet.querySelectorAll('BUTTON');

    if (btn.classList.contains('btn-note-yellow')) {
        clearColors();
        btn.classList.add('btn-color--selected');

    } else if (btn.classList.contains('btn-note-blue')) {
        clearColors();
        note.classList.add('note-blue');
        btn.classList.add('btn-color--selected');

    } else if (btn.classList.contains('btn-note-green')) {
        clearColors();
        note.classList.add('note-green');
        btn.classList.add('btn-color--selected');

    } else if (btn.classList.contains('btn-note-red')) {
        clearColors();
        note.classList.add('note-red');
        btn.classList.add('btn-color--selected');
    }


    function clearColors() {
        note.classList.remove('note-yellow');
        note.classList.remove('note-blue');
        note.classList.remove('note-red');
        note.classList.remove('note-green');

        for (let i = 0; i < btnColors.length; i++) {
            btnColors[i].classList.remove('btn-color--selected');

        }
    }
}


function palletControl(btn) {
    var noteTools = btn.parentNode;
    var pallet1 = noteTools.querySelector('.note-color-pallet');
    var pallet2 = noteTools.parentNode.querySelector('.note-color-pallet');

    var btnColor = noteTools.querySelector('.note-color');
    var btnRemove = noteTools.querySelector('.note-remove');

    var btnColor2 = noteTools.parentNode.querySelector('.note-color');
    var btnRemove2 = noteTools.parentNode.querySelector('.note-remove');


    if (btn.classList.contains('note-color')) {
        pallet1.classList.add('show-flex');
        btnColor.style.display = "none";
        btnRemove.style.display = "none";

    } else if (btn.classList.contains('pallet-ok')) {
        pallet2.classList.remove('show-flex');
        btnColor2.style.display = "flex";
        btnRemove2.style.display = "flex";
    }
}

// remove nota criada
function noteRemove(btn) {

    var noteTools = btn.parentNode;
    var noteTools2 = noteTools.parentNode;
    var note = noteTools2.parentNode;
    var noteQuest = noteTools.querySelector('.note-remove-quest');

    var btnColor = noteTools.parentNode.querySelector('.note-color');
    var btnRemove = noteTools.parentNode.querySelector('.note-remove');



    if (btn.classList.contains('note-remove')) {

        noteQuest.classList.add('show-flex')
        btnColor.style.display = "none";
        btnRemove.style.display = "none";
    } else if (btn.classList.contains('note-btn-remove')) {

        note.remove();
    } else if (btn.classList.contains('note-cancel-remove')) {

        noteTools.classList.remove('show-flex')
        btnColor.style.display = "flex";
        btnRemove.style.display = "flex";

    }


}

//adicionar nota no bloco ::>

function criarNovaNota() {
    let noteAdd = document.querySelector(".note-add");
    let input = document.querySelector(".input-note");
    let textBox = input.value;

    if (noteAdd.classList.contains("note-add-text") && textBox != "") {

        //cria div e atribui classes 
        let noteli = document.createElement("li");
        noteli.classList.add("new-note");
        let noteDivTolls = document.createElement("div");
        noteDivTolls.classList.add("note-tools");
        let noteDivInfo = document.createElement("div");
        noteDivInfo.classList.add("note-info");
        let noteDivColorPallet = document.createElement("div");
        noteDivColorPallet.classList.add("note-color-pallet");
        let noteBtnColorY = document.createElement("button");
        noteBtnColorY.classList.add("btn-note-yellow");
        noteBtnColorY.setAttribute("onclick", "changeNoteColor(this)")
        let noteBtnColorR = document.createElement("button");
        noteBtnColorR.classList.add("btn-note-red");
        noteBtnColorR.setAttribute("onclick", "changeNoteColor(this)")
        let noteBtnColorG = document.createElement("button");
        noteBtnColorG.classList.add("btn-note-green");
        noteBtnColorG.setAttribute("onclick", "changeNoteColor(this)")
        let noteBtnColorB = document.createElement("button");
        noteBtnColorB.classList.add("btn-note-blue");
        noteBtnColorB.setAttribute("onclick", "changeNoteColor(this)")
        let noteBtnColorOk = document.createElement("div");
        noteBtnColorOk.classList.add("pallet-ok");
        noteBtnColorOk.setAttribute("onclick", "palletControl(this)")
        let noteDivColor = document.createElement("div");
        noteDivColor.classList.add("note-color");
        noteDivColor.setAttribute("onclick", "palletControl(this)")
        let noteDivRemoveQuest = document.createElement("div");
        noteDivRemoveQuest.classList.add("note-remove-quest");
        let noteDivRemoveQuestP = document.createElement("p");
        noteDivRemoveQuestP.textContent = "Tem certeza que deseja remover?"
        let noteDivRemoveQuestbtn = document.createElement("div");
        noteDivRemoveQuestbtn.classList.add("note-btn-remove");
        noteDivRemoveQuestbtn.setAttribute("onclick", "noteRemove(this)")
        let noteDivRemoveQuestCancel = document.createElement("div");
        noteDivRemoveQuestCancel.classList.add("note-cancel-remove");
        noteDivRemoveQuestCancel.setAttribute("onclick", "noteRemove(this)")
        let noteDivRemove = document.createElement("div");
        noteDivRemove.classList.add("note-remove");
        noteDivRemove.setAttribute("onclick", "noteRemove(this)")
        let textoNota = document.createElement("div");
        textoNota.classList.add("texto-note");


        // noteli.textContent= textBox;
        textoNota.textContent = textBox;

        // organiza div dentro de outras divs
        noteli.appendChild(noteDivTolls);
        noteli.appendChild(textoNota);
        noteDivTolls.appendChild(noteDivInfo);
        noteDivTolls.appendChild(noteDivColorPallet);
        noteDivColorPallet.appendChild(noteBtnColorY);
        noteDivColorPallet.appendChild(noteBtnColorR);
        noteDivColorPallet.appendChild(noteBtnColorG);
        noteDivColorPallet.appendChild(noteBtnColorB);
        noteDivColorPallet.appendChild(noteBtnColorOk);
        noteDivTolls.appendChild(noteDivColor);
        noteDivTolls.appendChild(noteDivRemoveQuest);
        noteDivRemoveQuest.appendChild(noteDivRemoveQuestP);
        noteDivRemoveQuest.appendChild(noteDivRemoveQuestbtn);
        noteDivRemoveQuest.appendChild(noteDivRemoveQuestCancel);
        noteDivTolls.appendChild(noteDivRemove);

        let lista = document.querySelector(".note-group");
        lista.appendChild(noteli);
        addTime(noteDivInfo);
        textBox = '';
        input.value = textBox;
    }
}


//transforma btn de + em caixa de texto
function showTextArea() {
    let noteAdd = document.querySelector(".note-add");
    let input = document.querySelector(".input-note");


    noteAdd.classList.add("note-add-text");

    avisoNoNotes();
}

function avisoNoNotes() {
    let note = document.querySelectorAll('.new-note');
    let aviso = document.querySelector('.aviso-no-notes')

    if (note.length == 0) {
        aviso.style.display = 'block';
    } else {
        aviso.style.display = 'none';
    }

}

//adiciona data e hora na nota criada
function addTime(divInfo) {

    mesNome = new Array("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez");
    let data = new Date;
    let dataCompleta = data.getDate() + '/' + mesNome[data.getMonth()] + '/' + data.getFullYear() + ' - ' + data.getHours() + 'h' + data.getUTCMinutes();

    divInfo.textContent = dataCompleta;
}


//Adiciona nota a partir do txt selecionado

function criarNovaNota2() {
    // let noteAdd = document.querySelector(".btn-text-add");
    let selection = '';

    selection = window.getSelection();

    document.value = selection;

    var btnChecked = document.querySelector(".btn-text-add");

    if (!btnChecked.classList.contains("btn-text-add--check") && selection != "") {

        //cria div e atribui classes 
        let noteli = document.createElement("li");
        noteli.classList.add("new-note");
        let noteDivTolls = document.createElement("div");
        noteDivTolls.classList.add("note-tools");
        let noteDivInfo = document.createElement("div");
        noteDivInfo.classList.add("note-info");
        let noteDivColorPallet = document.createElement("div");
        noteDivColorPallet.classList.add("note-color-pallet");
        let noteBtnColorY = document.createElement("button");
        noteBtnColorY.classList.add("btn-note-yellow");
        noteBtnColorY.setAttribute("onclick", "changeNoteColor(this)")
        let noteBtnColorR = document.createElement("button");
        noteBtnColorR.classList.add("btn-note-red");
        noteBtnColorR.setAttribute("onclick", "changeNoteColor(this)")
        let noteBtnColorG = document.createElement("button");
        noteBtnColorG.classList.add("btn-note-green");
        noteBtnColorG.setAttribute("onclick", "changeNoteColor(this)")
        let noteBtnColorB = document.createElement("button");
        noteBtnColorB.classList.add("btn-note-blue");
        noteBtnColorB.setAttribute("onclick", "changeNoteColor(this)")
        let noteBtnColorOk = document.createElement("div");
        noteBtnColorOk.classList.add("pallet-ok");
        noteBtnColorOk.setAttribute("onclick", "palletControl(this)")
        let noteDivColor = document.createElement("div");
        noteDivColor.classList.add("note-color");
        noteDivColor.setAttribute("onclick", "palletControl(this)")
        let noteDivRemoveQuest = document.createElement("div");
        noteDivRemoveQuest.classList.add("note-remove-quest");
        let noteDivRemoveQuestP = document.createElement("p");
        noteDivRemoveQuestP.textContent = "Tem certeza que deseja remover?"
        let noteDivRemoveQuestbtn = document.createElement("div");
        noteDivRemoveQuestbtn.classList.add("note-btn-remove");
        noteDivRemoveQuestbtn.setAttribute("onclick", "noteRemove(this)")
        let noteDivRemoveQuestCancel = document.createElement("div");
        noteDivRemoveQuestCancel.classList.add("note-cancel-remove");
        noteDivRemoveQuestCancel.setAttribute("onclick", "noteRemove(this)")
        let noteDivRemove = document.createElement("div");
        noteDivRemove.classList.add("note-remove");
        noteDivRemove.setAttribute("onclick", "noteRemove(this)")

        noteli.textContent = selection;

        // organiza div dentro de outras divs
        noteli.appendChild(noteDivTolls);
        noteDivTolls.appendChild(noteDivInfo);
        noteDivTolls.appendChild(noteDivColorPallet);
        noteDivColorPallet.appendChild(noteBtnColorY);
        noteDivColorPallet.appendChild(noteBtnColorR);
        noteDivColorPallet.appendChild(noteBtnColorG);
        noteDivColorPallet.appendChild(noteBtnColorB);
        noteDivColorPallet.appendChild(noteBtnColorOk);
        noteDivTolls.appendChild(noteDivColor);
        noteDivTolls.appendChild(noteDivRemoveQuest);
        noteDivRemoveQuest.appendChild(noteDivRemoveQuestP);
        noteDivRemoveQuest.appendChild(noteDivRemoveQuestbtn);
        noteDivRemoveQuest.appendChild(noteDivRemoveQuestCancel);
        noteDivTolls.appendChild(noteDivRemove);

        //let btnChecked = document.querySelector(".btn-text-add");
        btnChecked.classList.add("btn-text-add--check");

        startNotify('Nota adicionada', 'note', 0);

        let lista = document.querySelector(".note-group");
        lista.appendChild(noteli);
        addTime(noteDivInfo);

    }

    avisoNoNotes();
}

document.addEventListener('mouseup', showBtn);

function showBtn() {

    var sel = window.getSelection();
    var tamanho = getSelection().toString().length;
    var range = document.createRange();



    if (sel.isCollapsed == false) {
        let textRange = sel.extentOffset;

        //console.log(textRange);

        let botoes = document.querySelector(".btn-text-add");
        setTimeout(() => {
            if (botoes != null) {
                botoes.remove();
            }
        }, 50);

        let btn = document.createElement("Button");
        let CurrentSelect = sel.getRangeAt(0);

        btn.classList.add("btn-text-add");
        btn.setAttribute('onclick', 'criarNovaNota2()');


        CurrentSelect.insertNode(btn);

        //console.log(btn);

    } else {
        let botoes = document.querySelector(".btn-text-add");
        setTimeout(() => {
            if (botoes != null) {
                botoes.remove();
            }
        }, 50);
    }
}
 
var saveNum = 0;


function saveItem(item) {
    item.classList.add('btn-save--active');
    item.parentNode.classList.add('save-item');
    item.setAttribute('onclick', 'removeItem(this)')
    item.id = 'item-to-save-' + saveNum;
    avisoNoItens();
    

}

function removeItem(item) {
    item.classList.remove('btn-save--active');
    item.parentNode.classList.remove('save-item');
    item.setAttribute('onclick', 'saveItem(this), pushItem(this)' )
    var idItem = item.id.split('-')[3];
    var itemToRemove = save.querySelector('#item-saved-' + idItem);
    itemToRemove.remove();
    clearModulesExpand();
    avisoNoItens();
}

function createSaveBtns() {
    setTimeout(() => {
        var sections = content.querySelectorAll('SECTION')
        //avisoNoItens();

        for (let i = 0; i < sections.length; i++) {

            var saveBtn = document.createElement("DIV");
            saveBtn.classList.add('btn-save');
            saveBtn.setAttribute("onclick", "saveItem(this), pushItem(this)");
            sections[i].appendChild(saveBtn);

        }

    }, 150);
}


function pushItem(btn) {
    var moduleExpBox = save.querySelector('#m-exp-' + numModulo);
    var saveModules = save.querySelector('.save-modules');

    if(moduleExpBox == null){
        var newModuleBox = document.createElement('DIV')
        var newModuleName = document.createElement('DIV');

        newModuleBox.classList.add('module-expand', 'module-expand--active');
        newModuleBox.id = 'm-exp-' + numModulo;

        newModuleName.classList.add('module-expand-name');
        newModuleName.setAttribute('onclick', 'expandSave(this)');
        newModuleName.textContent = "Capítulo " + numModulo;

        saveModules.insertBefore(newModuleBox, saveModules.children[numModulo-1]);
        newModuleBox.appendChild(newModuleName);

        var section = btn.parentNode.cloneNode(true);   
        var M1save = save.querySelector('#m-exp-' + numModulo);
        var btnRemove = section.querySelector('.btn-save'); 

        section.querySelector('.btn-save').removeAttribute('onclick', 'pushItem(this)');
        section.classList.remove('save-item');
        section.id = 'item-saved-' + saveNum;
        btnRemove.id = 'none';
        btnRemove.setAttribute('onclick', 'removeItemSaved(this)');
        M1save.appendChild(section);
        saveNum += 1;
        avisoNoItens();
        
        

       
        

    }else{

        var section = btn.parentNode.cloneNode(true);   
        var btnRemove = section.querySelector('.btn-save');
        var M1save = save.querySelector('#m-exp-' + numModulo);

        section.querySelector('.btn-save').removeAttribute('onclick', 'pushItem(this)');
        section.classList.remove('save-item');
        section.id = 'item-saved-' + saveNum;
        btnRemove.id = 'none';
        btnRemove.setAttribute('onclick', 'removeItemSaved(this)');
        M1save.appendChild(section);
        saveNum += 1;
        avisoNoItens();
        

    }
}


function removeItemSaved(btn) {
    var section = btn.parentNode;
    var idItem = section.id.split('-')[2];

   var itemBtn = document.querySelector("#item-to-save-" + idItem);
   

if (itemBtn !== null ) {
    var item = document.querySelector("#item-to-save-" + idItem).parentNode;
    item.classList.remove('save-item');
    itemBtn.classList.remove('btn-save--active');
    itemBtn.setAttribute('onclick', 'saveItem(this), pushItem(this)');
    avisoNoItens();
    
}

   setTimeout(() => {
    section.remove();
    clearModulesExpand();
    avisoNoItens();
   }, 50);


   


}



// document.addEventListener('mouseup', showBtn);


// function showBtn() {



//     var sel = window.getSelection();


//     if(sel.isCollapsed == false){

//     var sal= window.getSelection().getRangeAt(0);
//     var btnToAdd = document.createElement('button');
//     btnToAdd.classList.add('btnToAdd');
//     sal.insertNode(btnToAdd)


//     }else{
//         console.log('n mano');
//     }
    
// }

function expandSave(btn) {
    btn.parentNode.classList.toggle('module-expand--active');
}



function clearModulesExpand() {

    let expands = save.querySelectorAll('.module-expand');

    
    for (let i = 0; i < expands.length; i++) {
        
        let sections = expands[i].querySelectorAll('section');

        if(sections.length == 0){

            expands[i].remove();
            avisoNoItens();

        }
    }
    avisoNoItens();
    
}

function avisoNoItens() {
    let expands = save.querySelectorAll('.module-expand');
    let aviso = save.querySelector('.aviso-no-itens')
    
    if (expands.length == 0) {
        aviso.style.display = 'block';   
    }else{
        aviso.style.display = 'none';   
    }
    
}
 
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
 
// setTimeout(() => {
    
//     var myOptions = {
//         "nativeControlsForTouch": false,
//         controls: true,
//         autoplay: false,
//         poster: '../../assets/img/bg-video.svg',
//         // fluid: true,

//         logo: { enabled: false }
    
//     }
//     myPlayer = amp("azuremediaplayer", myOptions);
//     myPlayer.src([
//             {
//                     "src": "https://amscolegiobdnml-usso.streaming.media.azure.net/b93ba51a-61df-40e7-af2a-9829b462a25a/211227_LivroInterativo_ef.ism/manifest",
//                     "type": "application/vnd.ms-sstr+xml"
//             }
//     ]);
//     }, 300);


let videoLocal = document.getElementsByClassName("video-local");


// window.onscroll = function(){
//     //videoLocal.pause();
//     console.log(videoLocal);
// }