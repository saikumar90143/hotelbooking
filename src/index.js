import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min"
import './index.css';

import {BrowserRouter as Router} from 'react-router-dom'
import Loader from './components/Loader';

const App=lazy(()=> import ("./App"))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Loader/>}>
      <App />
      </Suspense>
    
    </Router>
  </React.StrictMode>
);


