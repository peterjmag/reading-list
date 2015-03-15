import React from 'react';

export default React.createClass({
    getInitialState: function () {
        return {
            text: ''
        };
    },
    onChange: function (e) {
        this.setState({ text: e.target.value });
    },
    handleSubmit: function (e) {
        e.preventDefault();
        this.props.handleAdd(this.state.text);

        this.setState({ text: '' });
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="url-input"
                    type="text"
                    value={this.state.text}
                    onChange={this.onChange}
                    placeholder="Paste a link" />
                <button>Post</button>
            </form>
        );
    }
});
