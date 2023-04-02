import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Stages from './Stages';

gsap.registerPlugin(ScrollTrigger);

// Stages is an array of strings, each representing a stage
const Roadmap = () => {
    const [showIndex, setShowIndex] = useState(-1);
    const [hideIndex, setHideIndex] = useState(-1);

    useEffect(() => {
        const tl2 = gsap.timeline();
        // create context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
            tl2.to('.bar-container', {
                scrollTrigger: {
                    trigger: '.bar-container',
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: true,
                    // markers: true,
                },
            });

            tl2.from('.seg-0', {
                scaleY: 0,
                scrollTrigger: {
                    trigger: '.seg-0',
                    start: 'top bottom',
                    end: 'top top',
                    // markers: true,
                    scrub: 2,
                    onLeave: () => {
                        setShowIndex(0);
                        setHideIndex(-1);
                    },
                },
            });

            document
                .querySelectorAll('.animate-fill')
                .forEach((fillItem, index) =>
                    tl2.from(fillItem, {
                        scaleY: 0,
                        transformOrigin: 'left top',
                        scrollTrigger: {
                            trigger: '#roadmap',
                            start: `${(index + 1) * window.innerHeight} center`,
                            end: `+=${window.innerHeight * 0.1}`,
                            // markers: true,
                            scrub: 2,
                            onLeave: () => {
                                setShowIndex(index + 1);
                                setHideIndex(index);
                            },
                            onLeaveBack: () => {
                                setShowIndex(index);
                                setHideIndex(index + 1);
                            },
                        },
                    })
                );
        });

        return () => ctx.revert(); // cleanup
    }, []);

    const stages = [
        'Planning',
        'Design',
        'Development',
        'Launch & Maintenance',
    ];
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
                                }`}
                            ></div>
                            <div className="node indicator inactive"></div>
                            <div className="node text">{stage}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="content-area">
                <Stages showIndex={showIndex} hideIndex={hideIndex} />
            </div>
        </>
    );
};

export default Roadmap;
