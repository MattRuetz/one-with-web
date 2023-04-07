import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Stages = ({ showIndex, hideIndex, tl }) => {
    useEffect(() => {
        let hideElement = document.querySelector(`.content-ind-${hideIndex}`);
        let showElement = document.querySelector(`.content-ind-${showIndex}`);

        const tl3 = gsap.timeline();

        let ctx = gsap.context(() => {
            tl3.to(hideElement, {
                yPercent: showIndex > hideIndex ? '150' : '-150',
                opacity: 0,
                duration: 0.1,
            }).from(showElement, {
                yPercent: showIndex > hideIndex ? '-150' : '150',
                opacity: 0,
                duration: 0.5,
                onStart: () => {
                    showElement && showElement.classList.remove('hidden');
                    document
                        .querySelectorAll('.stage-content')
                        .forEach((item, i) => {
                            if (i !== showIndex) {
                                item.classList.add('hidden');
                                console.log('hiding ' + i + ' ' + showIndex);
                            }
                        });
                },
            });
        });
        return () => ctx.revert(); // cleanup
    }, [showIndex, hideIndex]);

    return (
        <>
            <div className="stage-content content-ind-0">
                <h1 className="stage-heading">Planning</h1>
            </div>
            <div className="stage-content content-ind-1">
                <h1 className="stage-heading">Design</h1>
            </div>
            <div className="stage-content content-ind-2">
                <h1 className="stage-heading">Development</h1>
            </div>
            <div className="stage-content content-ind-3">
                <h1 className="stage-heading">Launch & Maintenance</h1>
            </div>
        </>
    );
};

export default Stages;
