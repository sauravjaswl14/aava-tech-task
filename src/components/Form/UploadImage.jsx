import ImagePicker from "./ImagePicker";
import { closeModal } from "../../features/modal/modalSlice";
import { useDispatch } from "react-redux";

const UploadImage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // console.log([...formData.entries()]);
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
