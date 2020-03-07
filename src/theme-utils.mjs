export const getMinLineHeight = ({ size, spacing }) => {
	const legibilityRatio = 1.2;
	const nextSpacingUp = Object.entries(spacing).find(([key, value]) => (value >= size * legibilityRatio));
	const px = nextSpacingUp[1];
	const ratio = px / size;
	return {
		px,
		ratio,
	}
};

export const getSizes = ({
	count,
	customSizes = {},
	lgCount = 0,
	mdSize = null,
	smCount = 0,
}) => {
	const smSizeLabels = ['sm', 'xs'];
	const lgSizeLabels = ['lg', 'xl'];
	const baseSizeLabel = 'md';
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
			size: mdSize * Math.pow(2, sizeIndex),
		};

		if (sizeIndex < 0) {
			if (-1 * sizeIndex <= smSizeLabels.length) {
				size.label = smSizeLabels[-1 * sizeIndex - 1];
			} else {
				size.label = `${-1 * sizeIndex - 1}${smSizeLabels[smSizeLabels.length - 1]}`;
			}
		} else if (sizeIndex === 0) {
			size.label = baseSizeLabel;
		} else if (sizeIndex > 0) {
			if (sizeIndex <= lgSizeLabels.length) {
				size.label = lgSizeLabels[sizeIndex - 1];
			} else {
				size.label = `${sizeIndex - 1}${lgSizeLabels[lgSizeLabels.length - 1]}`;
			}
		}

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
