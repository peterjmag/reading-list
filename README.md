# readinglist.co

An example React web app for [a talk at React Berlin](http://www.meetup.com/React-Berlin/events/221080348/).

See this Gist and the companion React Native app for more info:  
[https://gist.github.com/peterjmag/2ef39ba5d25f3f1e0008](https://gist.github.com/peterjmag/2ef39ba5d25f3f1e0008 "Let&#39;s build a React Native app in 20 minutes - React Berlin #1")  
[https://github.com/peterjmag/ReadingListIOS](https://github.com/peterjmag/ReadingListIOS)

## Building and running locally

- `npm install`
- `npm start` to run the webpack dev server (with [React Hot Loader](http://gaearon.github.io/react-hot-loader/ "React Hot Loader &middot; Tweak React components in real time.") awesomeness!).
- `node server/api-server.js` to run the tiny API server.
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- If it works, great! Add some links and be happy.

You can also work without the webpack dev server. Just run `./node_modules/webpack/bin/webpack.js` in the project root (or just `webpack` if you have webpack installed globally) to generate `assets/bundle.js`.

Note that this is intended more for code examples than as an actual distributable app, so the setup isn't perfect (e.g. the fact that you have to run two separate Express servers kinda sucks), and can certainly be improved upon. That said, it should still run fine.

## TODO

- Add ESLint, clean things up a bit
- Add a production config for webpack
- Do a bunch of stuff to the API server to make it production-ready
    - Use something other than NeDB as a database
- Launch a startup that will take over the world
