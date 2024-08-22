import Link from 'next/link'
import { Alert } from '@mantine/core'
import { MdOutlineError as ErrorIcon } from 'react-icons/md'

type Props = {
  error: {
    status?: string
    message?: string
  }
}

const ErrorMsg = ({ error }: Props) => {
  const title = error?.status || 'An unexpected error occurred'
  const message = error?.message || (
    <>
      Please try again or <Link href="/support">contact support</Link> if the problem persists.
    </>
  )

  return (
    <Alert color="red" icon={<ErrorIcon size={20} />} title={title}>
      {message}
    </Alert>
  )
}

export default ErrorMsg
