import React from 'react';

const styles = {
  containerStyle: {
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: 10000,
  },
  contentBlock: {
    zIndex: '10000',
    width: '50%',
    height: '50%',
    background: 'white',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }
}

const Modal = (props) =>  (
  <div onClick={() => props.modalOutsideClick && props.modalOutsideClick()} style={{...styles.containerStyle, ...props.modalOutsideStyle}}>
    <div onClick={(e) => e.stopPropagation()} style={{...styles.contentBlock, ...props.modalInsideStyle}}>
      {props.children}
    </div>
  </div>
)

export default Modal