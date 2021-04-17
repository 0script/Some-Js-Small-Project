const counter=document.querySelector('span');
let btns=document.querySelectorAll('.btn');
let count=0;

console.log(btns);

btns.forEach(btn => {

    btn.addEventListener('click',function(e){
        const button=e.currentTarget.classList;

        if(button.contains('up'))
            count++;
        else if(button.contains('down'))
            count--;
        else
            count=0;

        if(count==0)
            counter.style.color='black';
        else if(count<0)
            counter.style.color='red';
        else
            counter.style.color='green';
        
        counter.textContent=count;
   });
});