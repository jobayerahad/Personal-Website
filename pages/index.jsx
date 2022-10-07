import ComingSoon from '@components/ComingSoon'
import SiteMeta from '@components/common/SiteMeta'

const Home = ({ token }) => (
  <>
    <SiteMeta token={token} />

    <ComingSoon />
  </>
)

export default Home
