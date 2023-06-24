
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const menu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/",
  },
  {
    name: "About",
    url: "/",
  },
  {
    name: "FAQs",
    url: "/",
  },
];

function Header() {
  const [showToggledNav, setShowToggledNav] = useState(false);

  const toogleHeader = () => {
    setShowToggledNav(!showToggledNav);
  };

  const pathName = usePathname();
  const activeindex = () => {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].url === pathName) {
        return i;
      }
    }
  };
  const [active, setActive] = useState(activeindex);

  return (
    <header className="fixed !top-0 left-0 right-0 !bg-white z-40 w-full px-2 shadow-xl lg:px-8 xl:px-24 md:px-4">
      <nav className="py-2 md:py-4 ">
        <div className="mx-auto lg:container container-fluid md:flex md:items-center">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold px-4">
              The<span className="text-primary">Design</span>Value
            </Link>
            <button
              kind=""
              onClick={toogleHeader}
              type="button"
              className="w-10 border-0 btn-circle btn-outline md:hidden bg-transparent focus:bg-transparent hover:bg-transparent text-black"
            >
              <FaBars
                className={`${!showToggledNav ? "text-base" : "hidden"}`}
              />
              <div className={`${showToggledNav ? "text-xl mr-4" : "hidden"} `}>
                X
              </div>
            </button>
          </div>
          <div
              className={`md:ml-auto  md:mt-0 md:flex md:items-center ${
                showToggledNav ? "flex flex-col" : "hidden"
              }`}
            >
              {menu.map((data, index) => (
                <Link
                  key={index}
                  href={data.url}
                  className={` ${
                    active === index && "!text-primary"
                  } 'text-black capitalize hover:text-primary text-lg px-4 py-2 bg-transparent rounded-md relative z-10`}
                  onClick={() => setActive(index) & setShowToggledNav(false)}
                >
                  {data.name}
                </Link>
              ))}
            </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
