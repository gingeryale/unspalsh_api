import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    onFocus = () => {
        this.setState({ term: '' });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState({ term: '' });
        this.props.onSubmitp(this.state.term);
    }

    render() {
        return (<div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input
                        onChange={(e) => { this.setState({ term: e.target.value }) }}
                        value={this.state.term}
                        onFocus={this.onFocus}
                        type="text"
                        placeholder="Enter your term" />
                </div>
            </form>
        </div>)
    }
}

export default SearchBar;