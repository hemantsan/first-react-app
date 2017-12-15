import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppList from './AppList';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<AppList />, document.getElementById('root'));
registerServiceWorker();
