import dayjs from 'dayjs'

export const amountFormatter = (value) =>
  !Number.isNaN(parseFloat(value)) ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''

export const amountParser = (value) => value.replace(/\$\s?|(,*)/g, '')

export const formatDate = (date) => (date ? dayjs().format('do MMM, yy hh:mm a') : '')

export const getBadgeColor = (status) => {
  switch (status) {
    case 'pending':
      return 'orange'

    case 'rejected':
      return 'pink'

    case 'approved':
      return 'teal'

    case 'attempted':
      return 'cyan'

    default:
      return 'default'
  }
}
