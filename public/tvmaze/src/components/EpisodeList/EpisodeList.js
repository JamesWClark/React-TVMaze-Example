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
    const episodeRuntime = episode.runtime;
    let episodeRating = '';
    let episodeImage = "https://place-hold.it/107x150";
    try { episodeRating = episode.rating.average } catch(e) { }
    try { episodeImage = episode.image.medium; } catch(e) { }

    return (
        <li key={episodeID}>
            <a href={"/episode/" + episodeID}>
                <div className="ib w40">
                    <img src={episodeImage} alt="" />
                </div>
                <div className="ib w60">
                    <div><strong>Episode {episodeNumber}: {episodeName}</strong></div>
                    {
                        episodeSummary && episodeSummary.lenght > 0 
                            && <div>Air Date: {episodeAirDate}</div>
                    }
                    {
                        !episodeSummary && <br />
                    }
                    <div>{episodeRating && episodeRating.length > 0 ? "Rating: " + episodeRating : ""}</div>
                    <div>Runtime: {episodeRuntime}</div>
                </div>
            </a>
        </li>
    )
}

export default EpisodeList;
