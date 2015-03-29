import React from 'react';

export default React.createClass({
    render: function () {
        var title = this.props.link.title ?
            this.props.link.title :
            '...';

        return (
            <div className="list-row">
                <div className="image-container" />
                <div className="text-container">
                    <span className="link-title">{title}</span>
                    <span className="link-url">{this.props.link.url}</span>
                </div>
            </div>
        );
    }
});
