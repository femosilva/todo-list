import React, { ReactNode, useState } from 'react'
import ReactModal from 'react-modal'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen)

  const handleClose = () => {
    setModalIsOpen(false)
    onClose()
  }

  return (
    <ReactModal isOpen={modalIsOpen} onRequestClose={handleClose} ariaHideApp={false}>
      {children}
    </ReactModal>
  )
}

export default Modal
