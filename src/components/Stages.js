import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import StageContent from "./StageContent";

gsap.registerPlugin(ScrollTrigger);

const Stages = ({ showIndex, hideIndex, stages }) => {
  useEffect(() => {
    let hideElement = document.querySelector(`.content-ind-${hideIndex}`);
    let showElement = document.querySelector(`.content-ind-${showIndex}`);

    let ctx = gsap.context(() => {
      gsap.to(hideElement, {
        yPercent: showIndex > hideIndex ? "150" : "-150",
        opacity: 0,
        duration: 0.1,
      });
      gsap.from(showElement, {
        yPercent: showIndex > hideIndex ? "-150" : "150",
        opacity: 0,
        duration: 0.5,
        onStart: () => {
          showElement && showElement.classList.remove("hidden");
          document.querySelectorAll(".stage-content").forEach((item, i) => {
            if (i !== showIndex) {
              item.classList.add("hidden");
              console.log("hiding " + i + " " + showIndex);
            }
          });
        },
      });
    });
    return () => ctx.revert(); // cleanup
  }, [showIndex, hideIndex]);

  return (
    <>
      {stages.map((stage, index) => {
        return (
          <div className={`stage-content content-ind-${index}`}>
            <h1 className='stage-heading'>{stage}</h1>
            <StageContent stageName={stage} />
          </div>
        );
      })}
    </>
  );
};

export default Stages;
