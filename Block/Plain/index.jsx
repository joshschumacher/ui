import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'block'

export default function Plain ({className, blue, children, styles, ...props}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(baseClass, { blue }, className)}
      {...props}>
      {children}
    </div>
  )
}

Plain.displayName = 'Block.Plain'

Plain.propTypes = {
  blue: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}
