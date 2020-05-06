import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { margin } from 'styled-system'
import { getModeStyles } from '../component-utils';
import styles from './Card.module.css';

export const getCardStyles = ({
  variant = 'default',
  theme,
}) => {
  const darkModeStyle = {
    background: theme.baseColors.black,
    borderColor: theme.colors[variant]['light-1'],
  };

  const lightModeStyle = {
    background: theme.baseColors.white,
    borderColor: theme.colors[variant]['dark-1'],
  };

  return {
    borderRadius: `${theme.shared.roundness * 2}px`,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme?.shared?.mode,
    }),
  };
};

export const getCardHeadStyles = ({
  variant,
  theme,
}) => {
  const lightModeStyle = {
    background: theme.colors[variant]?.['light-bg'] || 'transparent',
    borderColor: theme.colors[variant]?.['dark-1'] || 'transparent',
  };

  const darkModeStyle = {
    background: theme.colors[variant]?.['dark-bg'] || 'transparent',
    borderColor: theme.colors[variant]?.['light-1'] || 'transparent',
  };

  return {
    borderRadius: `${theme.shared.roundness * 2}px ${theme.shared.roundness * 2}px 0 0`,
    padding: `${theme.space.sm}px ${theme.space.md}px`,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme?.shared?.mode,
    }),
  };
};

export const getCardBodyStyles = ({
  theme,
}) => {
  const darkModeStyle = {
    background: theme.baseColors.black,
  };

  const lightModeStyle = {
    background: theme.baseColors.white,
  };

  return {
    padding: `${theme.space.md}px`,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme?.shared?.mode,
    }),
  };
};

export const getCardFootStyles = ({
  variant,
  theme,
}) => {
  const darkModeStyle = {
    background: theme.colors[variant]?.['dark-bg'] || 'transparent',
    borderColor: theme.colors[variant]?.['light-1'] || 'transparent',
  };

  const lightModeStyle = {
    background: theme.colors[variant]?.['light-bg'] || 'transparent',
    borderColor: theme.colors[variant]?.['dark-1'] || 'transparent',
  };

  return {
    borderRadius: `0 0 ${theme.shared.roundness * 2}px ${theme.shared.roundness * 2}px`,
    padding: `${theme.space.sm}px ${theme.space.md}px`,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme?.shared?.mode,
    }),
  };
};

const Card = React.forwardRef(({
  className,
  ...passedProps
}, forwardedRef) => (
  <div
    className={classNames(className, styles.Card)}
    ref={forwardedRef}
    {...passedProps}
  />
));

Card.propTypes = {
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

const StyledCard = styled(Card)(
  props => getCardStyles(props),
  margin,
);

export const CardHead = ({
  className,
  ...passedProps
}) => (
  <div
    className={classNames(className, styles.Head)}
    {...passedProps}
  />
);

CardHead.propTypes = {
  className: PropTypes.string,
};

CardHead.defaultProps = {
  className: '',
};

const StyledCardHead = styled(CardHead)(
  ({
    variant,
    theme,
  }) => getCardHeadStyles({
    variant,
    theme,
  }),
);

export const CardBody = React.forwardRef(({
  className,
  ...passedProps
}, forwardRef) => (
  <div
    className={classNames(className, styles.Body)}
    ref={forwardRef}
    {...passedProps}
  />
));

CardBody.propTypes = {
  className: PropTypes.string,
};

CardBody.defaultProps = {
  className: '',
};

const StyledCardBody = styled(CardBody)(
  ({
    variant,
    theme,
  }) => getCardBodyStyles({
    variant,
    theme,
  }),
);

export const CardFoot = ({
  className,
  ...passedProps
}) => (
  <div
    className={classNames(className, styles.Foot)}
    {...passedProps}
  />
);

CardFoot.propTypes = {
  className: PropTypes.string,
};

CardFoot.defaultProps = {
  className: '',
};

const StyledCardFoot = styled(CardFoot)(
  ({
    variant,
    theme,
  }) => getCardFootStyles({
    variant,
    theme,
  }),
);

StyledCard.Head = StyledCardHead;
StyledCard.Body = StyledCardBody;
StyledCard.Foot = StyledCardFoot;

export default StyledCard;
