import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'brand.blue',
        background: 'gradient.bg',
      },
    },
  },
  colors: {
    brand: {
      black: '#181818',
      yellow: '#FBBE50',
      blue: '#292C40',
      gray: '#FAFAFA',
    },
    gradient: {
      button: 'linear-gradient(rgba(252,238,213,1),rgba(252,238,213,1),rgba(255,231,186,1))',
      step: 'linear-gradient(93.51deg, #4274C4 2.84%, #B0FF93 99.18%)',
      card: 'linear-gradient(93.51deg, #4274C4 2.84%, #B0FF93 99.18%)',
      bg: 'linear-gradient(rgba(252,238,213,1),rgba(252,238,213,1),rgba(255,231,186,1))',
    },
  },

  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  components: {
    Button: {
      variants: {
        outline: {
          color: 'gray.100',
          borderColor: 'white.200',
          _active: {
            color: 'white',
            background: 'gradient.button',
          },
          _hover: {
            color: 'white',
            background: 'gradient.button',
            borderColor: 'transparent',
          },
        },
        solid: {
          color: 'white',
          px: 8,
          background: 'brand.blue',
          _active: {
            color: 'brand.blue',
            background: 'brand.yellow',
          },
          _hover: {
            color: 'brand.blue',
            background: 'brand.yellow',
          },
        },
        link: {
          color: 'brand.blue',
          px: 8,

          _active: {
            color: 'brand.yellow',
          },
          _hover: {
            color: 'brand.yellow',
          },
        },
      },
    },
  },
});

export default customTheme;
