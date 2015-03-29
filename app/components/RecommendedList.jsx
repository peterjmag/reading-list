import React from 'react';
import Reflux from 'reflux';
import LinkActions from '../actions/LinkActions';
import LinkStore from '../stores/LinkStore';
import ListRow from './ListRow';

export default React.createClass({
    mixins: [
        Reflux.connect(LinkStore, 'list')
    ],
    componentDidMount: function () {
        LinkActions.load();
    },
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
