import { BiCheckCircle as SuccessIcon } from 'react-icons/bi'
import { MdOutlineErrorOutline as ErrorIcon } from 'react-icons/md'

export const getSuccessMessage = (message) => ({
  title: 'Success',
  icon: <SuccessIcon />,
  message,
  color: 'green'
})

export const getErrorMessage = (error) => {
  const title = error?.response?.data?.error || 'Error'
  const errors = error?.response?.data?.message
  const message = typeof errors === 'string' ? errors : errors?.join('\n')

  return {
    title,
    icon: <ErrorIcon />,
    message,
    color: 'red'
  }
}
