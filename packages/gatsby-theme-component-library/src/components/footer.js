/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({children}) =>
  <footer>
    <div
      sx={{
        maxWidth: 'container',
        mx: 'auto',
        px: 3,
        py: 3,
      }}>
      {children}
    </div>
  </footer>
