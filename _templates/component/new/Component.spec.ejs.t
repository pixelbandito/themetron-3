---
to: <%= h.getFolder(name) %><%= h.changeCase.pascal(h.getComponentName(name)) %>/<%= h.changeCase.pascal(h.getComponentName(name)) %>.spec.js
---
import React from 'react';
import { describe, it } from 'mocha';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import <%= h.changeCase.pascal(h.getComponentName(name)) %> from './<%= h.changeCase.pascal(h.getComponentName(name)) %>';

describe('<%= h.changeCase.pascal(h.getComponentName(name)) %>', () => {
  it('doesn\'t error', () => {
    shallow(<<%= h.changeCase.pascal(h.getComponentName(name)) %> />);
  });
});
