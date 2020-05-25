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

  return {
    fallback: apiResponse.category,
    name: apiResponse.family,
    source: apiUrl.join(''),
  };
};

export default {
  getFontFromGoogleFontApiResponse,
};
