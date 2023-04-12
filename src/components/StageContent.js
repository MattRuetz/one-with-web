import React from 'react';
import VidCarousel from './VidCarousel';
import wireframe1 from '../assets/wireframe_screenshot.jpg';
import wireframe2 from '../assets/wireframe_screenshot2.png';
import bushey1 from '../assets/demos/bushey1.png';
import twp1 from '../assets/demos/twp1.png';
import sids1 from '../assets/demos/sids1.png';
import twp2 from '../assets/demos/twp2.png';
import od1 from '../assets/demos/OD1.png';

const StageContent = ({ stageName }) => {
    switch (stageName) {
        case 'Design':
            return (
                <div className={`stage ${stageName}`}>
                    <div className="">
                        <div class="col-12 col-md-8">
                            <div className="container text-body">
                                <p>
                                    After discussing your goals and vision, the
                                    project begins with a detailed wireframe.
                                </p>
                                Together, we will pick the key design elements
                                that represent your brand and audience...
                                <ul>
                                    <li>Overall Structure</li>
                                    <li>Color Themes</li>
                                    <li>Font Selection</li>
                                    <li>Look & Feel</li>
                                </ul>
                                <p
                                    style={{
                                        fontWeight: 700,
                                        fontStyle: 'italic',
                                    }}
                                >
                                    We invite you into every stage of the design
                                    process, and will bring any vision you have
                                    to life on your site!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9 col-lg-6">
                            <img src={wireframe1} alt="Wireframe image" />
                        </div>
                        <div className="col-8 col-lg-4">
                            <img src={wireframe2} alt="Wireframe image" />
                        </div>
                    </div>
                </div>
            );
        case 'Development':
            return (
                <div className={`stage ${stageName}`}>
                    <div className="row">
                        <div class="col-12 col-md-8">
                            <div className="container text-body">
                                <p>
                                    After discussing your goals and vision, the
                                    project begins with a detailed wireframe.
                                </p>
                                In this stage, we pick the key design elements
                                that will represent your brand!
                                <ul>
                                    <li>Overall Structure</li>
                                    <li>Color Themes</li>
                                    <li>Font Selection</li>
                                    <li>Look & Feel</li>
                                </ul>
                            </div>

                            {/* <VidCarousel images={images} /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <img src={bushey1} alt="" />g
                        </div>
                        <div className="col-4 offset-1">
                            <img src={twp1} alt="" />g
                        </div>
                        <div className="col-4">
                            <img src={sids1} alt="" />g
                        </div>
                        <div className="col-4 offset-1">
                            <img src={od1} alt="" />g
                        </div>
                    </div>
                </div>
            );
        case 'SEO':
            return (
                <div className={`stage ${stageName}`}>
                    <div className="row">
                        <div class="col-12 col-md-8">
                            <div className="container text-body">
                                <p>
                                    After discussing your goals and vision, the
                                    project begins with a detailed wireframe.
                                </p>
                                In this stage, we pick the key design elements
                                that will represent your brand!
                                <ul>
                                    <li>Overall Structure</li>
                                    <li>Color Themes</li>
                                    <li>Font Selection</li>
                                    <li>Look & Feel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'Maintenance':
            return (
                <div className={`stage ${stageName}`}>
                    <div className="row">
                        <div class="col-12 col-md-8">
                            <div className="container text-body">
                                <p>
                                    After discussing your goals and vision, the
                                    project begins with a detailed wireframe.
                                </p>
                                In this stage, we pick the key design elements
                                that will represent your brand!
                                <ul>
                                    <li>Overall Structure</li>
                                    <li>Color Themes</li>
                                    <li>Font Selection</li>
                                    <li>Look & Feel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            return <h3>No content designed for stage {stageName}</h3>;
    }
};

export default StageContent;
