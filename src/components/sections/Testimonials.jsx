import Image from "next/image";
import P from "../typography/P";
import Slider from "../uielements/Slider";


const testimonialData = [
  {
    id: 1,
    authorImg: '/images/author.png',
    authorName: 'Finlay Kirk',
    authorJob: 'Web Developper',
    authorMsg: '“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.',
  },
  {
    id: 2,
    authorImg: '/images/author.png',
    authorName: 'Finlay Kirk',
    authorJob: 'Web Developper',
    authorMsg: '“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.',
  },
  {
    id: 3,
    authorImg: '/images/author.png',
    authorName: 'Finlay Kirk',
    authorJob: 'Web Developper',
    authorMsg: '“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.',
  },
  {
    id: 4,
    authorImg: '/images/author.png',
    authorName: 'Finlay Kirk',
    authorJob: 'Web Developper',
    authorMsg: '“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.',
  },
  {
    id: 5,
    authorImg: '/images/author.png',
    authorName: 'Finlay Kirk',
    authorJob: 'Web Developper',
    authorMsg: '“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.',
  },

];

function Testimonials() {
  const testiSlides = testimonialData.map((card) => (
    <div className="card bg-white mx-2" key={card.id}>
      <div className="p-6">
        <P className="mb-6 ml-2 !leading-relaxed text-lg">
          {card.authorMsg}
        </P>

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
          <P className="text-black mt-2 font-semibold capitalize text-start">
          {card.authorName}
        </P>
        <P className="mt-2 capitalize">
          {card.authorJob}
        </P>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="my-6">
      <Slider slides={testiSlides} noControl noDots={false}/>
    </div>
  );
}

export default Testimonials;
