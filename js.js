


let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    let user_1=prompt("Enter Player1's Name_ : ");
    let user_2=prompt("Enter Player2's Name_: ");
}
)



let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
    let user_1=prompt("Enter Player's Name_ : ");
    let med=prompt("Enter the medium of Game : Easy,Moderate or Tough ??");
}
)




let k=0;
let btn3=document.querySelector(".box");
btn3.addEventListener("click",()=>{
    if(k==0){
        btn3.innerText="X";
        k=k+1;
    }
    else{
        btn3.innerText="O";
        k=k-1;
    }
});






