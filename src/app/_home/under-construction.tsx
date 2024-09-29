import { Anchor, Container, Divider, Group, Text, Title } from '@mantine/core'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdAlternateEmail } from 'react-icons/md'

import styles from './page.module.css'

const UnderConstruction = () => (
  <main className={styles.main}>
    <Container size="lg">
      <Title c="gray.1" className={styles.title}>
        Hello, I'm Jobayer Ahad
      </Title>
      <Divider color="gray.1" mb="xs" />

      <Text mb="xs" className={styles.text}>
        I'm currently revamping my website to provide a better experience and showcase my work in software development.
        Stay tuned for updates, and in the meantime, feel free to explore ways to stay connected with me below.
      </Text>

      <Text mb="md" className={styles.text}>
        As a software developer specializing in React.JS, Node.JS, and MongoDB, I've been working at SBAC Bank PLC since
        March 2022, delivering robust and scalable solutions. I’m excited to share more of my projects with you soon.
      </Text>

      <Text mb="xs" className={styles.text}>
        Stay connected:
      </Text>

      <Group className={styles.group}>
        <MdAlternateEmail />
        <Anchor href="mailto:jobayer.ahad@gmail.com" className={styles.anchor}>
          jobayer.ahad@gmail.com
        </Anchor>
      </Group>

      <Group className={styles.group}>
        <FaLinkedinIn />
        <Anchor href="https://www.linkedin.com/in/jobayerahad" className={styles.anchor}>
          https://www.linkedin.com/in/jobayerahad
        </Anchor>
      </Group>

      <Group className={styles.group}>
        <FaXTwitter />
        <Anchor href="https://x.com/jobayerahad" className={styles.anchor}>
          https://x.com/jobayerahad
        </Anchor>
      </Group>

      <Group className={styles.group}>
        <AiFillGithub />
        <Anchor href="https://github.com/jobayerahad" className={styles.anchor}>
          https://github.com/jobayerahad
        </Anchor>
      </Group>
    </Container>
  </main>
)

export default UnderConstruction
