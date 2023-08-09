function showflx_org(btn) {
    let col = btn.parentNode.parentNode;
    let blockText = col.querySelector('.flx_org_block');

    //console.log(blockText);

    if (!btn.classList.contains('flx_org_block')) {

        btn.classList.add('flx_org-btn-ativo');
        btn.classList.remove('animaTouchOrg');

        if (blockText !== null) {
            blockText.classList.remove('flx_org_block');
        }
    }
}


function showAllflx_org(btn){
    let rowBox = btn.parentNode;
    let nextRow = rowBox.nextElementSibling.nextElementSibling;
    let box = nextRow.querySelectorAll(".flx_org-box");

    btn.classList.remove('animaTouchOrg');

    for(let i = 0; i < box.length; i++){
        
        //console.log(box [i]);
        box[i].classList.add('flx_org-btn-ativo');
    }
}