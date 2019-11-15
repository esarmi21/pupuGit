import Card from './card';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });