import React from 'react';
import ReactDom from 'react-dom';
import './options.css';

const test = (
  <div>
    <img src='icon.png' alt='icon' />
  </div>
);
const root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(test, root);
