import Cursor from "./cursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector("body");

window.onload = () => {
  body.classList.remove("loading");
  gsap.from(body, {
    opacity: 0,
    duration: 1,
    ease: "Power3.easeInOut",
  });
  const cursor = new Cursor(document.querySelector(".cursor"));
};

const sectionColors = ["white"]
const navColors =     ["#FFFFFF","#FCFFF6", "#90EE90", "#EE82EE", "#FF6347"]

gsap.set(".hero", {backgroundColor:gsap.utils.wrap(sectionColors)})

const sections = gsap.utils.toArray(".hero")

sections.forEach(function(section, index){
	console.log(section, navColors[index])
	ScrollTrigger.create({
		trigger:section,
		start:"top 500px",
		end:"bottom 10px",
		animation:gsap.to(".hero", {backgroundColor:navColors[index], immediateRender:false}),
		toggleActions:"restart none none reverse"
		
	})
})