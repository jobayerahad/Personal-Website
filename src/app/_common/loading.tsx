'use client'

import { Group, Loader, Text } from '@mantine/core'

const LoadingComponent = () => (
  <Group
    justify="center"
    h="calc(100dvh - var(--mantine-header-height, 0px) - 120px)"
    style={{ flexDirection: 'column' }}
  >
    <Loader size="lg" />

    <Text>Fetching Data...</Text>
  </Group>
)

export default LoadingComponent
