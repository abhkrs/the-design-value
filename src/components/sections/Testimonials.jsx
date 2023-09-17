import Image from "next/image";
import P from "../typography/P";
import Slider from "../uielements/Slider";
import Section from "../uielements/Section";
import Img from "../typography/Img";
import H2 from "../typography/H2";

const testimonialData = [
  {
    id: 1,
    authorMsg: "Coming from a commerce background, these classes gave me a fresh perspective on technology and design. They've been instrumental in broadening my career horizons.",
    authorName: "Priya Srinivasan",
    authorJob: "Commerce Graduate, Christ University, Bangalore",
  },
  {
    id: 2,
    authorMsg: "I'm thrilled with the knowledge I've gained in these classes. They've made me a better UI developer with a deep understanding of user-centered design.",
    authorName: "Sneha Deshmukh",
    authorJob: "UI Developer, Pixel Prodigy, Pune",
  },
  {
    id: 3,
    authorMsg: "Attending these classes has transformed my product management approach. The UX insights and design principles I learned are invaluable.",
    authorName: "Rajat Sharma",
    authorJob: "Product Manager, Digital Dynamics India, Delhi",
  },
  {
    id: 4,
    authorMsg: "These classes helped me bridge the gap between design and user experience. My designs are not just visually appealing but also highly functional.",
    authorName: "Vikram Menon",
    authorJob: "UI/UX Design Intern, WebWiz Solutions, Hyderabad",
  },
  {
    id: 5,
    authorMsg: "The practical projects in these classes were eye-opening. They helped me develop a portfolio that showcases my design expertise.",
    authorName: "Swati Mehta",
    authorJob: "Content, ExperienceFirst Pvt. Ltd., Bangalore",
  },
  {
    id: 6,
    authorMsg: "These classes have transformed my approach to UX research. I now conduct insightful studies that drive product improvements.",
    authorName: "Mehak Patel",
    authorJob: "Developer, DigitalCraft Innovations, Mumbai",
  },
  {
    id: 7,
    authorMsg: "Being an MBA student, I understand the importance of user-centric design in business. These classes have provided me with the knowledge to leverage UX for success.",
    authorName: "Vaidehi Srivastava",
    authorJob: "MBA Student, Xavier Institute of Management, Bhubaneswar",
  },
  {
    id: 8,
    authorMsg: "These classes have expanded my perspective as an architecture student. They've taught me how to design spaces that are not just beautiful but also user-friendly.",
    authorName: "Naveen Singh",
    authorJob: "Architecture Student, SPA Delhi",
  },
  {
    id: 9,
    authorMsg: "These classes have complemented my computer science studies perfectly. They've broadened my skill set and made me a more versatile professional.",
    authorName: "Finlay Kirk",
    authorJob: "MCA Student, PES University, Bengaluru",
  },
  {
    id: 10,
    authorMsg: "Even as an economics student, these classes have provided me with a unique skill set that's highly applicable in today's digital age.",
    authorName: "Sapna Das",
    authorJob: "Economics Student, Presidency University, Kolkata",
  },
  {
    id: 11,
    authorMsg: "These classes opened up a world of possibilities beyond my commerce degree. They've made me more versatile in my career options and given me a competitive edge.",
    authorName: "Sanjay Iyer",
    authorJob: "B.Com Graduate, Loyola College, Chennai",
  },
  {
    id: 12,
    authorMsg: "As a computer science student, these classes helped me refine my design skills, making me a more well-rounded engineer with a keen eye for user-centric design.",
    authorName: "Sneha Reddy",
    authorJob: "B.Tech in Computer Science, VIT Vellore",
  },
  // {
  //   id: 13,
  //   authorMsg: "",
  //   authorName: "",
  //   authorJob: "",
  // },
];


function Testimonials() {
  const testiSlides = testimonialData.map((card) => (
    <div className="card text-center md:text-start shadow-md rounded-md mb-2 flex flex-col justify-between p-6 bg-white mx-2 min-h-[320px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[300px] xl:min-h-[242px]" key={card.id}>
      <P className="mb-1 !leading-relaxed text-lg">{card.authorMsg}</P>
      <div>
        <P className="!text-black font-semibold capitalize">{card.authorName}</P>
        <P className="mt-1 capitalize">{card.authorJob}</P>
      </div>
    </div>
  ));
  return (
    <Section className="mt-4 testi">
      <div className="h-32 relative flex flex-col justify-end">
        <div className="absolute top-0 md:!left-0 left-[50%] translate-x-[-50%]">
          <div className="relative h-12 w-16 md:h-24 md:w-28">
            <Image src="/images/quote.png" fill={true} className={""} alt="" />
          </div>
        </div>
        <div className="px-6 text-center md:text-start relative top-14 md:top-0">
          <H2>Real <span className="text-primary">Stories</span> from Our <span className="text-primary">Students</span></H2>
          <P className="mt-2 !text-xl">Get inspired by these stories.</P>
        </div>
      </div>
      <div className="mt-20 md:mt-10 mb-6 relative">
        <Slider slides={testiSlides} noControl noDots={false} />
          <div className="flex justify-center gap-4 mt-2 sm:hidden">
            <P className="!text-4xl !text-primary">&lsaquo;</P> <P className="!text-4xl !text-primary">&rsaquo;</P>
          </div>
      </div>
    </Section>
  );
}

export default Testimonials;
