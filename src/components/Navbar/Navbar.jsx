import NavbarLogo from "./NavbarLogo";
import LinkItem from "../ui/LinkItem";
import Button from "../ui/Button";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store";
import UserName from "./UserName";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let links = [
    { nav: "home", path: "/" },
    { nav: "books", path: "/book" },
    { nav: "about us", path: "/about" },
  ];
  return (
    <>
      <div className="w-full flex items-center justify-center py-7.5 px-4 bg-[#FFFFFF33] z-10 absolute">
        <div className="container w-full flex items-center justify-between ">
          <div className="flex items-center">
            <LinkItem to={"/"}>
              <NavbarLogo />
            </LinkItem>
            <div className="hidden md:flex gap-5 ml-5">
              {links.map((el, index) => {
                const isActive = location.pathname === el.path;
                return (
                  <Link
                    className={
                      isActive
                        ? "text-mainColor text-lg font-semibold capitalize hover:text-[#ae1e5f] hover:drop-shadow-lg hover:drop-shadow-mainColor"
                        : "text-white text-lg font-semibold capitalize hover:text-mainColor hover:drop-shadow-lg hover:drop-shadow-mainColor"
                    }
                    key={index}
                    to={el.path}
                  >
                    {el.nav}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <div className="hidden md:block">
                <UserName />
              </div>
            ) : (
              <div className="nav-btns hidden md:flex items-center gap-3">
                <Button className="w-fit" isMainBtn={true}>
                  <Link to={"/login"}> login</Link>
                </Button>
                <Button className="w-fit" isMainBtn={false}>
                  <Link to={"/signup"}> signup</Link>
                </Button>
              </div>
            )}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FFFFFF33] backdrop-blur-md">
            <div className="container py-4">
              <div className="flex flex-col gap-4">
                {links.map((el, index) => {
                  const isActive = location.pathname === el.path;
                  return (
                    <Link
                      className={
                        isActive
                          ? "text-mainColor text-lg font-semibold capitalize hover:text-[#ae1e5f] hover:drop-shadow-lg hover:drop-shadow-mainColor"
                          : "text-white text-lg font-semibold capitalize hover:text-mainColor hover:drop-shadow-lg hover:drop-shadow-mainColor"
                      }
                      key={index}
                      to={el.path}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {el.nav}
                    </Link>
                  );
                })}
                {!isAuthenticated && (
                  <div className="flex flex-col gap-3 mt-4">
                    <Button className="w-fit" isMainBtn={true}>
                      <Link to={"/login"} onClick={() => setIsMenuOpen(false)}> login</Link>
                    </Button>
                    <Button className="w-fit" isMainBtn={false}>
                      <Link to={"/signup"} onClick={() => setIsMenuOpen(false)}> signup</Link>
                    </Button>
                  </div>
                )}
                {isAuthenticated && (
                  <div className="mt-4">
                    <UserName />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
