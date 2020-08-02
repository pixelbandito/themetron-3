import React from 'react';
import { render } from '@testing-library/react';
import Link from './Link';

describe('Link', () => {
  it('doesn\'t error', () => {
    render(<Link href="." />);
  });
});
