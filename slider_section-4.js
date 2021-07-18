const leftButtonS4 = document.querySelector("#ss2__button-1-container");
const rightButtonS4 = document.querySelector("#ss2__button-2-container");

const sliderS4 = document.querySelector("#slider-items");
const htmlBody = document.body;

let position = 0;

let pageLoad = 1;

leftButtonS4.addEventListener("click", translateLeft);

rightButtonS4.addEventListener("click", translateRight);

function translateLeft() {

    if(position === 0){
        leftButtonS4.removeEventListener("click", translateLeft);
        leftButtonS4.classList.add("disabled");
        return;
    }

    position -= 1;
    sliderS4.style.transform = "translateX(-" + (18 * position) + "rem)";
    console.log("abs transX: " + (-18 * position));

    rightButtonS4.addEventListener("click", translateRight);
    rightButtonS4.classList.remove("disabled");

    removeActiveSliderItem();
};

function translateRight() {
    position += 1;
    sliderS4.style.transform = "translateX(-" + (18 * position) + "rem)";
    console.log("abs transX: " + (-18 * position));

    if(position === 4){
        rightButtonS4.removeEventListener("click", translateRight);
        rightButtonS4.classList.add("disabled");
    }

    leftButtonS4.addEventListener("click", translateLeft);
    leftButtonS4.classList.remove("disabled");

    removeActiveSliderItem();
};

function removeActiveSliderItem() {

    let activeSections = document.querySelectorAll('#slider-items .active');
    
    activeSections.forEach(section => {
        section.classList.remove('active'); 
    });

}

document.body.addEventListener("click", function(e){

    if( !e.target.classList.contains("subsection-2__slider-item") &&
        !e.target.classList.contains("ss2__si__heading") &&
        !e.target.classList.contains("ss2__si__image") &&
        !e.target.classList.contains("ss2__si__image-img") &&
        !e.target.classList.contains("ss2__si__bullets") &&
        !e.target.classList.contains("ss2__si__bullet") &&
        !e.target.classList.contains("ss2__si__icon") &&
        !e.target.classList.contains("ss2__si_bullet-text") &&
        !e.target.classList.contains("ss2__si__text") &&
        !e.target.classList.contains("ss2__si__button-container") &&
        !e.target.classList.contains("ss2__si__button")
    ){
        removeActiveSliderItem();
        return;
    }

});

const item1sliderS4 = document.querySelector("#ss2__slider-item-1");
const item2sliderS4 = document.querySelector("#ss2__slider-item-2");
const item3sliderS4 = document.querySelector("#ss2__slider-item-3");
const item4sliderS4 = document.querySelector("#ss2__slider-item-4");
const item5sliderS4 = document.querySelector("#ss2__slider-item-5");
const item6sliderS4 = document.querySelector("#ss2__slider-item-6");
const item7sliderS4 = document.querySelector("#ss2__slider-item-7");
const item8sliderS4 = document.querySelector("#ss2__slider-item-8");

item1sliderS4.addEventListener("click", function(e) {

    if(e.target.classList.contains("ss2__si__button-container") || e.target.classList.contains("ss2__si__button")){
        return;
    }

    if(item1sliderS4.classList.contains("active")){    
        removeActiveSliderItem();
        return;  
    }
    
    if(!item1sliderS4.classList.contains("active")){
        removeActiveSliderItem();
        item1sliderS4.classList.add("active");
        return;
    }

});

item2sliderS4.addEventListener("click", function(e) {

    if(e.target.classList.contains("ss2__si__button-container") || e.target.classList.contains("ss2__si__button")){
        return;
    }

    if(item2sliderS4.classList.contains("active")){    
        removeActiveSliderItem();
        return;  
    }
    
    if(!item2sliderS4.classList.contains("active")){
        removeActiveSliderItem();
        item2sliderS4.classList.add("active");
        return;
    }

});

item3sliderS4.addEventListener("click", function(e) {

    if(e.target.classList.contains("ss2__si__button-container") || e.target.classList.contains("ss2__si__button")){
        return;
    }

    if(item3sliderS4.classList.contains("active")){    
        removeActiveSliderItem();
        return;  
    }
    
    if(!item3sliderS4.classList.contains("active")){
        removeActiveSliderItem();
        item3sliderS4.classList.add("active");
        return;
    }

});

item4sliderS4.addEventListener("click", function(e) {

    if(e.target.classList.contains("ss2__si__button-container") || e.target.classList.contains("ss2__si__button")){
        return;
    }

    if(item4sliderS4.classList.contains("active")){    
        removeActiveSliderItem();
        return;  
    }
    
    if(!item4sliderS4.classList.contains("active")){
        removeActiveSliderItem();
        item4sliderS4.classList.add("active");
        return;
    }

});

item5sliderS4.addEventListener("click", function(e) {

    if(e.target.classList.contains("ss2__si__button-container") || e.target.classList.contains("ss2__si__button")){
        return;
    }

    if(item5sliderS4.classList.contains("active")){    
        removeActiveSliderItem();
        return;  
    }
    
    if(!item5sliderS4.classList.contains("active")){
        removeActiveSliderItem();
        item5sliderS4.classList.add("active");
        return;
    }

});

item6sliderS4.addEventListener("click", function(e) {

    if(e.target.classList.contains("ss2__si__button-container") || e.target.classList.contains("ss2__si__button")){
        return;
    }

    if(item6sliderS4.classList.contains("active")){    
        removeActiveSliderItem();
        return;  
    }
    
    if(!item6sliderS4.classList.contains("active")){
        removeActiveSliderItem();
        item6sliderS4.classList.add("active");
        return;
    }

});

item7sliderS4.addEventListener("click", function(e) {

    if(e.target.classList.contains("ss2__si__button-container") || e.target.classList.contains("ss2__si__button")){
        return;
    }

    if(item7sliderS4.classList.contains("active")){    
        removeActiveSliderItem();
        return;  
    }
    
    if(!item7sliderS4.classList.contains("active")){
        removeActiveSliderItem();
        item7sliderS4.classList.add("active");
        return;
    }

});

item8sliderS4.addEventListener("click", function(e) {

    if(e.target.classList.contains("ss2__si__button-container") || e.target.classList.contains("ss2__si__button")){
        return;
    }

    if(item8sliderS4.classList.contains("active")){    
        removeActiveSliderItem();
        return;  
    }
    
    if(!item8sliderS4.classList.contains("active")){
        removeActiveSliderItem();
        item8sliderS4.classList.add("active");
        return;
    }

});