import React from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import LinkActions from '../actions/LinkActions';

export default React.createClass({
    mixins: [
        LinkedStateMixin
    ],
    getInitialState: function () {
        return {
            text: ''
        };
    },
    handleSubmit: function (e) {
        e.preventDefault();
        LinkActions.addLink(this.state.text);

        this.setState({ text: '' });
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="url-input"
                    type="text"
                    placeholder="Paste a link"
                    valueLink={this.linkState('text')} />
                <button>Post</button>
            </form>
        );
    }
});
