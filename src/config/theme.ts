import { MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
  defaultGradient: { from: '#C93D76', to: '#8D2C8B', deg: 60 },
  defaultRadius: 'md',
  cursorType: 'pointer',
  autoContrast: true,
  luminanceThreshold: 0.45,

  white: '#FDFDFD',
  black: '#28282B',

  colors: {
    brand: [
      '#F0E5F2',
      '#D9BFDE',
      '#C094C8',
      '#A769B1',
      '#9449A1',
      '#812990',
      '#792488',
      '#6E1F7D',
      '#641973',
      '#510F61'
    ]
  },

  primaryColor: 'brand',

  fontFamily: 'var(--font-work-sans)',

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem'
  },

  headings: {
    fontFamily: 'var(--font-lora)'
  },

  components: {
    Button: {
      defaultProps: {
        variant: 'gradient'
      }
    }
  },

  spacing: {
    xs: '0.9rem',
    sm: '1.2rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem'
  }
}
