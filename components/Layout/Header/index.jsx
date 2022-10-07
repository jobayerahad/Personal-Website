import Link from 'next/link'
import { Avatar, Box, Header, Image, Menu, Text, Title } from '@mantine/core'
import { signOut } from 'next-auth/react'
import { IoIosArrowDown as DownArrow } from 'react-icons/io'
import { MdLogout as LogoutIcon, MdOutlineSettings as SettingsIcon } from 'react-icons/md'

import useStyles from './styles'
import { useProfileData } from './utils/apiCalls'

const AppHeader = () => {
  const { classes } = useStyles()
  const { data: user } = useProfileData()

  return (
    <Header height={60} p="md" className={classes.root}>
      <Box className={classes.header}>
        <Image src="/images/logo.png" alt="" width={20} className={classes.logo} />

        <Title order={1} className={classes.title}>
          CIB Inquiry
        </Title>
      </Box>

      {user && (
        <Menu width={200} withArrow shadow="xs" position="bottom-end">
          <Menu.Target>
            <Box className={classes.user}>
              <Avatar className={classes.avatar} src={user.avatar} alt={user.name} />

              <div>
                <Text size="sm" weight={500}>
                  {user.name}
                </Text>

                <Text color="dimmed" size="xs">{`${user.designation}, ${user.branch_name} (${user.department})`}</Text>
              </div>

              <DownArrow size={16} />
            </Box>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item icon={<SettingsIcon size={14} />}>
              <Link href="/settings">Settings</Link>
            </Menu.Item>

            <Menu.Item icon={<LogoutIcon size={14} />} onClick={() => signOut()}>
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      )}
    </Header>
  )
}

export default AppHeader
