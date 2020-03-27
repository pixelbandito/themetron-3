import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import ColorViz from './ColorViz';

describe('ColorViz', () => {
  it('doesn\'t error', () => {
    shallow(<ColorViz />);
  });
});
