var timer=60;
var score=0;
let hitrn=0;
function incscorevalue(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
    
}
 
function makebubble(){
    var daba="";
for(var i=0;i<169;i++){
    var we=Math.floor(Math.random()*10)
    daba+=`<div class="bubble">${we}</div>`;
}
document.querySelector("#panelbottom").innerHTML=daba;
}

function newhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrn;
    console.log(hitrn)
}
newhit();


function timechalega(){
    var int=setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timervalue").textContent=timer; 
        }
        else{
            clearInterval(int);
            document.querySelector("#panelbottom").innerHTML="`<h1>Game over</h1>";
        }
    },1000)
}

document.querySelector("#panelbottom").addEventListener("click",function(dets){
    // or ye line se number dega na ki string

  let clickednumber=(Number(dets.target.textContent));
// ye line se string dega 
// console.log(dets.target.textContent);
   if(clickednumber === hitrn){
    incscorevalue(); 
    makebubble();
    newhit(); 
   }


})
timechalega();

makebubble();