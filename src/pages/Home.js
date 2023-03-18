import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import InfoCard from '../components/InfoCard';
import { cleanup } from '@testing-library/react';
import { FaDungeon } from 'react-icons/fa';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
            tl.from('.pannel-l', {
                duration: 0.6,
                delay: '2s',
                x: -500,
                opacity: 0,
            });
            tl.from('.pannel-r', {
                duration: 0.7,
                delay: '2s',
                y: -50,
                opacity: 0,
                ease: 'Ease',
            });
            tl.from('.pannel-r .ne-ith-eb span', {
                duration: 0.4,
                delay: '1s',
                x: -100,
                opacity: 0,
                stagger: 0.15,
            });
            tl.from('.pannel-r .card', {
                duration: 0.8,
                delay: '3s',
                y: -500,
                opacity: 0,
                stagger: 0.3,
            });

            tl.from('#shineCards', {
                duration: 0.5,
                x: -200,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '#intro',
                    start: 'top center',
                    end: 'top top',
                    scrub: 3,
                },
            });
        }); // <- IMPORTANT! Scopes selector text

        return () => ctx.revert(); // cleanup
    }, []); // <- empty dependency Array so it doesn't re-run on every render

    const pannelR = useRef();

    useEffect(() => {
        pannelR.current.style.setProperty('--mouse-x', '40%');
        pannelR.current.style.setProperty('--mouse-y', '100%');
        const moveGradient = (e) => {
            const winWidth = window.innerWidth;
            const winHeight = window.innerHeight;

            const mouseX = Math.round((e.pageX / winWidth) * 100);
            const mouseY = Math.round((e.pageY / winHeight) * 100);
            if (pannelR) {
                pannelR.current.style.setProperty(
                    '--mouse-x',
                    mouseX.toString() + '%'
                );
                pannelR.current.style.setProperty(
                    '--mouse-y',
                    mouseY.toString() + '%'
                );
            }
        };

        document.querySelector('.pannel-r').onmousemove = moveGradient;

        document.getElementById('shineCards').onmousemove = (e) => {
            for (const card of document.getElementsByClassName('shineCard')) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        return function cleanup() {
            document.removeEventListener('mousemove', moveGradient);
        };
    });

    return (
        <>
            <section id="hero" className="section">
                <div className="l-r-pannel-wrap">
                    <div className="pannel-l">
                        <div id="oww">
                            <span>O</span>
                            <span>W</span>
                            <span>W</span>
                        </div>
                    </div>
                    <div className="pannel-r" ref={pannelR}>
                        <div className="ne-ith-eb">
                            <span>NE</span>
                            <span>ITH</span>
                            <span>EB</span>
                        </div>
                        {/* <div class='hero-card'>
              <InfoCard heading={`heading`} content={[`content`]} />
            </div> */}
                    </div>
                </div>
            </section>
            <section id="intro" className="p-5">
                <div id="shineCards">
                    <div className="shineCard">
                        <div className="shineCard-content">
                            <div className="shineCard-image">
                                <FaDungeon className="icon" />
                            </div>
                            <div className="shineCard-info-wrapper">
                                <div className="shineCard-info">
                                    <i className="fa-duotone fa-apartment"></i>
                                    <div className="shineCard-info-title">
                                        <h3>Bold Web Design</h3>
                                        <h4>
                                            Crank the volume of your branding
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shineCard">
                        <div className="shineCard-content">
                            <div className="shineCard-image">
                                <i className="fa-duotone fa-unicorn"></i>
                            </div>
                            <div className="shineCard-info-wrapper">
                                <div className="shineCard-info">
                                    <i className="fa-duotone fa-unicorn"></i>
                                    <div className="shineCard-info-title">
                                        <h3>Sensible Layouts</h3>
                                        <h4>
                                            Easy to explore = More conversions
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shineCard">
                        <div className="shineCard-content">
                            <div className="shineCard-image">
                                <i className="fa-duotone fa-blender-phone"></i>
                            </div>
                            <div className="shineCard-info-wrapper">
                                <div className="shineCard-info">
                                    <i className="fa-duotone fa-blender-phone"></i>
                                    <div className="shineCard-info-title">
                                        <h3>Full Access</h3>
                                        <h4>Our dev team is your dev team.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shineCard">
                        <div className="shineCard-content">
                            <div className="shineCard-image">
                                <i className="fa-duotone fa-person-to-portal"></i>
                            </div>
                            <div className="shineCard-info-wrapper">
                                <div className="shineCard-info">
                                    <i className="fa-duotone fa-person-to-portal"></i>
                                    <div className="shineCard-info-title">
                                        <h3>Complete Functionality</h3>
                                        <h4>
                                            Connect your site to key services
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shineCard">
                        <div className="shineCard-content">
                            <div className="shineCard-image">
                                <i className="fa-duotone fa-person-from-portal"></i>
                            </div>
                            <div className="shineCard-info-wrapper">
                                <div className="shineCard-info">
                                    <i className="fa-duotone fa-person-from-portal"></i>
                                    <div className="shineCard-info-title">
                                        <h3>On-Call Support</h3>
                                        <h4>Don't get left behind</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shineCard">
                        <div className="shineCard-content">
                            <div className="shineCard-image">
                                <i className="fa-duotone fa-otter"></i>
                            </div>
                            <div className="shineCard-info-wrapper">
                                <div className="shineCard-info">
                                    <i className="fa-duotone fa-otter"></i>
                                    <div className="shineCard-info-title">
                                        <h3>More</h3>
                                        <h4>
                                            Learn more about who we are and how
                                            we can help...
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
