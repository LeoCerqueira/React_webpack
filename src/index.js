'use strict';

import Title from './app';

import React from 'react';
var ReactDOM = require('react-dom');

ReactDOM.render(
	React.createElement(Title),
	document.querySelector('[data-js="app"]')
);
