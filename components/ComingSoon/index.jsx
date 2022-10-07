import { Title, Text } from '@mantine/core'

import useStyles from './styles'

const ComingSoon = () => {
  const { classes } = useStyles()

  return (
    <>
      <video autoPlay muted loop className={classes.video}>
        <source src="/videos/coming_soon.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className={classes.content}>
        <Title className={classes.title}>Coming Soon</Title>

        <Text size="lg">This website is under construction.</Text>
      </div>
    </>
  )
}

export default ComingSoon
