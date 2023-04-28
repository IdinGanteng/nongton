import { useState } from "react"

const Modal = () => {
    const [showModal, setShowModal] = useState(true);

    const handleCloseModal = () => {
        setShowModal(false);
      };
  return (
    <>
    {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>menang</p>
          </div>
        </div>
      )}
      </>
  )
}

export default Modal