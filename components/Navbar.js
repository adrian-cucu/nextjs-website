import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiCodeCurly } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'

export default function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
    document.body.style.overflow = 'hidden'
  }
  const closeMobileMenu = () => {
    setClick(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container">
            {/* <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
              <BiCodeCurly className="navbar-icon" />
              Dev
            </Link> */}

            {/* Hamburger Icon */}
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <div
              id="scrim"
              className={click ? 'visible' : ''}
              onClick={closeMobileMenu}
            ></div>

            <div className={click ? 'nav-menu active' : 'nav-menu'}>
              <ul>
                <li className="nav-item">
                  <Link href="/" as="/" passHref onClick={closeMobileMenu}>
                    <a className="nav-links">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    passHref
                    href="/services"
                    as="/services"
                    onClick={closeMobileMenu}
                  >
                    <a className="nav-links">Article</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    passHref
                    href="/products"
                    ass="/products"
                    onClick={closeMobileMenu}
                  >
                    <a className="nav-links">About</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}
