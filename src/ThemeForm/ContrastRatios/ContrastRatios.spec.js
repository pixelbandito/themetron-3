import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import ContrastRatios from './ContrastRatios';

describe('ContrastRatios', () => {
  it('doesn\'t error', () => {
    shallow(<ContrastRatios />);
  });
});
