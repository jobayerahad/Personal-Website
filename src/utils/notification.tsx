import { BiCheckCircle as SuccessIcon } from 'react-icons/bi'
import { MdOutlineErrorOutline as ErrorIcon } from 'react-icons/md'

import { STATUS } from '@config/constants'

type Props = {
  status: STATUS
  message: string
}

export const getMessage = (obj: Props) => ({
  title: obj.status,
  icon: obj.status === STATUS.SUCCESS ? <SuccessIcon /> : <ErrorIcon />,
  message: obj.message,
  color: obj.status === STATUS.SUCCESS ? 'green' : 'red'
})
