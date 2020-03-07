import { getMinLineHeight, getSizes } from './theme-utils';

const baseSize = 4;

const spacing = getSizes({ count: 5, mdSize: baseSize * 4 });

const colors = {
	white: 'white',
	black: '#16161d',
	primary: 'blue',
	success: 'green',
	info: 'lightBlue',
	neutral: 'gray',
	warning: 'yellow',
	danger: 'red',
};

const fonts = {
	sansSerif: 'sans-serif',
	serif: 'serif',
	md: {
		size: 12,
		lineHeight: getMinLineHeight({ size: 12, spacing }).ratio,
	},
	sm: {
		size: 10,
		lineHeight: getMinLineHeight({ size: 10, spacing }).ratio,
	},
	lg: {
		size: 16,
		lineHeight: getMinLineHeight({ size: 16, spacing }).ratio,
	},
};

const shared = {
	backgroundColor: colors.white,
	color: colors.black,
	elevation: 1,
	inverted: false,
	roundness: 0,
	shine: 0,
};

const buttons = {
	borderWidth: 1,
	roundness: 0.2,
	shine: 1, // Very shiny: glass, shiny: plastic, slightly shiny: paper, 0: flat
	sizes: {
		md: {
			fontSize: fonts.md.size,
			paddingH: spacing.md,
			paddingV: spacing.sm,
		},
		sm: {
			fontSize: fonts.sm.size,
			paddingH: spacing.sm,
			paddingV: spacing.xs,
		},
		lg: {
			fontSize: fonts.lg.size,
			paddingH: spacing.md,
			paddingV: spacing.sm,
		},
	},
	variants: {
		default: {
			backgroundColor: colors.primary,
			color: colors.white,
			hover: {
				backgroundColor: colors.success,
				color: colors.white,
			},
		},
	},
};

	/*
		Dark mode?
		- on/off

		Roundness applies to button and card corners.
		- Should you be able to separate them?

		Button surfaces should be able to look
		- glass-shiny (old iOS)
		- softly shaded (plastic?)
		- totally flat (paper?)
		- soft around the edges (neuomorphic?)

		Button shapes should be able to look
		- Totally pill shaped
		- Slightly rounded

		Buttons should be able to elevate:
		- Not at all - no shadows
		- float above the background (distant, large shadows)

		Neumorphism
		- Emboss
		- Float
		- None

		Button style schemes
		- link style - no border, no background
		- Standard, semantic color background, inverted foreground
		- Pastel, i.e. monochomatic with tinted background, intense foreground

		Floating panels should have
		- Roundness
		- Elevation

		And a different material palette
		- Edged for visibility
		- Edged for 3D realism
	*/

export default {
	buttons,
	colors,
	fonts,
	shared,
	spacing,
};
