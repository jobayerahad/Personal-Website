import { Anchor, Box, Container, Divider, Group, Image, SimpleGrid, Text, Title } from '@mantine/core'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'

import styles from './page.module.css'

const links = [
  { link: 'mailto:jobayer.ahad@gmail.com', icon: <IoIosMail size={30} /> },
  { link: 'https://github.com/jobayerahad', icon: <AiFillGithub size={30} /> },
  { link: 'https://www.linkedin.com/in/jobayerahad', icon: <FaLinkedinIn size={30} /> },
  { link: 'https://x.com/jobayerahad', icon: <FaXTwitter size={30} /> }
]

const UnderConstruction = () => (
  <main className={styles.main}>
    <Container size="xl">
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Box className={styles.content}>
          <Text c="dark">Hello,</Text>

          <Title c="dark" mb="md">
            I'm Jobayer Ahad
          </Title>

          <Text mb="md" c="dark">
            As a software developer specializing in React.JS, Node.JS, and MongoDB, I've been working at SBAC Bank PLC
            since March 2022, delivering robust and scalable solutions. I’m excited to share more of my projects with
            you soon.
          </Text>

          <Text mb="xs" c="dark">
            Stay connected:
          </Text>

          <Group>
            {links.map(({ icon, link }, index) => (
              <Anchor c="dark" href={link} target="_blank" key={index}>
                {icon}
              </Anchor>
            ))}
          </Group>
        </Box>

        <Box>
          <Image src="/under-construction.png" alt="Jobayer Ahad" />
        </Box>
      </SimpleGrid>
    </Container>
  </main>
)

export default UnderConstruction
