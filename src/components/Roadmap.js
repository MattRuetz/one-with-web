import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

// Stages is an array of strings, each representing a stage
const Roadmap = () => {
  useEffect(() => {
    const timelineBar = document.getElementById("bar-container");
    const tl2 = gsap.timeline();
    // create context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      tl2.from(".bar-filled", {
        y: "-110vh",
        scrollTrigger: {
          trigger: "#roadmap",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
          markers: true,
        },
      });
      tl2.to(".bar-container", {
        scrollTrigger: {
          trigger: ".bar-container",
          start: "top top",
          end: "bottom bottom",
          pin: true,
          // scrub: 1,
          // onEnter: () => {
          //   timelineBar.style.setProperty("position", "sticky");
          // },
        },
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);

  const stages = ["Planning", "Design", "Development", "Launch & Maintenance"];
  return (
    <>
      <div id='bar-container' className='bar-container'>
        <div class='bar-blank'></div>
        <div class='bar-filled'></div>

        <div class='nodes'>
          {stages.map((stage, index) => (
            <div
              className='node-item'
              style={{
                paddingTop:
                  ((index * 100) / (stages.length * 100)) * 100 + 7 + "vh",
              }}
            >
              <div class='node indicator inactive'></div>
              <div class='node text'>{stage}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
