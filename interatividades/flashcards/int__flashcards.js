function flashcards(atvFlash) {
    let flashCardTextFront = atvFlash.querySelector('.flashcard-front');
    let flashCardTextBack = atvFlash.querySelector('.flashcard-back');    
    let flashFront = atvFlash;
    
    flashFront.classList.toggle('flash-card-active');
    flashCardTextBack.classList.toggle('flashcard-text-active');    
    flashCardTextFront.classList.toggle('flashcard-text');

}