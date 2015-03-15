import React from 'react';
import Reflux from 'reflux';
import LinkStore from '../stores/LinkStore';
import LinkActions from '../actions/LinkActions';
import URLInput from './URLInput';

export default React.createClass({
    mixins: [
        Reflux.connect(LinkStore, 'list')
    ],
    handleAdd: function (text) {
        LinkActions.addLink(text);
    },
    render: function () {
        var items = this.state.list.map(function (item) {
            return (
                <li key={item.id}>{item.url}</li>
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
