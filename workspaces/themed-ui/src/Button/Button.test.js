import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('doesn\'t error', () => {
    render(<Button />);
  });
});
