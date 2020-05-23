import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Body from './Body';

describe('Body', () => {
  it('doesn\'t error', () => {
    shallow(<Body />);
  });
});
