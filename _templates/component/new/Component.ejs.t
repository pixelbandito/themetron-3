---
to: <%= h.getFolder(name) %><%= h.changeCase.pascal(h.getComponentName(name)) %>/<%= h.changeCase.pascal(h.getComponentName(name)) %>.js
---
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import styles from './<%= h.changeCase.pascal(h.getComponentName(name)) %>.module.css';

const <%= h.changeCase.pascal(h.getComponentName(name)) %> = ({
  className,
  ...passedProps
}) => (
  <div
    {...passedProps}
    className={classNames(className, styles.<%= h.changeCase.pascal(h.getComponentName(name)) %>)}
  />
);

<%= h.changeCase.pascal(h.getComponentName(name)) %>.propTypes = {
  className: PropTypes.string,
};

<%= h.changeCase.pascal(h.getComponentName(name)) %>.defaultProps = {
  className: '',
};

const Styled<%= h.changeCase.pascal(h.getComponentName(name)) %> = styled(<%= h.changeCase.pascal(h.getComponentName(name)) %>)(
  ({
    backgroundColor,
    theme,
  }) => {
    return {
      backgroundColor: 'pink',
      color: theme.color,
    };
  }
);

export default Styled<%= h.changeCase.pascal(h.getComponentName(name)) %>;
