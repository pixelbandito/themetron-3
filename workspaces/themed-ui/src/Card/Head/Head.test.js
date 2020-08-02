import React from 'react';
import { render } from '@testing-library/react';
import Head from './Head';

describe('Head', () => {
  it('doesn\'t error', () => {
    render(<Head />);
  });
});
