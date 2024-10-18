import UploadImage from "./UploadImage";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="capitalize font-medium">Upload Image</h2>
        <UploadImage closeModal={closeModal} />
      </div>
    </div>
  );
};
export default Modal;
