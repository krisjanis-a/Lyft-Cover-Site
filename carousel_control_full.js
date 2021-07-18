
const slider = document.querySelector("#carousel-container__items");
const carousel = document.querySelector("#carousel-container__items-wrapper")

const rightButton = document.querySelector("#carousel__right-button");
const leftButton = document.querySelector("#carousel__left-button");

const buttonItem1 = document.querySelector("#dot-1");
const buttonItem2 = document.querySelector("#dot-2");
const buttonItem3 = document.querySelector("#dot-3");
const buttonItem4 = document.querySelector("#dot-4");

let offset = 12.5;

var activeSectionIndex = 3;

leftButton.addEventListener("click", function(){

    // console.log("left");

    activeSectionIndex -= 1;

    slider.style.transform = "translate(" + ( - offset * (activeSectionIndex-1)) + "%)";   

    console.log("calculated absolute offset: " + ( - offset * (activeSectionIndex-1)));
    console.log("active section index: " + activeSectionIndex);

    slider.addEventListener("transitionstart", disableAllButtons);

    if(activeSectionIndex === 6){

        slider.addEventListener("transitionend", rollBackwards);
    }

    if(activeSectionIndex === 1){

        slider.addEventListener("transitionend", rollForwards);
    }

    setActiveSection();
    setActiveDot();

    slider.addEventListener("transitionend", enableAllButtons);
});

rightButton.addEventListener("click", function(){
    
    // console.log("right");

    activeSectionIndex += 1;

    slider.style.transform = "translate(" + ( - offset * (activeSectionIndex-1)) + "%)";

    console.log("calculated absolute offset: " + ( - offset * (activeSectionIndex-1)));
    console.log("active section index: " + activeSectionIndex);

    slider.addEventListener("transitionstart", disableAllButtons);

    if(activeSectionIndex === 6){

        slider.addEventListener("transitionend", rollBackwards);
    }

    if(activeSectionIndex === 1){

        slider.addEventListener("transitionend", rollForwards);
    }

    setActiveSection();
    setActiveDot();

    slider.addEventListener("transitionend", enableAllButtons);
});

function rollBackwards() {
    
    activeSectionIndex = 2;
    console.log("active section index: " + activeSectionIndex);

    slider.style.transition = "none";
    slider.style.transform = "translate(" + ( - offset * (activeSectionIndex-1)) + "%)";

    setTimeout(function(){
        slider.style.transition = "transform 1s"
    });

    slider.removeEventListener("transitionend", rollBackwards);
};

function rollForwards() {

    activeSectionIndex = 5;
    console.log("active section index: " + activeSectionIndex);

    slider.style.transition = "none";
    slider.style.transform = "translate(" + ( - offset * (activeSectionIndex-1)) + "%)";

    setTimeout(function(){
        slider.style.transition = "transform 1s"
    });

    slider.removeEventListener("transitionend", rollForwards);
};

buttonItem1.addEventListener("click", function(){ 

    activeSectionIndex = 2;

    slider.style.transform = "translate(" + ( - offset * (activeSectionIndex-1)) + "%)";
    console.log("active section index: " + activeSectionIndex); 

    slider.addEventListener("transitionstart", disableAllButtons);
    setActiveSection();
    setActiveDot();
    slider.addEventListener("transitionend", enableAllButtons);
});

buttonItem2.addEventListener("click", function(){

    activeSectionIndex = 3;
    console.log("active section index: " + activeSectionIndex);

    slider.style.transform = "translate(" + ( - offset * (activeSectionIndex-1)) + "%)"; 
   
    slider.addEventListener("transitionstart", disableAllButtons);
    setActiveSection();
    setActiveDot();
    slider.addEventListener("transitionend", enableAllButtons);
});

buttonItem3.addEventListener("click", function(){  
    
    activeSectionIndex = 4;
    console.log("active section index: " + activeSectionIndex);

    slider.style.transform = "translate(" + ( - offset * (activeSectionIndex-1)) + "%)"; 

    slider.addEventListener("transitionstart", disableAllButtons);
    setActiveSection();
    setActiveDot();
    slider.addEventListener("transitionend", enableAllButtons);
});

buttonItem4.addEventListener("click", function(){

    activeSectionIndex = 5;
    console.log("active section index: " + activeSectionIndex);

    slider.style.transform = "translate(" + ( - offset * (activeSectionIndex-1)) + "%)"; 

    slider.addEventListener("transitionstart", disableAllButtons);
    setActiveSection();
    setActiveDot();
    slider.addEventListener("transitionend", enableAllButtons);
});

function setActiveDot(){

    document.querySelector('#controls__dots-container .item-active').classList.remove('item-active');

    if(activeSectionIndex === 2 || activeSectionIndex === 6){
        buttonItem1.classList.add('item-active');
    }

    if(activeSectionIndex === 3){
        buttonItem2.classList.add('item-active');
    }

    if(activeSectionIndex === 4){
        buttonItem3.classList.add('item-active');
    }

    if(activeSectionIndex === 5 || activeSectionIndex === 1){
        buttonItem4.classList.add('item-active');
    }

}

function setActiveSection(){

    let activeSections = document.querySelectorAll('#carousel-container__items .item-active');
    
    activeSections.forEach(section => {
        section.classList.remove('item-active'); 
    });

    if(activeSectionIndex === 2 || activeSectionIndex === 6){
        let item1sections = document.querySelectorAll('.carousel__item-1');
        
        item1sections.forEach(item => {
            item.classList.add('item-active'); 
        });
    }

    if(activeSectionIndex === 3){
        let item1sections = document.querySelectorAll('.carousel__item-2');
        
        item1sections.forEach(item => {
            item.classList.add('item-active'); 
        });
    }

    if(activeSectionIndex === 4){
        let item1sections = document.querySelectorAll('.carousel__item-3');
        
        item1sections.forEach(item => {
            item.classList.add('item-active'); 
        });
    }

    if(activeSectionIndex === 5 || activeSectionIndex === 1){
        let item1sections = document.querySelectorAll('.carousel__item-4');
        
        item1sections.forEach(item => {
            item.classList.add('item-active'); 
        });
    }

}

function disableAllButtons(){
    leftButton.disabled = true;
    rightButton.disabled = true;

    document.querySelector("#carousel__item-1-button").disabled = true;
    document.querySelector("#carousel__item-2-button").disabled = true;
    document.querySelector("#carousel__item-3-button").disabled = true;
    document.querySelector("#carousel__item-4-button").disabled = true;

    slider.removeEventListener("transitionstart", disableAllButtons);
}

function enableAllButtons(){
    leftButton.disabled = false;
    rightButton.disabled = false;

    document.querySelector("#carousel__item-1-button").disabled = false;
    document.querySelector("#carousel__item-2-button").disabled = false;
    document.querySelector("#carousel__item-3-button").disabled = false;
    document.querySelector("#carousel__item-4-button").disabled = false;

    slider.removeEventListener("transitionend", enableAllButtons);
}