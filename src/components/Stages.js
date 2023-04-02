import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Stages = ({ showIndex, hideIndex }) => {
    useEffect(() => {
        console.log(showIndex, hideIndex);

        let hideElement = document.querySelector(`.content-ind-${hideIndex}`);
        let showElement = document.querySelector(`.content-ind-${showIndex}`);

        const tl3 = gsap.timeline();

        let ctx = gsap.context(() => {
            tl3.to(hideElement, {
                yPercent: showIndex > hideIndex ? '150' : '-150',
                opacity: 0,
                duration: 0.5,
            });
            tl3.from(showElement, {
                yPercent: showIndex > hideIndex ? '-150' : '150',
                opacity: 0,
                duration: 1,
                onStart: () => {
                    showElement.classList.remove('hidden');
                    document
                        .querySelectorAll('.stage-content')
                        .forEach(
                            (item, i) =>
                                i !== showIndex && item.classList.add('hidden')
                        );
                },
            });
        });
        return () => ctx.revert(); // cleanup
    }, [showIndex, hideIndex]);

    return (
        <>
            <div className="content-ind--1">NULL--</div>
            <div className="stage-content content-ind-0 hidden">Index 0</div>
            <div className="stage-content content-ind-1 hidden">Index 1</div>
            <div className="stage-content content-ind-2 hidden">Index 2</div>
            <div className="stage-content content-ind-3 hidden">Index 3</div>
            <div className="stage-content content-ind-4 hidden">NULL</div>
        </>
    );
};

export default Stages;
