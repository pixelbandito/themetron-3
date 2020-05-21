import React, { useState, useRef, useEffect, Fragment, useMemo } from 'react';
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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var colorName = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};

var conversions = createCommonjsModule(function (module) {
  var reverseKeywords = {};

  for (var key in colorName) {
    if (colorName.hasOwnProperty(key)) {
      reverseKeywords[colorName[key]] = key;
    }
  }

  var convert = module.exports = {
    rgb: {
      channels: 3,
      labels: 'rgb'
    },
    hsl: {
      channels: 3,
      labels: 'hsl'
    },
    hsv: {
      channels: 3,
      labels: 'hsv'
    },
    hwb: {
      channels: 3,
      labels: 'hwb'
    },
    cmyk: {
      channels: 4,
      labels: 'cmyk'
    },
    xyz: {
      channels: 3,
      labels: 'xyz'
    },
    lab: {
      channels: 3,
      labels: 'lab'
    },
    lch: {
      channels: 3,
      labels: 'lch'
    },
    hex: {
      channels: 1,
      labels: ['hex']
    },
    keyword: {
      channels: 1,
      labels: ['keyword']
    },
    ansi16: {
      channels: 1,
      labels: ['ansi16']
    },
    ansi256: {
      channels: 1,
      labels: ['ansi256']
    },
    hcg: {
      channels: 3,
      labels: ['h', 'c', 'g']
    },
    apple: {
      channels: 3,
      labels: ['r16', 'g16', 'b16']
    },
    gray: {
      channels: 1,
      labels: ['gray']
    }
  };

  for (var model in convert) {
    if (convert.hasOwnProperty(model)) {
      if (!('channels' in convert[model])) {
        throw new Error('missing channels property: ' + model);
      }

      if (!('labels' in convert[model])) {
        throw new Error('missing channel labels property: ' + model);
      }

      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error('channel and label counts mismatch: ' + model);
      }

      var channels = convert[model].channels;
      var labels = convert[model].labels;
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], 'channels', {
        value: channels
      });
      Object.defineProperty(convert[model], 'labels', {
        value: labels
      });
    }
  }

  convert.rgb.hsl = function (rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h;
    var s;
    var l;

    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }

    h = Math.min(h * 60, 360);

    if (h < 0) {
      h += 360;
    }

    l = (min + max) / 2;

    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }

    return [h, s * 100, l * 100];
  };

  convert.rgb.hsv = function (rgb) {
    var rdif;
    var gdif;
    var bdif;
    var h;
    var s;
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var v = Math.max(r, g, b);
    var diff = v - Math.min(r, g, b);

    var diffc = function (c) {
      return (v - c) / 6 / diff + 1 / 2;
    };

    if (diff === 0) {
      h = s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);

      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }

      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }

    return [h * 360, s * 100, v * 100];
  };

  convert.rgb.hwb = function (rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    var h = convert.rgb.hsl(rgb)[0];
    var w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };

  convert.rgb.cmyk = function (rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var c;
    var m;
    var y;
    var k;
    k = Math.min(1 - r, 1 - g, 1 - b);
    c = (1 - r - k) / (1 - k) || 0;
    m = (1 - g - k) / (1 - k) || 0;
    y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };

  function comparativeDistance(x, y) {
    return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
  }

  convert.rgb.keyword = function (rgb) {
    var reversed = reverseKeywords[rgb];

    if (reversed) {
      return reversed;
    }

    var currentClosestDistance = Infinity;
    var currentClosestKeyword;

    for (var keyword in colorName) {
      if (colorName.hasOwnProperty(keyword)) {
        var value = colorName[keyword];
        var distance = comparativeDistance(rgb, value);

        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
    }

    return currentClosestKeyword;
  };

  convert.keyword.rgb = function (keyword) {
    return colorName[keyword];
  };

  convert.rgb.xyz = function (rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };

  convert.rgb.lab = function (rgb) {
    var xyz = convert.rgb.xyz(rgb);
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    l = 116 * y - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
    return [l, a, b];
  };

  convert.hsl.rgb = function (hsl) {
    var h = hsl[0] / 360;
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var t1;
    var t2;
    var t3;
    var rgb;
    var val;

    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }

    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }

    t1 = 2 * l - t2;
    rgb = [0, 0, 0];

    for (var i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);

      if (t3 < 0) {
        t3++;
      }

      if (t3 > 1) {
        t3--;
      }

      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }

      rgb[i] = val * 255;
    }

    return rgb;
  };

  convert.hsl.hsv = function (hsl) {
    var h = hsl[0];
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var smin = s;
    var lmin = Math.max(l, 0.01);
    var sv;
    var v;
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    v = (l + s) / 2;
    sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };

  convert.hsv.rgb = function (hsv) {
    var h = hsv[0] / 60;
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var hi = Math.floor(h) % 6;
    var f = h - Math.floor(h);
    var p = 255 * v * (1 - s);
    var q = 255 * v * (1 - s * f);
    var t = 255 * v * (1 - s * (1 - f));
    v *= 255;

    switch (hi) {
      case 0:
        return [v, t, p];

      case 1:
        return [q, v, p];

      case 2:
        return [p, v, t];

      case 3:
        return [p, q, v];

      case 4:
        return [t, p, v];

      case 5:
        return [v, p, q];
    }
  };

  convert.hsv.hsl = function (hsv) {
    var h = hsv[0];
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var vmin = Math.max(v, 0.01);
    var lmin;
    var sl;
    var l;
    l = (2 - s) * v;
    lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };

  convert.hwb.rgb = function (hwb) {
    var h = hwb[0] / 360;
    var wh = hwb[1] / 100;
    var bl = hwb[2] / 100;
    var ratio = wh + bl;
    var i;
    var v;
    var f;
    var n;

    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }

    i = Math.floor(6 * h);
    v = 1 - bl;
    f = 6 * h - i;

    if ((i & 0x01) !== 0) {
      f = 1 - f;
    }

    n = wh + f * (v - wh);
    var r;
    var g;
    var b;

    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;

      case 1:
        r = n;
        g = v;
        b = wh;
        break;

      case 2:
        r = wh;
        g = v;
        b = n;
        break;

      case 3:
        r = wh;
        g = n;
        b = v;
        break;

      case 4:
        r = n;
        g = wh;
        b = v;
        break;

      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }

    return [r * 255, g * 255, b * 255];
  };

  convert.cmyk.rgb = function (cmyk) {
    var c = cmyk[0] / 100;
    var m = cmyk[1] / 100;
    var y = cmyk[2] / 100;
    var k = cmyk[3] / 100;
    var r;
    var g;
    var b;
    r = 1 - Math.min(1, c * (1 - k) + k);
    g = 1 - Math.min(1, m * (1 - k) + k);
    b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };

  convert.xyz.rgb = function (xyz) {
    var x = xyz[0] / 100;
    var y = xyz[1] / 100;
    var z = xyz[2] / 100;
    var r;
    var g;
    var b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.2040 + z * 1.0570;
    r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };

  convert.xyz.lab = function (xyz) {
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    l = 116 * y - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
    return [l, a, b];
  };

  convert.lab.xyz = function (lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var x;
    var y;
    var z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    var y2 = Math.pow(y, 3);
    var x2 = Math.pow(x, 3);
    var z2 = Math.pow(z, 3);
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };

  convert.lab.lch = function (lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var hr;
    var h;
    var c;
    hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;

    if (h < 0) {
      h += 360;
    }

    c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };

  convert.lch.lab = function (lch) {
    var l = lch[0];
    var c = lch[1];
    var h = lch[2];
    var a;
    var b;
    var hr;
    hr = h / 360 * 2 * Math.PI;
    a = c * Math.cos(hr);
    b = c * Math.sin(hr);
    return [l, a, b];
  };

  convert.rgb.ansi16 = function (args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];
    var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
    value = Math.round(value / 50);

    if (value === 0) {
      return 30;
    }

    var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

    if (value === 2) {
      ansi += 60;
    }

    return ansi;
  };

  convert.hsv.ansi16 = function (args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };

  convert.rgb.ansi256 = function (args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];

    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }

      if (r > 248) {
        return 231;
      }

      return Math.round((r - 8) / 247 * 24) + 232;
    }

    var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };

  convert.ansi16.rgb = function (args) {
    var color = args % 10;

    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }

      color = color / 10.5 * 255;
      return [color, color, color];
    }

    var mult = (~~(args > 50) + 1) * 0.5;
    var r = (color & 1) * mult * 255;
    var g = (color >> 1 & 1) * mult * 255;
    var b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };

  convert.ansi256.rgb = function (args) {
    if (args >= 232) {
      var c = (args - 232) * 10 + 8;
      return [c, c, c];
    }

    args -= 16;
    var rem;
    var r = Math.floor(args / 36) / 5 * 255;
    var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    var b = rem % 6 / 5 * 255;
    return [r, g, b];
  };

  convert.rgb.hex = function (args) {
    var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    var string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
  };

  convert.hex.rgb = function (args) {
    var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

    if (!match) {
      return [0, 0, 0];
    }

    var colorString = match[0];

    if (match[0].length === 3) {
      colorString = colorString.split('').map(function (char) {
        return char + char;
      }).join('');
    }

    var integer = parseInt(colorString, 16);
    var r = integer >> 16 & 0xFF;
    var g = integer >> 8 & 0xFF;
    var b = integer & 0xFF;
    return [r, g, b];
  };

  convert.rgb.hcg = function (rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var max = Math.max(Math.max(r, g), b);
    var min = Math.min(Math.min(r, g), b);
    var chroma = max - min;
    var grayscale;
    var hue;

    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }

    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma + 4;
    }

    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };

  convert.hsl.hcg = function (hsl) {
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var c = 1;
    var f = 0;

    if (l < 0.5) {
      c = 2.0 * s * l;
    } else {
      c = 2.0 * s * (1.0 - l);
    }

    if (c < 1.0) {
      f = (l - 0.5 * c) / (1.0 - c);
    }

    return [hsl[0], c * 100, f * 100];
  };

  convert.hsv.hcg = function (hsv) {
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var c = s * v;
    var f = 0;

    if (c < 1.0) {
      f = (v - c) / (1 - c);
    }

    return [hsv[0], c * 100, f * 100];
  };

  convert.hcg.rgb = function (hcg) {
    var h = hcg[0] / 360;
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;

    if (c === 0.0) {
      return [g * 255, g * 255, g * 255];
    }

    var pure = [0, 0, 0];
    var hi = h % 1 * 6;
    var v = hi % 1;
    var w = 1 - v;
    var mg = 0;

    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;

      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;

      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;

      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;

      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;

      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }

    mg = (1.0 - c) * g;
    return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
  };

  convert.hcg.hsv = function (hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var v = c + g * (1.0 - c);
    var f = 0;

    if (v > 0.0) {
      f = c / v;
    }

    return [hcg[0], f * 100, v * 100];
  };

  convert.hcg.hsl = function (hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var l = g * (1.0 - c) + 0.5 * c;
    var s = 0;

    if (l > 0.0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1.0) {
      s = c / (2 * (1 - l));
    }

    return [hcg[0], s * 100, l * 100];
  };

  convert.hcg.hwb = function (hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var v = c + g * (1.0 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };

  convert.hwb.hcg = function (hwb) {
    var w = hwb[1] / 100;
    var b = hwb[2] / 100;
    var v = 1 - b;
    var c = v - w;
    var g = 0;

    if (c < 1) {
      g = (v - c) / (1 - c);
    }

    return [hwb[0], c * 100, g * 100];
  };

  convert.apple.rgb = function (apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };

  convert.rgb.apple = function (rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };

  convert.gray.rgb = function (args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };

  convert.gray.hsl = convert.gray.hsv = function (args) {
    return [0, 0, args[0]];
  };

  convert.gray.hwb = function (gray) {
    return [0, 100, gray[0]];
  };

  convert.gray.cmyk = function (gray) {
    return [0, 0, 0, gray[0]];
  };

  convert.gray.lab = function (gray) {
    return [gray[0], 0, 0];
  };

  convert.gray.hex = function (gray) {
    var val = Math.round(gray[0] / 100 * 255) & 0xFF;
    var integer = (val << 16) + (val << 8) + val;
    var string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
  };

  convert.rgb.gray = function (rgb) {
    var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
});

function buildGraph() {
  var graph = {};
  var models = Object.keys(conversions);

  for (var len = models.length, i = 0; i < len; i++) {
    graph[models[i]] = {
      distance: -1,
      parent: null
    };
  }

  return graph;
}

function deriveBFS(fromModel) {
  var graph = buildGraph();
  var queue = [fromModel];
  graph[fromModel].distance = 0;

  while (queue.length) {
    var current = queue.pop();
    var adjacents = Object.keys(conversions[current]);

    for (var len = adjacents.length, i = 0; i < len; i++) {
      var adjacent = adjacents[i];
      var node = graph[adjacent];

      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }

  return graph;
}

function link(from, to) {
  return function (args) {
    return to(from(args));
  };
}

function wrapConversion(toModel, graph) {
  var path = [graph[toModel].parent, toModel];
  var fn = conversions[graph[toModel].parent][toModel];
  var cur = graph[toModel].parent;

  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link(conversions[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }

  fn.conversion = path;
  return fn;
}

var route = function (fromModel) {
  var graph = deriveBFS(fromModel);
  var conversion = {};
  var models = Object.keys(graph);

  for (var len = models.length, i = 0; i < len; i++) {
    var toModel = models[i];
    var node = graph[toModel];

    if (node.parent === null) {
      continue;
    }

    conversion[toModel] = wrapConversion(toModel, graph);
  }

  return conversion;
};

var convert = {};
var models = Object.keys(conversions);

function wrapRaw(fn) {
  var wrappedFn = function (args) {
    if (args === undefined || args === null) {
      return args;
    }

    if (arguments.length > 1) {
      args = Array.prototype.slice.call(arguments);
    }

    return fn(args);
  };

  if ('conversion' in fn) {
    wrappedFn.conversion = fn.conversion;
  }

  return wrappedFn;
}

function wrapRounded(fn) {
  var wrappedFn = function (args) {
    if (args === undefined || args === null) {
      return args;
    }

    if (arguments.length > 1) {
      args = Array.prototype.slice.call(arguments);
    }

    var result = fn(args);

    if (typeof result === 'object') {
      for (var len = result.length, i = 0; i < len; i++) {
        result[i] = Math.round(result[i]);
      }
    }

    return result;
  };

  if ('conversion' in fn) {
    wrappedFn.conversion = fn.conversion;
  }

  return wrappedFn;
}

models.forEach(function (fromModel) {
  convert[fromModel] = {};
  Object.defineProperty(convert[fromModel], 'channels', {
    value: conversions[fromModel].channels
  });
  Object.defineProperty(convert[fromModel], 'labels', {
    value: conversions[fromModel].labels
  });
  var routes = route(fromModel);
  var routeModels = Object.keys(routes);
  routeModels.forEach(function (toModel) {
    var fn = routes[toModel];
    convert[fromModel][toModel] = wrapRounded(fn);
    convert[fromModel][toModel].raw = wrapRaw(fn);
  });
});
var colorConvert = convert;

const getContrastRatio = ({
  hexA,
  hexB,
  luminanceA,
  luminanceB
}) => {
  luminanceA = luminanceA || luminanceA === 0 ? luminanceA : getLuminance(hexA);
  luminanceB = luminanceB || luminanceB === 0 ? luminanceB : getLuminance(hexB);
  const [darker, lighter] = [luminanceA, luminanceB].sort();
  const contrastRatio = ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
  return contrastRatio;
};
const getNextLuminanceByContrastRatio = ({
  luminance,
  contrastRatio
}) => luminance * contrastRatio + contrastRatio / 20 - 1 / 20;
const getPrevLuminanceByContrastRatio = ({
  luminance,
  contrastRatio
}) => (luminance + 1 / 20) / contrastRatio - 1 / 20;
const getLuminance = hex => {
  const rgb = colorConvert.hex.rgb(hex);
  let rgb2 = rgb.map((channel, i) => {
    let c = channel / 255;

    if (c <= 0.03928) {
      return c / 12.92;
    } else {
      return Math.pow((c + 0.055) / 1.055, 2.4);
    }
  });
  const luminance = 0.2126 * rgb2[0] + 0.7152 * rgb2[1] + 0.0722 * rgb2[2];
  return luminance;
};
const setColorByLuminanceWithHsl = ({
  attempt: _attempt = 0,
  hex,
  initHsl,
  luminance: targetLuminance,
  maxAttempts: _maxAttempts = 10
}) => {
  const luminance = getLuminance(hex);

  if (luminance === targetLuminance || _attempt >= _maxAttempts) {
    return hex;
  }

  const darken = luminance > targetLuminance;
  const jumpSize = (darken ? -100 : 100) / Math.pow(2, _attempt + 1);
  let prevHsl = colorConvert.hex.hsl(hex);
  let safeInitHsl = initHsl !== undefined ? initHsl : prevHsl;
  const hsl = setHsl({
    hsl: safeInitHsl,
    l: Math.max(0, Math.min(prevHsl[2] + jumpSize, 100))
  });

  if (`#${colorConvert.hsl.hex(hsl)}` === hex) {
    return hex;
  }

  return setColorByLuminanceWithHsl({
    attempt: _attempt + 1,
    hex: `#${colorConvert.hsl.hex(hsl)}`,
    initHsl: safeInitHsl,
    luminance: targetLuminance,
    maxAttempts: _maxAttempts
  });
};
const setColorByContrastWithHsl = ({
  attempt: _attempt2 = 0,
  baseHex,
  contrastRatio: targetContrastRatio,
  originalContrastRatio,
  direction,
  hex,
  maxAttempts: _maxAttempts2 = 10
}) => {
  let targetLuminance;
  originalContrastRatio = originalContrastRatio || targetContrastRatio;

  if (!direction) {
    targetLuminance = getLuminance(baseHex) > 0.5 ? getPrevLuminanceByContrastRatio({
      contrastRatio: targetContrastRatio,
      luminance: getLuminance(baseHex)
    }) : getNextLuminanceByContrastRatio({
      contrastRatio: targetContrastRatio,
      luminance: getLuminance(baseHex)
    });
  } else if (direction === 'asc') {
    targetLuminance = getNextLuminanceByContrastRatio({
      contrastRatio: targetContrastRatio,
      luminance: getLuminance(baseHex)
    });
  } else if (direction === 'desc') {
    targetLuminance = getPrevLuminanceByContrastRatio({
      contrastRatio: targetContrastRatio,
      luminance: getLuminance(baseHex)
    });
  }

  const nextColor = setColorByLuminanceWithHsl({
    hex,
    luminance: targetLuminance,
    maxAttempts: _maxAttempts2
  });

  if (getContrastRatio({
    hexA: nextColor,
    hexB: baseHex
  }) >= originalContrastRatio || _attempt2 > _maxAttempts2) {
    return nextColor;
  }

  return setColorByContrastWithHsl({
    attempt: _attempt2 + 1,
    baseHex,
    contrastRatio: targetContrastRatio + 0.05,
    originalContrastRatio,
    direction,
    hex,
    maxAttempts: _maxAttempts2
  });
};
const setHsl = ({
  hsl: [h, s, l],
  h: h2,
  s: s2,
  l: l2
}) => [typeof h2 === 'number' ? h2 : h, typeof s2 === 'number' ? s2 : s, typeof l2 === 'number' ? l2 : l];
const getHexFromHexOrName = color => {
  let safeValue;

  try {
    safeValue = colorConvert.keyword.hex(color).toLowerCase();
  } catch (e) {
    safeValue = color[0] === '#' ? color.substr(1) : color;
  }

  return `#${safeValue}` || '#000000';
};
window.pxbColors = {
  colorConvert,
  getContrastRatio,
  getHexFromHexOrName,
  getLuminance,
  setColorByContrastWithHsl,
  setHsl
};

const getMinLineHeight = ({
  size,
  space
}) => {
  const idealSize = size * 1.4;
  const floor = Math.floor(idealSize / space.xs) * space.xs;
  const ceil = Math.ceil(idealSize / space.xs) * space.xs;
  const px = Math.abs(idealSize - floor) <= Math.abs(idealSize - ceil) ? floor : ceil;
  const ratio = px / size;
  return {
    px,
    ratio
  };
};

const tagPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
}), PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
})]))]);

var styles$2 = {"Button":"_Button-module__Button__3hPPe"};

const getButttonStyle = ({
  outline: _outline = false,
  size: _size = 'md',
  theme,
  variant: variantKey = 'default'
}) => {
  const {
    buttons,
    colors,
    shared,
    space
  } = theme;
  const {
    borderWidth,
    sizes,
    variants
  } = buttons;
  let variant = { ...variants[variantKey]
  };

  const getVariantColors = ({
    contrast,
    mode,
    outline,
    styles
  }) => {
    var _backgroundColor$3, _color$, _backgroundColor$4;

    let backgroundColorKey = styles.keyColor || 'default';
    let backgroundColor = colors[backgroundColorKey] || backgroundColorKey;
    let colorKey = styles.color || (mode === 'dark' ? 'black' : 'white');
    let color = colors[colorKey] || colorKey;

    if (outline) {
      var _backgroundColor$, _backgroundColor$2;

      return {
        color: (_backgroundColor$ = backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor[`${mode}-${contrast}`]) !== null && _backgroundColor$ !== void 0 ? _backgroundColor$ : backgroundColor,
        backgroundColor: 'transparent',
        borderColor: (_backgroundColor$2 = backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor[`${mode}-${contrast}`]) !== null && _backgroundColor$2 !== void 0 ? _backgroundColor$2 : backgroundColor
      };
    }

    return {
      backgroundColor: (_backgroundColor$3 = backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor[`${mode}-${contrast}`]) !== null && _backgroundColor$3 !== void 0 ? _backgroundColor$3 : backgroundColor,
      color: (_color$ = color === null || color === void 0 ? void 0 : color[`${mode}-bg`]) !== null && _color$ !== void 0 ? _color$ : colorKey,
      borderColor: (_backgroundColor$4 = backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor[`${mode}-${contrast}`]) !== null && _backgroundColor$4 !== void 0 ? _backgroundColor$4 : backgroundColor
    };
  };

  let {
    fontSize,
    paddingH,
    paddingV
  } = sizes[_size];
  const {
    ratio: lineHeightRatio,
    px: lineHeightPx
  } = getMinLineHeight({
    size: fontSize,
    space
  });
  const lightModeStyle = {
    'default': { ...getVariantColors({
        contrast: '1',
        mode: 'light',
        outline: _outline,
        styles: variant['default']
      })
    },
    ':hover': { ...getVariantColors({
        contrast: '2',
        mode: 'light',
        outline: _outline,
        styles: variant[':hover']
      })
    },
    ':focus': { ...getVariantColors({
        contrast: '2',
        mode: 'light',
        outline: _outline,
        styles: variant[':focus']
      })
    },
    ':active': { ...getVariantColors({
        contrast: '2',
        mode: 'light',
        outline: _outline,
        styles: variant[':active']
      })
    },
    ':disabled': {
      color: getVariantColors({
        contrast: '3',
        mode: 'light',
        outline: _outline,
        styles: variant[':disabled']
      })
    }
  };
  const darkModeStyle = {
    'default': { ...getVariantColors({
        contrast: '1',
        mode: 'dark',
        outline: _outline,
        styles: variant['default']
      })
    },
    ':hover': { ...getVariantColors({
        contrast: '2',
        mode: 'dark',
        outline: _outline,
        styles: variant[':hover']
      })
    },
    ':focus': { ...getVariantColors({
        contrast: '2',
        mode: 'dark',
        outline: _outline,
        styles: variant[':focus']
      })
    },
    ':active': { ...getVariantColors({
        contrast: '2',
        mode: 'dark',
        outline: _outline,
        styles: variant[':active']
      })
    },
    ':disabled': { ...getVariantColors({
        contrast: '3',
        mode: 'dark',
        outline: _outline,
        styles: variant[':disabled']
      })
    }
  };
  const modeStyles = shared.mode === 'dark' && darkModeStyle || lightModeStyle;
  return {
    borderWidth,
    borderStyle: 'solid',
    borderRadius: theme.shared.roundness * (lineHeightPx / 2 + paddingV) / 10,
    paddingBottom: paddingV - borderWidth,
    paddingLeft: paddingH - borderWidth,
    paddingRight: paddingH - borderWidth,
    paddingTop: paddingV - borderWidth,
    fontSize: fontSize,
    lineHeight: lineHeightRatio,
    transition: 'background-color 0.2s linear, border-color 0.2s linear, color 0.2s linear',
    ...modeStyles.default,
    ':hover': { ...modeStyles[':hover']
    },
    ':focus': {
      outlineStyle: 'none',
      outlineColor: modeStyles.default.borderColor,
      boxShadow: `0 0 0 1px ${modeStyles.default.borderColor}, 0 0 4px 0px ${modeStyles[':focus'].borderColor}`,
      ...modeStyles[':focus']
    },
    ':active': { ...modeStyles[':active']
    },
    ':disabled': { ...modeStyles[':disabled']
    },
    '@media (prefers-color-scheme: light)': !shared.mode && { ...lightModeStyle
    },
    '@media (prefers-color-scheme: dark)': !shared.mode && { ...darkModeStyle
    }
  };
};

const Button = ({
  className,
  outline,
  tag: Tag,
  ...passedProps
}) => /*#__PURE__*/React.createElement(Tag, Object.assign({}, passedProps, {
  className: classNames(className, styles$2.Button)
}));

Button.propTypes = {
  className: PropTypes.string,
  tag: tagPropType
};
Button.defaultProps = {
  className: '',
  tag: 'button'
};
const StyledButton = styled(Button)(props => ({ ...getButttonStyle(props)
}), margin);

var styles$3 = {"Font":"_Font-module__Font__3FImO","P":"_Font-module__P__1a9Im"};

const getFontStyle = ({
  color: _color = 'default',
  contrast: _contrast = '2',
  family: _family = 'sansSerif',
  size: _size = 'md',
  weight: _weight = 'normal',
  theme
}) => {
  var _theme$shared;

  const {
    ratio: lineHeightRatio
  } = getMinLineHeight({
    size: theme.fonts.sizes[_size],
    space: { ...theme.space,
      xs: theme.space.sm
    }
  });
  const darkModeStyle = {
    color: theme.colors[_color][`dark-${_contrast}`]
  };
  const lightModeStyle = {
    color: theme.colors[_color][`light-${_contrast}`]
  };
  return {
    fontFamily: theme.fonts[_family],
    fontSize: theme.fonts.sizes[_size],
    fontWeight: theme.fonts.weights[_weight],
    lineHeight: lineHeightRatio,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme === null || theme === void 0 ? void 0 : (_theme$shared = theme.shared) === null || _theme$shared === void 0 ? void 0 : _theme$shared.mode
    })
  };
};

const Font = ({
  className,
  tag: CustomTag,
  ...passedProps
}) => /*#__PURE__*/React.createElement(CustomTag, Object.assign({}, passedProps, {
  className: classNames(className, styles$3.Font)
}));

Font.propTypes = {
  className: PropTypes.string,
  tag: tagPropType
};
Font.defaultProps = {
  className: '',
  tag: 'div'
};
const StyledFont = styled(Font)(props => getFontStyle(props), margin);
const P = props => /*#__PURE__*/React.createElement(StyledFont, Object.assign({
  className: styles$3.P,
  tag: "p"
}, props));
const Small = props => /*#__PURE__*/React.createElement(StyledFont, Object.assign({
  size: "sm",
  tag: "small"
}, props));
const Strong = props => /*#__PURE__*/React.createElement(StyledFont, Object.assign({
  tag: "strong",
  weight: "bold"
}, props));
const Em = props => /*#__PURE__*/React.createElement(StyledFont, Object.assign({
  tag: "em"
}, props));
const U = props => /*#__PURE__*/React.createElement(StyledFont, Object.assign({
  tag: "u"
}, props));
const I = props => /*#__PURE__*/React.createElement(StyledFont, Object.assign({
  tag: "i"
}, props));
const B = props => /*#__PURE__*/React.createElement(StyledFont, Object.assign({
  tag: "b",
  weight: "bold"
}, props));

var styles$4 = {"Heading":"_Heading-module__Heading__3T98U"};

const getHeadingFontStyle = ({
  level: _level = 1,
  theme
}) => {
  const levels = {
    1: {
      contrast: '3',
      size: 'xl',
      weight: 'normal'
    },
    2: {
      contrast: '3',
      size: 'lg',
      weight: 'normal'
    },
    3: {
      contrast: '3',
      size: 'md',
      weight: 'bold'
    },
    4: {
      contrast: '2',
      size: 'sm',
      weight: 'bold'
    }
  };
  return { ...getFontStyle({ ...levels[`${_level}`],
      theme
    })
  };
};

const Heading = ({
  className,
  level,
  tag: CustomTag,
  ...passedProps
}) => {
  const Tag = useMemo(() => {
    if (CustomTag) {
      return CustomTag;
    }

    return `h${level}`;
  }, [CustomTag, level]);
  return /*#__PURE__*/React.createElement(StyledFont, Object.assign({}, passedProps, {
    className: classNames(className, styles$4.Heading),
    tag: Tag
  }));
};

Heading.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tag: tagPropType
};
Heading.defaultProps = {
  className: '',
  level: 1,
  tag: null
};
const StyledHeading = styled(Heading)(({
  level,
  theme
}) => getHeadingFontStyle({
  level,
  theme
}));
const H1 = props => /*#__PURE__*/React.createElement(StyledHeading, Object.assign({}, props, {
  level: 1
}));
const H2 = props => /*#__PURE__*/React.createElement(StyledHeading, Object.assign({}, props, {
  level: 2
}));
const H3 = props => /*#__PURE__*/React.createElement(StyledHeading, Object.assign({}, props, {
  level: 3
}));
const H4 = props => /*#__PURE__*/React.createElement(StyledHeading, Object.assign({}, props, {
  level: 4
}));

const Heading$1 = StyledHeading;

const Link = props => /*#__PURE__*/React.createElement(StyledFont, Object.assign({
  tag: "a",
  color: "primary"
}, props));

const A = Link;

export { A, StyledAccordion as Accordion, B, StyledButton as Button, StyledCard as Card, CardBody, CardFoot, CardHead, Em, StyledFont as Font, H1, H2, H3, H4, Heading$1 as Heading, I, Link, P, Small, Strong, U, getCardBodyStyles, getCardFootStyles, getCardHeadStyles, getCardStyles, getFontStyle, getHeadingFontStyle };
//# sourceMappingURL=index.modern.js.map
