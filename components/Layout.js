import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="container-root">
        <div className="container">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}
