module.exports = {
	colors: {
		'--color-white': 'white',
		'--color-black': 'black',
		'--color-primary': 'blue',
		'--color-success': 'green',
		'--color-info': 'lightBlue',
		'--color-neutral': 'gray',
		'--color-warning': 'yellow',
		'--color-danger': 'red',
		sharedTheme: {
			'--text': 'white',
			'--background': 'black',
			'--dark-mode': false,
			'--roundness': 0,
			
		},
	},
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
	vibes: {
		'--roundness': 0,
		'--softness': 0,
		'--shine': 0,
		'--depth': 0,
	},
};
