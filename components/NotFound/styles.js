import { createStyles } from '@mantine/core'

const styles = createStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  title: {
    fontWeight: 700,
    fontSize: 34,
    marginBottom: theme.spacing.md,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32
    }
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%'
    }
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  desktopImage: {
    width: '70%',

    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  }
}))

export default styles
