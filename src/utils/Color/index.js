const mainColor = {
  greenSky: '#0BCAD4',
  dark: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  black: '#000000',
  grey: '#7D8797',
  grey2: '#B1B7C2',
  greySky: '#E9E9E9',
  blue: '#0066CB',
  blueSky: '#EDFCFD',
  white: '#FFFFFF',
  whiteSky: '#EDEEF0',
};

export const colors = {
  primary: mainColor.greenSky,
  secondary: mainColor.dark,
  white: mainColor.white,
  black: mainColor.black,
  text: {
    primary: mainColor.dark,
    secondary: mainColor.grey,
    third: mainColor.dark3,
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
    icon: {
      send: mainColor.blue,
      sendDisable: mainColor.whiteSky,
    },
  },
  border: {
    primary: mainColor.greySky,
    secondary: mainColor.blue,
  },
  card: {
    primary: mainColor.blueSky,
  },
  textInput: {background: mainColor.whiteSky, disable: mainColor.grey2},
  chatMe: mainColor.blueSky,
  chatOther: mainColor.greenSky,
};
