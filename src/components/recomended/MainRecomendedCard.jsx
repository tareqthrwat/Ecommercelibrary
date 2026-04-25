import RightComponentRecomendedCard from "./RightComponentRecomendedCard";

export default function MainRecomendedCard() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 p-5 lg:p-10 bg-white justify-between w-full lg:w-fit h-fit text-[#222222] ">
      {/* left */}
      <div className="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw51g1gMBrZN3FbN17flaY_YSYmTMGuudh3Q&s" className="w-full max-w-xs mx-auto lg:mx-0" />
      </div>
      {/* right */}
      <RightComponentRecomendedCard/>
    </div>
  );
}
