import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { margin } from 'styled-system';

var styles = {"Accordion":"_Accordion-module__Accordion__1bSEf","body":"_Accordion-module__body__2uO1G"};

const getModeStyles = ({
  mode,
  lightModeStyle,
  darkModeStyle
}) => ({ ...(mode === 'dark' ? darkModeStyle : lightModeStyle),
  '@media (prefers-color-scheme: light)': !mode && { ...lightModeStyle
  },
  '@media (prefers-color-scheme: dark)': !mode && { ...darkModeStyle
  }
});

var styles$1 = {"Card":"_Card-module__Card__3_bG_","Head":"_Card-module__Head__2QnXP","Foot":"_Card-module__Foot__2HgvM"};

const getCardStyles = ({
  variant: _variant = 'default',
  theme
}) => {
  var _theme$shared;

  const darkModeStyle = {
    background: theme.baseColors.black,
    borderColor: theme.colors[_variant]['light-1']
  };
  const lightModeStyle = {
    background: theme.baseColors.white,
    borderColor: theme.colors[_variant]['dark-1']
  };
  return {
    borderRadius: `${theme.shared.roundness * 2}px`,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme === null || theme === void 0 ? void 0 : (_theme$shared = theme.shared) === null || _theme$shared === void 0 ? void 0 : _theme$shared.mode
    })
  };
};
const getCardHeadStyles = ({
  variant,
  theme
}) => {
  var _theme$colors$variant, _theme$colors$variant2, _theme$colors$variant3, _theme$colors$variant4, _theme$shared2;

  const lightModeStyle = {
    background: ((_theme$colors$variant = theme.colors[variant]) === null || _theme$colors$variant === void 0 ? void 0 : _theme$colors$variant['light-bg']) || 'transparent',
    borderColor: ((_theme$colors$variant2 = theme.colors[variant]) === null || _theme$colors$variant2 === void 0 ? void 0 : _theme$colors$variant2['dark-1']) || 'transparent'
  };
  const darkModeStyle = {
    background: ((_theme$colors$variant3 = theme.colors[variant]) === null || _theme$colors$variant3 === void 0 ? void 0 : _theme$colors$variant3['dark-bg']) || 'transparent',
    borderColor: ((_theme$colors$variant4 = theme.colors[variant]) === null || _theme$colors$variant4 === void 0 ? void 0 : _theme$colors$variant4['light-1']) || 'transparent'
  };
  return {
    borderRadius: `${theme.shared.roundness * 2}px ${theme.shared.roundness * 2}px 0 0`,
    padding: `${theme.space.sm}px ${theme.space.md}px`,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme === null || theme === void 0 ? void 0 : (_theme$shared2 = theme.shared) === null || _theme$shared2 === void 0 ? void 0 : _theme$shared2.mode
    })
  };
};
const getCardBodyStyles = ({
  theme
}) => {
  var _theme$shared3;

  const darkModeStyle = {
    background: theme.baseColors.black
  };
  const lightModeStyle = {
    background: theme.baseColors.white
  };
  return {
    padding: `${theme.space.md}px`,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme === null || theme === void 0 ? void 0 : (_theme$shared3 = theme.shared) === null || _theme$shared3 === void 0 ? void 0 : _theme$shared3.mode
    })
  };
};
const getCardFootStyles = ({
  variant,
  theme
}) => {
  var _theme$colors$variant5, _theme$colors$variant6, _theme$colors$variant7, _theme$colors$variant8, _theme$shared4;

  const darkModeStyle = {
    background: ((_theme$colors$variant5 = theme.colors[variant]) === null || _theme$colors$variant5 === void 0 ? void 0 : _theme$colors$variant5['dark-bg']) || 'transparent',
    borderColor: ((_theme$colors$variant6 = theme.colors[variant]) === null || _theme$colors$variant6 === void 0 ? void 0 : _theme$colors$variant6['light-1']) || 'transparent'
  };
  const lightModeStyle = {
    background: ((_theme$colors$variant7 = theme.colors[variant]) === null || _theme$colors$variant7 === void 0 ? void 0 : _theme$colors$variant7['light-bg']) || 'transparent',
    borderColor: ((_theme$colors$variant8 = theme.colors[variant]) === null || _theme$colors$variant8 === void 0 ? void 0 : _theme$colors$variant8['dark-1']) || 'transparent'
  };
  return {
    borderRadius: `0 0 ${theme.shared.roundness * 2}px ${theme.shared.roundness * 2}px`,
    padding: `${theme.space.sm}px ${theme.space.md}px`,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme === null || theme === void 0 ? void 0 : (_theme$shared4 = theme.shared) === null || _theme$shared4 === void 0 ? void 0 : _theme$shared4.mode
    })
  };
};
const Card = React.forwardRef(({
  className,
  ...passedProps
}, forwardedRef) => /*#__PURE__*/React.createElement("div", Object.assign({
  className: classNames(className, styles$1.Card),
  ref: forwardedRef
}, passedProps)));
Card.propTypes = {
  className: PropTypes.string
};
Card.defaultProps = {
  className: ''
};
const StyledCard = styled(Card)(props => getCardStyles(props), margin);
const CardHead = ({
  className,
  ...passedProps
}) => /*#__PURE__*/React.createElement("div", Object.assign({
  className: classNames(className, styles$1.Head)
}, passedProps));
CardHead.propTypes = {
  className: PropTypes.string
};
CardHead.defaultProps = {
  className: ''
};
const StyledCardHead = styled(CardHead)(({
  variant,
  theme
}) => getCardHeadStyles({
  variant,
  theme
}));
const CardBody = React.forwardRef(({
  className,
  ...passedProps
}, forwardRef) => /*#__PURE__*/React.createElement("div", Object.assign({
  className: classNames(className, styles$1.Body),
  ref: forwardRef
}, passedProps)));
CardBody.propTypes = {
  className: PropTypes.string
};
CardBody.defaultProps = {
  className: ''
};
const StyledCardBody = styled(CardBody)(({
  variant,
  theme
}) => getCardBodyStyles({
  variant,
  theme
}));
const CardFoot = ({
  className,
  ...passedProps
}) => /*#__PURE__*/React.createElement("div", Object.assign({
  className: classNames(className, styles$1.Foot)
}, passedProps));
CardFoot.propTypes = {
  className: PropTypes.string
};
CardFoot.defaultProps = {
  className: ''
};
const StyledCardFoot = styled(CardFoot)(({
  variant,
  theme
}) => getCardFootStyles({
  variant,
  theme
}));
StyledCard.Head = StyledCardHead;
StyledCard.Body = StyledCardBody;
StyledCard.Foot = StyledCardFoot;

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
    exiting: {
      borderBottomWidth: 1
    },
    exited: {
      borderBottomWidth: 0
    }
  };
  return /*#__PURE__*/React.createElement(StyledCard, Object.assign({}, passedProps, {
    className: classNames(className, styles.Accordion),
    variant: variant
  }), /*#__PURE__*/React.createElement(Transition, {
    in: isOpen,
    timeout: 200
  }, state => /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(StyledCard.Head, {
    variant: variant,
    onClick: () => setIsOpen(prevIsOpen => !prevIsOpen),
    style: { ...transitionStyles[state]
    }
  }, head), /*#__PURE__*/React.createElement(StyledCard.Body, {
    className: styles.body,
    ref: cardRef,
    style: {
      boxSizing: 'content-box',
      maxHeight: !isOpen ? '0px' : `${expandedHeight}px`,
      paddingBottom: !isOpen ? '0px' : undefined,
      paddingTop: !isOpen ? '0px' : undefined
    },
    variant: variant
  }, children))));
};

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultIsOpen: PropTypes.bool,
  head: PropTypes.node,
  variant: PropTypes.string
};
Accordion.defaultProps = {
  children: null,
  className: '',
  defaultIsOpen: false,
  head: null,
  variant: 'default'
};
const StyledAccordion = styled(Accordion)(({
  theme
}) => ({
  color: theme.color
}));

const Accordion$1 = StyledAccordion;
const Card$1 = StyledCard;

export { Accordion$1 as Accordion, Card$1 as Card };
//# sourceMappingURL=index.modern.js.map
