const mainColor = {
  greenSky: '#0BCAD4',
  dark: '#112340',
  dark2: '#495A75',
  black: '#000000',
  grey: '#7D8797',
  greySky: '#E9E9E9',
  white: '#FFFFFF',
};

export const colors = {
  primary: mainColor.greenSky,
  secondary: mainColor.dark,
  white: mainColor.white,
  black: mainColor.black,
  text: {
    primary: mainColor.dark,
    secondary: mainColor.grey,
    menuActive: mainColor.greenSky,
    menuInactive: mainColor.dark2,
  },
  button: {
    primary: {
      background: mainColor.greenSky,
      color: mainColor.white,
    },
    secondary: {
      background: mainColor.white,
      color: mainColor.black,
    },
  },
  border: {
    primary: mainColor.greySky,
  },
};
