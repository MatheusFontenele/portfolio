import { Global } from '@emotion/react'
const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap');
    `}
  />
)

export default Fonts
