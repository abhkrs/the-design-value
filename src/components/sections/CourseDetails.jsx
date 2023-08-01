import React from 'react'
import AccordionTab from '../uielements/AccordionTab'
import H3 from '../typography/H3'

export default function CourseDetails() {
  return (
    <div className="bg-white md:px-12 md:py-10 rounded md:shadow py-8">
            <H3 className="!text-2xl mb-4">Course Details</H3>
            <AccordionTab heading="Foundations of UI/UX Design">
              <ul className="!list-disc ml-4">
                <li>
                  Understanding the fundamentals of UI and UX design and their
                  roles in creating successful digital products.
                </li>
                <li>
                  Exploring the relationship between design and user experience,
                  and how they impact user satisfaction and engagement.
                </li>
                <li>
                  Familiarizing yourself with the design process and the various
                  stages involved in creating user-centered designs.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="User Research and Analysis">
              <ul className="ml-4 list-disc">
                <li>
                  Learning how to conduct user research using techniques such as
                  interviews, surveys, and observation.
                </li>
                <li>
                  Understanding how to gather and analyze data to identify user
                  needs, preferences, and pain points.
                </li>
                <li>
                  Creating user personas to represent target users and using
                  them to inform design decisions.
                </li>
                <li>
                  Developing scenarios and user flows to map out the user
                  journey and identify areas for improvement.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Interaction Design">
              <ul className="ml-4 list-disc">
                <li>
                  Learning how to design interactions that are intuitive and
                  user-friendly.
                </li>
                <li>
                  Exploring various navigation patterns, such as menus, tabs,
                  and gestures, and understanding when to use each.
                </li>
                <li>
                  Incorporating micro-interactions, such as button animations
                  and loading indicators, to enhance the user experience.
                </li>
                <li>
                  Adapting designs for different devices and platforms,
                  considering factors like screen size and touch interactions.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Usability Testing and Evaluation">
              <ul className="ml-4 list-disc">
                <li>
                  Learning how to plan and conduct usability tests to evaluate
                  the effectiveness of your designs.
                </li>
                <li>
                  Analyzing and interpreting user feedback and test results to
                  identify areas of improvement.
                </li>
                <li>
                  Iteratively refining and iterating designs based on user
                  feedback and testing insights.
                </li>
                <li>
                  Understanding usability heuristics and best practices to
                  create designs that are intuitive and user-friendly.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="User Interface Design">
              <ul className="ml-4 list-disc">
                <li>
                  Exploring the principles of effective UI design, including
                  visual hierarchy, layout, and typography.
                </li>
                <li>
                  Understanding color theory and how to choose appropriate color
                  schemes for different purposes.
                </li>
                <li>
                  Creating wireframes, which are basic skeletal representations
                  of a user interface, to plan and structure your designs.
                </li>
                <li>
                  Translating wireframes into high-fidelity mockups using design
                  software like Adobe XD, Sketch, or Figma.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Visual Design and Branding">
              <ul className="ml-4 list-disc">
                <li>
                  Understanding the role of visual design in creating appealing
                  and cohesive user interfaces.
                </li>
                <li>
                  Learning how to create a visual identity and style guide for a
                  digital product.
                </li>
                <li>
                  Exploring techniques for choosing and using typography
                  effectively in UI design.
                </li>
                <li>
                  Incorporating graphics, icons, and imagery to enhance the
                  aesthetic appeal and communication of designs.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Tools and Software">
              <ol className="ml-4 list-decimal">
                <li>Introduction to Figma</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Overview of Figma as a powerful design and prototyping tool.
                  </li>
                  <li>
                    Understanding the Figma interface, tools, and features.
                  </li>
                  <li>Setting up your workspace and project organization.</li>
                </ul>
                <li>Designing with Figma</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Design principles and best practices for creating visually
                    appealing interfaces.
                  </li>
                  <li>
                    Using shapes, vectors, and text tools to create design
                    elements.
                  </li>
                  <li>
                    Applying colors, gradients, and typography to enhance your
                    designs.
                  </li>
                  <li>
                    Using Figma&apos;s libraries and components for consistent
                    design elements.
                  </li>
                </ul>
                <li>Creating Interactive Prototypes</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Understanding the importance of prototyping in the design
                    process.
                  </li>
                  <li>
                    Creating interactive hotspots and links to simulate user
                    interactions.
                  </li>
                  <li>
                    Defining transitions and animations to bring your designs to
                    life.
                  </li>
                  <li>
                    Previewing and sharing prototypes with stakeholders for
                    feedback.
                  </li>
                </ul>
                <li>Collaborating and Version Control</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Collaborating with team members in real-time using
                    Figma&apos;s collaboration features.
                  </li>
                  <li>
                    Utilizing comments and annotations to provide feedback and
                    make design iterations.
                  </li>
                  <li>
                    Managing version control to track design changes and revert
                    if necessary.
                  </li>
                </ul>
                <li>Design Systems and Components</li>
                <ul className="ml-4 list-disc">
                  <li>Building and managing design systems within Figma.</li>
                  <li>
                    Creating reusable components for consistent and efficient
                    design workflow.
                  </li>
                  <li>
                    Using constraints and auto-layout to create responsive and
                    scalable designs.
                  </li>
                  <li>
                    Applying design tokens to ensure consistency across
                    projects.
                  </li>
                </ul>
                <li>Advanced Figma Features</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Utilizing plugins and integrations to extend the
                    functionality of Figma.
                  </li>
                  <li>
                    Exploring advanced techniques like vector editing, masking,
                    and advanced prototyping.
                  </li>
                  <li>
                    Optimizing workflow with keyboard shortcuts and productivity
                    hacks.
                  </li>
                  <li>
                    Exploring design handoff and export options for developers.
                  </li>
                </ul>
                <li>Designing for Collaboration and Handoff</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Preparing your designs for development handoff using
                    Figma&apos;s features.
                  </li>
                  <li>Generating design specs and assets for developers.</li>
                  <li>Streamlining the design-to-development workflow.</li>
                </ul>
              </ol>
            </AccordionTab>
          </div>
  )
}
