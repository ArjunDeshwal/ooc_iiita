let text=document.querySelector("#nav h4")
let anim_nav=gsap.to("#nav h4", {
    
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.2,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }

})
gsap.to("#main", {
    backgroundColor:"#fcfcfc",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -40%",
        end:"top -50%",
        scrub:2,
    }
})