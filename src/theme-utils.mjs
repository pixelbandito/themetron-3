import { getHexFromHexOrName, setColorByContrastWithHsl } from './utils/colors';

export const getColors = ({ baseColors }) => {
	const bgStep = 1.1;
	const contrastRatios = [7, 4.5, 3];

	return Object.entries(baseColors).reduce((result, [key, unsafeColor]) => {
		const color = getHexFromHexOrName(unsafeColor);
		const white = getHexFromHexOrName(baseColors.white);
		const black = getHexFromHexOrName(baseColors.black);
		//
		// if (key !== 'primary') {
		// 	return result;
		// }

		result[key] = {};

		result[key].base = color;

		if (['white', 'black'].indexOf(key) >= 0) {
			return result;
		}

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
}

export const getButtons = ({
	colors: customColors,
	fonts: customFonts,
	spacing: customSpacing,
}) => ({
	borderWidth: 1,
	roundness: 0.2,
	shine: 1, // Very shiny: glass, shiny: plastic, slightly shiny: paper, 0: flat
	sizes: {
		sm: {
			fontSize: customFonts.sizes.sm,
			paddingH: customSpacing.sm,
			paddingV: customSpacing.xs,
		},
		md: {
			fontSize: customFonts.sizes.md,
			paddingH: customSpacing.md,
			paddingV: customSpacing.sm,
		},
		lg: {
			fontSize: customFonts.sizes.lg,
			paddingH: customSpacing.md,
			paddingV: customSpacing.sm,
		},
	},
	variants: {
		default: {
			backgroundColor: customColors.neutral['lite-2'],
			color: customColors.white.base,
			hover: {
				backgroundColor: customColors.neutral['lite-1'],
				color: customColors.white.base,
			},
			focus: {
				backgroundColor: customColors.neutral['lite-1'],
				color: customColors.white.base,
			},
			active: {
				backgroundColor: customColors.neutral['lite-1'],
				color: customColors.white.base,
			},
			disabled: {
				backgroundColor: customColors.neutral['lite-3'],
				color: customColors.white.base,
			},
		},
		primary: {
			backgroundColor: customColors.primary['lite-2'],
			color: customColors.white.base,
			hover: {
				backgroundColor: customColors.primary['lite-1'],
				color: customColors.white.base,
			},
			focus: {
				backgroundColor: customColors.primary['lite-1'],
				color: customColors.white.base,
			},
			active: {
				backgroundColor: customColors.primary['lite-1'],
				color: customColors.white.base,
			},
			disabled: {
				backgroundColor: customColors.primary['lite-3'],
				color: customColors.white.base,
			},
		},
		success: {
			backgroundColor: customColors.success['lite-2'],
			color: customColors.white.base,
			hover: {
				backgroundColor: customColors.success['lite-1'],
				color: customColors.white.base,
			},
			focus: {
				backgroundColor: customColors.success['lite-1'],
				color: customColors.white.base,
			},
			active: {
				backgroundColor: customColors.success['lite-1'],
				color: customColors.white.base,
			},
			disabled: {
				backgroundColor: customColors.success['lite-3'],
				color: customColors.white.base,
			},
		},
		info: {
			backgroundColor: customColors.info['lite-2'],
			color: customColors.white.base,
			hover: {
				backgroundColor: customColors.info['lite-1'],
				color: customColors.white.base,
			},
			focus: {
				backgroundColor: customColors.info['lite-1'],
				color: customColors.white.base,
			},
			active: {
				backgroundColor: customColors.info['lite-1'],
				color: customColors.white.base,
			},
			disabled: {
				backgroundColor: customColors.info['lite-3'],
				color: customColors.white.base,
			},
		},
		neutral: {
			backgroundColor: customColors.neutral['lite-2'],
			color: customColors.white.base,
			hover: {
				backgroundColor: customColors.neutral['lite-1'],
				color: customColors.white.base,
			},
			focus: {
				backgroundColor: customColors.neutral['lite-1'],
				color: customColors.white.base,
			},
			active: {
				backgroundColor: customColors.neutral['lite-1'],
				color: customColors.white.base,
			},
			disabled: {
				backgroundColor: customColors.neutral['lite-3'],
				color: customColors.white.base,
			},
		},
		warning: {
			backgroundColor: customColors.warning['lite-2'],
			color: customColors.white.base,
			hover: {
				backgroundColor: customColors.warning['lite-1'],
				color: customColors.white.base,
			},
			focus: {
				backgroundColor: customColors.warning['lite-1'],
				color: customColors.white.base,
			},
			active: {
				backgroundColor: customColors.warning['lite-1'],
				color: customColors.white.base,
			},
			disabled: {
				backgroundColor: customColors.warning['lite-3'],
				color: customColors.white.base,
			},
		},
		danger: {
			backgroundColor: customColors.danger['lite-2'],
			color: customColors.white.base,
			hover: {
				backgroundColor: customColors.danger['lite-1'],
				color: customColors.white.base,
			},
			focus: {
				backgroundColor: customColors.danger['lite-1'],
				color: customColors.white.base,
			},
			active: {
				backgroundColor: customColors.danger['lite-1'],
				color: customColors.white.base,
			},
			disabled: {
				backgroundColor: customColors.danger['lite-3'],
				color: customColors.white.base,
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

export const getShared = ({ colors: customColors }) => ({
	backgroundColor: customColors.white,
	color: customColors.black,
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

	return sizes.reduce((result, size) => ({
		...result,
		[size.label]: size.size,
	}), {});
}

export default {
  getSizes,
};
