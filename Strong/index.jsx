import React, {PropTypes} from 'react'
import classNamesBind from 'classnames/bind'
import compose from '../lib/compose'
import overridable from '../decorators/overridable'
import defaultStyles from './styles.scss'

const baseClass = 'strong'

function Strong ({children, styles, ...props}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <strong className={classNames(baseClass)} {...props}>
    {children}
  </strong>
}

Strong.defaultProps = {
  styles: {}
}

Strong.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  overridable(defaultStyles)
)(Strong)
