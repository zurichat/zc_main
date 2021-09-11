import React, { Component, Fragment } from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import cancel from '../../../assets/cancel.svg'

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    )
  }
  render() {
    return (
      <Fragment>
        <Backdrop clicked={this.props.modalClosed} show={this.props.show} />
        <div
          className={classes.Modal}
          style={{
            opacity: this.props.show ? '1' : '0'
          }}
        >
          <img
            id={classes.cancel}
            src={cancel}
            alt=""
            onClick={this.props.modalClosed}
          />
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default Modal
