import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import InfoCard from '../components/InfoCard';
import { cleanup } from '@testing-library/react';

const Home = () => {
    const tl = gsap.timeline();

    useEffect(() => {
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
            tl.from('.pannel-l', {
                duration: 0.6,
                delay: '2s',
                x: -500,
                opacity: 0,
            });
            tl.from('.pannel-r .ne-ith-eb span', {
                duration: 0.8,
                delay: '3s',
                x: -500,
                opacity: 0,
                stagger: 0.3,
            });

            tl.from('.pannel-r .card', {
                duration: 0.8,
                delay: '3s',
                y: -500,
                opacity: 0,
                stagger: 0.3,
            });
        }); // <- IMPORTANT! Scopes selector text

        return () => ctx.revert(); // cleanup
    }, []); // <- empty dependency Array so it doesn't re-run on every render

    const pannelR = useRef();

    useEffect(() => {
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

        document.addEventListener('mousemove', moveGradient);
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
                    </div>
                </div>
            </section>
            <section id="intro" className="p-5">
                <div className="row mx-4">
                    <div className="col-4 col-md-3">
                        <div className="card info-card">
                            <InfoCard
                                content={[
                                    `One With Web is a small team of developers dedicated to creating
          appealing, effective websites for small businesses. We understand the
          importance of a well-designed website and are committed to bringing
          your vision to life.`,
                                    `Whether you need a simple brochure site or a
          complex e-commerce platform, our experienced developers will work with
          you every step of the way to achieve your business goals. With our
          expertise in web development, we'll create a website that not only
          looks great but also effectively reaches your target audience. Choose
          One With Web to take your business to the next level.`,
                                ]}
                            />
                        </div>
                    </div>
                    <div className="col-4 col-md-3">
                        <div className="card info-card">
                            <InfoCard
                                content={[
                                    `One With Web is a small team of developers dedicated to creating
          appealing, effective websites for small businesses. We understand the
          importance of a well-designed website and are committed to bringing
          your vision to life.`,
                                    `Whether you need a simple brochure site or a
          complex e-commerce platform, our experienced developers will work with
          you every step of the way to achieve your business goals. With our
          expertise in web development, we'll create a website that not only
          looks great but also effectively reaches your target audience. Choose
          One With Web to take your business to the next level.`,
                                ]}
                            />
                        </div>
                    </div>
                    <div className="col-4 col-md-3">
                        <div className="card info-card">
                            <InfoCard
                                content={[
                                    `One With Web is a small team of developers dedicated to creating
          appealing, effective websites for small businesses. We understand the
          importance of a well-designed website and are committed to bringing
          your vision to life.`,
                                    `Whether you need a simple brochure site or a
          complex e-commerce platform, our experienced developers will work with
          you every step of the way to achieve your business goals. With our
          expertise in web development, we'll create a website that not only
          looks great but also effectively reaches your target audience. Choose
          One With Web to take your business to the next level.`,
                                ]}
                            />
                        </div>
                    </div>
                    <div className="col-4 col-md-3">
                        <div className="card info-card">
                            <InfoCard
                                content={[
                                    `One With Web is a small team of developers dedicated to creating
          appealing, effective websites for small businesses. We understand the
          importance of a well-designed website and are committed to bringing
          your vision to life.`,
                                    `Whether you need a simple brochure site or a
          complex e-commerce platform, our experienced developers will work with
          you every step of the way to achieve your business goals. With our
          expertise in web development, we'll create a website that not only
          looks great but also effectively reaches your target audience. Choose
          One With Web to take your business to the next level.`,
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section id='info' className='section'>
        INFO SECTION
      </section> */}
        </>
    );
};

export default Home;
