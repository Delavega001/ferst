document.getElementsByClassName("main-title")[0].style.color = "red";
document.getElementById("main-action").onclick = function () {
   document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

let buttons = document.getElementsByClassName("car-button");
for (let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function (){
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function() {
    if(document.getElementById("name").value === "") {
        alert("Заполните поле имя");
    }
    else if(document.getElementById("phone").value === ""){
        alert("Заполните поле телефон");
    }
    else if(document.getElementById("car1").value === ""){
        alert("Заполните поле автомобиль");
    }
    else
        alert("Спасибо за заявку. Мы свяжемся в вами в ближайшее время");

}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.6) / 3) + 'px,' + ((event.clientY * 0.6) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.1 * window.pageYOffset) + 'px';
    })
});