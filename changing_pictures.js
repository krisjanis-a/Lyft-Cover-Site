const button1 = document.querySelector("#section-4__button-1-container");
const button2 = document.querySelector("#section-4__button-2-container");
const button3 = document.querySelector("#section-4__button-3-container");

const img1 = document.querySelector("#section-4__img-1");
const img2 = document.querySelector("#section-4__img-2");
const img3 = document.querySelector("#section-4__img-3");

button1.addEventListener("click", function(){

    img1.classList.add("active");
    img2.classList.remove("active");
    img3.classList.remove("active");

    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");

});

button2.addEventListener("click", function(){

    img1.classList.remove("active");
    img2.classList.add("active");
    img3.classList.remove("active");
    
    button1.classList.remove("active");
    button2.classList.add("active");
    button3.classList.remove("active");

});

button3.addEventListener("click", function(){

    img1.classList.remove("active");
    img2.classList.remove("active");
    img3.classList.add("active");
    
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.add("active");

});
