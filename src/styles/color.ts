const color = {
  white: '#fff',
  black: '#000',
  main_black: '#11101d',
  main_green: '#40C463',
  gray: '#666',
  success: '#216E39',
  warning: '#DFAD14',
  error: '#6E2121',
};

export const handlerColorType = (type: string) => {
  switch (type) {
    case 'success':
      return color.success;
    case 'warning':
      return color.warning;
    case 'error':
      return color.error;
    default:
      return color.main_black;
  }
};

export default color;
