const list = document.querySelectorAll('.list-nav');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));


const destination = document.querySelectorAll('.destination');
function activeLinkk(){
    destination.forEach((item) =>
    item.classList.remove('active2'));
    this.classList.add('active2');

}
destination.forEach((item) =>
item.addEventListener('click',activeLinkk));

