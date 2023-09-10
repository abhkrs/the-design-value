"use client";

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
    {
      title:
        "Will we get 100% Job Placement?",
      content:
        `<p>Absolutely! As part of our comprehensive 12-month UI/UX design course, you will be automatically enrolled in a mandatory paid internship program. The internship duration can vary, typically lasting from 1 to 3 months. This internship provides essential hands-on experience and is an integral part of our curriculum.</p>
        <p>Additionally, we offer job placement training sessions to enhance your employability. Our team will work with you to create a standout design portfolio, refine your interview skills, and optimize your CV. </p>
        <p>It's worth noting that our current placement rate for students who have completed our program is an impressive 91%. While we cannot predict individual outcomes, we are fully committed to providing you with the support and tools you need to pursue a rewarding career in UI/UX design.</p>`
    },
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
      <p></p>
      <p>UI Design (User Interface Design):</p>
      <p></p>
      <p>UI design primarily deals with the visual elements and aesthetics of a digital product. It's concerned with creating a visually appealing and functional interface that users can interact with. Key aspects of UI design include:</p>
      <ul> 
      <li>1. Visual Elements: UI designers work on the visual components of an interface, such as layout, color schemes, typography, icons, buttons, and other graphical elements. They ensure that the interface looks cohesive, attractive, and aligned with the brand's identity.</li>
      <li>2. Layout and Composition: UI designers arrange the elements on the screen in a way that is intuitive and user-friendly. They consider factors like hierarchy, spacing, and placement to guide users effectively.</li>
      <li>3. Responsive Design: UI designers often need to create designs that adapt to different screen sizes and devices, ensuring a consistent and user-friendly experience on various platforms.</li>
      <li>4. Prototyping and Mockups: UI designers create prototypes or mockups that serve as visual representations of the final product. These mockups help communicate design concepts to stakeholders and developers.</li>
      <li>5. Visual Consistency: Maintaining consistency in visual elements across different screens and interactions is crucial for a seamless user experience.</li>
      </ul>
      <p>UX Design (User Experience Design):</p>
      <p></p>
      <p>UX design is broader in scope and focuses on the overall experience of users when interacting with a digital product. It's concerned with making the interaction as smooth, efficient, and enjoyable as possible. Key aspects of UX design include:</p>
      <ul>
      <li>1. User Research: UX designers conduct user research to understand the needs, behaviors, and pain points of the target audience. This research informs design decisions and helps create user-centered solutions.</li>
      </ul>
      `,
    },
    {
      title: "What is the difference between UI and UX Design?",
      content: `<p></p>
      <ul> 
      <li></li>
      <li></li>
      </ul>
      <p></p>`,
    },
    {
      title: "Can UI/UX Designers earn without doing a Full-Time Job?",
      content: `<p></p>
      <ul> 
      <li></li>
      <li></li>
      </ul>
      <p></p>`,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const parseHTMLContent = (htmlContent) => {
    const parser = new DOMParser();
    const parsedContent = parser.parseFromString(htmlContent, "text/html");
    const contentNodes = Array.from(parsedContent.body.childNodes);

    return contentNodes.map((node, index) => (
      <div key={index} className="mt-2">
        {node.nodeType === Node.ELEMENT_NODE && node.tagName === "P" ? (
          <p dangerouslySetInnerHTML={{ __html: node.innerHTML }} />
        ) : node.nodeType === Node.ELEMENT_NODE && node.tagName === "UL" ? (
          <ol>
            {Array.from(node.childNodes).map((liNode, liIndex) => (
              <li key={liIndex} className="ml-4 my-2" dangerouslySetInnerHTML={{ __html: liNode.innerHTML }} />
            ))}
          </ol>
        ) : null}
      </div>
    ));
  };

  return (
    <main>
      <Section>
        <div className="my-10">
          <div className="bg-[#FFFFFF75] rounded-lg shadow md:px-6 md:py-8 grid gap-1 -mx-3 md:mx-auto">
            {accordionData.map((item, index) => (
              <div key={index} className="bg-white p-6 md:rounded-lg shadow">
                <div>
                  <span className="!text-4xl text-gray-400 font-bold mr-4 md:hidden">
                    {index < 10 ? "0" : ""}{index + 1}
                  </span>
                </div>
                <div
                  className={`flex ${index === activeIndex ? "active" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="!text-4xl dm-sans text-secondary font-bold mr-4 hidden md:block">
                    {index < 10 ? "0" : ""}{index + 1}
                  </span>
                  <span className="text-xl md:text-2xl font-semibold mt-2 md:mt-0">{item.title}</span>
                  <button className="ml-auto">
                    <Image
                      src={index === activeIndex ? "/images/xmark.png" : "/images/plus.png"}
                      alt="plus minus"
                      height="35"
                      width="35"
                      className="!h-12 md:!h-auto !w-14 ml-2 md:!w-auto"
                    />
                  </button>
                </div>
                {index === activeIndex && (
                  <div className="-ml-3 md:ml-10 p-3 pb-0 md:mt-0 text-lg">
                    {parseHTMLContent(item.content)}
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
