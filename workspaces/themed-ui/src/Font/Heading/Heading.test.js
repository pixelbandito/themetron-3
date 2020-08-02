import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  it('doesn\'t error', () => {
    render(<Heading />);
  });
});
