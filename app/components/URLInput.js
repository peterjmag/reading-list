import React from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import validUrl from 'valid-url';
import URI from 'uri-js';
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

        LinkActions.addLink({
            url: text,
            host: URI.parse(text).host,
            pending: true,
            id: Date.now()
        });
        this.setState({ text: '' });
    },
    render: function () {
        var text = this.state.text;

        var style = {
            input: {
                backgroundColor: text.length > 0 ? (validUrl.isUri(text) ? '#ffffff' : '#f2dede') : null
            }
        };

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="url-input"
                    type="text"
                    placeholder="Paste a link and hit enter"
                    style={style.input}
                    valueLink={this.linkState('text')} />
                <button hidden={true}>Post</button>
            </form>
        );
    }
});
