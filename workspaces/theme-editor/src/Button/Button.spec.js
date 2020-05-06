import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('doesn\'t error', () => {
    shallow(<Button />);
  });
});
