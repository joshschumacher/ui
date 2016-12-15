import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../decorators/themeable'
import overridable from '../decorators/overridable'
import defaultStyles from './styles.scss'
import palette from '../lib/palette'
import compose from '../lib/compose'
import isThemeable from '../Text/isThemeable'

const baseClass = 'subtitle'

function Subtitle ({
  children,
  className,
  color,
  condensed,
  margins,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(
    baseClass,
    color,
    {
      condensed,
      'default-margins': margins
    },
    className
  )

  return (
    <h3 className={cls} {...props}>
      {children}
    </h3>
  )
}

Subtitle.defaultProps = {
  color: 'black',
  condensed: false,
  margins: false
}

Subtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  id: PropTypes.string,
  margins: PropTypes.bool,
  style: PropTypes.object,
  styles: PropTypes.object
}

export default compose(
  themeable(isThemeable((customizations, props) => ({
    style: {
      ...props.style,
      color: customizations.color_header
    }
  }))),
  overridable(defaultStyles)
)(Subtitle)
