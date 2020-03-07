const getComponentName = name => name.lastIndexOf('/') >= 0 ? name.substr(name.lastIndexOf('/') + 1) : name;
const getFolder = name => name.lastIndexOf('/') >= 0 ? name.substr(0, name.lastIndexOf('/') + 1) : '';

module.exports = {
  helpers: {
    getComponentName,
    getFolder,
  },
};
