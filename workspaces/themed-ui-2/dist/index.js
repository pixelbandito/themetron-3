function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactTransitionGroup = require('react-transition-group');
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var styled = _interopDefault(require('styled-components'));
var styledSystem = require('styled-system');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var styles = {"Accordion":"_Accordion-module__Accordion__1bSEf","body":"_Accordion-module__body__2uO1G"};

var getModeStyles = function getModeStyles(_ref) {
  var mode = _ref.mode,
      lightModeStyle = _ref.lightModeStyle,
      darkModeStyle = _ref.darkModeStyle;
  return _extends(_extends({}, mode === 'dark' ? darkModeStyle : lightModeStyle), {}, {
    '@media (prefers-color-scheme: light)': !mode && _extends({}, lightModeStyle),
    '@media (prefers-color-scheme: dark)': !mode && _extends({}, darkModeStyle)
  });
};

var styles$1 = {"Card":"_Card-module__Card__3_bG_","Head":"_Card-module__Head__2QnXP","Foot":"_Card-module__Foot__2HgvM"};

var getCardStyles = function getCardStyles(_ref) {
  var _theme$shared;

  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      theme = _ref.theme;
  var darkModeStyle = {
    background: theme.baseColors.black,
    borderColor: theme.colors[variant]['light-1']
  };
  var lightModeStyle = {
    background: theme.baseColors.white,
    borderColor: theme.colors[variant]['dark-1']
  };
  return _extends({
    borderRadius: theme.shared.roundness * 2 + "px"
  }, getModeStyles({
    darkModeStyle: darkModeStyle,
    lightModeStyle: lightModeStyle,
    mode: theme === null || theme === void 0 ? void 0 : (_theme$shared = theme.shared) === null || _theme$shared === void 0 ? void 0 : _theme$shared.mode
  }));
};
var getCardHeadStyles = function getCardHeadStyles(_ref2) {
  var _theme$colors$variant, _theme$colors$variant2, _theme$colors$variant3, _theme$colors$variant4, _theme$shared2;

  var variant = _ref2.variant,
      theme = _ref2.theme;
  var lightModeStyle = {
    background: ((_theme$colors$variant = theme.colors[variant]) === null || _theme$colors$variant === void 0 ? void 0 : _theme$colors$variant['light-bg']) || 'transparent',
    borderColor: ((_theme$colors$variant2 = theme.colors[variant]) === null || _theme$colors$variant2 === void 0 ? void 0 : _theme$colors$variant2['dark-1']) || 'transparent'
  };
  var darkModeStyle = {
    background: ((_theme$colors$variant3 = theme.colors[variant]) === null || _theme$colors$variant3 === void 0 ? void 0 : _theme$colors$variant3['dark-bg']) || 'transparent',
    borderColor: ((_theme$colors$variant4 = theme.colors[variant]) === null || _theme$colors$variant4 === void 0 ? void 0 : _theme$colors$variant4['light-1']) || 'transparent'
  };
  return _extends({
    borderRadius: theme.shared.roundness * 2 + "px " + theme.shared.roundness * 2 + "px 0 0",
    padding: theme.space.sm + "px " + theme.space.md + "px"
  }, getModeStyles({
    darkModeStyle: darkModeStyle,
    lightModeStyle: lightModeStyle,
    mode: theme === null || theme === void 0 ? void 0 : (_theme$shared2 = theme.shared) === null || _theme$shared2 === void 0 ? void 0 : _theme$shared2.mode
  }));
};
var getCardBodyStyles = function getCardBodyStyles(_ref3) {
  var _theme$shared3;

  var theme = _ref3.theme;
  var darkModeStyle = {
    background: theme.baseColors.black
  };
  var lightModeStyle = {
    background: theme.baseColors.white
  };
  return _extends({
    padding: theme.space.md + "px"
  }, getModeStyles({
    darkModeStyle: darkModeStyle,
    lightModeStyle: lightModeStyle,
    mode: theme === null || theme === void 0 ? void 0 : (_theme$shared3 = theme.shared) === null || _theme$shared3 === void 0 ? void 0 : _theme$shared3.mode
  }));
};
var getCardFootStyles = function getCardFootStyles(_ref4) {
  var _theme$colors$variant5, _theme$colors$variant6, _theme$colors$variant7, _theme$colors$variant8, _theme$shared4;

  var variant = _ref4.variant,
      theme = _ref4.theme;
  var darkModeStyle = {
    background: ((_theme$colors$variant5 = theme.colors[variant]) === null || _theme$colors$variant5 === void 0 ? void 0 : _theme$colors$variant5['dark-bg']) || 'transparent',
    borderColor: ((_theme$colors$variant6 = theme.colors[variant]) === null || _theme$colors$variant6 === void 0 ? void 0 : _theme$colors$variant6['light-1']) || 'transparent'
  };
  var lightModeStyle = {
    background: ((_theme$colors$variant7 = theme.colors[variant]) === null || _theme$colors$variant7 === void 0 ? void 0 : _theme$colors$variant7['light-bg']) || 'transparent',
    borderColor: ((_theme$colors$variant8 = theme.colors[variant]) === null || _theme$colors$variant8 === void 0 ? void 0 : _theme$colors$variant8['dark-1']) || 'transparent'
  };
  return _extends({
    borderRadius: "0 0 " + theme.shared.roundness * 2 + "px " + theme.shared.roundness * 2 + "px",
    padding: theme.space.sm + "px " + theme.space.md + "px"
  }, getModeStyles({
    darkModeStyle: darkModeStyle,
    lightModeStyle: lightModeStyle,
    mode: theme === null || theme === void 0 ? void 0 : (_theme$shared4 = theme.shared) === null || _theme$shared4 === void 0 ? void 0 : _theme$shared4.mode
  }));
};
var Card = React__default.forwardRef(function (_ref5, forwardedRef) {
  var className = _ref5.className,
      passedProps = _objectWithoutPropertiesLoose(_ref5, ["className"]);

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classNames(className, styles$1.Card),
    ref: forwardedRef
  }, passedProps));
});
Card.propTypes = {
  className: PropTypes.string
};
Card.defaultProps = {
  className: ''
};
var StyledCard = styled(Card)(function (props) {
  return getCardStyles(props);
}, styledSystem.margin);
var CardHead = function CardHead(_ref6) {
  var className = _ref6.className,
      passedProps = _objectWithoutPropertiesLoose(_ref6, ["className"]);

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classNames(className, styles$1.Head)
  }, passedProps));
};
CardHead.propTypes = {
  className: PropTypes.string
};
CardHead.defaultProps = {
  className: ''
};
var StyledCardHead = styled(CardHead)(function (_ref7) {
  var variant = _ref7.variant,
      theme = _ref7.theme;
  return getCardHeadStyles({
    variant: variant,
    theme: theme
  });
});
var CardBody = React__default.forwardRef(function (_ref8, forwardRef) {
  var className = _ref8.className,
      passedProps = _objectWithoutPropertiesLoose(_ref8, ["className"]);

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classNames(className, styles$1.Body),
    ref: forwardRef
  }, passedProps));
});
CardBody.propTypes = {
  className: PropTypes.string
};
CardBody.defaultProps = {
  className: ''
};
var StyledCardBody = styled(CardBody)(function (_ref9) {
  var variant = _ref9.variant,
      theme = _ref9.theme;
  return getCardBodyStyles({
    variant: variant,
    theme: theme
  });
});
var CardFoot = function CardFoot(_ref10) {
  var className = _ref10.className,
      passedProps = _objectWithoutPropertiesLoose(_ref10, ["className"]);

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classNames(className, styles$1.Foot)
  }, passedProps));
};
CardFoot.propTypes = {
  className: PropTypes.string
};
CardFoot.defaultProps = {
  className: ''
};
var StyledCardFoot = styled(CardFoot)(function (_ref11) {
  var variant = _ref11.variant,
      theme = _ref11.theme;
  return getCardFootStyles({
    variant: variant,
    theme: theme
  });
});
StyledCard.Head = StyledCardHead;
StyledCard.Body = StyledCardBody;
StyledCard.Foot = StyledCardFoot;

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      className = _ref.className,
      defaultIsOpen = _ref.defaultIsOpen,
      customHead = _ref.head,
      variant = _ref.variant,
      passedProps = _objectWithoutPropertiesLoose(_ref, ["children", "className", "defaultIsOpen", "head", "variant"]);

  var _useState = React.useState(defaultIsOpen),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = React.useState(),
      expandedHeight = _useState2[0],
      setExpandedHeight = _useState2[1];

  var cardRef = React.useRef();
  var head = customHead || (isOpen ? 'Show less' : 'Show more');
  React.useEffect(function () {
    if (isOpen && cardRef.current) {
      setExpandedHeight(cardRef.current.scrollHeight);
    }
  }, [isOpen]);
  var transitionStyles = {
    exiting: {
      borderBottomWidth: 1
    },
    exited: {
      borderBottomWidth: 0
    }
  };
  return /*#__PURE__*/React__default.createElement(StyledCard, _extends({}, passedProps, {
    className: classNames(className, styles.Accordion),
    variant: variant
  }), /*#__PURE__*/React__default.createElement(reactTransitionGroup.Transition, {
    "in": isOpen,
    timeout: 200
  }, function (state) {
    return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(StyledCard.Head, {
      variant: variant,
      onClick: function onClick() {
        return setIsOpen(function (prevIsOpen) {
          return !prevIsOpen;
        });
      },
      style: _extends({}, transitionStyles[state])
    }, head), /*#__PURE__*/React__default.createElement(StyledCard.Body, {
      className: styles.body,
      ref: cardRef,
      style: {
        boxSizing: 'content-box',
        maxHeight: !isOpen ? '0px' : expandedHeight + "px",
        paddingBottom: !isOpen ? '0px' : undefined,
        paddingTop: !isOpen ? '0px' : undefined
      },
      variant: variant
    }, children));
  }));
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
var StyledAccordion = styled(Accordion)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    color: theme.color
  };
});

var Accordion$1 = StyledAccordion;
var Card$1 = StyledCard;

exports.Accordion = Accordion$1;
exports.Card = Card$1;
//# sourceMappingURL=index.js.map
