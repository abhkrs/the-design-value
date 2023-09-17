import React from "react";
import H2 from "../typography/H2";
import P from "../typography/P";
import SectionDark from "../uielements/SectionDark";
import Counter from "../uielements/Counter";

export default function Counts() {
    return (
        <SectionDark className="py-16 !text-white text-center">
            <div className="py-6">
                <H2 className="font-bold capitalize">Some count that matters</H2>
                <P className="md:my-5 mt-3 mb-5 !text-white !text-xl">
                    Our achievement in the journey depicted in numbers
                </P>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 mt-12 mb-8 capitalize gap-6 !text-white">
                <div className="sm:border-r lg:pr-6 pr-auto">
                    <Counter countEnd='341' />
                    <P className="!text-white !text-xl mt-4">Students Enrolled so far</P>
                    <hr className="w-2/3 sm:hidden mx-auto mt-8" />
                </div>
                <div className="lg:border-r lg:pr-6 pr-auto">
                    <Counter countEnd='6' />
                    <P className="!text-white !text-xl mt-4">Mentors with IT experience</P>
                    <hr className="w-2/3 sm:hidden mx-auto mt-8" />
                </div>
                <div className="sm:border-r lg:pr-6 pr-auto">
                    <Counter countEnd='63' />
                    <P className="!text-white !text-xl mt-4">Jobs Provided</P>
                    <hr className="w-2/3 sm:hidden mx-auto mt-8" />
                </div>
                <div className=" lg:pr-6 pr-auto">
                    <Counter countEnd='147' />
                    <P className="!text-white !text-xl mt-4">Internship Provided</P>
                </div>
            </div>
        </SectionDark>
    );
}
