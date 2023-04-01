import React from 'react';

const Stages = ({ stageIndex }) => {
    switch (stageIndex) {
        case 0:
            return <div>Index 0</div>;
        case 1:
            return <div>Index 1</div>;
        case 2:
            return <div>Index 2</div>;
        case 3:
            return <div>Index 3</div>;
        default:
            return <div>NO STAGE</div>;
    }
};

export default Stages;
