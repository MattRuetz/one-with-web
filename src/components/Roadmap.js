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
                .from(content, {
                    y: 1000,
                    scrollTrigger: {
                        trigger: '#roadmap',
                        start: 'top center',
                        end: `+=${window.innerHeight * 0.5}`,
                        scrub: 1,
                        markers: true,
                        onEnter: showContent,
                        onLeaveBack: hideContent,
                    },
                })
                .to(content, {
                    scrollTrigger: {
                        trigger: '#roadmap',
                        start: 'bottom bottom',
                        end: `+=${window.innerHeight}`,
                        scrub: 1,
                        markers: true,
                        onLeave: () => {
                            content.classList.add('hidden');
                        },
                        onEnterBack: () => {
                            content.classList.remove('hidden');
                        },
                    },
                });

            fillItems.forEach((fillItem, index) =>
                tl2.from(fillItem, {
                    scaleY: 0,
                    transformOrigin: 'left top',
                    scrollTrigger: {
                        trigger: '#roadmap',
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
            <div className="content-area hidden">
                <Stages showIndex={showIndex} hideIndex={hideIndex} />
            </div>
        </>
    );
};

export default Roadmap;
