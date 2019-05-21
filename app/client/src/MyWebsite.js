import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './container/Main';
import './style.css';

class MyWebsite extends Component {
  render() {
    return (
	    <BrowserRouter>
            <div className="website">
                <Main />
            </div>
        </BrowserRouter>
    );
  }
}

export default MyWebsite;
