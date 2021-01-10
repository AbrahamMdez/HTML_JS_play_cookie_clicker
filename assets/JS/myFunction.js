'use strict';

let cookies = 0;
const cookiesAmounth = [ 0, 0, 0];
const cookiesProduction = [ 1, 2, 4];
const cookiesPrice = [ 100, 200, 400];

const click = () => {
    document.querySelector('#cookie-image').onclick = cookies++; 
};

//const buyMoreCookies = b => {
//    document.querySelector('#btn-cursor').onclick = 0;
//};

const render = () => {
    document.querySelector('#count').innerHTML = cookies;
};

//PARA RENDERIZAR VISTAS A LA VELOCIDAD QUE LE DIGAMOS
const FPS = 30;

setInterval(() => {
    render();
}, 1000/FPS);
