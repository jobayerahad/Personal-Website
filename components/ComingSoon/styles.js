import { createStyles } from '@mantine/core'

const styles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontSize: 34,
    marginBottom: theme.spacing.md,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32
    }
  },

  video: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    minWidth: '100%',
    minHeight: '100%'
  },

  content: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.gray[2]
  }
}))

export default styles
