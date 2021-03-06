import React from 'react';
import Font from '../Font';
import { withThemeFallback } from '../themeFallbackHelpers';

const Link = withThemeFallback(props => (
  <Font
    tag="a"
    color="primary"
    {...props}
  />
));

export const A = Link;

export default Link;
