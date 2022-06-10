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

    
    let arrayDesign = [["100px","50px"],["200px","50px"],["300px","50px"]]
        
    let Count = 0
    let leftDesigns = document.querySelectorAll('.leftDesign')
    let rightDesigns = document.querySelectorAll('.rightDesign')
        
    leftDesigns.forEach(Element=>{
        Element.style.opacity = "1"
        Element.style.top = arrayDesign[Count][0]
        Element.style.left = arrayDesign[Count][1]
        Count++
    })
    Count = 0
    rightDesigns.forEach(Element=>{
        Element.style.opacity = "1"
        Element.style.top = arrayDesign[Count][0]
        Element.style.right = arrayDesign[Count][1]
        Count++
    })
    


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

