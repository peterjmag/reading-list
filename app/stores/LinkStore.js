import Reflux from 'reflux';
import LinkActions from '../actions/LinkActions';

export default Reflux.createStore({
    listenables: [
        LinkActions
    ],
    onAddLink: function (link) {
        this.updateList([link].concat(this.list));
    },
    onAddLinkCompleted: function (link, urlMeta) {
        // This seems to magically mutate the newly created link object in place.
        // No reassignment to this.list is necessary.
        link.title = urlMeta.title;
        this.updateList(this.list);
    },
    onAddLinkFailed: function (link) {
        console.log('onAddLinkFailed:', link);
    },
    updateList: function (list) {
        this.list = list;
        this.trigger(list);
    },
    getInitialState: function () {
        this.list = [{
            id: Date.now(),
            url: 'https://developer.github.com/guides/getting-started/',
            host: 'developer.github.com',
            title: 'Getting Started | GitHub API'
        }];

        return this.list;
    }
});
