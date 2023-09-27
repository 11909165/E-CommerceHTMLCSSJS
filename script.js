                                         // Hamburger Menu
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

const close = document.getElementById('close');
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

                                        // Single product section 
var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

for (var i = 0; i < smallimg.length; i++) {
    smallimg[i].addEventListener('click', function() {
        MainImg.src = this.src;
    });
}

