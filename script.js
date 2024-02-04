let text = document.getElementById('text');
let header = document.getElementById('header');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let mountain3 = document.getElementById('mountain3');
let meadow = document.getElementById('meadow');
let tree1 = document.getElementById('tree1');
let tree2 = document.getElementById('tree2');
let hello = document.getElementById("hello")
let sec1 = document.getElementById("sec1")
let section1 = document.getElementById('section1')
window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    let valuev = window.screenX;
    text.style.top=value*.2+'px'
    header.style.top= value*.7+'px'
    mountain1.style.top = value*.5+'px'
    mountain2.style.top = value *.3+'px'
    mountain3.style.top = value * .2+'px'
    meadow.style.top = value *.2+'px'
    tree1.style.left = value*-.3+'px';
    tree2.style.left=value*.3+'px';
    if(value>1000)
    {
        section1.style.position=sticky+''; 
    }

})