import React, {
  // <> shorthard doesn't work without importing Fragment
  // eslint-disable-next-line no-unused-vars
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Transition } from 'react-transition-group';
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
  const [expandedHeight, setExpandedHeight] = useState();
  const cardRef = useRef();
  const head = customHead || (isOpen ? 'Show less' : 'Show more');

  useEffect(() => {
    if (isOpen && cardRef.current) {
      setExpandedHeight(cardRef.current.scrollHeight);
    }
  }, [isOpen]);

  const transitionStyles = {
    exiting: { borderBottomWidth: 1 },
    exited: { borderBottomWidth: 0 },
  };

  return (
    <Card
      {...passedProps}
      className={classNames(className, styles.Accordion)}
      variant={variant}
    >
      <Transition
        in={isOpen}
        timeout={200}
      >
        {state => (
          <>
            <Card.Head
              variant={variant}
              onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
              style={{
                ...transitionStyles[state],
              }}
            >
              {head}
            </Card.Head>
            <Card.Body
              className={styles.body}
              ref={cardRef}
              style={{
                boxSizing: 'content-box',
                maxHeight: !isOpen ? '0px' : `${expandedHeight}px`,
                paddingBottom: !isOpen ? '0px' : undefined,
                paddingTop: !isOpen ? '0px' : undefined,
              }}
              variant={variant}
            >
              {children}
            </Card.Body>
          </>
        )}
      </Transition>
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
