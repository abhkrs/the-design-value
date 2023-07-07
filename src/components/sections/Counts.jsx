import React from "react";
import H2 from "../typography/H2";
import H3 from "../typography/H3";
import P from "../typography/P";
import SectionDark from "../uielements/SectionDark";

export default function Counts() {
    return (
        <SectionDark className="py-16 !text-white text-center">
            <H2 className="font-bold capitalize">Some count that matters</H2>
            <P className="md:my-5 mt-3 mb-5 !text-white">
                Our achievement in the journey depicted in numbers
            </P>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 mt-12 capitalize gap-6 !text-white">
                <div className="sm:border-r lg:pr-6 pr-auto">
                    <H3 className="!text-6xl mb-4">5</H3>
                    <P className="!text-white">Students Enrolled so far</P>
                    <hr className="w-2/3 sm:hidden mx-auto mt-8" />
                </div>
                <div className="lg:border-r lg:pr-6 pr-auto">
                    <H3 className="!text-6xl mb-4">5</H3>
                    <P className="!text-white">Students Enrolled so far</P>
                    <hr className="w-2/3 sm:hidden mx-auto mt-8" />
                </div>
                <div className="sm:border-r lg:pr-6 pr-auto">
                    <H3 className="!text-6xl mb-4">5</H3>
                    <P className="!text-white">Students Enrolled so far</P>
                    <hr className="w-2/3 sm:hidden mx-auto mt-8" />
                </div>
                <div className=" lg:pr-6 pr-auto">
                    <H3 className="!text-6xl mb-4">5</H3>
                    <P className="!text-white">Students Enrolled so far</P>
                </div>
            </div>
        </SectionDark>
    );
}
