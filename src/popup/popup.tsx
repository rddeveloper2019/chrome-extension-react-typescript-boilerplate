import React from 'react';
import ReactDom from 'react-dom';
import './popup.css';

const test = <p>Hello World</p>;
const root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(test, root);
