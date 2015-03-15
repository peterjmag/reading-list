import React from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import validUrl from 'valid-url';
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
        var text = this.state.text;

        if (!validUrl.isUri(text)) {
            return;
        }

        LinkActions.addLink(text);
        this.setState({ text: '' });
    },
    render: function () {
        var text = this.state.text;

        var style = {
            input: {
                backgroundColor: text.length > 0 ? (validUrl.isUri(text) ? '#dff0d8' : '#f2dede') : null
            }
        };

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="url-input"
                    type="text"
                    placeholder="Paste a link"
                    style={style.input}
                    valueLink={this.linkState('text')} />
                <button>Post</button>
            </form>
        );
    }
});
