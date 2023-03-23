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
import '../assets/OWW_svg.svg';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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
        moveGradElement.current.style.setProperty('--mouse-x', '40%');
        moveGradElement.current.style.setProperty('--mouse-y', '100%');
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
                                // <img src="/src/assets/OWW_basic.png" alt="OWW" />
                                <svg
                                    className="myLogo"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1000"
                                    height="1000"
                                    viewBox="0 0 1000 1000"
                                    version="1.1"
                                >
                                    <path
                                        d="M 521.500 169.426 C 497.549 174.819, 480.415 184.578, 462.780 202.873 C 439.293 227.238, 426 255.741, 426 281.737 C 426 298.410, 429.970 308.897, 440.154 319.128 C 454.907 333.949, 483.688 340.834, 506.500 335 C 535.545 327.571, 559.187 303.498, 570.398 269.935 C 577.990 247.209, 577.973 214.402, 570.361 198.302 C 564.298 185.477, 551.573 185.984, 534.523 199.732 C 522.470 209.449, 521.709 213.375, 529.316 226.596 C 533.998 234.732, 539.475 249.277, 538.633 251.338 C 538.274 252.217, 538.139 252.215, 538.079 251.332 C 537.885 248.467, 531.481 246.097, 523.123 245.797 C 515.431 245.522, 514.689 245.672, 512.914 247.861 C 508.405 253.422, 511.946 259, 519.986 259 C 522.728 259, 527.048 259.555, 529.586 260.234 C 534.048 261.428, 534.276 261.380, 536.511 258.782 C 539.540 255.260, 540.089 256.801, 538.972 265.693 C 537.203 279.783, 530.536 293.391, 520.315 303.773 C 512.892 311.313, 506.672 314.404, 499.218 314.256 C 485.809 313.991, 477.600 302.639, 474.882 280.600 C 472.543 261.638, 475.513 243.622, 483.717 227 C 487.678 218.974, 489.888 216.005, 497.953 207.868 C 508.597 197.129, 512.001 195.099, 528.506 189.638 C 540.389 185.707, 547.378 181.169, 550.651 175.259 C 552.362 172.167, 552.364 171.936, 550.690 170.259 C 548.393 167.958, 530.311 167.443, 521.500 169.426 M 483.514 246.395 C 480.390 249.519, 480.318 252.409, 483.290 255.381 C 485.251 257.342, 487.009 257.767, 495.540 258.342 C 504.897 258.973, 505.606 258.886, 507.250 256.896 C 510.604 252.837, 508.950 247.752, 503.758 246.163 C 501.966 245.615, 497.244 244.877, 493.264 244.524 C 486.446 243.919, 485.882 244.027, 483.514 246.395 M 507.630 349.577 C 500.287 351.011, 485.210 357.853, 478.278 362.898 C 475.957 364.589, 472.701 368.340, 471.044 371.236 C 468.204 376.199, 458.755 403.384, 455.952 414.655 C 454.954 418.670, 454.320 419.680, 453.085 419.218 C 451.751 418.719, 451.704 418.876, 452.787 420.210 C 453.856 421.526, 453.383 424.648, 449.995 438.647 C 447.751 447.916, 444.091 461.350, 441.861 468.500 C 437.633 482.056, 426.010 512.120, 421.775 520.453 L 419.323 525.279 416.210 505.890 C 411.064 473.839, 408.802 456.006, 408.647 446.259 C 408.566 441.177, 408.234 437.014, 407.908 437.009 C 406.966 436.995, 404.896 400.700, 405.081 387.416 C 405.267 373.982, 404.551 371.556, 399.816 369.565 C 393.664 366.978, 376.611 373.285, 360.310 384.176 C 345.920 393.790, 342.776 399.315, 342.200 416 C 341.709 430.208, 344.530 449.709, 353.047 491 C 359.561 522.581, 360.488 526.410, 365.637 543 C 382.155 596.214, 391.392 606.927, 410.885 595.482 C 425.226 587.063, 434.432 573.500, 448.542 540 C 451.206 533.675, 455.021 526.025, 457.019 523 C 461.663 515.969, 462.223 515, 461.641 515 C 461.378 515, 460.175 516.599, 458.967 518.553 C 456.719 522.192, 454.999 522.739, 456.884 519.216 C 457.460 518.141, 459.922 511.044, 462.356 503.447 L 466.782 489.633 468 495.498 C 469.074 500.672, 469.011 501.724, 467.469 504.431 C 466.508 506.119, 464.840 509.075, 463.762 511 L 461.802 514.500 463.867 512 C 465.002 510.625, 466.451 508.262, 467.087 506.750 C 467.722 505.238, 468.560 504, 468.948 504 C 469.337 504, 470.204 507.038, 470.875 510.750 C 472.122 517.642, 475.437 529.113, 477.084 532.236 C 477.588 533.191, 478 534.465, 478 535.067 C 478 536.897, 484.749 549.741, 489 556 C 491.200 559.239, 493 562.392, 493 563.004 C 493 563.617, 493.484 563.819, 494.077 563.453 C 494.669 563.087, 496 563.696, 497.034 564.807 C 498.069 565.917, 502.727 568.679, 507.384 570.944 C 517.394 575.811, 524.870 576.877, 535.918 575.014 C 546.779 573.182, 554.383 569.280, 563.956 560.625 C 565.858 558.906, 566.765 558.400, 565.974 559.500 C 564.549 561.479, 564.557 561.480, 566.767 559.595 C 569.055 557.643, 569.790 556.394, 568 557.500 C 565.662 558.945, 567.253 555.946, 569.951 553.822 C 575.045 549.813, 588.295 525.860, 594.483 509.472 C 596.946 502.947, 601.330 487.630, 602.345 482 C 602.593 480.625, 603.095 477.925, 603.461 476 C 605.599 464.734, 606.439 452.566, 606.289 435 C 606.133 416.627, 604.291 401.563, 599.478 379.300 C 595.538 361.076, 589.813 351, 583.400 351 C 577.289 351, 562.702 370.514, 557.664 385.428 C 555.382 392.187, 555.576 399.223, 558.392 411.810 C 562.550 430.390, 566.190 452.106, 565.565 454.598 C 565.221 455.969, 565.404 457, 565.991 457 C 566.675 457, 566.885 463.458, 566.618 476.250 C 566.190 496.719, 565.162 507.813, 564 504.500 C 563.583 503.313, 563.086 505.171, 562.692 509.390 C 561.951 517.330, 558.275 526.119, 554.721 528.447 C 551.102 530.818, 544.966 529.568, 540.915 525.633 C 539.141 523.910, 536.091 519.147, 534.138 515.049 C 531.307 509.109, 530.608 506.474, 530.688 502.049 C 530.764 497.916, 530.612 497.265, 530.093 499.500 C 529.392 502.517, 528.761 499.816, 523.777 472.500 C 522.334 464.590, 521.965 406.288, 523.283 394.500 C 523.713 390.650, 524.241 385.925, 524.455 384 C 524.670 382.075, 525.321 377.350, 525.903 373.500 C 527.982 359.735, 527.076 354.494, 522 350.945 C 518.321 348.372, 515.287 348.083, 507.630 349.577 M 416.447 428.250 C 413.818 430.038, 411.018 432.625, 410.224 434 C 408.979 436.157, 409.087 436.116, 411.008 433.703 C 412.233 432.165, 415.545 429.581, 418.368 427.962 C 421.190 426.343, 422.988 425.015, 422.363 425.009 C 421.738 425.004, 419.075 426.462, 416.447 428.250 M 323.338 526.250 C 315.174 535.386, 304.474 552.378, 299.355 564.338 C 292.672 579.953, 290.905 590.661, 288.932 627.500 C 287.269 658.572, 288.489 668.951, 300.873 729 C 307.488 761.080, 312.102 781.018, 314.501 787.891 C 324.996 817.963, 338.145 839.882, 349.089 845.548 C 359.806 851.097, 377.331 843.741, 393.659 826.840 C 398.427 821.905, 399.842 819.112, 412.318 790 C 419.742 772.675, 426.488 756.250, 427.309 753.500 C 428.129 750.750, 430.472 739.610, 432.514 728.744 C 435.612 712.255, 436.680 708.362, 438.967 705.205 C 442.128 700.841, 446.057 698, 448.930 698 C 452.005 698, 457.520 703.455, 459.790 708.743 C 462.863 715.899, 469.937 739.265, 478.381 770.148 C 489.983 812.586, 493.887 821.157, 508.293 835.817 C 519.159 846.875, 532.978 851.948, 552.324 851.983 C 562.790 852.001, 573.410 849.318, 581 844.738 C 591.652 838.310, 601.091 828.681, 605.740 819.500 C 609.646 811.785, 620.091 777.666, 622.045 766.238 C 624.466 752.078, 624.654 729.161, 622.470 714.455 C 618.891 690.352, 602.262 631.216, 593.477 611.352 C 590.612 604.873, 587.890 601.533, 583.700 599.353 C 579.857 597.354, 578.113 598.152, 571.751 604.822 C 558.498 618.716, 557.270 630.481, 565.477 664.903 C 573.646 699.164, 577.357 729.383, 577.400 762 C 577.435 787.916, 576.254 796.479, 571.535 804.530 C 568.256 810.126, 564.842 811.311, 555.480 810.101 C 542.740 808.454, 537.992 805.362, 532.787 795.323 C 528.417 786.895, 522.987 770.499, 519.103 754 C 512.398 725.517, 499.425 658.342, 493.126 619.482 C 491.356 608.564, 489.217 599.033, 487.699 595.296 C 482.921 583.539, 473.455 571.905, 467.436 570.395 C 465.999 570.034, 462.275 570.063, 459.161 570.461 C 456.047 570.858, 452.535 571.286, 451.356 571.413 C 450.177 571.540, 447.027 573.597, 444.356 575.984 C 441.685 578.371, 440.175 579.934, 441 579.457 C 441.825 578.979, 441.253 580.077, 439.730 581.895 C 431.625 591.568, 423.835 614.017, 414.534 654.500 C 406.011 691.597, 401.490 709.630, 398.388 718.903 C 395.564 727.345, 372.749 773.526, 369.988 776.389 C 368.986 777.428, 367.522 778.031, 366.735 777.729 C 365.147 777.119, 364.464 773.288, 360.452 742.500 C 357.077 716.593, 353.961 700.645, 348.567 681.681 C 341.818 657.950, 339.003 636.549, 339.006 609 C 339.010 585.193, 342.577 553.208, 346.525 541.579 C 347.423 538.932, 347.894 535.715, 347.571 534.429 C 346.810 531.394, 341.742 527.622, 335.715 525.603 C 329.119 523.393, 325.732 523.570, 323.338 526.250 M 556.975 569.669 C 552.611 574.145, 551.303 575.845, 553.833 573.752 C 557.722 570.533, 565.688 562, 564.803 562 C 564.609 562, 561.086 565.451, 556.975 569.669"
                                        stroke="none"
                                        fill="#000101"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </section>
            <section id="details">
                <div className="row content-card py-5 px-lg-5 col-lg-10 col-xl-9 justify-content-left">
                    <div className="col-12 col-md-4 col-lg-5 pt-2">
                        <div className="heading container">
                            <h2>
                                Fast.
                                <br />
                                Responsive.
                                <br />
                                Powerful.
                            </h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 col-lg-7 bg-light rounded-3 mb-3">
                        <div className="text-body container pt-4">
                            <p>
                                We want to see your imagination come to life!
                                Our team is dedicated to making sure that every
                                piece of your website matches your expectations.
                            </p>
                            <p className="underline-text">
                                <strong>
                                    <a
                                        href="#"
                                        className=""
                                        style={{
                                            color: 'unset',
                                            textDecoration: 'unset',
                                        }}
                                    >
                                        It's time to build your dream site!
                                    </a>
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
                <VidCarousel />
            </section>
        </>
    );
};

export default Home;
