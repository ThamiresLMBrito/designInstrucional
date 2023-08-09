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