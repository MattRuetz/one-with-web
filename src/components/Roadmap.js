import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Stages from './Stages';

gsap.registerPlugin(ScrollTrigger);

// Stages is an array of strings, each representing a stage
const Roadmap = ({ stages }) => {
    const [showIndex, setShowIndex] = useState(0);
    const [hideIndex, setHideIndex] = useState(-1);

    useEffect(() => {
        const roadmapSection = document.getElementById('roadmap');
        roadmapSection.style.setProperty('height', `${100 * stages.length}vh`);

        const tl2 = gsap.timeline();
        // create context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)

        // Cache Selectors
        const barContainer = document.querySelector('.bar-container');
        const content = document.querySelector('.content-area');
        const fillItems = document.querySelectorAll('.animate-fill');

        // Define callback functions
        function showContent() {
            content.classList.remove('hidden');
        }
        function hideContent() {
            content.classList.add('hidden');
        }
        function incrementStage(index) {
            setShowIndex(index + 1);
            setHideIndex(index);
        }
        function decrementStage(index) {
            setShowIndex(index);
            setHideIndex(index + 1);
        }

        let ctx = gsap.context(() => {
            tl2.to(barContainer, {
                scrollTrigger: {
                    trigger: barContainer,
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: true,
                },
            })
                .from('.seg-0', {
                    scaleY: 0,
                    scrollTrigger: {
                        trigger: '.seg-0',
                        start: 'top bottom',
                        end: 'top top',
                        scrub: 2,
                    },
                })
                // Planning slides up when entering roadmap section
                .from(content, {
                    y: 1000,
                    scrollTrigger: {
                        trigger: roadmapSection,
                        start: 'top center',
                        end: `+=${window.innerHeight * 0.5}`,
                        scrub: 1,
                        markers: true,
                        onEnter: showContent,
                        onLeaveBack: hideContent,
                    },
                })
                //
                .to(content, {
                    scrollTrigger: {
                        trigger: roadmapSection,
                        start: 'bottom bottom',
                        end: `+=${window.innerHeight}`,
                        scrub: 1,
                        markers: true,
                        onLeave: hideContent,
                        onEnterBack: showContent,
                    },
                });
            // animates progress bar filling between stages
            fillItems.forEach((fillItem, index) =>
                tl2.from(fillItem, {
                    scaleY: 0,
                    transformOrigin: 'left top',
                    scrollTrigger: {
                        trigger: roadmapSection,
                        start: `${(index + 1) * window.innerHeight} center`,
                        end: `+=${window.innerHeight * 0.1}`,
                        // markers: true,
                        scrub: 2,
                        onLeave: () => incrementStage(index),
                        onLeaveBack: () => decrementStage(index),
                    },
                })
            );
        });

        return () => ctx.revert(); // cleanup
    }, [stages]);

    return (
        <>
            <div id="bar-container" className="bar-container">
                <div className="bar-blank"></div>
                <div className="bar-filled seg-0"></div>

                <div className="nodes">
                    {stages.map((stage, index) => (
                        <div
                            className="node-item"
                            style={{
                                paddingTop:
                                    ((index * 100) / (stages.length * 100)) *
                                        100 +
                                    7 +
                                    'vh',
                            }}
                        >
                            <div
                                className={`bar-filled animate-fill seg-${
                                    index + 1
                                } total-seg-${stages.length}`}
                            ></div>
                            <div className="node indicator inactive"></div>
                            <div className="node text">{stage}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="content-area hidden">
                <Stages
                    showIndex={showIndex}
                    hideIndex={hideIndex}
                    stages={stages}
                />
            </div>
        </>
    );
};

export default Roadmap;
