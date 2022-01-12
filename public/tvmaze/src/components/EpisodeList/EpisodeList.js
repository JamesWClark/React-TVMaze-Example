import React from 'react';

function EpisodeList(props) {
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    <EpisodeListItem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
    )
}

function EpisodeListItem({ series }) {
    return (
        <li key={series.show.id}>
            <a href={`/show/${series.show.id}/episodes`}>{series.show.name}</a>
        </li>
    )
}

export default EpisodeList;
