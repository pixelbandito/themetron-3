---
to: <%= h.getFolder(name) %><%= h.changeCase.pascal(h.getComponentName(name)) %>/<%= h.changeCase.pascal(h.getComponentName(name)) %>.module.css
---
.<%= h.changeCase.pascal(h.getComponentName(name)) %> {
  visibility: visible;
}
