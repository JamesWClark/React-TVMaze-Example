import React from 'react';
import './SeriesList.css';

function SeriesList(props) {
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
    )
}

function SeriesListItem({ series }) {
    return (
        <li key={series.show.id}>
            <a href={"/show/" + series.show.id + "/seasons"}>{series.show.name}</a>
        </li>
    )
}

export default SeriesList;
