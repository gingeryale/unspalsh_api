import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const res = await unsplash.get('/search/photos/', {
            params: { query: term }
        });

        this.setState({ images: res.data.results });
    }

    refresher = (e) => {
        console.log(e);
        this.setState({ images: [] });
    }

    render() {
        return (<div className="ui container" style={{ marginTop: '1rem' }}>
            <h1 onClick={this.refresher}>App World</h1>
            <SearchBar onSubmitp={this.onSearchSubmit} />
            <ImageList images={this.state.images} found={this.state.images.length} />
        </div >)
    }

}

export default App;