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


aos()


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

textAnimation()

function textAnimation(){
    let i = 0
    let timer = 1000
    let array = ['S','e','j','a']

    while(i < array.length){
        setTimeout(()=>{
            console.log(array[i])
        },timer)
        i++
        timer+=1000
    }
        

}