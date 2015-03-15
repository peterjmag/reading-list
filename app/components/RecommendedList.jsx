import React from 'react';
import Reflux from 'reflux';
import LinkStore from '../stores/LinkStore';

export default React.createClass({
    mixins: [
        Reflux.connect(LinkStore, 'list')
    ],
    render: function () {
        var items = this.state.list.map(function (item) {
            return (
                <li key={item.id}>{item.url}</li>
            );
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }
});
