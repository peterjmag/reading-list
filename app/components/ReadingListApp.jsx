import React from 'react';
import URLInput from './URLInput';
import RecommendedList from './RecommendedList';

export default React.createClass({
    render: function () {
        return (
            <div className="reading-list-app">
                <h1 className="app-name">readinglist.co</h1>
                <URLInput handleAdd={this.handleAdd} />
                <RecommendedList />
            </div>
        );
    }
});
