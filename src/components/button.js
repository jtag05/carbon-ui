import React, { PropTypes } from 'react'
import Radium from 'radium'
import Color from 'color'

import Shadows from '../constants/shadows'
import Breakpoints from '../constants/breakpoints'
import Animations from '../constants/animations'

const Button = (props, { theme }) => {
  const styles = {
    base: {
      minWidth: '64px',
      height: '36px',
      padding: '10px 16px',
      margin: '0 8px',

      fontSize: '14px',
      lineHeight: '16px',
      textTransform: 'uppercase',

      transition: `
        box-shadow
        ${Animations.duration}
        ${Animations.function}
        ${Animations.delay}`,

      [Breakpoints.ml]: {
        height: '32px',
        padding: '8px 16px',

        fontSize: '13px',
        lineHeight: '16px',
      },
    },

    flat: {
      minWidth: '88px',

      color: theme.primary,

      ':active': {
        backgroundColor: theme.button.flat.pressed,
      },

      disabled: {
        backgroundColor: theme.button.flat.disabled,
      },
    },

    raised: {
      minWidth: '88px',

      ...Shadows.dp2,

      ':active': {
        ...Shadows.dp4,
      },

      ':focus': {
        backgroundColor: Color(theme.primary).darken(0.12).hexString(),
      },

      disabled: {
        color: theme.button.raised.disabledText,

        backgroundColor: theme.button.raised.disabled,
      },

      [Breakpoints.ml]: {
        ...Shadows.none,

        ':hover': {
          ...Shadows.dp2,
        },
      },
    },

    fab: {

    },
  }

  return (
    <div styles={[
      styles.base,

      props.flat && styles.flat,
      props.raised && styles.raised,
      props.fab && styles.fab,

      props.disabled && props.flat && styles.flat.disabled,
      props.disabled && props.raised && styles.raised.disabled,
      props.disabled && props.fab && styles.fab.disabled,

      props.styles,
    ]}>
      {props.children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,

  disabled: PropTypes.bool,

  flat: PropTypes.bool,
  raised: PropTypes.bool,
  fab: PropTypes.bool,
}

Button.contextTypes = {
  theme: PropTypes.object,
}

export default Radium(Button)
