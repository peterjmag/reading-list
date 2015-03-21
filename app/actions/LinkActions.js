import Reflux from 'reflux';
import Promise from 'es6-promise';
import 'isomorphic-fetch';

Promise.polyfill();

var LinkActions = Reflux.createActions({
    'addLink': { asyncResult: true }
});

LinkActions.addLink.listen(function (link) {
    fetch('//localhost:3001/api/v1/urlmeta/' + encodeURIComponent(link.url))
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
                LinkActions.addLink.failed(link);
            }

            return response.json();
        }).then(function (urlMeta) {
            LinkActions.addLink.completed(link, urlMeta);
        });
});

export default LinkActions;
