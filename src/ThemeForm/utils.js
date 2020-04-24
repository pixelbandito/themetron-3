export const getHexOrDont = string => string;

export const getJsonOrDont = (string) => {
  let json;

  try {
    json = JSON.parse(string);
  } catch(e) {
    json =  {};
  }

  return json;
};

export const getNumberOrDont = (string) => {
  let number;

  try {
    number = parseInt(string, 10);

    if (isNaN(number)) {
      throw new Error('not a number');
    }
  } catch(e) {
    number = null;
  }

  return number
};

export default {
  getHexOrDont,
  getJsonOrDont,
  getNumberOrDont,
};
