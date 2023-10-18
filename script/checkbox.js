var anwsers = document.getElementsByClassName("s9-answer");
for (var i = 0; i < anwsers.length; i++) {
   anwsers.item(i).addEventListener("click",(e)=>click(e)); 
}

const generateHeart = (mode) => {
    let heart = document.createElement('img')
    if(mode === 1){
        heart.src = "./res/img/heart1.png"
    }else{
        heart.src = "./res/img/heart2.png"
    }
    heart.classList = "s9-heart"
    return heart
}

const click = (e) =>{
    const response = e.target.innerText

    console.log(response)

    //insert hearts
    switch (response){
        case "Es ist einfach unglaublich, ich komme.":
            let heart3 = generateHeart(0)
            heart3.style = "position:absolute;bottom:10vh;left:10vw;max-width:13vw;max-height:13vh;"
            document.getElementById('s9').prepend(heart3)
        case "Ich würde mich gerne mit dir unterhalten, aber ich weiß nicht, wer du bist. Dann komm zu mir.":
            let heart4 = generateHeart(0)
            heart4.style = "position:absolute;top:5vh;right:2vw;max-width:10vw;max-height:10vh;"
            document.getElementById('s9').prepend(heart4)
        case "Du bist völlig verrückt.":
            let heart1 = generateHeart(1)
            heart1.style = "position:absolute;top:0px;left:0px;max-width:15vw;max-height:15vh;"
            document.getElementById('s9').prepend(heart1)
        case "Rede nicht mehr mit mir --'":
            let heart2 = generateHeart(1)
            heart2.style = "position:absolute;bottom:3vh;right:15vw;max-width:18vw;max-height:18vh;"
            document.getElementById('s9').prepend(heart2)
    }

}