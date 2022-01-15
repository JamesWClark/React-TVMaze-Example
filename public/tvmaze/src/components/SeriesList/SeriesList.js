import React from 'react';

function SeriesList(props) {
    return (
        <div className="show-list-container">
            <ul className="show-list">
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
    )
}

function SeriesListItem({ series }) {
    const showID = series.show.id;
    const showName = series.show.name;
    const showSummary = series.show.summary;
    const genres = series.show.genres.join(', ');
    let showImage = 'https://place-hold.it/107x150';
    let showNetwork = '';
    try { showImage = series.show.image.medium; } catch(e) { }
    try { showNetwork = series.show.network.name; } catch(e) { }

    return (
        <li key={showID}>
            <a href={"/show/" + showID + "/seasons"}>
                <div className="ib w20">
                    <img src={showImage} alt={showName} />
                </div>
                <div className="ib w80">
                    <div>{showName}</div>
                    <div>{showNetwork.length > 0 ? "Network: " + showNetwork : ""}</div>
                    <div>{genres.length > 0 ? "Genres: " + genres : ""}</div>
                    <div dangerouslySetInnerHTML={{__html: showSummary}}></div>                    
                </div>
            </a>
        </li>
    )
}

export default SeriesList;
