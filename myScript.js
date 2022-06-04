let items = document.querySelectorAll("[data-animation]")



window.addEventListener('scroll',aos)


aos()


function aos(){
    
    let windowTop = scrollY + innerHeight * 0.75



    items.forEach(Element=>{

        if(windowTop > Element.offsetTop){
            Element.classList.add("animate")
        }else{
            Element.classList.remove("animate")
        }



    })

}