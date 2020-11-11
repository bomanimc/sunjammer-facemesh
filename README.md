# Sunjammer Facemesh

This application runs a Facemesh demo by Google and communicates the data for each prediction over a Websocket with Socket.io. To get data, listen to the socket endpoint `/prediction`.

See a deployed version of this application here: https://sunjammer-facemesh.herokuapp.com/

### Local Development
```
// Install dependencies
yarn install

// To build static assets
yarn build

// Watch for changes to trigger rebuilds
yarn watch

// Start a development server
node server.js
```