//Função para zoom das imgs
function addClass(){
        setTimeout(() => {    
            let figura = document.getElementsByTagName("FIGURE");
           

            for (let i = 0; i < figura.length; i++) {
                figura[i].setAttribute("onclick", "zoomImg(this)"); 
                
                let span = document.createElement("SPAN");
                figura[i].appendChild(span);
                span.setAttribute("onclick", "closeZoom(this)");
            
                span.textContent = 'x';
            }

        }, 300);
}


function zoomImg(img){
    let body = document.querySelector("BODY");
    img.classList.add('imgZoom');
    img.removeAttribute("onclick");

    body.style.overflowY="hidden";

    
}

function closeZoom(btn) {
    let figure = document.querySelector(".imgZoom");
    let body = document.querySelector("BODY");
    
    figure.classList.remove('imgZoom');
    body.style.overflowY="hidden";

    body.style.overflowY="auto";
    addClass();    
}

//Fim da Função para zoom das imgs



// Fim Função do BTN expansível 

// Função do BTN de Informação
function btnInfo(btn) {
    let txtBox = btn.querySelector(".btn-txtbox");
    let iconBox = btn.querySelector(".btn-icon")

    txtBox.classList.toggle("btn-txtbox--active")
    iconBox.classList.toggle("btn-icon--active")
} 

function supTeste() {
    //console.log('Sup!');
    
}



