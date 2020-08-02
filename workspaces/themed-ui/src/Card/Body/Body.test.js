import React from 'react';
import { render } from '@testing-library/react';
import Body from './Body';

describe('Body', () => {
  it('doesn\'t error', () => {
    render(<Body />);
  });
});
