import Link from 'next/link'
import { Anchor, Breadcrumbs, Flex, Text } from '@mantine/core'
import { AiOutlineHome as HomeIcon } from 'react-icons/ai'

type Props = {
  links: {
    title: string
    href?: string // href is optional
  }[]
}

const Navigation = ({ links }: Props) => (
  <Breadcrumbs my="md">
    <Anchor component={Link} href="/" size="sm">
      <Flex align="center" gap={8}>
        <HomeIcon /> Home
      </Flex>
    </Anchor>

    {links.map((link, index) =>
      link.href ? (
        <Anchor key={index} component={Link} href={link.href} prefetch={false} size="sm">
          {link.title}
        </Anchor>
      ) : (
        <Text key={index} color="gray.7" size="sm">
          {link.title}
        </Text>
      )
    )}
  </Breadcrumbs>
)

export default Navigation
