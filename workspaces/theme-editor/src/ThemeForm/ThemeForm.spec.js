import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import ThemeForm from './ThemeForm';

describe('ThemeForm', () => {
  it('doesn\'t error', () => {
    shallow(<ThemeForm />);
  });
});
