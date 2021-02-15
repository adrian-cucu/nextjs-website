import React from 'react'
import './Button_2.css'

const STYLES = [
  'btn--primary--solid',
  'btn--warning--solid',
  'btn--danger--solid',
  'btn--success--solid',
  'btn--primary--outline',
  'btn--warning--outline',
  'btn--danger--outline',
  'btn--success--outline',
]

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const style = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const size = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button className={`btn ${style} ${size}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
