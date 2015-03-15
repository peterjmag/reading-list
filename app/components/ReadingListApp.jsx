import React from 'react';
import URLInput from './URLInput';

export default React.createClass({
    render: function () {
        return (
            <div className="reading-list-app">
                <h1>readinglist.co</h1>
                <URLInput />
            </div>
        );
    }
});
