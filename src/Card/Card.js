import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import styles from './Card.module.css';

export const getCardStyles = ({
  variant = 'default',
  theme,
}) => ({
  borderColor: theme.colors[variant]['dark-1'],
  borderRadius: `${theme.shared.roundness * 2}px`,
});

export const getCardHeadStyles = ({
  variant = 'default',
  theme,
}) => ({
  background: theme.colors[variant]['light-bg'],
  borderColor: theme.colors[variant]['dark-1'],
  borderRadius: `${theme.shared.roundness * 2}px ${theme.shared.roundness * 2}px 0 0`,
  padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
});

export const getCardBodyStyles = ({
  theme,
}) => ({
  background: theme.baseColors.white,
  padding: `${theme.spacing.md}px`,
});

export const getCardFootStyles = ({
  variant = 'default',
  theme,
}) => ({
  background: theme.colors[variant]['light-bg'],
  borderColor: theme.colors[variant]['dark-1'],
  borderRadius: `0 0 ${theme.shared.roundness * 2}px ${theme.shared.roundness * 2}px`,
  padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
});

const Card = ({
  className,
  ...passedProps
}) => (
  <div
    className={classNames(className, styles.Card)}
    {...passedProps}
  />
);

Card.propTypes = {
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

const StyledCard = styled(Card)(
  ({
    variant,
    theme,
  }) => getCardStyles({
    variant,
    theme,
  }),
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

export const CardBody = ({
  className,
  ...passedProps
}) => (
  <div
    className={classNames(className, styles.Body)}
    {...passedProps}
  />
);

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
