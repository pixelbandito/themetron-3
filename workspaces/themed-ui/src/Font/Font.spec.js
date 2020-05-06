import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Font from './Font';

describe('Font', () => {
  it('doesn\'t error', () => {
    shallow(<Font />);
  });
});
