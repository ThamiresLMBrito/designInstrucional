function OpenContentTL (btn){

    let col3 = btn.parentNode;
    let rowBox = col3.parentNode;
    let tl_icon = rowBox.querySelector (".tl-icon");
    let tl_btn_text = rowBox.querySelector (".tl-btn-text");

    tl_icon.classList.toggle("stopAnimaTl");
    tl_btn_text.classList.toggle("show-txt");
}