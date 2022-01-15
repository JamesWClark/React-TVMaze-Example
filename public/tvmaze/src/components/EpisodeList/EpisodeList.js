import React from 'react';

function EpisodeList(props) {
    return (
        <div className="show-list-container">
            <ul className="show-list">
                {props.list.map(episode => (
                    <EpisodeListItem episode={episode} key={episode.id} />
                ))}
            </ul>
        </div>
    )
}

function EpisodeListItem({ episode }) {
    const episodeID = episode.id;
    const episodeName = episode.name;
    const episodeNumber = episode.number;
    const episodeAirDate = episode.airdate;
    const episodeSummary = episode.summary;
    const episodeRating = episode.average;
    const episodeRuntime = episode.runtime;
    let episodeImage = "https://place-hold.it/107x150";
    try { episodeImage = episode.image.medium; } catch(e) { }

    return (
        <li key={episodeID}>
            <a href={"/episode/" + episodeID}>
                <div className="ib w20">
                    <img src={episodeImage} alt="" />
                </div>
                <div className="ib w80">
                    <div><strong>Episode {episodeNumber}: {episodeName}</strong></div>
                    <div dangerouslySetInnerHTML={{__html: episodeSummary}}></div> 
                    <div>Air Date: {episodeAirDate}</div>
                    <div>Rating: {episodeRating}/10</div>
                    <div>Runtime: {episodeRuntime}</div>
                </div>
            </a>
        </li>
    )
}

export default EpisodeList;
