import React from 'react';
import URLInput from './URLInput';

export default React.createClass({
    getInitialState: function () {
        return {
            items: []
        };
    },
    handleAdd: function (text) {
        var items = this.state.items;
        items.push({
            id: Date.now(),
            text: text
        });

        this.setState({ items: items });
    },
    render: function () {
        var items = this.state.items.map(function (item) {
            return (
                <li key={item.id}>{item.text}</li>
            );
        });

        return (
            <div className="reading-list-app">
                <h1>readinglist.co</h1>
                <URLInput handleAdd={this.handleAdd} />
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
});
