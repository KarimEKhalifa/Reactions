let shape = document.getElementById("shape");
let text = document.getElementById("time");
let now = new Date();

let changeShape = ()=>{
    now = new Date()
    shape.style.display = "block";
    let ran = Math.random()+0.2
    shape.style.width = (ran)*200+"px";
    shape.style.height = (ran)*200+"px";
    shape.style.marginTop = ran*200+"px"
    shape.style.marginLeft = ran*900+"px"
    if(Math.ceil(ran*100)%2 === 0){
        shape.style.borderRadius = "50%"
    }else{
        shape.style.borderRadius = "0%"
    }
    shape.style.backgroundColor='#' + parseInt(ran * 0xffffff).toString(16)
}

let pauseChange = ()=>{
    text.innerHTML = ((new Date()-now)/1000)+" s"
    let ran = Math.random()
    shape.style.display = "none";
    setTimeout(changeShape,ran*2000)
}

shape.onclick = pauseChange