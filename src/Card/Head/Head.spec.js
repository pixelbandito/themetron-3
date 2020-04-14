import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Head from './Head';

describe('Head', () => {
  it('doesn\'t error', () => {
    shallow(<Head />);
  });
});
