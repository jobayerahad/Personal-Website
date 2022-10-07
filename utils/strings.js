import { Role } from './roles'

export const getSubHeading = (role) => {
  if (role === Role.MAKER) return "Inquiries you've created so far"
  else if (role === Role.CHECKER || role === Role.MANAGER) return 'Inquiries from your branch'
  else return 'All inquiries'
}

export const getAlertMsg = (role) => {
  if (role === Role.MAKER)
    return (
      <>
        You didn&apos;t make any inquiries yet! You can make a new inquiry by clicking &#34;
        <span style={{ fontWeight: 'bold' }}>Create New Inquiry</span>&#34; button.
      </>
    )
  else if (role === Role.CHECKER || role === Role.MANAGER)
    return (
      <>
        Your branch didn&apos;t make any inquiries yet! A maker from your branch can make a new inquiry by clicking
        &#34;
        <span style={{ fontWeight: 'bold' }}>Create New Inquiry</span>&#34; button from his/her menu.
      </>
    )
  else return <>No branch didn&apos;t make any inquiries yet!</>
}
