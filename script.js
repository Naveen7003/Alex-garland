gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
gsap.to("#page1",{   
        transform:"translateY(70%)",
        justifyContent:"center",
        width:"80%",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            // markers:true,
            start:"top 100%",
            end:"top 0%",
            scrub:true,
        }
})
gsap.to("#page1 h1",{   
    fontSize:"5vw",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 100%",
        end:"top 0%",
        scrub:true,
    }
})
gsap.to("#page1 h2",{   
    fontSize:"1vw",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 100%",
        end:"top 0%",
        scrub:true,
    }
})
gsap.to("#page2",{
    transform:"translateY(70%)",
        justifyContent:"center",
        width:"80%",
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            // markers:true,
            start:"top 100%",
            end:"top 0%",
            scrub:true,
        }
})
gsap.to("#page3",{
    transform:"translateY(70%)",
        justifyContent:"center",
        width:"80%",
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            // markers:true,
            start:"top 100%",
            end:"top 0%",
            scrub:true,
        }
})
gsap.to("#page4",{
    transform:"translateY(70%)",
        justifyContent:"center",
        width:"80%",
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            // markers:true,
            start:"top 100%",
            end:"top 0%",
            scrub:true,
        }
})
var pg7a = document.querySelector("#pg7a");
var pg7b= document.querySelector("#pg7b");
var pg7c= document.querySelector("#pg7c");
var pg7d = document.querySelector("#pg7d");
var pg7e = document.querySelector("#pg7e");
var pg7f = document.querySelector("#pg7f");
pg7a.addEventListener("mouseenter",function(){
    pg7a.style.height = "29vw";
    pg7a.style.width = "29vw";
    pg7c.style.height = "8vw";
    pg7c.style.width = "8vw";
    pg7d.style.height = "8vw";
    pg7d.style.width = "8vw";
    pg7e.style.height = "8vw";
    pg7e.style.width = "8vw";
    pg7f.style.height = "8vw";
    pg7f.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7a.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
pg7b.addEventListener("mouseenter",function(){
    pg7b.style.height = "29vw";
    pg7b.style.width = "29vw";
    // pg7c.style.height = "8vw";
    // pg7c.style.width = "8vw";
    pg7d.style.height = "8vw";
    pg7d.style.width = "8vw";
    pg7e.style.height = "8vw";
    pg7e.style.width = "8vw";
    pg7f.style.height = "8vw";
    pg7f.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7b.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7b.style.height = "14.58vw";
    pg7b.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
pg7c.addEventListener("mouseenter",function(){
    pg7c.style.height = "29vw";
    pg7c.style.width = "29vw";
    pg7a.style.height = "8vw";
    pg7a.style.width = "8vw";
    // pg7d.style.height = "8vw";
    // pg7d.style.width = "8vw";
    pg7e.style.height = "8vw";
    pg7e.style.width = "8vw";
    pg7f.style.height = "8vw";
    pg7f.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7c.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7b.style.height = "14.58vw";
    pg7b.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
pg7d.addEventListener("mouseenter",function(){
    pg7d.style.height = "29vw";
    pg7d.style.width = "29vw";
    pg7b.style.height = "8vw";
    pg7b.style.width = "8vw";
    pg7a.style.height = "8vw";
    pg7a.style.width = "8vw";
    // pg7e.style.height = "8vw";
    // pg7e.style.width = "8vw";
    pg7f.style.height = "8vw";
    pg7f.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7d.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7b.style.height = "14.58vw";
    pg7b.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
pg7e.addEventListener("mouseenter",function(){
    pg7e.style.height = "29vw";
    pg7e.style.width = "29vw";
    pg7a.style.height = "8vw";
    pg7a.style.width = "8vw";
    pg7b.style.height = "8vw";
    pg7b.style.width = "8vw";
    pg7c.style.height = "8vw";
    pg7c.style.width = "8vw";
    // pg7f.style.height = "8vw";
    // pg7f.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7e.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7b.style.height = "14.58vw";
    pg7b.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
pg7f.addEventListener("mouseenter",function(){
    pg7f.style.height = "29vw";
    pg7f.style.width = "29vw";
    pg7c.style.height = "8vw";
    pg7c.style.width = "8vw";
    pg7d.style.height = "8vw";
    pg7d.style.width = "8vw";
    pg7a.style.height = "8vw";
    pg7a.style.width = "8vw";
    pg7b.style.height = "8vw";
    pg7b.style.width = "8vw";
    pg7a.style.transition = "all ease 1s";
    pg7b.style.transition = "all ease 1s";
    pg7c.style.transition = "all ease 1s";
    pg7d.style.transition = "all ease 1s";
    pg7e.style.transition = "all ease 1s";
    pg7f.style.transition = "all ease 1s";
})
pg7f.addEventListener("mouseleave",function(){
    pg7a.style.height = "14.58vw";
    pg7a.style.width = "14.58vw";
    pg7b.style.height = "14.58vw";
    pg7b.style.width = "14.58vw";
    pg7c.style.height = "14.58vw";
    pg7c.style.width = "14.58vw";
    pg7d.style.height = "14.58vw";
    pg7d.style.width = "14.58vw";
    pg7e.style.height = "14.58vw";
    pg7e.style.width = "14.58vw";
    pg7f.style.height = "14.58vw";
    pg7f.style.width = "14.58vw";
})
gsap.from("#page6 #t4",{
    y:40,
    opacity:0,
    scrollTrigger:{
        trigger:"#t4",
        scroller:"#main",
        start:"top 78%",
        end:"top 76%",
        // markers:true,
        scrub:3
    }
})
gsap.from("#page6 #t2",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#t2",
        scroller:"#main",
        start:"top 78%",
        end:"top 76%",
        // markers:true,
        scrub:3
    }
})
gsap.from("#page6 #t3",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#t3",
        scroller:"#main",
        start:"top 78%",
        end:"top 76%",
        // markers:true,
        scrub:3
    }
})
gsap.from("#page8 #eight",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#eight",
        scroller:"#main",
        start:"top 78%",
        end:"top 76%",
        // markers:true,
        scrub:3
    }
})
gsap.from("#page8 h1",{
    x:1000,
    scrollTrigger:{
        trigger:"#page8 h1",
        scroller:"#main",
        start:"top 78%",
        end:"top 76%",
        // markers:true,
        scrub:3
    }
})
gsap.from("#page8 h2",{
    x:1000,
    scrollTrigger:{
        trigger:"#page8 h2",
        scroller:"#main",
        start:"top 78%",
        end:"top 76%",
        // markers:true,
        scrub:3
    }
})
gsap.from("#page8 button",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page8 button",
        scroller:"#main",
        start:"top 78%",
        end:"top 76%",
        // markers:true,
        scrub:3
    }
})