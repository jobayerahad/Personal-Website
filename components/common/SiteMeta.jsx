import Head from 'next/head'
import { useEffect } from 'react'
import { setClientAuthToken } from '@utils/api'

const appTitle = process.env.NEXT_PUBLIC_APP_TITLE

const SiteMeta = ({ title, token }) => {
  useEffect(() => {
    if (token) setClientAuthToken(token)
  }, [token])

  return (
    <Head>
      <title>{title ? `${title} - ${appTitle}` : appTitle}</title>
      <meta
        name="description"
        content="I'm a full stack developer. Currently I'm working on SBAC Bank Ltd as Junior Officer in IT Division, Head Office. I've 3 years of experience in building, testing & managing web applications."
      />
    </Head>
  )
}

export default SiteMeta
