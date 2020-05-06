import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('doesn\'t error', () => {
    shallow(<Card />);
  });
});
