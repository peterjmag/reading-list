import React from 'react';
import Reflux from 'reflux';
import LinkStore from '../stores/LinkStore';

export default React.createClass({
    mixins: [
        Reflux.connect(LinkStore, 'list')
    ],
    render: function () {
        var items = this.state.list.map(function (item) {
            var title = item.title ?
                (<strong>{item.title}<br /></strong>) :
                null;

            return (
                <li key={item.id}>
                    {title}
                    {item.url}
                </li>
            );
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }
});
