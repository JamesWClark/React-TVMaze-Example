import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Series from '../../containers/Series/Series.js';

function Main(props) {
    return (
        <Routes>
            <Route exact path="/" element={<Series/>} />
        </Routes>
    )
}

export default Main;
