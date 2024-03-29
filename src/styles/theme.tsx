import { extendTheme, textDecoration } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// const styles = {
//   global: (props: any) => ({
//     p: {
//       color: 'rgb(156, 163, 175)',
//       fontWeight: '600'
//     },
//     span: {
//       color: 'rgb(156, 163, 175)'
//     }
//   })
// }

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: 'blue.300',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Space Mono', monospace"
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  colors,
  components,
  fonts,
})

export default theme
