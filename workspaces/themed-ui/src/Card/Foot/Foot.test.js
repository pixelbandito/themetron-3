import React from 'react';
import { render } from '@testing-library/react';
import Foot from './Foot';

describe('Foot', () => {
  it('doesn\'t error', () => {
    render(<Foot />);
  });
});
