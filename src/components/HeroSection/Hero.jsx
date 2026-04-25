import img from "../../assets/images/533643aa8db82414f48d43a992d009dda3961386.png";
import Search from "../ui/Search";

export default function Hero({ showSearch }) {
  return (
    <div
      className="relative h-full bg-cover bg-center "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/60 flex justify-center items-center px-4">
        {showSearch === true ? (
          <Search isMainBtn={true} width={"fit"} />
        ) : showSearch === false ? (
          <div className="text-white text-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">About Bookshop</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
