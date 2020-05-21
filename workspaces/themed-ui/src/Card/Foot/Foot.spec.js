import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Foot from './Foot';

describe('Foot', () => {
  it('doesn\'t error', () => {
    shallow(<Foot />);
  });
});
