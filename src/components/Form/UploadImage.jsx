import ImagePicker from "./ImagePicker";
import { closeModal } from "../../features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const UploadImage = () => {
  const dispatch = useDispatch();
  const { image } = useSelector((store) => store.post);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(closeModal());
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <ImagePicker label={"choose image"} name={"image"} />
        <div className="w-full flex justify-between">
          <button type="submit" className="submit-form-btn">
            Upload
          </button>

          <button
            onClick={() => dispatch(closeModal())}
            className="close-modal-btn"
          >
            Close Modal
          </button>
        </div>
      </form>
    </>
  );
};
export default UploadImage;
