import colorConvert from 'color-convert';

export const getContrastRatio = ({ hexA, hexB, luminanceA, luminanceB }) => {
  luminanceA = luminanceA || luminanceA === 0 ? luminanceA : getLuminance(hexA);
  luminanceB = luminanceB || luminanceB === 0 ? luminanceB : getLuminance(hexB);
  const [darker, lighter] = [luminanceA, luminanceB].sort();
  const contrastRatio = ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
  return contrastRatio;
};

export const getLuminance = hex => {
  const rgb = colorConvert.hex.rgb(hex);

  let rgb2 = rgb.map((channel, i) => {
    let c = channel / 255;

    if (c <= 0.03928) {
      return c / 12.92;
    } else {
      return Math.pow((c + 0.055) / 1.055, 2.4);
    }
  });

  const luminance = (0.2126 * rgb2[0] + 0.7152 * rgb2[1] + 0.0722 * rgb2[2]);
  return luminance;
};

export const getTargetLuminanceViaHsl = ({
  attempt = 0,
  hex,
  initHsl,
  luminance: targetLuminance,
  maxAttempts = 10,
}) => {
  const luminance = getLuminance(hex);

  if (luminance === targetLuminance || attempt >= maxAttempts) {
    return hex;
  }

  const darken = luminance > targetLuminance;
  const jumpSize = (darken ? -100 : 100) / Math.pow(2, attempt + 1);
  let prevHsl = colorConvert.hex.hsl(hex);
  let safeInitHsl = initHsl !== undefined ? initHsl : prevHsl;

  const hsl = setHsl({
    hsl: safeInitHsl,
    l: Math.max(0, Math.min(prevHsl[2] + jumpSize, 100)),
  });

  if (`#${colorConvert.hsl.hex(hsl)}` === hex) {
    return hex;
  }

  return getTargetLuminanceViaHsl({
    attempt: attempt + 1,
    hex: `#${colorConvert.hsl.hex(hsl)}`,
    initHsl: safeInitHsl,
    luminance: targetLuminance,
    maxAttempts,
  });
};

export const getTargetContrastViaHsl = ({
  attempt = 0,
  baseHex,
  contrastRatio: targetContrastRatio,
  hex,
  initHsl,
  maxAttempts = 10,
}) => {
  const luminanceA = getLuminance(hex);
  const luminanceB = getLuminance(baseHex);
  const contrastRatio = getContrastRatio({ luminanceA, luminanceB });

  if (contrastRatio === targetContrastRatio || attempt >= maxAttempts) {
    return hex;
  }

  let darken = (
    (luminanceA > luminanceB && contrastRatio > targetContrastRatio) ||
    (luminanceA < luminanceB && contrastRatio < targetContrastRatio)
  );

  const jumpSize = (darken ? -100 : 100) / Math.pow(2, attempt + 1);
  let prevHsl = colorConvert.hex.hsl(hex);
  let safeInitHsl = initHsl !== undefined ? initHsl : prevHsl;

  const hsl = setHsl({
    hsl: safeInitHsl,
    l: Math.max(0, Math.min(prevHsl[2] + jumpSize, 100)),
  });

  if (`#${colorConvert.hsl.hex(hsl)}` === hex) {
    return hex;
  }

  const nextValues = {
    attempt: attempt + 1,
    baseHex,
    contrastRatio: targetContrastRatio,
    hex: `#${colorConvert.hsl.hex(hsl)}`,
    initHsl: safeInitHsl,
    maxAttempts,
  };

  console.log(nextValues);

  return getTargetContrastViaHsl(nextValues);
};

// TODO: Figure out a better algorithm for shifting brightness and saturation for hsv
export const getTargetContrastViaHsv = ({
  attempt = 0,
  baseHex,
  contrastRatio: targetContrastRatio,
  hex,
  maxAttempts = 10,
}) => {
  console.warn("HSV color ramps aren't supported currently.");
  const luminanceA = getLuminance(hex);
  const luminanceB = getLuminance(baseHex);
  const contrastRatio = getContrastRatio({ luminanceA, luminanceB });

  if (contrastRatio === targetContrastRatio || attempt >= maxAttempts) {
    return hex;
  } else {
    let hsv = colorConvert.hex.hsv(hex);

    let darken = (
      (luminanceA > luminanceB && contrastRatio > targetContrastRatio) ||
      (luminanceA < luminanceB && contrastRatio < targetContrastRatio)
    );

    let jumpSize = darken ? 100 - hsv[2] : 100 - hsv[1];
    jumpSize = jumpSize / Math.pow(2, attempt + 1);
    hsv = setHsv({
      hsv,
      l: !darken ? hsv[1] + jumpSize : hsv[1],
      v: darken ? hsv[2] + jumpSize : hsv[2],
    });

    if (`#${colorConvert.hsv.hex(hsv)}` === hex) {
      return hex;
    }

    return getTargetContrastViaHsv({
      attempt: attempt + 1,
      baseHex,
      contrastRatio: targetContrastRatio,
      hex: `#${colorConvert.hsv.hex(hsv)}`,
      maxAttempts,
    });
  }
};

export const getTargetContrastViaLab = ({
  attempt = 0,
  baseHex,
  contrastRatio: targetContrastRatio,
  hex,
  maxAttempts = 10,
}) => {
  const luminanceA = getLuminance(hex);
  const luminanceB = getLuminance(baseHex);
  const contrastRatio = getContrastRatio({ luminanceA, luminanceB });

  if (contrastRatio === targetContrastRatio || attempt >= maxAttempts) {
    return hex;
  } else {
    let lab = colorConvert.hex.lab(hex);

    let darken = (
      (luminanceA > luminanceB && contrastRatio > targetContrastRatio) ||
      (luminanceA < luminanceB && contrastRatio < targetContrastRatio)
    );

    let jumpSize = darken ? 0 - lab[0] : 100 - lab[0];
    jumpSize = jumpSize / Math.pow(2, attempt + 1);
    lab = setLab({ lab, l: lab[0] + jumpSize});

    if (`#${colorConvert.lab.hex(lab)}` === hex) {
      return hex;
    }

    return getTargetContrastViaLab({
      attempt: attempt + 1,
      baseHex,
      contrastRatio: targetContrastRatio,
      hex: `#${colorConvert.lab.hex(lab)}`,
      maxAttempts,
    });
  }
};

export const setHsl = ({ hsl: [h, s, l], h: h2, s: s2, l: l2 }) => ([
  typeof h2 === 'number' ? h2 : h,
  typeof s2 === 'number' ? s2 : s,
  typeof l2 === 'number' ? l2 : l,
]);

export const setHsv = ({ hsv: [h, s, v], h: h2, s: s2, v: v2 }) => ([
  typeof h2 === 'number' ? h2 : h,
  typeof s2 === 'number' ? s2 : s,
  typeof v2 === 'number' ? v2 : v,
]);

export const setLab = ({ lab: [l, a, b], l: l2, a: a2, b: b2 }) => ([
  typeof l2 === 'number' ? l2 : l,
  typeof a2 === 'number' ? a2 : a,
  typeof b2 === 'number' ? b2 : b,
]);

export const getHexFromHexOrName = color => {
  let safeValue;

  try {
    safeValue = colorConvert.keyword.hex(color).toLowerCase();
  } catch(e) {
    safeValue = color[0] === '#' ? color.substr(1) : color;
  }

  return `#${safeValue}` || '#000000';
}

window.pxbColors = {
  colorConvert,
  getContrastRatio,
  getHexFromHexOrName,
  getLuminance,
  getTargetContrastViaHsl,
  setHsl,
  setLab,
};

export default {
  getContrastRatio,
  getHexFromHexOrName,
  getLuminance,
  getTargetContrastViaHsl,
  setHsl,
  setLab,
};
