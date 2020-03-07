---
to: <%= h.getFolder(name) %><%= h.changeCase.pascal(h.getComponentName(name)) %>/index.js
---
import <%= h.changeCase.pascal(h.getComponentName(name)) %> from './<%= h.changeCase.pascal(h.getComponentName(name)) %>';

export default <%= h.changeCase.pascal(h.getComponentName(name)) %>;
