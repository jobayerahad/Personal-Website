import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'

import '@styles/main.scss'
import theme from '@config/theme'

const App = ({ Component, pageProps }) => (
  <MantineProvider theme={theme}>
    <NotificationsProvider>
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </NotificationsProvider>
  </MantineProvider>
)

export default App
