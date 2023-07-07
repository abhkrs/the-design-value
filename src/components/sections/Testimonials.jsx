import Image from "next/image";
import P from "../typography/P";
import Slider from "../uielements/Slider";
import Section from "../uielements/Section";
import Img from "../typography/Img";
import H2 from "../typography/H2";

const testimonialData = [
  {
    id: 1,
    authorImg: "/images/author.png",
    authorName: "Finlay Kirk",
    authorJob: "Web Developper",
    authorMsg:
      "“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.",
  },
  {
    id: 2,
    authorImg: "/images/author.png",
    authorName: "Finlay Kirk",
    authorJob: "Web Developper",
    authorMsg:
      "“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.",
  },
  {
    id: 3,
    authorImg: "/images/author.png",
    authorName: "Finlay Kirk",
    authorJob: "Web Developper",
    authorMsg:
      "“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.",
  },
  {
    id: 4,
    authorImg: "/images/author.png",
    authorName: "Finlay Kirk",
    authorJob: "Web Developper",
    authorMsg:
      "“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.",
  },
  {
    id: 5,
    authorImg: "/images/author.png",
    authorName: "Finlay Kirk",
    authorJob: "Web Developper",
    authorMsg:
      "“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.",
  },
];

function Testimonials() {
  const testiSlides = testimonialData.map((card) => (
    <div className="card bg-white mx-2" key={card.id}>
      <div className="p-6">
        <P className="mb-6 ml-2 !leading-relaxed text-lg">{card.authorMsg}</P>

        <div className="flex gap-6">
          <div className="relative w-16 h-16">
            <Image
              src={card.authorImg}
              alt={card.authorName}
              fill={true}
              className="object-contain"
            />
          </div>
          <div>
            <P className="!text-black mt-2 font-semibold capitalize text-start">
              {card.authorName}
            </P>
            <P className="mt-2 capitalize">{card.authorJob}</P>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <Section className="mt-4">
      <div className="h-32 relative flex flex-col justify-end">
        <div className="absolute top-0 left-0">
          <div className="relative h-24 w-28">
            <Image src="/images/quote.png" fill={true} className={""} />
          </div>
        </div>
        <div className="px-6">
        <H2>Real <span className="text-primary">Stories</span> from Our <span className="text-primary">Students</span></H2>
        <P className="mt-2">Get inspired by these stories.</P>
        </div>
      </div>
      <div className="mt-10 mb-6">
        <Slider slides={testiSlides} noControl noDots={false} />
      </div>
    </Section>
  );
}

export default Testimonials;
