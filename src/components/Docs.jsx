import reactImg from "../assets/react.svg";
import reactRouterImg from "../assets/react-router.svg";
import reactQueryImg from "../assets/react-query.svg";
import reduxToolkitImg from "../assets/redux-toolkit.svg";
import tailwindImg from "../assets/tailwind-css.svg";
import reactIconsImg from "../assets/react-icons.svg";

const Docs = () => {
  return (
    <section className="docs my-20 w-full h-full flex justify-center items-center">
      <div className="flex flex-col space-y-8">
        <h2 className="capitalize text-4xl font-bold text-[#645cff]">
          libraries used
        </h2>
        <div className="flex space-x-10 items-center bg-white p-5 rounded-md shadow-xl">
          <img src={reactImg} className="w-20" alt="react icon" />
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-bold">React (react.js)</h2>
            <p className="max-w-lg">
              To break app into several components for seamless interactivity
              and building user interface
            </p>
          </div>
        </div>
        <div className="flex space-x-10 items-center bg-white p-5 rounded-md shadow-xl">
          <img src={reactRouterImg} className="w-20" alt="react router icon" />
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-bold">
              React Router DOM (react-router-dom)
            </h2>
            <p className="max-w-lg">
              To handle routes and display corresponding Components base on path
              in browser url
            </p>
          </div>
        </div>
        <div className="flex space-x-10 items-center bg-white p-5 rounded-md shadow-xl">
          <img
            src={reduxToolkitImg}
            className="w-20"
            alt="redux toolkit icon"
          />
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-bold">
              Redux Toolkit (@reduxjs/toolkit)
            </h2>
            <p className="max-w-lg">For Global State Management</p>
          </div>
        </div>
        <div className="flex space-x-10 items-center bg-white p-5 rounded-md shadow-xl">
          <img src={tailwindImg} className="w-20" alt="tailwind css icon" />
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-bold">TailwindCSS (tailwindcss)</h2>
            <p className="max-w-lg">
              To rapidly build website with provided utility classes
            </p>
          </div>
        </div>
        <div className="flex space-x-10 items-center bg-white p-5 rounded-md shadow-xl">
          <img src={reactIconsImg} className="w-20" alt="react icons icon" />
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-bold">React Icons (react-icons)</h2>
            <p className="max-w-lg">For rendering icons</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Docs;
