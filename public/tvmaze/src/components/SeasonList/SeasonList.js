import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import './SeasonList.css';

function SeasonList(props) {
    return (
        <div>
            <ul className="season-list">
                {props.list.map(season => (
                    <SeasonListItem season={season} key={season.id} />
                ))}
            </ul>
        </div>
    )
}

function SeasonListItem({ season }) {
    return (
        <li key={season.id}>
            <a href={"/show/" + season.id + "/episodes"}>Season {season.number}</a>
        </li>
    )
}

export default SeasonList;