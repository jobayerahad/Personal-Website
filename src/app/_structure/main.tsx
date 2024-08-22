'use client'

import { ReactNode } from 'react'
import { ModalsProvider } from '@mantine/modals'

type Props = {
  children: ReactNode
}

const Structure = ({ children }: Props) => {
  return <ModalsProvider>{children}</ModalsProvider>
}

export default Structure
