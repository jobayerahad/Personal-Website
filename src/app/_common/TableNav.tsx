import { Group, Pagination, Select, Text } from '@mantine/core'

type Props = {
  listName: string
  limit: string
  limitHandler: (value: string | null) => void
  page: number
  pageHandler: (value: number) => void
  totalPages: number
  totalRecords: number
}

const TableNav = ({ listName, limit, limitHandler, page, pageHandler, totalPages, totalRecords }: Props) => (
  <Group justify="space-between">
    <Select
      label="Data Per Page"
      data={['10', '20', '30', '50']}
      value={limit}
      onChange={limitHandler}
      allowDeselect={false}
      size="xs"
    />

    <Pagination size="sm" value={page} onChange={pageHandler} total={totalPages} color="#C93D76" />

    <Text size="xs">
      Total: {totalRecords} {listName}
    </Text>
  </Group>
)

export default TableNav
