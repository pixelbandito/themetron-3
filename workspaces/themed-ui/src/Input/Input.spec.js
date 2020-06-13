import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  it('doesn\'t error', () => {
    shallow(<Input />);
  });
});
