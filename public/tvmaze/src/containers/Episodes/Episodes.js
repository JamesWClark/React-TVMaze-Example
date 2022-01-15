import React from 'react';
import EpisodeList from '../../components/EpisodeList/EpisodeList.js';
import { useParams } from "react-router-dom";

class WrappedEpisodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes: [],
            seriesName: ''
        }
    }

    componentDidMount() {
        const showID = this.props.params.id;

        // get the title of the show
        fetch(`https://api.tvmaze.com/shows/${showID}`)
        .then(response => response.json())
        .then(json => this.setState({ seriesName: json.name }));

        // get the seasons of the show
        fetch(`https://api.tvmaze.com/shows/${showID}/seasons`)
        .then(response => response.json())
        .then(json => this.setState({ episodes: json }));
    }
    
    render() {
        const { episodes, seriesName } = this.state;
        return (
            <div>
                <h1>{seriesName}</h1>
                <hr />
                <EpisodeList list={episodes} />
            </div>
        )
    }    
}

function Episodes(props) {
    const params = useParams();
    return <WrappedEpisodes {...props} params={params} />
}

export default Episodes;
