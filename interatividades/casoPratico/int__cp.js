function slideCP(btn) {
    let containerCP = btn.parentNode.parentNode;
    let conteudoBox = containerCP.querySelector('.container-conteudo');
    let conteudoAtualCP = conteudoBox.querySelector('.ativo');
    let nextConteudoCP = conteudoAtualCP.nextElementSibling;
    let prevConteudoCP = conteudoAtualCP.previousElementSibling;
    let prevButtom = containerCP.querySelector('.prev');
    let nextButtom = containerCP.querySelector('.next');

    let boxIndicador = containerCP.querySelector('.indicador-conteudo');
    let indicadorAtual = boxIndicador.querySelector('.ativado');
    let nextIndicador = indicadorAtual.nextElementSibling;

    let prevIndicador = indicadorAtual.previousElementSibling;


    if (btn.classList.contains('next')) {

        if (nextConteudoCP !== null) {
            nextConteudoCP.classList.add('ativo');
            nextConteudoCP.classList.remove('hide');
            conteudoAtualCP.classList.add('hide');
            conteudoAtualCP.classList.remove('ativo');

            indicadorAtual.classList.remove('ativado');
            nextIndicador.classList.add('ativado');

        } else {
            btn.classList.add('btn-inativo');
        }

        prevButtom.classList.remove('btn-inativo');
    }

    if (btn.classList.contains('prev')) {
        if (prevConteudoCP !== null) {
            prevConteudoCP.classList.add('ativo');
            prevConteudoCP.classList.remove('hide');
            conteudoAtualCP.classList.add('hide');
            conteudoAtualCP.classList.remove('ativo');

            indicadorAtual.classList.remove('ativado');
            prevIndicador.classList.add('ativado');

        } else {
            btn.classList.add('btn-inativo');
        }

        nextButtom.classList.remove('btn-inativo');
    }
}

function playCP(btn) {

    let container = btn.parentNode;
    let selectPrev = container.querySelector(".prev");
    let selectNext = container.querySelector(".next")
    selectPrev.classList.add("btn-inativo");
    selectPrev.classList.remove("hide");
    selectNext.classList.remove("hide");
    btn.classList.add("hide");
}