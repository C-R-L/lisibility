// ==UserScript==
// @name         New Userscript
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
addGlobalStyle('#wrapper { padding-top: 1.563rem; background: #aaa;}');
addGlobalStyle('button:disabled {   background-color: grey;  color: darkgrey; border-radius: 0.5em;}');
addGlobalStyle('button:disabled:hover {   background-color: grey !important;  color: darkgrey;}');
addGlobalStyle('.product-flag {  background:  linear-gradient(#24b9d7, #24b9d73b) !important;  border-radius: 0 0.5em 0.5em 0;  border-left: 3px solid #24b9d7;  text-shadow: 0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black;}');
addGlobalStyle('.product-flag.out_of_stock{  background:  linear-gradient(#bf0202, #ff000045) !important;  border-radius: 0 0.5em 0.5em 0;  border-left: 3px solid #ff0101;}');
addGlobalStyle('.product-flag .discount-percentage,.product-flag.discount { background:  linear-gradient(#4cd500, #14750045) !important; border-left: 3px solid #1ff001;}');
addGlobalStyle('.hidden-sm-down {color: #8491c6;}');
addGlobalStyle('#header .header-top a[data-depth="0"] {text-shadow: 0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 0 2px black,0 2px 6px black;}');

function imgReplace() {
    var images = document.getElementsByTagName('img'),
        len = images.length, img, i;
    for (i = 0; i < len; i += 1) {
        img = images[i];
        img.src = img.src.replace('/img/seosaproductlabels/26/1.png', 'https://image.noelshack.com/fichiers/2021/52/4/1640857361-1.png');
        img.src = img.src.replace('https://mania-toys-collector.fr/img/seosaproductlabels/19/1.png', 'Replacement2.gif');
    }
}
