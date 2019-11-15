import List from './List';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });