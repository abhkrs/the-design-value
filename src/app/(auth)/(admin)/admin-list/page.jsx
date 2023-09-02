"use client";

import React, { useContext, useEffect, useState } from "react";
import AuthWrap from "../AuthWrap";
import Image from "next/image";
import Section from "@/components/uielements/Section";
import Modal from "@/components/ui/Modal";
import { LoginContext } from "@/context/LoginContext";
import api from "../../../../../utils/api";

export default function Page() {
  {
    const { changePasswordModal, openChangePasswordModal } =
      useContext(LoginContext);

    const [adminList, setAdminList] = useState(null);

    useEffect(() => {
      const getAllAdminList = async () => {
        const response = await api.get("/Register/admList");
        console.log(response);
        if (response.status === "Success") {
          setAdminList(response.allAdmin);
        }
      };
      getAllAdminList();
    }, []);
    return (
      <AuthWrap>
        <main>
          <Modal {...changePasswordModal} />
          <Section className="py-20 md:pt-10 md:pb-8">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {adminList &&
                adminList.map((admin) => (
                  <div
                    className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                    key={admin.UID}
                  >
                    <div className="flex flex-col items-center pb-10">
                      <div className="w-24 h-24 relative">
                        <Image
                          className="mb-3 rounded-full shadow-lg"
                          src="/images/customer-service.png"
                          fill
                          alt="Bonnie image"
                        />
                      </div>
                      <h5 className="mb-1 text-xl font-medium text-gray-900">
                        {admin.UID}
                      </h5>
                      <span className="text-sm text-gray-500 ">Admin</span>
                      <div className="flex mt-4 space-x-3 md:mt-6">
                        <button
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary "
                          onClick={() => {
                            openChangePasswordModal(admin.UID);
                          }}
                        >
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Section>
        </main>
      </AuthWrap>
    );
  }
}
