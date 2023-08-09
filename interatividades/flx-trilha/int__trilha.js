function showTrilha(btn) {
    let container = btn.parentNode.parentNode;
    let blockText = container.querySelector('.flx_tr_block');
    let lineText = container.querySelector('.flx_tr-line-dashed');

    if ( !btn.classList.contains('flx_tr_block')) {
        
        btn.classList.add('flx_tr-box-ativo');
        btn.classList.remove('flx_tr-box-default');
        btn.classList.remove('animaTouch');
        
        setTimeout(() => {
            lineText.classList.remove('flx_tr-line-dashed');
            lineText.classList.add('flx_tr-line-ative');
        }, 500);

        if(blockText !== null) {
            blockText.classList.remove('flx_tr_block');
        }
    } 
}  