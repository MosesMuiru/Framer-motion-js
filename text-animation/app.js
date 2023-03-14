const head = document.querySelector("h1")

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
head.onmouseover = event => {
    let interation = 0;

   const interval= setInterval (() =>{


        event.target.innerText = event.target.innerText.split("")
        .map((letter,index) =>{
            if(index < interation) return event.target.dataset.value[index]

            return letters[Math.floor(Math.random()*26)]}).join("")
        if(interation >= event.target.dataset.value.length) clearInterval(interval) 
        interation+=2;
       
        // console.log(head.length)

    },50)
}