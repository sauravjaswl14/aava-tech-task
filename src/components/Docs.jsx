import reactImg from "../assets/react.svg";
import reactRouterImg from "../assets/react-router.svg";
import reactQueryImg from "../assets/react-query.svg";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              perferendis possimus amet reprehenderit iusto adipisci asperiores
              doloribus libero alias nostrum.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              perferendis possimus amet reprehenderit iusto adipisci asperiores
              doloribus libero alias nostrum.
            </p>
          </div>
        </div>
        <div className="flex space-x-10 items-center bg-white p-5 rounded-md shadow-xl">
          <img src={reactQueryImg} className="w-20" alt="react query icon" />
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-bold">
              React Query (@tanstack/react-query)
            </h2>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              perferendis possimus amet reprehenderit iusto adipisci asperiores
              doloribus libero alias nostrum.
            </p>
          </div>
        </div>
        <div className="flex space-x-10 items-center bg-white p-5 rounded-md shadow-xl">
          <img src={tailwindImg} className="w-20" alt="tailwind css icon" />
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-bold">TailwindCSS (tailwindcss)</h2>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              perferendis possimus amet reprehenderit iusto adipisci asperiores
              doloribus libero alias nostrum.
            </p>
          </div>
        </div>
        <div className="flex space-x-10 items-center bg-white p-5 rounded-md shadow-xl">
          <img src={reactIconsImg} className="w-20" alt="react icons icon" />
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-bold">React Icons (react-icons)</h2>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              perferendis possimus amet reprehenderit iusto adipisci asperiores
              doloribus libero alias nostrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Docs;
