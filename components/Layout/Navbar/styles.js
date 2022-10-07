import { createStyles } from '@mantine/core'

const styles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon')

  return {
    root: {
      backgroundColor: theme.colors.gray[9]
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[0],
      padding: '0.75rem 0.5rem 0.75rem 1.25rem',
      fontWeight: 500,
      transition: '0.2s',
      cursor: 'pointer',

      '&:not(:last-child)': {
        marginBottom: theme.spacing.xs * 0.5
      },

      '&:hover': {
        color: theme.black,
        backgroundColor: theme.colors.gray[3]
      }
    },

    linkIcon: {
      ref: icon,
      fontSize: theme.fontSizes.md,
      marginRight: theme.spacing.xs
    },

    linkActive: {
      '&, &:hover': {
        fontWeight: 600,
        color: theme.black,
        borderLeft: `4px solid ${theme.colors.gray[7]}`,
        backgroundColor: theme.colors.gray[2],
        paddingLeft: theme.spacing.xs
      }
    }
  }
})

export default styles
