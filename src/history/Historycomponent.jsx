import { FaRegTrashAlt } from "react-icons/fa";


export default function Historycomponent() {
  return (
    <div className='bg-[#FFFFFF] p-6 rounded-xl'>
        <div className="text-[#D9176C80] flex justify-end ">
            <FaRegTrashAlt size={30}/>
        </div>
        <div className="flex items-center justify-between mt-6">
            <div className="text-[20px] font-normal text-[#22222280] flex flex-col gap-5">
                <h1>Order No.</h1>
                <h1>Status</h1>
                <h1>Date</h1>
                <h1>Address</h1>

            </div>
            <div className="text-[20px] font-semibold text-[#222222] flex flex-col gap-5 text-end ">
                <h1 className="">#123456</h1>
                <h1>In progress</h1>
                <h1>jul, 31 2024</h1>
                <h1>Maadi, Cairo, Egypt.</h1>
            </div>
        </div>
      
    </div>
  )
}
