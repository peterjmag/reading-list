import React from 'react';
import Reflux from 'reflux';
import LinkStore from '../stores/LinkStore';
import ListRow from './ListRow';

export default React.createClass({
    mixins: [
        Reflux.connect(LinkStore, 'list')
    ],
    render: function () {
        var items = this.state.list.map(function (link) {
            return (
                <ListRow
                    key={link.id}
                    link={link} />
            );
        });

        return (
            <div className="list-container">
                {items}
            </div>
        );
    }
});
