"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import P from "../typography/P";
import Image from "next/image";
import { LoginContext } from "@/context/LoginContext";
import { decryptData } from "../../../utils/encryption";

const menu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  // {
  //   name: "Articles",
  //   url: "/",
  // },
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
        return null;
      }
    }
  };
  const [active, setActive] = useState(activeindex);
  const [topbar, setTopbar] = useState(false);
  const [userRole, setUserRole] = useState(false);
  const [adminItemAdded, setAdminItemAdded] = useState(false);
  const { isUserLoggedIn, handleLogout, setIsUserLoggedIn } =
    useContext(LoginContext);

  useEffect(() => {
    let userRole = localStorage.getItem("userRole");
    if (userRole) {
      setIsUserLoggedIn(true);
    }
  }, [setIsUserLoggedIn]);

  useEffect(() => {
    let userRole = localStorage.getItem("userRole");
    if (userRole) {
      const decryptedUserRole = JSON.parse(decryptData(userRole));
      setUserRole(decryptedUserRole);
      if (decryptedUserRole.isSuperAdmin && !adminItemAdded) {
        const newItem = {
          name: "Admin",
          url: "/admin-list",
        };

        menu.push(newItem);
        setAdminItemAdded(true);
      }
    }
  }, [isUserLoggedIn, adminItemAdded]);


  const allowedPaths = [
    "/admin",
    "/admin/dashboard",
    "/login",
    "/courses/workshop-with-internship",
    "/courses/ui-ux-workshop-with-jop-placement",
    "/courses/ui-ux-workshop",
  ];
  const nonPromoted = allowedPaths.includes(pathName);

  return (
    <header className="sticky !top-0 left-0 right-0 bg-light lg:bg-white z-50 w-full">
      <div
        className={`${
          topbar && !nonPromoted ? "lg:hidden" : "hidden"
        } bg-primary !text-white p-6`}
      >
        <button
          onClick={() => setTopbar(false)}
          className="absolute top-5 right-5"
        >
          <Image alt="" src="/images/close.svg" height="18" width="18" />
        </button>
        <P className="capitalize cursor-default mr-10 !text-white">
          {" "}
          Admissions open for batches starting from May!
        </P>
        <P className="mt-3 mb-5 !text-[#E0E0E0] capitalize">
          All courses at a discount of{" "}
          <span className="font-bold !text-white uppercase">Flat 50%</span>
        </P>
        <Link href="/courses" className="underline font-bold">
          Check Now
        </Link>
      </div>
      <nav className="md:py-4">
        <div className="2xl:container px-6 md:px-12 lg:px-28 mx-auto container-fluid flex items-center justify-center md:justify-between">
          <Link
            href="/"
            className="text-3xl font-bold mt-3 md:mt-0 dm-sans"
            onClick={() => setActive(null)}
          >
            The<span className="text-primary">Design</span>Value
          </Link>
          <div className="lg:flex hidden">
            {menu.map((data, index) => (
              <Link
                key={index}
                href={data.url}
                className={` ${
                  active === index && "font-semibold"
                } '!text-black capitalize hover:text-primary text-lg px-4 py-2 bg-transparent rounded-md relative z-10`}
                onClick={() => setActive(index)}
              >
                {data.name}
              </Link>
            ))}
          </div>
          <div className="gap-4 justify-end hidden lg:flex">
            {isUserLoggedIn ? (
              <>
                {userRole.role === "TDV-admin" ? (
                  <Link
                    href="/dashboard"
                    className=" hover:bg-black text-center !text-lg bg-secondary !text-white rounded-[30px] w-40 px-4 py-[6px]"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href="/profile"
                    className=" hover:bg-black text-center !text-lg bg-secondary !text-white rounded-[30px] w-40 px-4 py-[6px]"
                  >
                    Profile
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className=" hover:bg-black text-center !text-lg bg-secondary !text-white rounded-[30px] w-40 px-4 py-[6px]"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className=" hover:bg-black text-center !text-lg bg-secondary !text-white rounded-[30px] w-40 px-4 py-[6px]"
              >
                Student Log In
              </Link>
            )}
          </div>
        </div>
        <div className="bg-black block lg:hidden container-fluid !text-white mt-3 px-3 py-3">
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
                className={`${
                  showToggledNav ? "text-lg -mt-1 -ml-4" : "hidden"
                } `}
              >
                X
              </div>
            </button>
            <div className="flex gap-2 justify-end">
              {isUserLoggedIn ? (
                <>
                  {userRole.role === "TDV-admin" ? (
                    <Link
                      href="/dashboard"
                      className=" hover:bg-white text-center !text-lg  hover:!text-black !bg-secondary !text-white rounded-[30px] px-4 py-[6px]"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      href="/profile"
                      className=" hover:bg-white text-center !text-lg  hover:!text-black !bg-secondary !text-white rounded-[30px] px-4 py-[6px]"
                    >
                      Profile
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className=" hover:bg-white text-center !text-lg  hover:!text-black bg-secondary !text-white rounded-[30px] px-4 py-[6px]"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className=" hover:bg-white text-center !text-lg  hover:!text-black bg-secondary !text-white rounded-[30px] w-40 px-4 py-[6px]"
                >
                  Student Log In
                </Link>
              )}
            </div>
          </div>
          <div className={`${showToggledNav ? "flex" : "hidden"} flex-col`}>
            {menu.map((data, index) => (
              <Link
                key={index}
                href={data.url}
                className={` ${
                  active === index && "!text-secondary"
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
        className={`${
          topbar && !nonPromoted ? "hidden lg:flex" : "hidden"
        } bg-black !text-white p-3 justify-center`}
      >
        <P className="capitalize cursor-default mr-2 !text-white">
          {" "}
          Admissions open for batches starting from May –{" "}
        </P>
        <Link href="/courses">Enroll Now!</Link>
        <button onClick={() => setTopbar(false)} className="ml-4">
          <Image alt="" src="/images/close.svg" height="18" width="18" />
        </button>
      </div>
    </header>
  );
}

export default Header;
