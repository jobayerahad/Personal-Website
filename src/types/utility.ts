import { STATUS } from '@config/constants'

export type MenuItem = {
  value: string
  label: string
}

export type TPaginatedRes<T> = {
  data: T[]
  paginationInfo: {
    totalRecords: number
    totalPages: number
    currentPage: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

export type actionRes = {
  status: STATUS
  data: any
}
