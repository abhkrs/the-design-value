import H2 from "@/components/typography/H2";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <Section>
        <div className="relative mx-auto mt-20 w-24 h-24">
        <Image
              src="/images/wow.png"
              fill={true}
              alt="Payment done"
              className="object-contain w-full h-full"
            />
        </div>
        <H2 className="text-center !text-black mb-5 md:mt-2">Congratulations!</H2>
        <P className="text-center !text-secondary my-2 !text-xl">Your payment has been successful.</P>
        <P className="text-center !text-lg">Email has been sent to you with your student Log In details.</P>
        <P className="text-center mt-12"><Link className="bg-black hover:bg-secondary !text-white px-6 sm:px-20 py-2 text-xl rounded-full" href="/">Go back to Homepage</Link></P>
    </Section>
  );
}
