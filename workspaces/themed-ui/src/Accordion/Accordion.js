import React, {
  // <> shorthard doesn't work without importing Fragment
  // eslint-disable-next-line no-unused-vars
  Fragment,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import styles from './Accordion.module.css';
import Card from '../Card';

const Accordion = ({
  children,
  className,
  defaultIsOpen,
  head: customHead,
  variant,
  ...passedProps
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const [scrollHeight, setScrollHeight] = useState();
  const [height, setHeight] = useState();
  const cardRef = useRef();
  const head = customHead || (isOpen ? 'Show less' : 'Show more');
  const [duration, setDuration] = useState(1000);

  useLayoutEffect(() => {
    if (cardRef.current && !defaultIsOpen) {
      setScrollHeight(cardRef.current.scrollHeight);
      setDuration(cardRef.current.scrollHeight);
    }
  }, [defaultIsOpen]);

  const defaultStyle = {
    transition: `
      ${duration}ms ease-in-out height,
      ${duration}ms ease-in-out padding-bottom,
      ${duration}ms ease-in-out padding-top`,
  };

  const handleEnter = (element) => {
    setScrollHeight(element.scrollHeight);
    setDuration(element.scrollHeight);
    setHeight(0);
  };

  const handleEntering = () => {
    setHeight(scrollHeight);
  };

  const handleEntered = () => {
    setHeight(null);
  };

  const handleExit = (element) => {
    setScrollHeight(element.scrollHeight);
    setDuration(element.scrollHeight);
    setHeight(element.scrollHeight);
  };

  const handleExiting = () => {
    setHeight(0);
  };

  const handleExited = () => {
    setHeight(null);
  };

  const handleToggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <Card
      {...passedProps}
      className={classNames(className, styles.Accordion)}
      variant={variant}
    >
      <Card.Head
        className={classNames(styles.head, {
          [styles.isOpen]: isOpen,
        })}
        variant={variant}
        onClick={handleToggle}
      >
        {head}
      </Card.Head>
      <CSSTransition
        classNames={{
          appear: styles.appear,
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
          exitDone: styles.exitDone,
        }}
        in={isOpen}
        onEnter={handleEnter}
        onEntering={handleEntering}
        onEntered={handleEntered}
        onExit={handleExit}
        onExiting={handleExiting}
        onExited={handleExited}
        timeout={duration}
      >
        <Card.Body
          className={styles.body}
          ref={cardRef}
          style={{
            ...defaultStyle,
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

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultIsOpen: PropTypes.bool,
  head: PropTypes.node,
  variant: PropTypes.string,
};

Accordion.defaultProps = {
  children: null,
  className: '',
  defaultIsOpen: false,
  head: null,
  variant: 'default',
};

const StyledAccordion = styled(Accordion)(
  ({
    theme,
  }) => ({
    color: theme.color,
  }),
);

export default StyledAccordion;
