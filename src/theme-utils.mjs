export const getButtons = ({ colors: customColors, fonts: customFonts, spacing: customSpacing }) => ({
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
			backgroundColor: customColors.neutral,
			color: customColors.white,
			hover: {
				backgroundColor: customColors.neutral,
				color: customColors.white,
			},
			focus: {
				backgroundColor: customColors.neutral,
				color: customColors.white,
			},
			active: {
				backgroundColor: customColors.neutral,
				color: customColors.white,
			},
			disabled: {
				backgroundColor: customColors.neutral,
				color: customColors.white,
			},
		},
		primary: {
			backgroundColor: customColors.primary,
			color: customColors.white,
			hover: {
				backgroundColor: customColors.primary,
				color: customColors.white,
			},
			focus: {
				backgroundColor: customColors.primary,
				color: customColors.white,
			},
			active: {
				backgroundColor: customColors.primary,
				color: customColors.white,
			},
			disabled: {
				backgroundColor: customColors.primary,
				color: customColors.white,
			},
		},
		success: {
			backgroundColor: customColors.success,
			color: customColors.white,
			hover: {
				backgroundColor: customColors.success,
				color: customColors.white,
			},
			focus: {
				backgroundColor: customColors.success,
				color: customColors.white,
			},
			active: {
				backgroundColor: customColors.success,
				color: customColors.white,
			},
			disabled: {
				backgroundColor: customColors.success,
				color: customColors.white,
			},
		},
		info: {
			backgroundColor: customColors.info,
			color: customColors.white,
			hover: {
				backgroundColor: customColors.info,
				color: customColors.white,
			},
			focus: {
				backgroundColor: customColors.info,
				color: customColors.white,
			},
			active: {
				backgroundColor: customColors.info,
				color: customColors.white,
			},
			disabled: {
				backgroundColor: customColors.info,
				color: customColors.white,
			},
		},
		neutral: {
			backgroundColor: customColors.neutral,
			color: customColors.white,
			hover: {
				backgroundColor: customColors.neutral,
				color: customColors.white,
			},
			focus: {
				backgroundColor: customColors.neutral,
				color: customColors.white,
			},
			active: {
				backgroundColor: customColors.neutral,
				color: customColors.white,
			},
			disabled: {
				backgroundColor: customColors.neutral,
				color: customColors.white,
			},
		},
		warning: {
			backgroundColor: customColors.warning,
			color: customColors.white,
			hover: {
				backgroundColor: customColors.warning,
				color: customColors.white,
			},
			focus: {
				backgroundColor: customColors.warning,
				color: customColors.white,
			},
			active: {
				backgroundColor: customColors.warning,
				color: customColors.white,
			},
			disabled: {
				backgroundColor: customColors.warning,
				color: customColors.white,
			},
		},
		danger: {
			backgroundColor: customColors.danger,
			color: customColors.white,
			hover: {
				backgroundColor: customColors.danger,
				color: customColors.white,
			},
			focus: {
				backgroundColor: customColors.danger,
				color: customColors.white,
			},
			active: {
				backgroundColor: customColors.danger,
				color: customColors.white,
			},
			disabled: {
				backgroundColor: customColors.danger,
				color: customColors.white,
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
	inverted: false,
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
