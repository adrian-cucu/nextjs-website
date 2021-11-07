import React from 'react'
import { useState, useLayoutEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiCodeCurly } from 'react-icons/bi'
import Toggle from '../components/Toggle'
import Container from '../components/Container'

React.useLayoutEffect = React.useEffect

export default function Navbar() {
  const [navMenuActive, setNavMenuActive] = useState(false)

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth >= 768) {
        setNavMenuActive(false)
      }
    }

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
      document.body.style.overflow = ''
    }
  }, [])

  const handleClick = () => {
    setNavMenuActive((prevNavMenuActive) => !prevNavMenuActive)
    document.body.style.overflow = navMenuActive ? '' : 'hidden'
  }

  const closeMobileMenu = () => {
    setNavMenuActive(false)
    document.body.style.overflow = ''
  }

  return (
    <div className="navbar">
      <Container>
        <div className="navbar-wrapper-flexbox">
          <div className="nav-brand">
            <Link href="/" onClick={closeMobileMenu}>
              <a className="brand flex">
                <span>
                  <BiCodeCurly className="nav-brand-icon" />
                </span>
                Adrian Cucu
              </a>
            </Link>
          </div>

          <div className="nav-menu-icon" onClick={handleClick}>
            {navMenuActive ? <FaTimes /> : <FaBars />}
          </div>

          <div
            id="nav-scrim"
            className={navMenuActive ? 'visible' : ''}
            onClick={closeMobileMenu}
          ></div>

          <div
            className={navMenuActive ? 'nav-menu flex active' : 'nav-menu flex'}
          >
            <ul>
              <li>
                <Link href="/" as="/" passHref onClick={closeMobileMenu}>
                  <a className="nav-links">Home</a>
                </Link>
              </li>
              <li>
                <Link
                  passHref
                  href="/article"
                  as="/article"
                  onClick={closeMobileMenu}
                >
                  <a className="nav-links">Article</a>
                </Link>
              </li>
              <li>
                <Link
                  passHref
                  href="/products"
                  as="/products"
                  onClick={closeMobileMenu}
                >
                  <a className="nav-links">About</a>
                </Link>
              </li>
            </ul>
            <Toggle />
          </div>
        </div>
      </Container>
    </div>
  )
}
