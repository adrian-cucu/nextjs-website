import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Meta from '../components/Meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="main-container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
