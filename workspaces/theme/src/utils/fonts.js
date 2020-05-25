export const getFontFromGoogleFontApiResponse = ({ apiResponse }) => {
  const apiUrl = [];
  apiUrl.push('https://fonts.googleapis.com/css2?family=');
  apiUrl.push(apiResponse.family.replace(/ /g, '+'));

  if ((apiResponse?.variants ?? []).indexOf('italic') >= 0) {
    apiUrl.push(':');
    apiUrl.push('italic');
  }

  if ((apiResponse?.subsets ?? []).indexOf('greek') >= 0) {
    apiUrl.push('&subset=');
    apiUrl.push('greek');
  }

  // url: 'https://fonts.googleapis.com/css?family=Anonymous+Pro:italic&subset=greek'
  const url = apiUrl.join('');

  const font = {
    fallback: apiResponse.category,
    name: apiResponse.family,
    source: url,
  };

  return font;
};

export default {
  getFontFromGoogleFontApiResponse,
};
