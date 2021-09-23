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
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  }
};

export default extendTheme(theme);