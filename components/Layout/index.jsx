import { AppShell, Container } from '@mantine/core'
import PropTypes from 'prop-types'

import AppHeader from './Header'
import AppNavbar from './Navbar'

const Layout = ({ size, children }) => (
  <AppShell
    navbarOffsetBreakpoint="sm"
    fixed
    navbar={<AppNavbar />}
    header={<AppHeader />}
    styles={(theme) => ({
      main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
    })}
  >
    <Container size={size}>{children}</Container>
  </AppShell>
)

Layout.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Layout.defaultProps = {
  size: 'md'
}

export default Layout
