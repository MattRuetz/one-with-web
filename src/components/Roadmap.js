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
      tl2.to(".bar-container", {
        scrollTrigger: {
          trigger: ".bar-container",
          start: "top top",
          end: "bottom bottom",
          pin: true,
          markers: true,
        },
      });

      document.querySelectorAll(".animate-fill").forEach((fillItem, index) =>
        tl2.from(fillItem, {
          scaleY: 0,
          transformOrigin: "left top",
          scrollTrigger: {
            trigger: "#roadmap",
            start: `${(index + 1) * window.innerHeight} center`,
            end: "+=50px",
            markers: true,
            scrub: 2,
          },
        })
      );
    });

    return () => ctx.revert(); // cleanup
  }, []);

  const stages = ["Planning", "Design", "Development", "Launch & Maintenance"];
  return (
    <>
      <div id='bar-container' className='bar-container'>
        <div className='bar-blank'></div>
        <div className='bar-filled seg-0'></div>

        <div className='nodes'>
          {stages.map((stage, index) => (
            <div
              className='node-item'
              style={{
                paddingTop:
                  ((index * 100) / (stages.length * 100)) * 100 + 7 + "vh",
              }}
            >
              <div className={`bar-filled animate-fill seg-${index + 1}`}></div>
              <div className='node indicator inactive'></div>
              <div className='node text'>{stage}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
