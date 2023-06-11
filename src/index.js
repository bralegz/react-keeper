import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// ReactDOM.render(<App />, document.querySelector("#root")) // Deprecated.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
