import MainRecomendedCard from "./MainRecomendedCard";

export default function SectionRecomendedCard() {
  return (
    <div className=" text-[#222222] flex flex-col gap-10 w-full text-2xl sm:text-3xl md:text-4xl font-bold bg-backGrond justify-center px-4">
      <h3>Recomended For You</h3>
      <div className="flex flex-col lg:flex-row gap-5 w-full justify-center">
        <MainRecomendedCard />
        <MainRecomendedCard />
      </div>
    </div>
  );
}
