var anwsers = document.getElementsByClassName("s9-answer");
for (var i = 0; i < anwsers.length; i++) {
   anwsers.item(i).addEventListener("click",(e)=>click(e)); 
}


const click = (e) =>{
    const response = e.target.innerText

    document.getElementsByClassName('message')[0].style.opacity = 1;
    document.getElementsByClassName('message')[0].style.zIndex = 10;

}