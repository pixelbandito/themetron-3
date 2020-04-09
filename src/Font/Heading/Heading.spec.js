import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Heading from './Heading';

describe('Heading', () => {
  it('doesn\'t error', () => {
    shallow(<Heading />);
  });
});
