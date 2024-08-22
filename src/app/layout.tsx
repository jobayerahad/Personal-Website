import clsx from 'clsx'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { NavigationProgress } from '@mantine/nprogress'
import { Notifications } from '@mantine/notifications'
import { Work_Sans, Lora } from 'next/font/google'

import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/nprogress/styles.css'
import './globals.css'
import { theme } from '@config/theme'
import Structure from './_structure/main'

const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap'
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jobayerahad.com'),
  title: {
    default: 'Jobayer Ahad - Software & DevOps Engineer',
    template: '%s - Jobayer Ahad'
  },
  description:
    "I'm Jobayer Al Mahmud Ahad, a software engineer working in the IT division at SBAC Bank PLC., Dhaka, Bangladesh. I'm passionate about leveraging technology to drive innovation and improvements in the financial industry.",
  authors: [{ name: 'Jobayer Al Mahmud Ahad', url: 'https://www.jobayerahad.com' }],
  publisher: 'Jobayer Al Mahmud Ahad'
}

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang="en" className={clsx(work_sans.variable, lora.variable)}>
    <head>
      <ColorSchemeScript defaultColorScheme="auto" />
    </head>

    <body suppressHydrationWarning>
      <MantineProvider theme={theme} defaultColorScheme="auto" classNamesPrefix="sbac">
        <NavigationProgress />
        <Notifications />

        <Structure>{children}</Structure>
      </MantineProvider>
    </body>
  </html>
)

export default RootLayout
