let boxes=document.querySelectorAll(".btn")
let reset_btn=document.querySelector(".reset");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msg-container")
let turn=true;
const ans=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

boxes.forEach((btn) => {
    btn.addEventListener("click",()=>{
        console.log("im clicked");

        if(turn){
            btn.innerText="X";
            turn=false;
        }
        else{
            btn.innerText="O";
            turn=true;
        }
        btn.disabled=true;

        checkwinner();
    });
});

const disablebtns=()=>{

    for(let box of boxes){
        box.disabled=true;
    }

}

const showwinner=(winner)=>{
  msg.innerText=`Congratulations, winner is  ${winner}`;
  msgcontainer.classList.remove("hide");
  disablebtns();
};

const checkwinner=()=>{
    for(let pattern of ans){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
    

    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val  &&  pos2val==pos3val){
            console.log("winner");
            showwinner(pos1val);
        }
    }
  }
  
};

reset_btn.addEventListener("click",()=>{
    console.log("reset is clicked");
    turn=true;
    boxes.forEach((btn) => {
        btn.innerText="";
        btn.disabled=false;
    });
    msgcontainer.classList.add("hide");
});
