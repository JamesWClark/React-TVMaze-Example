import React from 'react';
import SeriesList from '../../components/SeriesList/SeriesList.js';
import Loader from '../../components/Loader/Loader.js';
import Intro from '../../components/Intro/Intro.js';
import { useNavigate, useSearchParams } from 'react-router-dom';

class WrappedSeries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            seriesName: '',
            isFetching: false
        }
        this.onSeriesInputChange = this.onSeriesInputChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    search() {
        this.setState({
            isFetching: true
        })
        fetch(`https://api.tvmaze.com/search/shows?q=${this.state.seriesName}`)
        .then(response => response.json())
        .then(json => this.setState({ series: json, isFetching: false }));
        this.props.navigate('?q=' + this.state.seriesName);
    }

    handleSearchClick(event) {
        this.search();
    }

    handleKeyDown(event) {
        if(event.key === 'Enter') {
            this.search();
        }
    }

    onSeriesInputChange(event) {
        this.setState({
            seriesName: event.target.value, 
        });
    }

    componentDidMount() {
        const query = this.props.params.get('q');
        console.log(query);
        if(query) {
            this.setState({
                isFetching: true,
                seriesName: query
            })
            fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(response => response.json())
            .then(json => this.setState({ series: json, isFetching: false }));
        }
    }
    
    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                <Intro message="Here you can find all of your most loved series." />
                <div>
                    <input placeholder="Enter series name" value={seriesName} type="text" onChange={this.onSeriesInputChange} onKeyDown={this.handleKeyDown} />
                    <button onClick={this.handleSearchClick}>Search</button>
                </div>
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
        )
    }    
}

function Series(props) {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    return <WrappedSeries {...props} params={params} navigate={navigate} />
}

export default Series;
