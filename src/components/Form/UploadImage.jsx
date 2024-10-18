const UploadImage = ({ closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // console.log([...formData.entries()]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-5 p-5 flex flex-col space-y-5">
        <div className="flex flex-col space-y-2">
          <input id="image" type="image" name="image" />
        </div>
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
