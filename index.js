'use strict'
const menu = document.querySelector('.menu-list');
const close = document.querySelector('.close-tab');
const task = document.querySelector('.task-bar');
const hidden = document.querySelector('.hidden');

menu.addEventListener('click', function(){
 hidden.style.display='block'
})