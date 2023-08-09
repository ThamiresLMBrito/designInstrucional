function changeButtonColor(btn){
    
    let divQuestion = btn.parentNode;
    let button = divQuestion.querySelector('button');
   

    button.classList.add("buttonChange")
    //console.log(button);
}

function addTextDissertativa(btn, id) {

        let divQuestion = btn.parentNode.parentNode;
        let inputBox = divQuestion.querySelector("textarea");
        let inputText = inputBox.value;
        //let inputDiv = input.parentNode;

    
        // Salvar texto no localStorage
        if (localStorage.getItem('modulo' + numModulo) == null) {
            localStorage.setItem('modulo' + numModulo, '[]'); // cria array vazia
        }
    
        var oldValue = JSON.parse(localStorage.getItem('modulo' + numModulo));
        oldValue[id] = inputText;
    
        localStorage.setItem('modulo' + numModulo, JSON.stringify(oldValue));
   

        if (inputText !== '') {

        inputBox.remove();
        //console.log(input);
   
       let textDiv = document.createElement("DIV");
           textDiv.classList.add("q-dis-text");
   
           divQuestion.appendChild(textDiv);
           textDiv.textContent = inputText;
   
       let button = divQuestion.querySelector(".buttonCheck");
    
            button.classList.remove("buttonChange");
            button.classList.add("buttonCheckOK");
        }else{
           // console.log('ta vazio');
            inputBox.placeholder = 'Escreva aqui sua resposta';
        }
        let buttonEdit = divQuestion.querySelector(".buttonEdit");
             buttonEdit.classList.remove("buttonCheckOK");
         
}

function editTextDissertativa(btn){
    let divQuestion = btn.parentNode.parentNode;
    let divTextBox = divQuestion.querySelector('.q-dis-text');
    let textContentDiv = divTextBox.textContent;

    //console.log(textContentDiv);
    divTextBox.remove();

    let textAreaNew = document.createElement("textarea");
        textAreaNew.classList.add('q-dis-resposta');

        divQuestion.appendChild(textAreaNew);
        textAreaNew.textContent = textContentDiv;

    let  button = btn;
    let  buttonDiv= btn.parentNode;
    let  buttonCheck = buttonDiv.querySelector(".buttonCheck");


    button.classList.add('buttonCheckOK');
    buttonCheck.classList.remove("buttonCheckOK");

}


function loadTextDQuestion() {

    var questions = content.querySelectorAll('.q-dissertativa');

for (let i = 0; i < questions.length; i++) {

    let inputBox = questions[i].querySelector("textarea");
    let qResposta = questions[i].querySelector('.q-dis-resposta');

    let inputText = inputBox.value;

    var lsText = JSON.parse(localStorage.getItem('modulo' + numModulo));

    if (lsText[i] !== undefined) {
        
    inputBox.remove();

    


    let textDiv = document.createElement("DIV");
        textDiv.classList.add("q-dis-text");
 
       qResposta.appendChild(textDiv);
        textDiv.textContent = lsText[i];
 
    let button = questions[i].querySelector(".buttonCheck");
    let buttonEdit = questions[i].querySelector(".buttonEdit")
 
         button.classList.remove("buttonChange");
         button.classList.add("buttonCheckOK");
    }

}

}

//  function addTextDissertativa(btn){
    
//      if (btn.classList.contains('buttonCheck')) {
        
//         let divQuestion = btn.parentNode;
//         let inputBox = divQuestion.querySelector("textarea");
//         let inputText = inputBox.value;
//         //let inputDiv = input.parentNode;
   
//         inputBox.remove();
//         //console.log(input);
   
//        let textDiv = document.createElement("DIV");
//            textDiv.classList.add("q-dis-text");
   
//            divQuestion.appendChild(textDiv);
//            textDiv.textContent = inputText;
   
//        let button = divQuestion.querySelector(".buttonCheck");
    
//             button.classList.remove("buttonCheck");
//             button.classList.add("buttonEdit");
//            //console.log(button);
//      }

//      if (btn.classList.contains('buttonEdit')) {
         
//         setTimeout(() => {

//             let divQuestion = btn.parentNode;
//             let divTextResp = divQuestion.querySelector('.q-dis-text');
//             let textContentDiv = divTextResp.textContent;
    
//             divTextResp.remove();
    
//             let textAreaNew = document.createElement("textarea");
//                 textAreaNew.classList.add("q-dis-resposta");
//                 textAreaNew.textContent = textContentDiv;
    
//                 divQuestion.appendChild(textAreaNew);
//         }, 150);

//      }
   

// }

// function editTextDissertativa(btn){
//         let divQuestion = btn.parentNode;
//         let divTextResp = divQuestion.querySelector('.q-dis-text');
//         let textContentDiv = divTextResp.textContent;

//         divTextResp.remove();

//         let textAreaNew = document.createElement("textarea");
//             textAreaNew.classList.add("q-dis-resposta");
//             textAreaNew.textContent = textContentDiv;

//             divQuestion.appendChild(textAreaNew);

// }

// function removeTextDissertativa(btn){

//     let buttonDiv = btn.parentNode;
//     let inputDiv = buttonDiv.nextElementSibling;
//     let questionBox = btn. parentNode.parentNode;
    
//     inputDiv.remove();
//     //console.log(questionBox);
   

//     let inputBox = document.createElement("textarea");
//         inputBox.classList.add("q-dis-resposta");

//         questionBox.appendChild(inputBox);
//         inputBox.placeholder = 'Escreva aqui sua resposta';

//     let inputButtonTrash = btn;
//     let iconeButtonTrash = inputButtonTrash.querySelector('i')

//         iconeButtonTrash.style ="color: purple";  
    
//     let inputButtonCheck = btn.previousElementSibling.previousElementSibling;
//     let iconeButtonCheck = inputButtonCheck.querySelector('i')

//         //console.log(inputButtonCheck);
//         iconeButtonCheck.style ="color:#e6e6e6;"
// }



// function saveDQuestion(form, id) {

// }