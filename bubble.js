var hit=0;
var scor = 0;
function makebuble(){
    var collect = "";
    for(var i = 1 ; i<190 ; i++){
        var n = Math.floor(Math.random()*10);
       collect += `<div class="bubble">${n}</div>`;
    }
    
    document.querySelector("#pagebtm").innerHTML = collect;
}

function hitkaro(){
    hit = Math.floor(Math.random()*10); 
    document.querySelector("#hit").textContent = hit;
    
}

function timerstr(){
    var timer = 60;
    var time = setInterval(function(){
       if(timer>0){
           timer--;
           document.querySelector("#time").textContent = timer;
       }
       else{
           clearInterval(time);
           document.querySelector("#pagebtm").innerHTML = `<h1>Game Over <br> your score is ${scor}</h1>`
       }
    },1000)
}


function score(){
   scor += 10;
   document.querySelector("#sco").textContent = scor;
}


document.querySelector("#pagebtm").addEventListener("click",function(dets){
       
         if(Number(dets.target.textContent)==hit){
           makebuble();
           score();
           hitkaro();
         }
       
       else{
        scor-=5;
        document.querySelector("#sco").textContent = scor;
       }
})

hitkaro();
makebuble();
timerstr();
