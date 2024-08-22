import Link from 'next/link'
import { ActionIcon, Group, Title, Tooltip } from '@mantine/core'
import { TiArrowBack as BackIcon } from 'react-icons/ti'

type Props = {
  title: string
  url: string
}

const TitleBar = ({ title, url }: Props) => (
  <Group gap="xs">
    <Tooltip label="Back" position="bottom" withArrow>
      <ActionIcon variant="light" color="gray" component={Link} href={url}>
        <BackIcon />
      </ActionIcon>
    </Tooltip>

    <Title order={3} ta="center">
      {title}
    </Title>
  </Group>
)

export default TitleBar
