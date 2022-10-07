import { AiOutlineDashboard as DashboardIcon } from 'react-icons/ai'
import { FiUsers as UsersIcon } from 'react-icons/fi'
import { BsBuilding as InstitutionIcon, BsFillPersonLinesFill as IndivisualIcon } from 'react-icons/bs'

const adminMenuItems = [{ link: '/users', label: 'User Management', icon: UsersIcon }]

const generalItems = [
  { link: '/', label: 'Dashboard', icon: DashboardIcon },
  { link: '/individual-inquiries', label: "Individual's Inquiries", icon: IndivisualIcon },
  { link: '/institution-inquiries', label: "Institution's Inquiries", icon: InstitutionIcon }
]

const getMenuItems = (role) => {
  const isAdminOrManager = role === 'admin' || role === 'manager'

  return [...generalItems, ...(isAdminOrManager ? adminMenuItems : [])]
}

export const isActiveLink = (path, link) => {
  if (path === '/') return path === link ? 'active' : ''

  if (path.split('/')[1] === link.substring(1)) return 'active'

  return ''
}

export default getMenuItems
