"use client";

import H2 from "@/components/typography/H2";
import Section from "@/components/uielements/Section";
import Image from "next/image";
import React from "react";

import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "Will we get 100% Paid Internship?",
      content: `<p>Absolutely! We are committed to helping our students kickstart their careers in UI/UX design, and our 100% guaranteed paid internship program is a testament to that commitment. <br> Upon successfully completing the UI/UX with Internship course, you will have the opportunity to embark on a paid internship that not only provides practical experience but also helps you earn while you learn. The stipend for the internship will be determined based on your</p> <p>The duration of the internship program typically ranges from 1 to 3 months, depending on your progress and the specific requirements of the internship position. During this time, you'll have the chance to apply your newly acquired UI/UX design skills in real-world projects, gain invaluable industry insights, and build your professional portfolio.</p><p>Our goal is to equip you with the knowledge and experience you need to succeed in the field of UI/UX design, and our paid internship program is designed to be a stepping stone towards achieving that goal. Rest assured, we are dedicated to your success and providing you with the best opportunities to jumpstart your career in this exciting field.</p>`,
    },
    // {
    //   title:
    //     "Will we get 100% Job Placement?",
    //   content:
    //     `<p>Absolutely! As part of our comprehensive 12-month UI/UX design course, you will be automatically enrolled in a mandatory paid internship program. The internship duration can vary, typically lasting from 1 to 3 months. This internship provides essential hands-on experience and is an integral part of our curriculum.</p>
    //     <p>Additionally, we offer job placement training sessions to enhance your employability. Our team will work with you to create a standout design portfolio, refine your interview skills, and optimize your CV. </p>
    //     <p>It's worth noting that our current placement rate for students who have completed our program is an impressive 91%. While we cannot predict individual outcomes, we are fully committed to providing you with the support and tools you need to pursue a rewarding career in UI/UX design.</p>`
    // },
    {
      title: "What is the average Job CTC package in UI/UX?",
      content: `<p>The average CTC (Cost to Company) package for UI/UX (User Interface/User Experience) designers in India can vary significantly depending on factors such as location, experience, education, and the specific company or industry. As of my last knowledge update in September 2021, here's a general range you can expect: </p>
      <ul> 
      <li>1. Junior UI/UX Designer (0-2 years of experience): The average CTC for entry-level designers typically ranges from ₹3,00,000 to ₹6,00,000 per annum.</li>
      <li>2. Mid-Level UI/UX Designer (2-5 years of experience): Mid-level designers with a few years of experience can earn an average CTC ranging from ₹6,00,000 to ₹12,00,000 per annum.</li>
      <li>3. Senior UI/UX Designer (5+ years of experience): Experienced and senior designers with over five years of experience may earn CTC packages starting from ₹12,00,000 per annum and can go up to ₹20,00,000 or more, especially in larger tech hubs like Bangalore, Mumbai, or Delhi.</li>
      <li>4. Lead or Principal UI/UX Designer: Those in leadership or principal roles with extensive experience and expertise can earn CTC packages that exceed ₹20,00,000 per annum or even more.</li>
      </ul>
      <p>It's important to note that these figures are approximate averages and can vary based on factors such as the city you work in (metros tend to offer higher salaries), the industry (tech companies typically pay more), and your specific skills and portfolio.</p>
      <p>Please keep in mind that the job market and salary trends can change over time, so I recommend checking with recent job listings, industry reports, and salary surveys for the most up-to-date information on UI/UX designer salaries in India.</p>`,
    },
    {
      title: "Will Artificial Intelligence (AI) replace UI/UX Jobs?",
      content: `<p>Artificial Intelligence (AI) is unlikely to completely replace UI/UX (User Interface/User Experience) jobs. While AI can automate certain aspects of design and user research, there are several reasons why UI/UX jobs are likely to remain relevant:</p>
      <ul> 
      <li>1. Human-Centric Design: UI/UX design involves understanding and creating experiences for humans. While AI can assist in data analysis and pattern recognition, it lacks human creativity, empathy, and the ability to understand cultural and emotional nuances. Designers play a crucial role in crafting designs that resonate with users on a human level.</li>
      <li>2. Complex Problem-Solving: UI/UX designers are often tasked with solving complex design problems that require critical thinking and creativity. AI can help with routine or data-driven tasks, but it may struggle with novel or unique design challenges that require creative solutions.</li>
      <li>3. User Research and Empathy: UI/UX designers conduct user research to understand user needs, pain points, and preferences. This involves empathy and qualitative insights that AI cannot replicate. Design decisions often require a deep understanding of human behavior, which designers provide.</li>
      <li>4. Aesthetics and Branding: UI/UX design is not just about functionality; it's also about aesthetics and branding. Designers work to create visually appealing and cohesive user experiences that align with a company's brand. This requires subjective judgment and creativity, which AI lacks.</li>
      <li>5. Iterative Design: UI/UX design is an iterative process that involves constant refinement based on user feedback. Designers continually test and improve their designs. While AI can assist in analyzing data from user interactions, it's up to designers to interpret the data and make design decisions.</li>
      <li>6. Ethical and Inclusive Design: Designers play a vital role in ensuring that products and interfaces are designed ethically and inclusively, considering accessibility and diverse user needs. This requires a deep understanding of ethical considerations, which AI cannot provide on its own.</li>
      <li>7. Collaboration and Communication: UI/UX designers collaborate closely with cross-functional teams, including developers, product managers, and marketers. Effective communication and collaboration skills are essential in this role, which AI cannot replicate.</li>
      </ul>
      <p>While AI and automation can assist UI/UX designers by automating repetitive tasks, generating data insights, and streamlining certain processes, they are more likely to be tools that complement designers' skills rather than replace them. As a result, UI/UX professionals may find themselves focusing on higher-level creative and strategic aspects of design while leveraging AI to enhance their productivity and decision-making.</p>`,
    },
    {
      title: "What are the different Job Roles in UI/UX Design?",
      content: `<p>UI/UX (User Interface/User Experience) design is a multifaceted field with various job roles and specializations. Here are some of the different job roles you might encounter in the UI/UX design industry:</p>
      <ul> 
      <li>1. UI Designer: UI designers focus primarily on the visual aspects of an interface. They design the look and feel of a website or application, including layout, color schemes, typography, and iconography. They ensure that the interface is aesthetically pleasing and aligns with the brand's identity.</li>
      <li>2. UX Designer: UX designers concentrate on the overall user experience. They work on understanding user behavior, conducting research, creating user personas, and designing user journeys. Their goal is to ensure that the product is easy to use, intuitive, and meets user needs and goals.</li>
      <li>3. Interaction Designer: Interaction designers are responsible for defining how users interact with a product. They design the interactive elements, such as buttons, navigation menus, and user flows. They focus on making interactions efficient and user-friendly.</li>
      <li>4. Information Architect: Information architects organize and structure the content within a digital product, such as a website or app. They create sitemaps, wireframes, and content hierarchies to ensure that information is organized logically and can be easily accessed by users.</li>
      <li>5. Usability Tester: Usability testers conduct user testing sessions to evaluate the usability of a product. They observe users interacting with a product and gather feedback to identify areas of improvement. Usability testers play a crucial role in refining the user experience.</li>
      <li>6. UX Researcher: UX researchers are responsible for conducting user research to gain insights into user behavior and preferences. They use various research methods, such as surveys, interviews, and usability testing, to inform design decisions and improve the user experience.</li>
      <li>7. Content Strategist: Content strategists focus on creating and managing the content within a digital product. They ensure that the content is relevant, engaging, and aligns with the overall user experience. They may also work on tone of voice, messaging, and content delivery strategies.</li>
      <li>8. Visual Designer: Visual designers specialize in creating visually appealing graphics, illustrations, and images that enhance the overall design. They work on aspects like icon design, illustrations, and image selection to make the interface visually appealing.</li>
      <li>9. Front-End Developer (with UI/UX skills): Some front-end developers also have UI/UX skills and are involved in translating design mockups into functional web or app interfaces. They ensure that the design is implemented accurately and that the user experience matches the intended design.</li>
      <li>10. UI/UX Lead or Manager: Experienced designers often take on leadership roles, managing design teams and overseeing the entire design process. They are responsible for setting design strategies, mentoring team members, and ensuring the quality of the final product.</li>
      <li>11. UI/UX Consultant: UI/UX consultants are freelance professionals or individuals who offer specialized expertise to organizations on a project basis. They may provide design audits, recommendations, and strategic guidance to improve existing interfaces.</li>
      </ul>
      <p>These are just some of the many roles in the UI/UX design field. Depending on the size and structure of a company or project, these roles may overlap or be combined, and individuals may wear multiple hats to fulfill various design responsibilities.</p>`,
    },
    {
      title: "What is UI and UX Design?",
      content: `<p>UI (User Interface) design and UX (User Experience) design are two distinct but closely related fields within the realm of product and application design. They both focus on creating digital experiences for users, but they have different areas of emphasis and responsibilities.</p>
      <p>UI Design (User Interface Design):</p>
      <p>UI design primarily deals with the visual elements and aesthetics of a digital product. It's concerned with creating a visually appealing and functional interface that users can interact with. Key aspects of UI design include:</p>
      <ul> 
      <li>1. Visual Elements: UI designers work on the visual components of an interface, such as layout, color schemes, typography, icons, buttons, and other graphical elements. They ensure that the interface looks cohesive, attractive, and aligned with the brand's identity.</li>
      <li>2. Layout and Composition: UI designers arrange the elements on the screen in a way that is intuitive and user-friendly. They consider factors like hierarchy, spacing, and placement to guide users effectively.</li>
      <li>3. Responsive Design: UI designers often need to create designs that adapt to different screen sizes and devices, ensuring a consistent and user-friendly experience on various platforms.</li>
      <li>4. Prototyping and Mockups: UI designers create prototypes or mockups that serve as visual representations of the final product. These mockups help communicate design concepts to stakeholders and developers.</li>
      <li>5. Visual Consistency: Maintaining consistency in visual elements across different screens and interactions is crucial for a seamless user experience.</li>
      </ul>
      <p>UX Design (User Experience Design):</p>
      <p>UX design is broader in scope and focuses on the overall experience of users when interacting with a digital product. It's concerned with making the interaction as smooth, efficient, and enjoyable as possible. Key aspects of UX design include:</p>
      <ul>
      <li>1. User Research: UX designers conduct user research to understand the needs, behaviors, and pain points of the target audience. This research informs design decisions and helps create user-centered solutions.</li>
      <li>2. User Personas: UX designers create user personas, which are fictional representations of typical users. Personas help designers empathize with users and design with their specific needs in mind.</li>
      <li>3. Information Architecture: UX designers organize the content and structure of the product to ensure that information is logically structured and easy to find.</li>
      <li>4. User Flows: Designing effective user flows and navigation is crucial to guide users through the product seamlessly. UX designers map out the paths users take to accomplish their goals.</li>
      <li>5. Usability Testing: UX designers often conduct usability testing to gather feedback from real users. This feedback is used to identify issues and make improvements to the user experience.</li>
      <li>6. Wireframing and Prototyping: Before creating detailed visual designs, UX designers often create wireframes and prototypes to define the product's functionality and user interactions.</li>
      <li>7. Accessibility and Inclusivity: Ensuring that the product is accessible to users with disabilities and inclusive of diverse user groups is a key aspect of UX design.</li>
      </ul>
      <p>In summary, UI design focuses on the visual and interactive aspects of a digital product, while UX design is concerned with the overall user experience, including research, usability, and the journey a user takes within the product. These two disciplines work closely together to create digital products that are both visually appealing and user-friendly.</p>
      `,
    },
    {
      title: "What is the difference between UI and UX Design?",
      content: `<p>UI (User Interface) design and UX (User Experience) design are two closely related but distinct disciplines in the field of product and application design. They work together to create a seamless and user-centered digital experience, but they have different focuses and responsibilities.</p>
      <p>UI Design (User Interface Design):</p>
      <ul> 
      <li>1. Focus: UI design primarily focuses on the visual elements and aesthetics of a digital product. It is concerned with how the product looks and how users interact with it visually.</li>
      <li>2. Responsibilities: UI designers are responsible for designing the graphical elements that users see and interact with, including layout, color schemes, typography, icons, buttons, and other visual elements.</li>
      <li>3. Goals: The primary goal of UI design is to create a visually appealing and aesthetically pleasing user interface that aligns with the brand's identity. It aims to make the interface visually engaging and easy to understand.</li>
      <li>4. Components: UI design involves designing individual components and elements of the interface, such as buttons, menus, and widgets, and ensuring their visual consistency.</li>
      <li>5. Tools: UI designers often use design software like Adobe XD, Sketch, Figma, or Adobe Photoshop to create visual mockups and prototypes.</li>
      </ul>
      <p>UX Design (User Experience Design):</p>
      <ul>
      <li>1. Focus: UX design focuses on the overall user experience and interaction with a digital product. It is concerned with how users feel when they use the product and whether it meets their needs and goals.</li>
      <li>2. Responsibilities: UX designers are responsible for understanding user behavior, conducting research, creating user personas, defining user journeys, and designing the overall flow and functionality of the product.</li>
      <li>3. Goals: The primary goal of UX design is to ensure that the product is easy to use, efficient, intuitive, and enjoyable for users. It aims to solve user problems and create a positive overall experience.</li>
      <li>4. Components: UX design involves designing the entire user journey, including user flows, information architecture, wireframes, and prototypes. It focuses on how users navigate through the product and achieve their goals.</li>
      <li>5. Tools: UX designers use various tools and methodologies, including user research techniques, wireframing software, prototyping tools, and usability testing methods.</li>
      </ul>
      <p>In summary, UI design deals with the visual and interactive aspects of a digital product, making it visually appealing and engaging, while UX design is concerned with the overall user experience, ensuring that the product is user-friendly, efficient, and meets user needs and expectations. These two disciplines work in tandem to create a successful and user-centered digital product, with UI design complementing the visual aesthetics and UX design focusing on the overall usability and functionality.</p>`,
    },
    {
      title: "Can UI/UX Designers earn without doing a Full-Time Job?",
      content: `<p>Yes, UI/UX designers can earn income without working in a full-time job by pursuing various alternative employment arrangements and opportunities. Here are some ways in which UI/UX designers can earn income without a traditional full-time job:</p>
      <ul> 
      <li>1. Freelancing: Many UI/UX designers work as freelancers. They take on project-based work for clients, which allows them to have flexibility in their schedules and choose the projects they want to work on. Freelancing can be done on a part-time or full-time basis, depending on the designer's preferences.</li>
      <li>2. Contract Work: UI/UX designers can enter into short-term or long-term contracts with companies or agencies. Contract work offers more stability than freelancing and can still provide some degree of flexibility.</li>
      <li>3. Remote Work: Some companies offer remote or telecommuting opportunities, allowing UI/UX designers to work from anywhere. This flexibility can make it easier to balance work with other commitments.</li>
      <li>4. Consulting: Experienced UI/UX designers can offer consulting services to businesses looking to improve their user experience. Consultants provide expert advice and guidance on UX/UI design strategies and best practices.</li>
      <li>5. Part-Time Positions: UI/UX designers can find part-time positions that offer flexibility in terms of working hours. These roles may be available in both traditional companies and startups.</li>
      <li>6. Teaching and Training: Some UI/UX designers choose to teach design courses or conduct training sessions for individuals or organizations. This can be done online or in-person and can provide an additional source of income.</li>
      <li>7. Passive Income: Designers can create and sell design assets, templates, or design-related products online. This can generate passive income over time as these assets are purchased by other designers or businesses.</li>
      <li>8. Side Projects: UI/UX designers often have side projects, such as designing mobile apps or websites, that can generate income through advertisements, subscriptions, or in-app purchases.</li>
      <li>9. Online Marketplaces: Designers can sell their design services or products on online marketplaces, such as Upwork, Fiverr, or Dribbble. These platforms connect designers with clients seeking design work.</li>
      <li>10. Design Competitions and Contests: Participating in design competitions and contests can be a way to earn cash prizes and recognition for your design skills.</li>
      </ul>
      <p>It's important to note that while these alternative arrangements offer flexibility, they also come with challenges, such as inconsistent income, the need to manage self-employment taxes, and the responsibility of finding clients or opportunities. Additionally, the income potential can vary widely based on the designer's experience, skills, and the demand for their services. Designers should carefully consider their financial goals and work preferences when exploring these options.</p>`,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };


  return (
    <main>
      <Section>
        <div className="my-10">
          <div className="bg-[#FFFFFF75] rounded-lg shadow md:px-6 md:py-8 grid gap-1 -mx-3 md:mx-auto">
            {accordionData.map((item, index) => (
              <div key={index} className="bg-white p-6 md:rounded-lg shadow">
                <div>
                  <span className="!text-4xl text-secondary font-bold mr-4 md:hidden">
                    {index < 10 ? "0" : ""}{index + 1}
                  </span>
                </div>
                <div
                  className={`flex relative ${index === activeIndex ? "active" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="md:mr-11 mr-9 md:flex">
                    <span className="!text-4xl dm-sans text-secondary font-bold mr-4 hidden md:block">
                      {index < 10 ? "0" : ""}{index + 1}
                    </span>
                    <span className="text-xl md:text-2xl font-semibold mt-2 md:mt-1 cursor-pointer">{item.title}</span>
                  </div>
                  <button className="absolute right-0 top-0">
                    <Image
                      src={index === activeIndex ? "/images/xmark.png" : "/images/plus.png"}
                      alt="plus minus"
                      height="35"
                      width="35"
                      className="h-8 w-8 md:h-10 md:w-10"
                    />
                  </button>
                </div>
                {index === activeIndex && (
                  <div className="faq-contents md:mr-12 lg:mr-18">
                    {index === activeIndex && (
                      <div className="-ml-3 md:ml-10 p-3 pb-0 md:mt-0 text-lg text-[#3C3C43]">
                        <div dangerouslySetInnerHTML={{ __html: item.content }} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
};


export default Accordion;
