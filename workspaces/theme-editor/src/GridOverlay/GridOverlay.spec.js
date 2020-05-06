import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import GridOverlay from './GridOverlay';

describe('GridOverlay', () => {
  it('doesn\'t error', () => {
    shallow(<GridOverlay />);
  });
});
