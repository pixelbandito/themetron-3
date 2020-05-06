import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Link from './Link';

describe('Link', () => {
  it('doesn\'t error', () => {
    shallow(<Link />);
  });
});
