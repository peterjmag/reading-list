import Reflux from 'reflux';
import LinkActions from '../actions/LinkActions';

export default Reflux.createStore({
    listenables: [
        LinkActions
    ],
    onLoad: function (link) {
        this.fetchData();
    },
    onAddLink: function (link) {
        this.updateList([link].concat(this.list));
    },
    onAddLinkCompleted: function (link, newLinkData) {
        // This seems to magically mutate the newly created link object in place.
        // No reassignment to this.list is necessary.
        link.title = newLinkData.title;
        link.image = newLinkData.image;
        link.host = newLinkData.host;
        link.pending = false;
        this.updateList(this.list);
    },
    onAddLinkFailed: function (link) {
        console.log('onAddLinkFailed:', link);
    },
    fetchData: function () {
        fetch('//localhost:3001/links/')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }

                return response.json();
            })
            .then(function(json) {
                this.list = json;
                this.trigger(this.list);
            }.bind(this));
    },
    updateList: function (list) {
        this.list = list;
        this.trigger(list);
    },
    getInitialState: function () {
        this.list = [];

        return this.list;
    }
});
