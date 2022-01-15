import React from 'react';

function SeasonList(props) {
    return (
        <div className="show-list-container">
            <ul className="show-list">
                {props.list.map(season => (
                    <SeasonListItem season={season} key={season.id} />
                ))}
            </ul>
        </div>
    )
}

function SeasonListItem({ season }) {
    const seasonID = season.id;
    const seasonNumber = season.number;
    const seasonStart = season.premiereDate;
    const seasonEnd = season.endDate;
    let seasonImage = "https://place-hold.it/107x150";
    let seasonNetwork = '';
    try { seasonImage = season.image.medium; } catch(e) { }
    try { seasonNetwork = season.network.name; } catch(e) { }

    return (
        <li key={seasonID}>
            <a href={"/season/" + seasonID + "/episodes"}>
                <div className="ib w20">
                    <img src={seasonImage} alt="" />
                </div>
                <div className="ib w80">
                    <h2>Season {seasonNumber}</h2>
                    <div>Network: {seasonNetwork}</div>
                    <div>Premiere Date: {seasonStart}</div>
                    <div>End Date: {seasonEnd}</div>                
                </div>
            </a>
        </li>
    )
}

export default SeasonList;
