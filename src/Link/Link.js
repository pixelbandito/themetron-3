import React from 'react';
import Font from '../Font';

export const Link = props => (
  <Font
    tag="a"
    color="primary"
    {...props}
  />
);

export const A = Link;

export default Link;
