import React, { ReactNode } from 'react'
import ReactModal from 'react-modal'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const ModalStyles = {
  content: {
    width: '750px',
    height: '400px',
    borderRadius: '0.5rem'
  },
  overlay: {}
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={ModalStyles}>
      {children}
    </ReactModal>
  )
}

export default Modal
