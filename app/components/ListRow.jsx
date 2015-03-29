import React from 'react';

export default React.createClass({
    render: function () {
        var title = this.props.link.title ?
            this.props.link.title :
            '...';

        var style = {
            container: {
                backgroundColor: this.props.link.title ? 'white' : '#CAFFF6'
            }
        };

        return (
            <a className="list-row" href={this.props.link.url} target="_blank" style={style.container}>
                <div className="image-container" />
                <div className="text-container">
                    <span className="link-title">{title}</span>
                    <span className="link-host">{this.props.link.host}</span>
                </div>
            </a>
        );
    }
});
