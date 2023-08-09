function expandAnswer(btnAnsw) {
    let content = btnAnsw.parentNode.parentNode;
    let btnExp = content.querySelector(".btn-answ-expand");
    let icon = content.querySelector(".answer-icon");


    btnAnsw.classList.toggle("btn-answer-header--active");
    btnExp.classList.toggle("btn-answ-expand--active");
    icon.classList.toggle("btn-answ-header-icon--active");

}