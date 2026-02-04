import { MdKeyboardArrowDown } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineLogout } from 'react-icons/hi'
import { LuCircleHelp } from "react-icons/lu";
export default function DropdownNav() {
    return (
        <>
            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className=" text-2xl mb-3"><MdKeyboardArrowDown/></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a><CiUser/>Profile</a></li>
                    <li><a><CiClock2/> Order History</a></li>
                    <li><a><IoLocationOutline/> Address</a></li>
                    <li><a><LuCircleHelp/>Help</a></li>
                    <li><a><HiOutlineLogout/> Log Out</a></li>
                </ul>
            </div>
        </>
    )
}
