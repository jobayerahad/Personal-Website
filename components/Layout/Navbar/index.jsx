import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Navbar } from '@mantine/core'

import useStyles from './styles'
import menuItems, { isActiveLink } from './utils/menuItems'

const AppNavbar = () => {
  const { pathname } = useRouter()
  const { classes, cx } = useStyles()
  const { data } = useSession()
  const [menus, setMenus] = useState([])

  useEffect(() => {
    ;(async () => setMenus(menuItems(data?.user.role)))()
  }, [data?.user.role])

  return (
    <Navbar pt="xs" hiddenBreakpoint="sm" hidden width={{ sm: 300 }} className={classes.root}>
      <Navbar.Section grow>
        {menus.map((item) => (
          <Link href={item.link} key={item.label} passHref>
            <li className={cx(classes.link, { [classes.linkActive]: isActiveLink(pathname, item.link) })}>
              <item.icon className={classes.linkIcon} />
              <span>{item.label}</span>
            </li>
          </Link>
        ))}
      </Navbar.Section>
    </Navbar>
  )
}

export default AppNavbar
