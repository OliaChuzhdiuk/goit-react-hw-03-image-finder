import css from './Modal.module.css';

import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendelKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelKeyDown);
  }
  hendelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.showModal();
    }
  };
  hendelBecdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.showModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.hendelBecdropClick}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
export default Modal;
