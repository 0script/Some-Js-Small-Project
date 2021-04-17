const hexa=['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0];

const btn=document.querySelector('button');
const span=document.querySelector('span');

btn.addEventListener('click',function () {  
    let color=returnHexaColor();
    document.body.style.backgroundColor=color;
    span.textContent=color;
});

function returnHexaColor() {
    color='#';
    while(color.length!=7){
        color+=hexa[Math.floor(Math.random()*hexa.length)];
    }
    return color;
  }