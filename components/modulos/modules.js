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
        let menuLogo = menu.querySelector('.menu-logo-home');
       // let videoLocal = menu.parentNode.querySelector(".video-local");
       let videoAzure = menu.parentNode.querySelector('.vjs-tech');

       

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
        menuLogo.classList.add('hide');
        //videoLocal.pause();
        videoAzure.pause();

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
        let menuLogo = menu.querySelector('.menu-logo-home');
       // let videoLocal = menu.parentNode.querySelector(".video-local");
       let videoAzure = menu.parentNode.querySelector('.vjs-tech');


        // console.log(starsMenuEx);
        // ativa ou desativa componentes
        home.style.display = "none";
        modulos.style.display = "none";
        score.style.display = "none";
        video.style.display = "none";
        content.classList.add('content--opened');
        menuExercises.classList.add('show-flex');
        menuInfo.classList.add('visible');
        menuLogo.classList.add("hide");
        //videoLocal.pause();
        videoAzure.pause();

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