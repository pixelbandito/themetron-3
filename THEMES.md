Roundness applies to button and card corners.
- Should you be able to separate them?
-- nests - roundness can inherit from base or be overwritten per section.
-- variants can inherit from each other too.

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
- Roundness - controls corners
- Elevation - controls shadows
- shininess

And a different material palette?
- Edged for visibility
- Edged for 3D realism


mode: undefined, // 'light', 'dark', undefined
roundness,

embossed - 3-dimensionality of text?
depth - 3-dimensionality of buttons and raised elements. Interacts with shine?
elevation - drama of shadows - far away and blurry, or tight and controlled?
shine - totally matte -> plastic -> satin -> glassy. This only applies to curved surfaces, right? So does it depend on depth?
saturation - what about color gradients, oversaturated lowlights, etc.?


# Scheme 1

- *Roundness* ✅
- *Depth*: Lower = flat paper <-> low = neuomorphic <-> mid = softly shaded plastic <-> high = glass.
  - *Shine*: Strength of highlights and lowlights
  - *Elevation*: Drop shadows spread, distance, and darkness
  - *Fullness*: Size and spread of highlights and lowlights
  - *Embossed*: Text-shadow on/off, plus depth
  - *Ledge* _(stretch)_: Extrude 3d elements with edge borders?
    - *Ledge direction* _(stretch)_: Extrusion direction?
- *Color fades* _(stretch)_: Button specific setting for custom gradients?
  - *Fade direction* _(stretch)_: Button fade direction?
