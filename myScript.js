let items = document.querySelectorAll("[data-animation]")


let lockmode = 0



window.addEventListener('scroll',function(){
    if(lockmode == 0){
        lockmode = 1
        aos()
        setTimeout(()=>{
            lockmode = 0
        },150)
    }
})




onload = ()=>{
    aos()
    textAnimation()
}


function aos(){
    console.log('a')
    let windowTop = scrollY + innerHeight * 0.75



    items.forEach(Element=>{

        if(windowTop > Element.offsetTop){
            Element.classList.add("animate")
        }else{
            Element.classList.remove("animate")
        }



    })

}



function textAnimation(){
    let timer = 100
    let text = "Seja bem vindo ao meu site! :) "
    let array = text.split('')
    let h2 = document.getElementById('textIntroducao')

    for(let i = 0; i < array.length;i++){

        setTimeout(()=>{
            h2.innerHTML+=array[i]
        },timer)
        timer+=50

    }

}