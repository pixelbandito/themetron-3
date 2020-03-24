import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import ColorRamp from './ColorRamp';

describe('ColorRamp', () => {
  it('doesn\'t error', () => {
    shallow(<ColorRamp />);
  });
});
