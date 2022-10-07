import { createStyles } from '@mantine/core'

const styles = createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },

  logo: {
    width: '1rem',
    margin: '0 auto'
  },

  header: {
    color: theme.colors.gray[9],
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    cursor: 'pointer'
  },

  title: {
    fontSize: theme.fontSizes.xl,
    flexGrow: 1,
    fontWeight: 500
  },

  user: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,
    padding: '0.25rem 0.5rem',
    borderRadius: '0.3rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
    }
  },

  avatar: {
    borderRadius: '50%'
  }
}))

export default styles
