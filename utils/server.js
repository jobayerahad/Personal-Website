import { getCsrfToken, getSession } from 'next-auth/react'

// Get the user & token from the next-auth session
export const getAuthData = async (context) => {
  const session = await getSession(context)
  const user = session?.user

  if (!session) return { redirect: { destination: '/login', permanent: false } }
  if (!user.confirmed) return { redirect: { destination: '/confirmation', permanent: false } }

  const token = session.user.access_token

  return { props: { user, token } }
}

// Get the token from the next-auth session
export const getConfirmPageData = async (context) => {
  const session = await getSession(context)
  const user = session?.user

  if (!session) return { redirect: { destination: '/login', permanent: false } }
  if (user.confirmed) return { redirect: { destination: '/', permanent: false } }

  const token = user.access_token
  return { props: { token } }
}

// Get the CSRF token from the Next.js context
export const getUnAuthData = async (context) => {
  const csrfToken = await getCsrfToken(context)
  const session = await getSession(context)

  if (session) return { redirect: { destination: '/', permanent: false } }

  return { props: { csrfToken } }
}
