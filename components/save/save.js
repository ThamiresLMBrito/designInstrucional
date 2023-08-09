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