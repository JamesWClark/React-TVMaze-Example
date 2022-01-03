import React from 'react';

function Intro(props) {
    return (
        <p className="App-intro">
            {props.message}
        </p>
    )
}

export default Intro;
