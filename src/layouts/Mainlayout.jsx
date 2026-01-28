import { Outlet } from "react-router-dom";
import Herosection from "../components/HeroSection/Herosection";
import Footer from "../components/footer/footer";


export default function Mainlayout() {
    return (
        <div className="h-full">
            <Herosection h="h-84.5" />
            <div className="flex justify-center w-full bg-[#f5f5f5]">
                <div className=" container">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </div>
    )
}
