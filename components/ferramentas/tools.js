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