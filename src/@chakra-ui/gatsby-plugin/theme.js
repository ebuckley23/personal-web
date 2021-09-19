import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';

const theme = { 
  ...defaultTheme,
  components: {
    Text: {
      baseStyle: {
        color: 'black'
      }
    },
    Icon: {
      baseStyle: {
        color: 'black'
      }
    }
  } 
};

export default extendTheme(theme);