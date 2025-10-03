const cards= document.querySelectorAll(".card");
let firstCard, secondCard;
let isCardFlipped=false;
let lockBoard=false;


function flip(){
    if(lockBoard)return;
    if(this===firstCard)return;

    this.classList.toggle("flip");
    if(!isCardFlipped){
        firstCard=this;
        isCardFlipped=true;
           return;
    }
         
        secondCard=this;
        checkForMatch();
}



    function checkForMatch(){
    let isMatch= firstCard.dataset.framework===secondCard.dataset.framework;
        isMatch? disableCards() : unFlipCards();
    }


    function disableCards(){
         firstCard.removeEventListener("click", flip);
         secondCard.removeEventListener("click", flip);
         resetgame();
    }

    function unFlipCards(){
        lockBoard=true;
        setTimeout(()=>{
             firstCard.classList.remove("flip");  
             secondCard.classList.remove("flip");  
              resetgame();
        },1500);
       
    }

    function resetgame(){
        [firstCard,secondCard]= [null, null];
        [isCardFlipped, lockBoard]= [false, false];
        
    }


( function  shuffle(){
        cards.forEach((card)=>{
           let random=Math.floor(Math.random()*12);
           card.style.order=random;
});
})();

cards.forEach((card)=>{
    card.addEventListener("click", flip);
});