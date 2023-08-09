function backToHome(btn) {

    let menuProgress = menu.querySelector('.menu-progress');
    let menuModuleName = menu.querySelector('.menu-module-name');
    let menuInfo = menu.querySelector('.menu-info');
    let menuInfoBtn = menu.querySelector('.menu-info-btn');
    let menuExercises = menu.querySelector('.menu-exercises');
    // let menuLogo = menu.querySelector('.menu-logo-home');

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
    // menuLogo.classList.remove('hide');

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