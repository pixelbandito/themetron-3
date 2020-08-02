import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('doesn\'t error', () => {
    render(<Input />);
  });
});
