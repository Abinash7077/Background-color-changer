let Color=['black','blue','red','green','crimson']
let colors=['crimson','red','pink','orange','black']
let back=['white','red','black','pink','black']
let container=document.querySelector('.container')
let button=document.querySelector('.button')
let name=document.querySelector('.p')
button.addEventListener("click",()=>{
    let random=Color[Math.floor(Math.random()*Color.length)]
    let randomColor=colors[Math.floor(Math.random()*colors.length)]
    button.style.color=randomColor
    console.log("clicked")
    container.style.background=random;
    button.style.boxShadow=`-2px -1px 5px 7px ${randomColor}`
    name.style.color=randomColor
    name.style.background=back[Math.floor(Math.random()*back.length)]

})
