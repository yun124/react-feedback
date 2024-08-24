import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, { version } from 'react'

const Button = ({children, version, type, isDisabled}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

export default Button