import React from 'react';

export default React.createClass({
    render: function () {
        var title = this.props.link.title ?
            (<strong>{this.props.link.title}<br /></strong>) :
            null;

        return (
            <div className="list-row">
                {title}
                {this.props.link.url}
            </div>
        );
    }
});
