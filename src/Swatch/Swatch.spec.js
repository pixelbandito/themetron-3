import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Swatch from './Swatch';

describe('Swatch', () => {
  it('doesn\'t error', () => {
    shallow(<Swatch />);
  });
});
