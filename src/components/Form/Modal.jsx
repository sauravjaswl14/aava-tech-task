import UploadImage from "./UploadImage";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="relative bg-white p-5 rounded-lg w-[50%]"
        onClick={(e) => e.stopPropagation()}
      >
        <UploadImage closeModal={closeModal} />
      </div>
    </div>
  );
};
export default Modal;
