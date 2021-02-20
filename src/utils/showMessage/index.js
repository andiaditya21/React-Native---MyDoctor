import {showMessage} from 'react-native-flash-message';
import {colors} from '../Color';

export const showError = (message) => {
  showMessage({
    message: message,
    backgroundColor: colors.error,
    color: colors.white,
  });
};

export const showSuccess = (message) => {
  showMessage({
    message: message,
    backgroundColor: colors.primary,
    color: colors.white,
  });
};
