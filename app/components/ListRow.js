import React from 'react';
import classNames from 'classnames';

export default React.createClass({
    render: function () {
        var title = this.props.link.pending ?
            '...' :
            this.props.link.title;

        var imageSrc;
        if (!this.props.link.pending) {
            imageSrc = this.props.link.image ?
                this.props.link.image :
                '/assets/kitten.jpg';
        };

        var classes = classNames({
            'list-row': true,
            'list-row-pending': this.props.link.pending
        });

        return (
            <a className={classes} href={this.props.link.url} target="_blank">
                <div className="image-container">
                    <img className="link-image" src={imageSrc} />
                </div>
                <div className="text-container">
                    <span className="link-title">{title}</span>
                    <span className="link-host">{this.props.link.host}</span>
                </div>
            </a>
        );
    }
});
