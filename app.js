const start_btn=document.querySelector('.start');
const stop_btn=document.querySelector('.stop');
const reset_btn=document.querySelector('.reset');

var time={

    mllsec:0,
    sec:0,
    min:0,
    hour:0,
    run:true,
    deb:0,
    fin:0,

    start:function(){
        
        this.run=true;
        this.deb=Date.now();
        stop_btn.addEventListener('click',()=>{
            this.stop();
        });

    
        this.chrono();
    },

    chrono:function () {

        setTimeout(() => {
            if(this.run){
                this.mllsec=Date.now()-this.deb;
                
                if(this.mllsec>=1000){
                    this.deb=Date.now();                    
                    this.getTimeValue();
                
                }

                this.print();
                this.chrono();
            }    
        }, 10);
        
    },
    
    reset:function () {
        this.run=false;
        let span=document.querySelectorAll('span');
         span.forEach((span)=>{
            span.textContent="00";
         });

      },
    
    getTimeValue:function () {

        if(this.sec<59){
            this.sec++;
        }else{
            this.sec=0;
            if(this.min<59){
                this.min++;
            }else{
                this.min=0;
                this.hour++;
            }
        }
      },

    stop:function () {
        this.run=false;
        start_btn.addEventListener('click',()=>{
            this.start();
        });
      },

    print:function(){
        document.querySelector('.mllsec').textContent=this.mllsec;
        if(this.sec<10){
            document.querySelector('.sec').textContent="0"+this.sec;
        }else{
            document.querySelector('.sec').textContent=this.sec;
        }
        if(this.min<10){
            document.querySelector('.min').textContent="0"+this.min;
        }else{
            document.querySelector('.min').textContent=this.min;
        }
        if(this.hour<10){
            document.querySelector('.hours').textContent="0"+this.hour;    
        }else{
            document.querySelector('.hours').textContent=this.min;    
        }
    }
};

start_btn.addEventListener('click',()=>{
    time.start();
});

reset_btn.addEventListener('click',()=>{
    time.reset();
});