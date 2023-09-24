const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var cur = document.querySelector("#cursor");
var timeout;

function circlemove(xscale , yscale){
window.addEventListener("mousemove",function(dets){
       cur.style.transform = `translate(${dets.clientX+10}px, ${dets.clientY+10}px) scale(${xscale},${yscale})`
})
}

function firstPageAnim(){
     var t1 = gsap.timeline();
     t1.from("#nav",{
          y:'-10',
          opacity:0,
          ease:Expo,
          duration :1.5,
     })
     .to(".boundelem",{
          y:0,
          ease:Expo.easeInOut,
          delay:-1,
          duration:2,
          stagger:.3
     })
     .from("#footer",{
          y:-10,
          opacity:0,
          duration:1.5,
          delay:-1,
          ease:Expo.easeInOut
     })
}

function cirlechange(){
     var scx = 1;
     var scy = 1;
     var prevx = 0;
     var prevy = 0;
     window.addEventListener("mousemove",function(dets){
           clearTimeout(timeout);

          scx = gsap.utils.clamp(0.8,1.5,dets.clientX-prevx);
          scy = gsap.utils.clamp(0.8,1.5,dets.clientY-prevy);
  
          prevx = dets.clientX;
          prevy = dets.clientY;

          circlemove(scx,scy);
          timeout = setTimeout(function(){
               cur.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1})`;
          },100)
     })
}


var hlo = document.querySelectorAll(".elem");
hlo.forEach(function(elem){
    elem.addEventListener("mouseleave",function(dets){
         gsap.to(elem.querySelector("img"),{
           opacity:0,
           ease:Power4,
           left:elem.getBoundingClientRect().width/2,
           top:elem.getBoundingClientRect().height/2,
         })
         console.log("nikal gay");
       })
    elem.addEventListener("mousemove",function(dets){
     var rotatek = 0;
     var diffy = dets.clientY-elem.getBoundingClientRect().top;
     var difro = dets.clientx-rotatek;
     rotatek = dets.clientX;
     var a = elem.querySelector("img");
       gsap.to(a,{
          opacity:1,
          top:diffy,
          left:dets.clientX,
          ease:Power4,
          rotate:gsap.utils.clamp(-20,10,difro),
       })
       console.log(diffy,dets.clientX);
    })
})


circlemove(1,1);
firstPageAnim();
cirlechange();
