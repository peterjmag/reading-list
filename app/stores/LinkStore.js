import Reflux from 'reflux';
import LinkActions from '../actions/LinkActions';

export default Reflux.createStore({
    listenables: [
        LinkActions
    ],
    onAddLink: function (url) {
        this.updateList([{
            url: url,
            id: Date.now()
        }].concat(this.list));
    },
    updateList: function (list) {
        this.list = list;
        this.trigger(list);
    },
    getInitialState: function() {
        this.list = [{
            id: Date.now(),
            url: 'http://google.com/test'
        }];

        return this.list;
    }
});