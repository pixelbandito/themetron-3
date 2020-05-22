import { getButtons, getColors, getShared, getSizes } from '@pixelbandito/theme';

const baseSize = 4;

const space = getSizes({ count: 5, mdSize: baseSize * 4 });

export const baseColors = {
	white: 'white',
	black: '#16161d',
	default: 'black',
	primary: 'blue',
	// success: 'green',
	// info: 'lightblue',
	// warning: 'yellow',
	// danger: 'red',
};

const colors = getColors({ baseColors });

const shared = getShared({ colors });

const fonts = {
	sansSerif: 'sans-serif',
	serif: 'serif',
	sizes: {
		xs: 10,
		sm: 12,
		md: 16,
		lg: 24,
		xl: 32,
	},
	weights: {
		normal: 400,
		bold: 700,
	},
};

const buttons = getButtons({
	baseColors,
	colors,
	fonts,
	space,
});

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

const theme = {
	baseColors,
	buttons,
	colors,
	fonts,
	shared,
	space,
};

export default theme;
