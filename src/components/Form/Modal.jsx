import UploadImage from "./UploadImage";
import { closeModal } from "../../features/modal/modalSlice";

const Modal = () => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="relative bg-white p-5 rounded-lg w-[50%]"
        onClick={(e) => e.stopPropagation()}
      >
        <UploadImage />
      </div>
    </div>
  );
};
export default Modal;
