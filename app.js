let boxes = document.querySelectorAll(".Box");
let resetbutton = document.querySelector("#reset_btn");
let newGamebtn = document.querySelector("#new_btn");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turnO = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () => {
    turnO=true;
    enablebtns();
    msgcontainer.classList.add("hide");
}

boxes.forEach((Box) =>{ 
    Box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            Box.innerText = "O";
            turnO = false;
        }
        else{
            Box.innerText = "X";
            turnO=true;
        }
        Box.disabled=true;
        checkWinner();
    });
});
const disablebtns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enablebtns = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};
const showinner = (winner) =>{
  msg.innerText = `congratulations winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disablebtns();
};
const checkWinner = () => {
    for(let pattern of winpatterns){
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;
       if(pos1val != "" && pos2val != "" && pos3val!= ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner", pos1val);
            showinner(pos1val);
        }
       }
    }
};
newGamebtn.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);
