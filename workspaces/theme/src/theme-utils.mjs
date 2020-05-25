import { getHexFromHexOrName, setColorByContrastWithHsl } from './utils/colors';

export const getInheritedBaseColor = ({
  attempt = 0,
  baseColors,
  maxAttempts: initMaxAttempts,
  prevUnsafeColor,
  resolveCssColors = true,
  unsafeColor,
}) => {
  let maxAttempts = initMaxAttempts;

  if (initMaxAttempts === undefined) {
    maxAttempts = Object.keys(baseColors).length;
  }

  if (attempt > maxAttempts) {
    return unsafeColor;
  }

  if (!baseColors[unsafeColor]) {
    return resolveCssColors ? unsafeColor : prevUnsafeColor;
  }

  return getInheritedBaseColor({
    attempt: attempt + 1,
    baseColors,
    maxAttempts,
    prevUnsafeColor: unsafeColor,
    resolveCssColors,
    unsafeColor: baseColors[unsafeColor],
  });
};

export const getColors = ({ baseColors }) => {
  const bgStep = 1.1;
  const contrastRatios = [7, 4.5, 3];

  const colors = Object.entries(baseColors).reduce((prevResult, [key, unsafeColor]) => {
    const result = { ...prevResult };
    let color = getInheritedBaseColor({ baseColors, unsafeColor });
    color = getHexFromHexOrName(color);
    const white = getHexFromHexOrName(baseColors.white);
    const black = getHexFromHexOrName(baseColors.black);

    if (['white', 'black'].indexOf(key) >= 0) {
      return result;
    }

    // Default is a special range from white to black,
    // but with user configured options for white and black
    if (key === 'default') {
      color = black;
    }

    result[key] = {};

    result[key].base = color;

    result[key]['light-bg'] = setColorByContrastWithHsl({
      hex: color,
      baseHex: white,
      contrastRatio: bgStep,
    });

    contrastRatios.forEach((contrastRatio, i) => {
      // Large text
      result[key][`light-${i + 1}`] = setColorByContrastWithHsl({
        hex: color,
        baseHex: result[key]['light-bg'],
        contrastRatio,
        direction: 'desc',
      });
    });

    result[key]['dark-bg'] = setColorByContrastWithHsl({
      hex: color,
      baseHex: black,
      contrastRatio: bgStep,
    });

    contrastRatios.forEach((contrastRatio, i) => {
      // Large text
      result[key][`dark-${i + 1}`] = setColorByContrastWithHsl({
        hex: color,
        baseHex: result[key]['dark-bg'],
        contrastRatio,
        direction: 'asc',
      });
    });

    return result;
  }, {});

  return colors;
};

// export const getFont = ({
//   fontData,
// }) => {
//   const getGFontApiUrl = () => {
//     const apiUrl = [];
//     apiUrl.push('https://fonts.googleapis.com/css?family=');
//     apiUrl.push(anonymousPro.family.replace(/ /g, '+'));
//     if (contains('italic', anonymousPro.variants)) {
//     apiUrl.push(':');
//     apiUrl.push('italic');
//     }
//     if (contains('greek', anonymousPro.subsets)) {
//     apiUrl.push('&subset=');
//     apiUrl.push('greek');
//     }
//
//     // url: 'https://fonts.googleapis.com/css?family=Anonymous+Pro:italic&subset=greek'
//     var url = apiUrl.join('');
//   }
// }

export const getButtons = ({
  baseColors,
  fonts,
  space,
}) => {
  const variants = Object.keys(baseColors)
    .filter(key => !['black', 'white'].includes(key))
    .reduce((result, key) => ({
      ...result,
      [key]: {
        default: {
          keyColor: key,
        },
        ':hover': {
          keyColor: key,
        },
        ':focus': {
          keyColor: key,
        },
        ':active': {
          keyColor: key,
        },
        ':disabled': {
          keyColor: 'neutral',
        },
      },
    }), {});

  return ({
    borderWidth: 1,
    roundness: 0.2,
    shine: 1, // Very shiny: glass, shiny: plastic, slightly shiny: paper, 0: flat
    sizes: {
      sm: {
        fontSize: fonts.sizes.sm,
        paddingH: space.sm,
        paddingV: space.xs,
      },
      md: {
        fontSize: fonts.sizes.md,
        paddingH: space.md,
        paddingV: space.sm,
      },
      lg: {
        fontSize: fonts.sizes.lg,
        paddingH: space.md,
        paddingV: space.sm,
      },
    },
    variants,
  });
};

export const getMinLineHeight = ({ size, space }) => {
  const idealSize = size * 1.4;
  const floor = Math.floor(idealSize / space.xs) * space.xs;
  const ceil = Math.ceil(idealSize / space.xs) * space.xs;
  const px = Math.abs(idealSize - floor) <= Math.abs(idealSize - ceil) ? floor : ceil;
  const ratio = px / size;

  return {
    px,
    ratio,
  };
};

export const getShared = ({ elevation = 1, roundness = 3, shine = 0 }) => ({
  elevation,
  mode: undefined, // 'light', 'dark', undefined
  roundness,
  shine,
});

export const getSizeLabelFromIndex = (sizeIndex) => {
  const smSizeLabels = ['sm', 'xs'];
  const lgSizeLabels = ['lg', 'xl'];
  const baseSizeLabel = 'md';

  if (sizeIndex < 0) {
    if (-1 * sizeIndex <= smSizeLabels.length) {
      return smSizeLabels[-1 * sizeIndex - 1];
    }

    return `${-1 * sizeIndex - 1}${smSizeLabels[smSizeLabels.length - 1]}`;
  }

  if (sizeIndex > 0) {
    if (sizeIndex <= lgSizeLabels.length) {
      return lgSizeLabels[sizeIndex - 1];
    }

    return `${sizeIndex - 1}${lgSizeLabels[lgSizeLabels.length - 1]}`;
  }

  return baseSizeLabel;
};

export const spacings = {
  compact: 2 * 4,
  cozy: 3 * 4,
  default: 4 * 4,
  relaxed: 5 * 4,
  loose: 6 * 4,
};

/*
  TODO: Make these objects easier to read, make compact have smaller spreads?
  Maybe make sizes go from -N to N, so if you have smaller than small or
  larger than large, it just limits you?
*/
export const getSizes = ({
  spacing = 'default',
  count,
  customSizes = {},
  lgCount = 0,
  mdSize: customMdSize = null,
  smCount = 0,
}) => {
  let mdSize = customMdSize;

  if (spacings[spacing]) {
    mdSize = spacings[spacing];
  }

  let offset;

  let sizes = [{
    label: 'md',
    size: mdSize,
  }];

  if (count) {
    if (count < 1) {
      throw new Error('Count must be at least 1');
    }

    offset = Math.floor(count / 2);
    sizes = new Array(count).fill(null).map((size, i) => i - offset);
  } else if (lgCount >= 0 && smCount >= 0) {
    offset = smCount;
    sizes = new Array(1 + lgCount + smCount).fill(null).map((size, i) => i - offset);
  } else {
    throw new Error('You must define `count` _or_ `lgCount`/`smCount`');
  }

  sizes = sizes.map((sizeIndex) => {
    const size = {
      label: getSizeLabelFromIndex(sizeIndex),
      size: mdSize * (2 ** sizeIndex),
    };

    return size;
  });

  return {
    ...sizes.reduce((result, size) => ({
      ...result,
      [size.label]: size.size,
    }), {}),
    ...customSizes,
  };
};
