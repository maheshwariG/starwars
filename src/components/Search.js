import React, { Component } from 'react';
class Search extends Component {
    render() {
        const { filterUpdate } = this.props
        return (
            <form>
                    <input
                        type='text'
                        className="search-box"
                        ref='filterInput'
                        placeholder='Search Planet..'
                        onChange={() => {
                            filterUpdate(this.refs.filterInput.value)
                        }}
                    />
            </form>
        )
    }
}

export default Search;
