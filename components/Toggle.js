import { FaMoon, FaSun } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Toggle() {
  const [theme, setTheme] = useState('light')

  const changeTheme = (mode) => {
    document.body.className = mode
    typeof window !== 'undefined' && window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    changeTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const localTheme =
      typeof window !== 'undefined' && window.localStorage.getItem('theme')
    changeTheme(localTheme ? localTheme : 'light')
  }, [])

  const buttonStyle = {
    position: 'relative',
    width: '4rem',
    padding: '0.5rem 0.75rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'var(--bg-color-light-medium)',
    overflow: 'hidden',
    outline: 'none',
    border: 'none',
    borderRadius: '2rem',
    boxSizing: 'content-box',
    cursor: 'pointer',
    fontSize: '1.1rem',
  }

  const themeIconsStyle = {
    zIndex: 1,
    color: '#eee',
    transition: '.3s ease-in ',
  }

  const currentThemeSwitch = {
    position: 'absolute',
    transition: 'left .3s ease,background-color .3s',
    top: 0,
    left: 0,
    backgroundColor: 'var(--navbar-color)',
    width: '50%',
    height: '100%',
  }

  return (
    <div className="theme-switcher">
      <button style={buttonStyle} onClick={toggleTheme}>
        <FaMoon
          style={{
            ...themeIconsStyle,
            color: theme === 'dark' ? '#eee' : '#000',
            opacity: theme === 'dark' ? 1 : 0.4,
          }}
        />
        <FaSun
          style={{
            ...themeIconsStyle,
            color: '#ffeb00',
            opacity: theme === 'light' ? 1 : 0.4,
          }}
        />
        <div
          className="current-theme-switch"
          style={{
            ...currentThemeSwitch,
            left: theme === 'light' ? 'calc(50%)' : 0,
          }}
        ></div>
      </button>
    </div>
  )
}
