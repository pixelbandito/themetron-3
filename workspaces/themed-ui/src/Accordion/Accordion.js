import React, {
  // <> shorthard doesn't work without importing Fragment
  // eslint-disable-next-line no-unused-vars
  Fragment,
  useContext,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { ThemeContext } from 'styled-components';
import styles from './Accordion.module.css';
import Card, { getCardBodyStyles } from '../Card';

export const UnstyledAccordion = ({
  children,
  className,
  defaultIsOpen,
  speed = 1,
  head: customHead,
  variant,
  ...passedProps
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const [duration, setDuration] = useState(1000 / speed);
  const [height, setHeight] = useState();
  const [transition, setTransition] = useState();
  const theme = useContext(ThemeContext);
  const head = customHead || (isOpen ? 'Show less' : 'Show more');

  const handleOnEnter = (node) => {
    // We have to compensate for padding, because we're using border-box
    let { padding = 0 } = getCardBodyStyles({ variant, theme });
    padding = parseInt(padding, 10);
    padding = !Number.isNaN(padding) ? padding : 0;
    // Padding compensation is dependent on how far we've animated in
    const percentClosed = 1 - node.offsetHeight / node.scrollHeight;
    const nextHeight = node.scrollHeight + padding * 2 * percentClosed;
    const currentHeight = node.offsetHeight + padding * 2 * percentClosed;
    const nextDuration = (nextHeight - currentHeight) / speed;
    setDuration(nextDuration);
    setHeight(`${nextHeight}px`);
    setTransition(`
      ${nextDuration}ms ease-in-out height,
      ${nextDuration}ms ease-in-out padding-bottom,
      ${nextDuration}ms ease-in-out padding-top
    `);
  };

  const handleOnEntered = (node) => {
    let { padding = 0 } = getCardBodyStyles({ variant, theme });
    padding = parseInt(padding, 10);
    padding = !Number.isNaN(padding) ? padding : 0;
    const currentHeight = node.offsetHeight + padding * 2;
    const nextDuration = currentHeight / speed;
    setDuration(nextDuration);
    setHeight(undefined);
  };

  const handleOnExit = (node) => {
    let { padding = 0 } = getCardBodyStyles({ variant, theme });
    padding = parseInt(padding, 10);
    padding = !Number.isNaN(padding) ? padding : 0;
    const percentClosed = 1 - node.offsetHeight / node.scrollHeight;
    const currentHeight = node.offsetHeight + padding * 2 * percentClosed;
    const nextDuration = currentHeight / speed;
    setDuration(nextDuration);
    setHeight(`${currentHeight}px`);
    setTransition(`
      ${nextDuration}ms ease-in-out height,
      ${nextDuration}ms ease-in-out padding-bottom,
      ${nextDuration}ms ease-in-out padding-top
    `);
  };

  const handleOnExiting = () => {
    setHeight(0);
  };

  return (
    <Card
      {...passedProps}
      className={classNames(className, styles.Accordion)}
      variant={variant}
    >
      <CSSTransition
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
          exitDone: styles.exitDone,
        }}
        in={isOpen}
        timeout={duration}
      >
        <Card.Head
          className={classNames(styles.head, {
            [styles.isOpen]: isOpen,
            [styles.isClosed]: !isOpen,
          })}
          onClick={() => setIsOpen(prev => !prev)}
          variant={variant}
          style={{
            transition: `${duration}ms ease-in-out border-width`,
          }}
        >
          {head}
        </Card.Head>
      </CSSTransition>
      <CSSTransition
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
          exitDone: styles.exitDone,
        }}
        in={isOpen}
        mountOnEnter
        onEnter={handleOnEnter}
        onEntered={handleOnEntered}
        onExit={handleOnExit}
        onExiting={handleOnExiting}
        timeout={duration}
        unmountOnExit
      >
        <Card.Body
          className={styles.body}
          style={{
            transition,
            height,
          }}
          variant={variant}
        >
          {children}
        </Card.Body>
      </CSSTransition>
    </Card>
  );
};

UnstyledAccordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultIsOpen: PropTypes.bool,
  head: PropTypes.node,
  speed: PropTypes.number,
  variant: PropTypes.string,
};

UnstyledAccordion.defaultProps = {
  children: null,
  className: '',
  defaultIsOpen: false,
  head: null,
  speed: 1,
  variant: 'default',
};

const StyledAccordion = styled(UnstyledAccordion)(
  ({
    theme,
  }) => ({
    color: theme.color,
  }),
);

export default StyledAccordion;
