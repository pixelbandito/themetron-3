import { getHexFromHexOrName, setColorByContrastWithHsl } from './utils/colors';

export const getInheritedBaseColor = ({
	attempt = 0,
	baseColors,
	maxAttempts: initMaxAttempts,
	unsafeColor,
}) => {
	let maxAttempts = initMaxAttempts;

	if (initMaxAttempts === undefined) {
		maxAttempts = Object.keys(baseColors).length;
	}

	if (attempt > maxAttempts || !baseColors[unsafeColor]) {
		return unsafeColor;
	}

	return getInheritedBaseColor({
		attempt: attempt + 1,
		baseColors,
		maxAttempts,
		unsafeColor: baseColors[unsafeColor],
	})
}

export const getColors = ({ baseColors }) => {
	const bgStep = 1.1;
	const contrastRatios = [7, 4.5, 3];

	const colors = Object.entries(baseColors).reduce((result, [key, unsafeColor]) => {
		let color = getInheritedBaseColor({ baseColors, unsafeColor });

		color = getHexFromHexOrName(color);
		const white = getHexFromHexOrName(baseColors.white);
		const black = getHexFromHexOrName(baseColors.black);

		if (['white', 'black'].indexOf(key) >= 0) {
			return result;
		}

		result[key] = {};

		result[key].base = color;

    result[key]['lite-bg'] = setColorByContrastWithHsl({
      hex: color,
      baseHex: white,
      contrastRatio: bgStep,
    });

		contrastRatios.forEach((contrastRatio, i) => {
			// Large text
	    result[key][`lite-${i + 1}`] = setColorByContrastWithHsl({
	      hex: color,
	      baseHex: result[key]['lite-bg'],
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
	      contrastRatio: contrastRatio,
	      direction: 'asc',
	    });
		});

		return result;
	}, {});

	return colors;
}

export const getButtons = ({
	baseColors,
	colors,
	fonts,
	spacing,
}) => ({
	borderWidth: 1,
	roundness: 0.2,
	shine: 1, // Very shiny: glass, shiny: plastic, slightly shiny: paper, 0: flat
	sizes: {
		sm: {
			fontSize: fonts.sizes.sm,
			paddingH: spacing.sm,
			paddingV: spacing.xs,
		},
		md: {
			fontSize: fonts.sizes.md,
			paddingH: spacing.md,
			paddingV: spacing.sm,
		},
		lg: {
			fontSize: fonts.sizes.lg,
			paddingH: spacing.md,
			paddingV: spacing.sm,
		},
	},
	variants: {
		default: {
			backgroundColor: colors.default['lite-2'],
			color: baseColors.white,
			hover: {
				backgroundColor: colors.default['lite-1'],
				color: baseColors.white,
			},
			focus: {
				backgroundColor: colors.default['lite-1'],
				color: baseColors.white,
			},
			active: {
				backgroundColor: colors.default['lite-1'],
				color: baseColors.white,
			},
			disabled: {
				backgroundColor: colors.default['lite-3'],
				color: baseColors.white,
			},
		},
		primary: {
			backgroundColor: colors.primary['lite-2'],
			color: baseColors.white,
			hover: {
				backgroundColor: colors.primary['lite-1'],
				color: baseColors.white,
			},
			focus: {
				backgroundColor: colors.primary['lite-1'],
				color: baseColors.white,
			},
			active: {
				backgroundColor: colors.primary['lite-1'],
				color: baseColors.white,
			},
			disabled: {
				backgroundColor: colors.primary['lite-3'],
				color: baseColors.white,
			},
		},
		success: {
			backgroundColor: colors.success['lite-2'],
			color: baseColors.white,
			hover: {
				backgroundColor: colors.success['lite-1'],
				color: baseColors.white,
			},
			focus: {
				backgroundColor: colors.success['lite-1'],
				color: baseColors.white,
			},
			active: {
				backgroundColor: colors.success['lite-1'],
				color: baseColors.white,
			},
			disabled: {
				backgroundColor: colors.success['lite-3'],
				color: baseColors.white,
			},
		},
		info: {
			backgroundColor: colors.info['lite-2'],
			color: baseColors.white,
			hover: {
				backgroundColor: colors.info['lite-1'],
				color: baseColors.white,
			},
			focus: {
				backgroundColor: colors.info['lite-1'],
				color: baseColors.white,
			},
			active: {
				backgroundColor: colors.info['lite-1'],
				color: baseColors.white,
			},
			disabled: {
				backgroundColor: colors.info['lite-3'],
				color: baseColors.white,
			},
		},
		default: {
			backgroundColor: colors.default['lite-2'],
			color: baseColors.white,
			hover: {
				backgroundColor: colors.default['lite-1'],
				color: baseColors.white,
			},
			focus: {
				backgroundColor: colors.default['lite-1'],
				color: baseColors.white,
			},
			active: {
				backgroundColor: colors.default['lite-1'],
				color: baseColors.white,
			},
			disabled: {
				backgroundColor: colors.default['lite-3'],
				color: baseColors.white,
			},
		},
		warning: {
			backgroundColor: colors.warning['lite-2'],
			color: baseColors.white,
			hover: {
				backgroundColor: colors.warning['lite-1'],
				color: baseColors.white,
			},
			focus: {
				backgroundColor: colors.warning['lite-1'],
				color: baseColors.white,
			},
			active: {
				backgroundColor: colors.warning['lite-1'],
				color: baseColors.white,
			},
			disabled: {
				backgroundColor: colors.warning['lite-3'],
				color: baseColors.white,
			},
		},
		danger: {
			backgroundColor: colors.danger['lite-2'],
			color: baseColors.white,
			hover: {
				backgroundColor: colors.danger['lite-1'],
				color: baseColors.white,
			},
			focus: {
				backgroundColor: colors.danger['lite-1'],
				color: baseColors.white,
			},
			active: {
				backgroundColor: colors.danger['lite-1'],
				color: baseColors.white,
			},
			disabled: {
				backgroundColor: colors.danger['lite-3'],
				color: baseColors.white,
			},
		},
	},
});

export const getMinLineHeight = ({ size, spacing }) => {
	const idealSize = size * 1.4;
	const floor = Math.floor(idealSize / spacing.xs) * spacing.xs;
	const ceil = Math.ceil(idealSize / spacing.xs) * spacing.xs;
	const px = Math.abs(idealSize - floor) <= Math.abs(idealSize - ceil) ? floor : ceil;
	const ratio = px / size;

	return {
		px,
		ratio,
	}
};

export const getShared = () => ({
	elevation: 1,
	mode: undefined, // 'light', 'dark', undefined
	roundness: 0,
	shine: 0,
});

export const getSizeLabelFromIndex = sizeIndex => {
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
}

export const getSizes = ({
	count,
	customSizes = {},
	lgCount = 0,
	mdSize = null,
	smCount = 0,
}) => {
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

	sizes = sizes.map(sizeIndex => {
		let size = {
			label: getSizeLabelFromIndex(sizeIndex),
			size: mdSize * Math.pow(2, sizeIndex),
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
}

export default {
  getSizes,
};
