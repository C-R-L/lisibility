// ==UserScript==
// @name         Mania-toys-collector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mania-toys-collector.fr/*
// @icon         https://www.google.com/s2/favicons?domain=mania-toys-collector.fr
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle('body { background: #000;}');
addGlobalStyle('#wrapper { padding-top: 1.563rem; background: #131313;}');
addGlobalStyle('button:disabled {   background-color: grey;  color: darkgrey; border-radius: 0.5em;}');
addGlobalStyle('button:disabled:hover {   background-color: grey !important;  color: darkgrey;}');
addGlobalStyle('.product-flag {  background:  linear-gradient(#24b9d7, #24b9d73b) !important;  border-radius: 0 0.5em 0.5em 0;  border-left: 3px solid #24b9d7;  text-shadow: 0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black;}');
addGlobalStyle('.product-flag.out_of_stock{  background:  linear-gradient(#bf0202, #ff000045) !important;  border-radius: 0 0.5em 0.5em 0;  border-left: 3px solid #ff0101;}');
addGlobalStyle('.product-flag .discount-percentage,.product-flag.discount { background:  linear-gradient(#4cd500, #14750045) !important; border-left: 3px solid #1ff001;}');
addGlobalStyle('.hidden-sm-down {color: #8491c6;}');
addGlobalStyle('#header .header-top a[data-depth="0"] {text-shadow: 0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 2px 6px black;}');
addGlobalStyle('.footer-container { background-image: linear-gradient(black,transparent 50%), url(../../../../modules/vm_ultimateconfigurator/views/img/gallery/SITH.jpg);text-shadow:0 0 2px black, 0 0 2px black, 0 0 1px black;}');
addGlobalStyle('.block-social ul li, .social-sharing li {background-color: transparent; border-radius:0.5em;}');
addGlobalStyle('.block_newsletter, .tabs {background: black !important; border-radius:0.5em; border: 1px solid #333;} ');
addGlobalStyle('.product-information{color: #b5b5b5;}');
addGlobalStyle('.item-product svg path{fill: #d0d0d0;}');
addGlobalStyle('ul#top-menu > li:nth-child(20)>a[data-depth="0"]:hover { color: lime;}');
addGlobalStyle('ul#top-menu > li:nth-child(20)>a[data-depth="0"] { color: #269be1;}');
addGlobalStyle('.thumbnail-container {  background: rgba(40, 40, 40, 0.82) !important;  border-radius: 0.5em;  border: 1px solid rgba(255,255,255,0.3);  box-shadow: 0 3px 8px rgba(0,0,0,0.5);  color: white;}');
addGlobalStyle('.product-description > h2 a, .product-description + div span {  color: white !important;} .price {  color: #a1d6f0;} .regular-price { color: #77700b !important;} .product-description{background:none !important;)');
addGlobalStyle('.card,#search_filters, #search_filters_brands, #search_filters_suppliers, .block-categories {  Background: linear-gradient(rgba(0,0,0,.5) 10%, rgba(0,0,0,0.3)50%);  border: 1px solid #f5f5f585;  border-radius: 0.5em;  box-shadow: 0 4px 5px black;  color: #d9d9d9;}.total-value.font-weight-bold {  background-color: rgba(0,0,0,0.3) !important;  border: 1px solid grey;}.h3 {  color: #5777b3 !important;} .h1.card-title {  color: #4cbb6c;}');

addGlobalStyle('');

function imgReplace() {
    var images = document.getElementsByTagName('img'),
        len = images.length, img, i;
    for (i = 0; i < len; i += 1) {
        img = images[i];
        img.src = img.src.replace('/img/seosaproductlabels/26/1.png', '');/*https://image.noelshack.com/fichiers/2021/52/4/1640857361-1.png*/
        img.src = img.src.replace('/img/seosaproductlabels/19/1.png', 'Replacement2.gif');
    }
}

/*var logo = document.createElement("div");
logo.innerHTML = '<div style="margin: 0 auto 0 auto; ' +
    'border-bottom: 1px solid #000000; margin-bottom: 5px; ' +
    'font-size: small; background-color: #000000; ' +
    'color: #ffffff;"><p style="margin: 2px 0 1px 0;"> ' +
    'YOUR TEXT HERE ' +
    '</p></div>';
var position = document.getElementsByClassName('dropdown-menu');
document.body.insertBefore(logo, position.lastChild);


 var trieur, newElement;
trieur = document.getElementsByClassName('dropdown-menu');
if (trieur) {
    newElement = document.createElement('hr');
    trieur.parentNode.insertBefore(newElement, trieur.nextSibling);
}

var tri = document.createElement("div");
trieur = document.getElementsByClassName('dropdown-menu');
tri.innerHTML = '<a rel="nofollow" href="https://mania-toys-collector.fr/fr/24-figurine-black-series-hasbro?order=product.quantity.asc" class="select-list js-search-link"> Quantité, croissant </a>'+
    '<a rel="nofollow" href="https://mania-toys-collector.fr/fr/24-figurine-black-series-hasbro?order=product.quantity.desc" class="select-list js-search-link"> Quantité, décroissant </a>';
document.body.insertAfter(tri, document.trieur.lastChild);*/
