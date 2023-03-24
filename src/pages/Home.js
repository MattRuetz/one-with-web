import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TbWorldWww } from 'react-icons/tb';
import {
    IoBonfire,
    IoChatboxEllipses,
    IoGrid,
    IoOptions,
    IoPlanet,
} from 'react-icons/io5';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShineCard from '../components/ShineCard';
import VidCarousel from '../components/VidCarousel';
import owwSvgLogo from '../assets/OWW_svg.svg';
import iPhoneFrame from '../assets/iPhone_half.png';
import profitalDemoVid from '../assets/Prof_Phone_cropped.webm';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    // const iPhoneFrame = '../assets/iPhone_half.png';

    useEffect(() => {
        const tl = gsap.timeline();
        // create context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
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

    const moveGradElement = useRef();

    useEffect(() => {
        moveGradElement.current.style.setProperty('--mouse-x', '0%');
        moveGradElement.current.style.setProperty('--mouse-y', '50%');
        const moveGradient = (e) => {
            const winWidth = window.innerWidth;
            const winHeight = window.innerHeight;

            const mouseX = Math.round((e.pageX / winWidth) * 100);
            const mouseY = Math.round((e.pageY / winHeight) * 100);
            if (moveGradElement) {
                moveGradElement.current.style.setProperty(
                    '--mouse-x',
                    mouseX.toString() + '%'
                );
                moveGradElement.current.style.setProperty(
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
                    <div
                        className="pannel-r dynamic-gradient"
                        ref={moveGradElement}
                    >
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
            <section id="intro">
                <div className="row pt-5 px-lg-5 justify-content-start">
                    <div className="col-12 p-0">
                        <div className="heading container">
                            <h2>
                                <TbWorldWww className="icon" />
                                {'  '}Design + Development
                            </h2>
                        </div>
                        <div className="text-body container p-4 pb-2 bg-light rounded-3">
                            <p>
                                Simplicity is key when it comes to creating
                                great websites. Dealing with separate web
                                designers and developers, and trying to keep
                                communication clear can be tough. At One With
                                Web, we set out to simplify this whole process.
                            </p>
                            <p>
                                Our <strong>full-package approach</strong> means
                                you only explain your need once, and then we
                                take it the rest of the way!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cards">
                <div className="shineCardsContainer p-5">
                    <div id="shineCards">
                        <ShineCard
                            title={'Bold Web Design'}
                            body={'Crank the volume of your branding'}
                            FaIcon={<IoBonfire />}
                        />
                        <ShineCard
                            title={'Intuitive Layouts'}
                            body={'Easy to explore = More conversions'}
                            FaIcon={<IoGrid />}
                        />
                        <ShineCard
                            title={'Full Access'}
                            body={'Our dev team is your dev team.'}
                            FaIcon={<IoOptions />}
                        />
                        <ShineCard
                            title={'Complete Functionality'}
                            body={'Connect your site to key services'}
                            FaIcon={<IoPlanet />}
                        />
                        <ShineCard
                            title={'On-Call Support'}
                            body={"Don't get left behind"}
                            FaIcon={<IoChatboxEllipses />}
                        />
                        <ShineCard
                            title={'More'}
                            body={
                                'Learn more about who we are and how we can help...'
                            }
                            FaIcon={
                                <img
                                    className="myLogo"
                                    src={owwSvgLogo}
                                    alt="OWW"
                                />
                            }
                        />
                    </div>
                </div>
            </section>
            <section id="details">
                <div className="row content-card px-lg-5">
                    <div className="col-12 col-lg-6 col-xl-8 py-3">
                        <div className="col-12 py-2">
                            <div className="heading row">
                                <h2>
                                    <em>
                                        Fast.
                                        <br />
                                        Responsive.
                                        <br />
                                        <strong>Powerful.</strong>
                                    </em>
                                </h2>
                            </div>

                            <div className="text-body container p-3 bg-light">
                                <p>
                                    Customers now demand instant access to all
                                    of your site's features directly from their
                                    phone.
                                </p>
                                <p className="ps-3">
                                    One With Web knows this, and we implement
                                    this principle into all of our work.
                                </p>
                                <span className="ps-5">
                                    That's why{' '}
                                    <span className="color-text">
                                        every website we design is made
                                        mobile-first.
                                    </span>
                                </span>
                            </div>
                            <div className="center-container">
                                <button className="btn btn-primary mt-5">
                                    <a
                                        href="#"
                                        style={{
                                            color: 'unset',
                                            textDecoration: 'unset',
                                        }}
                                    >
                                        Let's build your dream site!
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-3 offset-lg-1 d-flex align-items-end justify-content-center">
                        <div className="screen-preview mobile">
                            <img src={iPhoneFrame} alt="iPhone Display" />
                            <div className="video-container">
                                <video
                                    src={profitalDemoVid}
                                    autoPlay
                                    muted
                                ></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VidCarousel />
        </>
    );
};

export default Home;
