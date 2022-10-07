import Link from 'next/link'
import { Image, Container, Title, Text, SimpleGrid, Center, Button } from '@mantine/core'
import { AiOutlineHome as HomeIcon } from 'react-icons/ai'

import useStyles from './styles'

const NotFoundComponent = () => {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
        <Image src="/images/not-found.svg" alt="" className={classes.mobileImage} />

        <Center style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Title className={classes.title}>Something is not right...</Title>

          <Text color="dimmed" size="lg">
            The Page you are trying to open does not exist. You may have mistyped the address, or the page has been
            moved to another URL. If you think this is an error contact support.
          </Text>

          <Link href="/" passHref>
            <Button
              component="a"
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
              leftIcon={<HomeIcon />}
            >
              Back to Home
            </Button>
          </Link>
        </Center>

        <Image src="/images/not-found.svg" alt="" className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  )
}

export default NotFoundComponent
