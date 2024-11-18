

let banners= ["./img/HankHappy.jpg", "./img/HankNoHappy.jpg"]
let cont = 0;

function trocaBanner(){
    cont = (cont+1)%2;
    document.querySelector("#imgBanner").src = banners[cont]
}

setInterval(trocaBanner, 1000)