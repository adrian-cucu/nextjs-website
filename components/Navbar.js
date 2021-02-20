import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiCodeCurly } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import Toggle from '../components/Toggle'

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
      <IconContext.Provider value={{ size: '2rem' }}>
        <div className="navbar">
          <div className="navbar-container">
            <div className="nav-brand">
              <Link href="/" className="brand" onClick={closeMobileMenu}>
                <a className="brand">
                  <span>
                    <BiCodeCurly
                      className="navbar-icon"
                      style={{ fontSize: '2rem', display: 'block' }}
                    />
                  </span>
                  Adrian Cucu
                </a>
              </Link>
            </div>

            {/* Hamburger Icon */}
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <FaTimes
                  style={{
                    fontSize: '2rem',
                    display: 'inline-block',
                    margin: 'auto',
                  }}
                />
              ) : (
                <FaBars
                  style={{
                    fontSize: '2rem',
                    display: 'inline-block',
                    margin: 'auto',
                  }}
                />
              )}
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
              <Toggle />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}
