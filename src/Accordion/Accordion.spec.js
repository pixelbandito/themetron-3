import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import Accordion from './Accordion';

describe('Accordion', () => {
  it('doesn\'t error', () => {
    shallow(<Accordion />);
  });
});
