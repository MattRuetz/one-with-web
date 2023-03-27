import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

// Stages is an array of strings, each representing a stage
const Roadmap = () => {
  const stages = ["Planning", "Design", "Development", "Launch & Maintenance"];
  return (
    <>
      <div className='bar-container'>
        <div class='bar-blank'></div>
        <div class='bar-filled'></div>

        <div class='nodes'>
          {stages.map((stage, index) => (
            <div
              className='node-item'
              style={{
                paddingTop:
                  ((index * 100) / (stages.length * 100)) * 100 + "vh",
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
