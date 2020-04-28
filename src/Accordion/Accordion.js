import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  const head = customHead ?? (isOpen ? 'Show less' : 'Show more');

  useEffect(() => {
    if (isOpen && cardRef.current) {
      console.log(cardRef.current.scrollHeight, cardRef.current.offsetHeight);
      setExpandedHeight(cardRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <Card
      {...passedProps}
      className={classNames(className, styles.Accordion)}
      variant={variant}
    >
      <Card.Head
        variant={variant}
        onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
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
          marginTop: !isOpen ? '-1px' : undefined,
        }}
        variant={variant}
      >
        {children}
      </Card.Body>
    </Card>
  )
};

Accordion.propTypes = {
  className: PropTypes.string,
  defaultIsOpen: PropTypes.bool,
  head: PropTypes.node,
  variant: PropTypes.string,
};

Accordion.defaultProps = {
  className: '',
  defaultIsOpen: false,
  head: null,
  variant: 'default',
};

const StyledAccordion = styled(Accordion)(
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

export default StyledAccordion;
