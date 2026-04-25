import bg from "../../assets/images/Background.png";
import CommunicationLeft from "./CommunicationLeft";
import CommunicationRight from "./CommunicationRight";

export default function CommunicationMain() {
  return (
    <>
      <div
        className="w-full p-20 bg-cover bg-[#3B2F4A]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container  m-auto w-full grid grid-cols-1 lg:grid-cols-2 h-full  gap-6">
          <CommunicationLeft />
          <CommunicationRight />
        </div>
      </div>
    </>
  );
}
