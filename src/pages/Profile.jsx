import { Form, Formik } from "formik";
import Herosection from "../components/HeroSection/Herosection";
import UiComponant from "../components/Authentication/UiComponant";
import BtnType from "../components/ui/BtnType";
import { LiaPenAltSolid } from "react-icons/lia";
import Button from "../components/ui/Button";

export default function Profile() {


    return (
        <>
            <Herosection h="h-84.5" />
            <div className="flex items-center justify-center px-4">
                <div className=" container flex items-center justify-center flex-col relative min-h-screen py-8">
                    <div className="w-40 sm:w-45 h-40 sm:h-45 rounded-full absolute  -top-20 sm:-top-15" >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcqkUHsDulyGaMQk4mV7s9_d8-FW0x8ZOQ&s"
                            alt=""
                            className="w-full rounded-full"
                        />

                    </div >
                    <div className="relative">
                        <Button isMainBtn={true} classn=" flex items-center justify-center rounded-full w-[33px] h-[33px] -top-16 sm:-top-20 -right-10 sm:-right-15  absolute  " >
                            <LiaPenAltSolid />
                        </Button>

                    </div>

                    <Formik>
                        <Form className=" w-full">
                            <div className="bg-[#FFFFFF] flex flex-col gap-4 rounded-xl mt-9 p-4 sm:p-7 max-w-2xl mx-auto">
                                <div>
                                    <h1 className="text-lg sm:text-xl text-[#222222] font-semibold text-center mt-7" >General information</h1>
                                </div>
                                <div className="mt-7 flex flex-col gap-4 ">
                                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 ">
                                        <UiComponant
                                            name="firstname"
                                            label="First Name"
                                            placeholder="John"
                                            type="firstname"
                                        />
                                        <UiComponant
                                            name="lastname"
                                            label="Last Name"
                                            placeholder="Smith"
                                            type="lastname"
                                        />
                                    </div>
                                    <UiComponant
                                        name="email"
                                        label="Email"
                                        placeholder="example@gmail.com"
                                        type="email"
                                    />
                                    <UiComponant
                                        name="number"
                                        label="Phone number"
                                        placeholder=" 123456789"
                                        type="text"
                                    />
                                    <UiComponant
                                        name="Address"
                                        label=" Address"
                                        placeholder=" Maadi, Cairo, Egypt."
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center px-4">

                                <BtnType btn="Update information" w={"w-full sm:w-[280px]"} />
                            </div>
                        </Form>
                    </Formik>

                </div>

            </div>
        </>
    )
}
