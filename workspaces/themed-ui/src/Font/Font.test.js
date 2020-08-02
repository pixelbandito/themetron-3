import React from 'react';
import { render } from '@testing-library/react';
import Font from './Font';

describe('Font', () => {
  it('doesn\'t error', () => {
    render(<Font />);
  });
});
