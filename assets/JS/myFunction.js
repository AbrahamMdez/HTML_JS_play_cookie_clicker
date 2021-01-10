'use strict';

let cookies = 0;
const cookiesAmounth = [ 0, 0, 0];
const cookiesProduction = [ 1, 2, 4];
const cookiesPrice = [ 100, 200, 400];

const click = () => {
    cookies++; 
};

const buyMoreCookies = object => {
    if( cookies >= cookiesPrice[object] ) {
        cookiesAmounth[object]++;
    } 
    
    return 'You don´t have enough money';
};

const createCookies = () => {
    for( let i = 0; i < cookiesAmounth.length; i++) {
        cookies += cookiesAmounth[i] * cookiesProduction[i];
    }
};

const render = () => {
    document.querySelector('#count').innerHTML = cookies;
    document.querySelector('#inventory').innerHTML = 
        `Cursor: ${cookiesAmounth[0]}<br>
         Abuelita: ${cookiesAmounth[1]}<br>
         Horno: ${cookiesAmounth[2]}`
};

document.querySelector('#cookie-image').onclick = click;
document.querySelector('#btn-cursor').onclick = buyMoreCookies[0];
document.querySelector('#btn-granma').onclick = buyMoreCookies[1];
document.querySelector('#btn-oven').onclick = buyMoreCookies[2];

//PARA RENDERIZAR VISTAS A LA VELOCIDAD QUE LE DIGAMOS
const FPS = 10;

setInterval(() => {
    createCookies();
    render();
}, 1000/FPS);
