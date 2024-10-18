import ImagePicker from "./ImagePicker";

const UploadImage = ({ closeModal }) => {
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

          <button onClick={closeModal} className="close-modal-btn">
            Close Modal
          </button>
        </div>
      </form>
    </>
  );
};
export default UploadImage;
