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