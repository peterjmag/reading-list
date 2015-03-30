import React from 'react';
import classNames from 'classnames';

export default React.createClass({
    render: function () {
        var title = this.props.link.title ?
            this.props.link.title :
            '...';

        var classes = classNames({
            'list-row': true,
            'list-row-pending': !this.props.link.title
        });

        return (
            <a className={classes} href={this.props.link.url} target="_blank">
                <div className="image-container">
                    <img className="link-image" src={this.props.link.image} />
                </div>
                <div className="text-container">
                    <span className="link-title">{title}</span>
                    <span className="link-host">{this.props.link.host}</span>
                </div>
            </a>
        );
    }
});
