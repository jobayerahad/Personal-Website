import { MenuItem } from '@types'

export const removeCellNoPrefix = (phoneNumber: string) => {
  if (phoneNumber?.startsWith('88')) return phoneNumber.substring(2)
  else return phoneNumber
}

export const capWords = (str: string, exceptions: string[] = []) => {
  const exceptionSet = new Set(exceptions.map((ex) => ex.toUpperCase()))

  return str
    ?.toLowerCase()
    .split(' ')
    .map((word) => {
      const upperWord = word.toUpperCase()
      return exceptionSet.has(upperWord) ? upperWord : word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export const getLabel = (inputValue: string, data: MenuItem[]) => {
  for (const item of data) if (item.value === inputValue) return item.label
  return ''
}

export const removeSalutation = (str: string) => str?.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, '')

export const toGMTPlus6 = (date: Date, moment: 'start' | 'end') => {
  const gmtPlus6Offset = 6 * 60 * 60 * 1000 // 6 hours in milliseconds
  const adjustedDate = new Date(date.getTime() + gmtPlus6Offset)

  if (moment === 'start') adjustedDate.setUTCHours(0, 0, 0, 0) // Set to 12:00 AM
  else if (moment === 'end') adjustedDate.setUTCHours(23, 59, 59, 999) // Set to 11:59:59 PM

  return adjustedDate
}

export const getQueryString = (searchParams: URLSearchParams, name: string, value: string): string => {
  const params = new URLSearchParams(searchParams)
  params.set(name, value)
  return params.toString()
}

export const paginateRes = <T>(data: T[], totalRecords: number, page: number, limit: number) => {
  const totalPages = Math.ceil(totalRecords / limit)

  return {
    data,
    paginationInfo: {
      totalRecords,
      totalPages,
      currentPage: page,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  }
}
