"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import P from "../typography/P";
import Image from "next/image";

const menu = [
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "Articles",
    url: "/",
  },
  {
    name: "FAQs",
    url: "/faqs",
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
      } else {
        return null
      }
    }
  };
  const [active, setActive] = useState(activeindex);
  const [topbar, setTopbar] = useState(false)

  const allowedPaths = ['/admin', '/admin/dashboard', '/student-login', '/courses/workshop-with-internship', '/courses/ui-ux-workshop-with-jop-placement','/courses/ui-ux-workshop'];
  const nonPromoted = allowedPaths.includes(pathName)

  return (
    <header className="sticky !top-0 left-0 right-0 bg-light md:bg-white z-50 w-full">
      <div
        className={`${(topbar && !nonPromoted) ? "md:hidden" : "hidden"} bg-primary !text-white p-6`}
      >
        <button
          onClick={() => setTopbar(false)}
          className="absolute top-5 right-5"
        >
          <Image alt="" src="/images/close.svg" height="18" width="18" />
        </button>
        <P className="capitalize cursor-default mr-10 !text-white"> Admissions open for batches starting from May!</P>
        <P className="mt-3 mb-5 !text-[#E0E0E0] capitalize">All courses at a discount of <span className="font-bold !text-white uppercase">Flat 50%</span></P>
        <Link
          href="/courses"
          className="underline font-bold"
        >
          Check Now
        </Link>
      </div>
      <nav className="md:py-4">
        <div className="2xl:container px-6 md:px-12 lg:px-28 mx-auto container-fluid flex items-center justify-center md:justify-between">
          <Link href="/" className="text-3xl font-bold mt-3 md:mt-0 dm-sans" onClick={() => setActive(null)}>
            The<span className="text-primary">Design</span>Value
          </Link>
          <div className="md:flex hidden">
            {menu.map((data, index) => (
              <Link
                key={index}
                href={data.url}
                className={` ${active === index && "!text-primary"
                  } '!text-black capitalize hover:text-primary text-lg px-4 py-2 bg-transparent rounded-md relative z-10`}
                onClick={() => setActive(index)}
              >
                {data.name}
              </Link>
            ))}
          </div>
          <Link href="/student-login" className="bg-primary text-center rounded-[40px] w-40 !text-lg !text-white py-2 px-4 hidden md:inline-block">
            Student Log In
          </Link>
        </div>
        <div className="bg-black block md:hidden container-fluid !text-white mt-3 px-3 py-3">
          <div className="flex justify-between">
            <button
              kind=""
              onClick={toogleHeader}
              type="button"
              className="w-10 border-0 bg-transparent !text-white ml-2"
            >
              <FaBars
                className={`${!showToggledNav ? "text-base" : "hidden"}`}
              />
              <div
                className={`${showToggledNav ? "text-lg -mt-1 -ml-4" : "hidden"
                  } `}
              >
                X
              </div>
            </button>
            <Link href="/student-login" className="bg-white text-center !text-lg !text-black hover:bg-secondary hover:!text-white rounded-[30px] w-40 px-4 py-[6px]">
              Student Log In
            </Link>
          </div>
          <div className={`${showToggledNav ? "flex" : "hidden"} flex-col`}>
            {menu.map((data, index) => (
              <Link
                key={index}
                href={data.url}
                className={` ${active === index && "!text-secondary"
                  } '!text-black capitalize hover:text-secondary text-md px-3 py-1 rounded-md`}
                onClick={() => setActive(index) & setShowToggledNav(false)}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div
        className={`${(topbar && !nonPromoted) ? "hidden md:flex" : "hidden"} bg-black !text-white p-3 justify-center`}
      >
        <P className="capitalize cursor-default mr-2 !text-white"> Admissions open for batches starting from May – </P>
        <Link
          href="/courses">
          Enroll Now!
        </Link>
        <button
          onClick={() => setTopbar(false)}
          className="ml-4"
        >
          <Image alt="" src="/images/close.svg" height="18" width="18" />
        </button>
      </div>
    </header>
  );
}

export default Header;
