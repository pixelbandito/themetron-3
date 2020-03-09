import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Control from './Control';

describe('Control', () => {
  it('doesn\'t error', () => {
    shallow(<Control />);
  });
});
