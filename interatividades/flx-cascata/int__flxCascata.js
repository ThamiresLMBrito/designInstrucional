function showflx_cas(btn) {

    let btnFlx = btn.querySelector('.flx_cas_btn');
    //let btnAnima = btn.querySelector('.animaTouchCas');
    let nextLine = btn.querySelector('.flx_cas_line');
    let btnPrev = btn.previousSibling.previousElementSibling;
    let rowCatch = btnPrev.querySelector(".flx_cas_btn")

   // console.log(nextLine);

    
    if (btnFlx.classList.contains('flx_cas_btn-default') && rowCatch.classList.contains('flx_cas_btn-ativo')) {
       btnFlx.classList.remove("flx_cas_btn-default");
       btnFlx.classList.add("flx_cas_btn-ativo");
    } 

    if (nextLine != null && nextLine.classList.contains('flx_cas-line_default')) {
        nextLine.classList.remove("flx_cas-line_default");
        nextLine.classList.add("flx_cas-line_ativo");
    }

    if (btnFlx.classList.contains('animaTouchCas')) {
        btnFlx.classList.remove("animaTouchCas");
    }

}