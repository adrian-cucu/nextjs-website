import React from 'react'
import { useState, useLayoutEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiCodeCurly } from 'react-icons/bi'
import Toggle from '../components/Toggle'
import Container from '../components/Container'

React.useLayoutEffect = React.useEffect

export default function Navbar() {
  const [click, setClick] = useState(false)

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth >= 768) {
        setClick(false)
      }
    }

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
      document.body.style.overflow = ''
    }
  }, [])

  const handleClick = () => {
    setClick((prevClick) => !prevClick)
    document.body.style.overflow = 'hidden'
  }

  const closeMobileMenu = () => {
    setClick(false)
    document.body.style.overflow = ''
  }

  return (
    <div className="navbar">
      <Container>
        <div className="flex">
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
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <div
            id="nav-scrim"
            className={click ? 'visible' : ''}
            onClick={closeMobileMenu}
          ></div>

          <div className={click ? 'nav-menu flex active' : 'nav-menu flex'}>
            <ul>
              <li>
                <Link href="/" as="/" passHref onClick={closeMobileMenu}>
                  <a className="nav-links">Home</a>
                </Link>
              </li>
              <li>
                <Link
                  passHref
                  href="/services"
                  as="/services"
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
