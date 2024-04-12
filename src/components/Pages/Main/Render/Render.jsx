import "./Render.scss";
import gif from '/assets/hero/render.gif';

const Render = () => {
  return (
    <div className="mt-10 px-4">
      <h2 className="my-6 px-4 text-center text-3xl font-bold text-blackGreen">
        Ласкаво вітаємо до нашої кліники!
      </h2>
      <div className="flex justify-center">
        <img src={gif} className="rounded-3xl bg-cover"/>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>
  );
};

export default Render;
