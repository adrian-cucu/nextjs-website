import { FaMoon, FaSun } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Toggle() {
  const [theme, setTheme] = useState('light')

  const changeTheme = (mode) => {
    document.body.className = mode;
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

  const themeSwitcherStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.2rem',
  }

  const buttonStyle = {
    border: '2px solid grey',
    borderRadius: '20px',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '1.5rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    overflow: 'hidden',
    padding: '0.7rem',
    position: 'relative',
    width: '8rem',
    outline: 'none',
    height: '2.5rem',
    backgroundColor: '#35a900',
  }

  const themeIconsStyle = {
    zIndex: 1,
    color: '#eee',
    transition: '.25s ease-in ',
  }

  const currentThemeSwitch = {
    position: 'absolute',
    transition: 'left .25s ease,background-color .25s',
    top: 0,
    left: 0,
    backgroundColor: '#445',
    width: '50%',
    height: '2.5rem',
  }

  return (
    <div className="theme-switcher" style={themeSwitcherStyle}>
      <button style={buttonStyle} onClick={toggleTheme}>
        <FaMoon
          style={{ ...themeIconsStyle, opacity: theme === 'dark' ? 1 : 0.5 }}
        />
        <FaSun
          style={{
            ...themeIconsStyle,
            opacity: theme === 'light' ? 1 : 0.5,
            color: theme === 'light' ? 'fff700' : '#eee',
          }}
        />
        <div
          className="current-theme-switch"
          style={{
            ...currentThemeSwitch,
            left: theme === 'light' ? 'calc(100% - 50%)' : 0,
            backgroundColor: theme === 'light' ? '#00007d' : '#323235',
          }}
        ></div>
      </button>
    </div>
  )
}
