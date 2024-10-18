import { useState } from "react";
import { useRef } from "react";
import { ImGift } from "react-icons/im";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);

  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };
  return (
    <div className="flex flex-col space-y-5">
      <label htmlFor={name} className="capitalize">
        {label}
      </label>
      <div className="w-full h-[200px] border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9]">
        {!pickedImage ? (
          <p>No image picked yet.</p>
        ) : (
          <img
            src={pickedImage}
            alt="the image selected by the user"
            className="w-full h-full"
          />
        )}
      </div>
      <div>
        <input
          ref={imageInput}
          onChange={handleImageChange}
          className="hidden"
          id={name}
          type="file"
          name={name}
          accept="image/png, image/jpeg"
        />
        <button
          onClick={handlePickClick}
          className="border-none py-2 px-5 bg-[#a4abb9] rounded-md"
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};
export default ImagePicker;
