"use strict";

let navIconClone = document.querySelector(".nav-icon--clone");
let modalXclose = document.querySelector(".modal-x");
let modalWindow = document.querySelector(".main-modal-window");


navIconClone.addEventListener('click',function(e1){
 e1.preventDefault();
 e1.stopPropagation();

 modalWindow.style.cssText = "display:inline";
});


modalXclose.addEventListener('click',function(e2){
    e2.preventDefault();
    e2.stopPropagation();

    modalWindow.style.cssText = "display:none";
});