import LocomotiveScroll from "locomotive-scroll";

const pageContainer = document.querySelector("[data-scroll-container]");

const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
});



scroller.on("scroll", (instance) => {
    let height = window.innerHeight;
    let customCursor = document.querySelector(".cursor");
    let footer = document.querySelector(".footer");
    let chat = document.querySelector(".chat");
    let scrollPy = instance.scroll.y + "px";
    customCursor.style.top = scrollPy;
    footer.style.transform = "translateY(" + scrollPy + ")";
    chat.style.top = instance.scroll.y + (height*.85) + "px";
    chat.style.opacity = 0 + (instance.scroll.y * 0.005);
});
