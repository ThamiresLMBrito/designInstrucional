// Botão expansível 
function btnExpand(btn) {
    let btnContent = btn.querySelector(".btn-expand-content");
    let icon = btn.querySelector(".expand-icon");
    
    icon.classList.toggle("expand-icon--active");
    btnContent.classList.toggle("show-flex");
    btn.classList.toggle('btn-expand--active');
    
}