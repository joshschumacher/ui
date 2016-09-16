import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'checklist'

const classes = {
  item: `${baseClass}__item`,
  checkmark: `${baseClass}__checkmark`
}

export function Main ({ chromeless, className, children, customize, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const dynamicStyles = customize
    ? {
      borderRadius: customize.borderRadius,
      borderColor: customize.borderColor
    }
    : undefined

  return (
    <ul
      style={dynamicStyles}
      className={classNames(baseClass, { chromeless }, className)}>
      {children}
    </ul>
  )
}

Main.displayName = 'Checklist.Main'

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  chromeless: PropTypes.bool,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    borderColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired
  })
}

export function Item ({ className, children, customize, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const listItemDynamicStyles = customize
    ? { color: customize.textColor }
    : undefined
  const iconDynamicStyles = customize
    ? { stroke: customize.strokeColor }
    : undefined

  return (
    <li
      className={classNames(classes.item, className)}
      style={listItemDynamicStyles}>
      <svg
        className={classNames(classes.checkmark)}
        style={iconDynamicStyles}
        viewBox='0 0 25 25'
        aria-labelledby='Checkmark'
        height='20px'
        width='20px'>
        <path d='M5 13.69l4.49 4.23L19.37 8'></path>
      </svg>
      {children}
    </li>
  )
}

Item.displayName = 'Checklist.Item'

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    strokeColor: PropTypes.string.isRequired
  })
}
