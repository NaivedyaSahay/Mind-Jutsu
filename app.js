

gameseq=[];
userseq=[];

let colorbutton=["red","yellow","green","purple"];
let started=false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
 if(started==false){
    console.log("started");
    started=true;
    levelUp();
 }
});

function btnflash(btn){
  btn.classList.add("flash");
  
  setTimeout(function(){
      btn.classList.remove("flash")
  },250);
}

function levelUp(){
 userseq=[];
 level++;
 h3.innerText=`Level ${level}`;
 let randomidx=Math.floor(Math.random() * 3);
 let randomcolor=colorbutton[randomidx];
 let randombutton=document.querySelector(`.${randomcolor}`);
 gameseq.push(randomcolor);
 console.log(gameseq);
 btnflash(randombutton);
}

function checkans(idx){
 
 if(userseq[idx]===gameseq[idx]){
  if(userseq.length===gameseq.length){
    setTimeout(levelUp,1000);
  }
 }
 else{
  h3.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
  },150);
  resetgame();
 }
}

function btnpress(){
  console.log("btn was pressed");
  let btn=this;
  btnflash(btn);

  usercolor=btn.getAttribute("id");
  userseq.push(usercolor);
  console.log(userseq);

  checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
  btn.addEventListener("click",btnpress);
}

function resetgame(){
 started=false;
 userseq=[];
 gameseq=[];
 level=0;
}