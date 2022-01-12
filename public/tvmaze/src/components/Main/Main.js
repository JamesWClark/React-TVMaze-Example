import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Series from '../../containers/Series/Series.js';
import Seasons from '../../containers/Seasons/Seasons.js';

function Main(props) {
    return (
        <Routes>
            <Route exact path="/" element={<Series/>} />
            <Route exact path="/show/:id/seasons" element={<Seasons/>} />
        </Routes>
    )
}

export default Main;
