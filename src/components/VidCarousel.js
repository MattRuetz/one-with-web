import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Image } from 'semantic-ui-react';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30,
    },
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const VidCarousel = ({ deviceType, images }) => {
    return (
        <Carousel
            ssr
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            infinite={true}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            arrows={false}
        >
            {images.slice(0, 5).map((image, key) => {
                return (
                    <Image
                        draggable={false}
                        style={{ width: '100%', height: '100%' }}
                        src={image}
                        key={key}
                    />
                );
            })}
        </Carousel>
    );
};

export default VidCarousel;
