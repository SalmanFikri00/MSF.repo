
const menu = document.querySelectorAll('.humber');
const menuHamber = document.querySelectorAll('.menu-icon');
const spanLine = document.querySelectorAll('.span-item');

function activeLinkk(){
    menuHamber.forEach((item) =>
    item.classList.toggle('active'));
    spanLine.forEach((item) =>
    item.classList.toggle('active2'))

}
menu.forEach((item) =>
item.addEventListener('click',activeLinkk));