import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'

import '@styles/main.scss'
import theme from '@config/theme'

const App = ({ Component, pageProps }) => (
  <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
    <Notifications />

    <ModalsProvider>
      <Component {...pageProps} />
    </ModalsProvider>
  </MantineProvider>
)

export default App
