import React from 'react';

const Building = props => {
    console.log('Building', props);
    const { info: { name }, actions: { removeName } } = props.protoData;
    return (
        <div>
            <p>Building in which lives { name }</p>
            <button onClick={() => removeName()}>
               Clear name
            </button>
            <div>{props.children}</div>
        </div>
    )
};

export default Building;