import 'styles/app';
import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';

// Import the main application
import App from './App';

// Here, we tell React to render our application inside the <div id="app">
// element in our index.html
ReactDOM.render(<App />, document.getElementById('app'));
