import H1 from '@/components/typography/H1'
import H3 from '@/components/typography/H3'
import P from '@/components/typography/P'
import Section from '@/components/uielements/Section'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <Section className="py-6 mb-6">
            <H1 className="mb-2 !text-4xl">Terms and Conditions</H1>
            <P>Welcome to TheDesignValue UI/UX Courses! Please read these Terms and Conditions carefully before using our website and enrolling in our UI/UX courses. By using this website and enrolling in our courses, you agree to be bound by these Terms and Conditions.</P>

            <H3 className="mt-6 mb-2">1. Registration Fee</H3>

            <H3 className="ms-6 mb-2">1.1. Non-Refundable Registration Fee</H3>
            <P className="ms-6">The registration fee for our UI/UX courses is non-refundable. Once you have paid the registration fee, it will not be refunded under any circumstances.</P>

            <H3 className="mt-6 mb-2">2. Course Descriptions</H3>

            <H3 className="ms-6 mb-2">2.1. Course Offerings</H3>
            <P className="ms-6">We offer the following UI/UX courses:</P>
            <ul className="list-disc ml-8 text-gray-500">
                <li>UI/UX Certification: A comprehensive UI/UX certification program.</li>
                <li>UI/UX Certification with 100% Paid Internship: Includes the certification program along with a guaranteed paid internship opportunity.</li>
                <li>UI/UX Certification with 100% Paid Internship and Job Assistance: Includes the certification program, a guaranteed paid internship, and additional job assistance services.</li>
                <li>UI/UX Personal Batch: A personalized, self-paced UI/UX course designed for 2-3 people per batch.</li>
            </ul>

            <H3 className="ms-6 mb-2">2.2. Detailed Course Information</H3>
            <P className="ms-6">Please refer to the specific course pages on our website for detailed descriptions, course content, prerequisites, and any additional requirements for each course.</P>

            <H3 className="mt-6 mb-2">3. Job Assistance Program</H3>

            <H3 className="ms-6 mb-2">3.1. Job Assistance Disclaimer</H3>
            <P className="ms-6">Our job assistance program is designed to provide additional training, resources, and support to help you prepare for job opportunities in the UI/UX field. However, it does not guarantee job placement. Job placement depends on various factors, including your skills, experience, and the job market conditions in your area.</P>

            <H3 className="mt-6 mb-2">4. Internship Guarantee</H3>

            <H3 className="ms-6 mb-2">4.1. Internship Offer</H3>
            <P className="ms-6">For courses that include an internship, we guarantee that you will be provided with an internship opportunity upon successful completion of the course. The specifics of the internship, including its duration and terms, will be communicated to you during the course.</P>

            <H3 className="ms-6 mb-2">4.2. Internship Eligibility</H3>
            <P className="ms-6">To be eligible for the internship and course certificate, you must meet the following criteria:</P>
            <ul className="list-disc ml-8 text-gray-500">
                <li>Complete your design portfolio as required by the course.</li>
                <li>Maintain a minimum attendance rate of 70% during the course.</li>
            </ul>

            <H3 className="ms-6 mb-2">4.3. Non-Eligibility</H3>
            <P className="ms-6">If your design portfolio is not complete or your attendance falls below 70%, you may not be offered an internship or the course certificate.</P>

            <H3 className="mt-6 mb-2">5. User Responsibilities</H3>

            <H3 className="ms-6 mb-2">5.1. Account Security</H3>
            <P className="ms-6">Users are responsible for maintaining the confidentiality of their login information, including usernames and passwords. You are prohibited from sharing your account credentials with others.</P>

            <H3 className="ms-6 mb-2">5.2. Prohibited Activities</H3>
            <P className="ms-6">Users must not engage in any unauthorized or unlawful activities on our website, including but not limited to copyright infringement, hacking, and any form of harassment or abuse of other users.</P>

            <H3 className="ms-6 mb-2">5.3. Student ID Revocation</H3>
            <P className="ms-6">If it is discovered that someone other than the enrolled student is participating in the course, the student&apos;s ID may be revoked, and access to the course may be terminated immediately.</P>

            <H3 className="ms-6 mb-2">5.4. Fee Changes</H3>
            <P className="ms-6">If the course fee changes during the course, the enrolled student is requested to pay the updated fee from the month when the fee change is implemented.</P>

            <H3 className="mt-6 mb-2">6. Termination</H3>

            <H3 className="ms-6 mb-2">6.1. Termination of Access</H3>
            <P className="ms-6">We reserve the right to terminate or suspend your access to our website and courses at our discretion, with or without cause, and without prior notice.</P>

            <H3 className="mt-6 mb-2">7. External Links</H3>

            <H3 className="ms-6 mb-2">7.1. External Websites</H3>
            <P className="ms-6">Our website may contain links to external websites or resources. We are not responsible for the content or practices of these external websites and do not endorse or warrant their accuracy, reliability, or legality. Your use of external links is at your own risk.</P>

            <H3 className="mt-6 mb-2">8. Modifications</H3>

            <H3 className="ms-6 mb-2">8.1. Changes to Terms</H3>
            <P className="ms-6">We reserve the right to modify or update these Terms and Conditions at any time. It is your responsibility to review these terms periodically for changes. Any modifications will become effective immediately upon posting on our website.</P>

            <H3 className="mt-6 mb-2">9. Contact Us</H3>

            <H3 className="ms-6 mb-2">9.1. Contact Information</H3>
            <P className="ms-6">If you have any questions or concerns regarding these Terms and Conditions, please contact us at <Link className="text-primary hover:text-black" href="mailto:connect.thedesignvalue@gmail.com">connect.thedesignvalue@gmail.com</Link>. We are here to assist you and provide further clarification as needed.</P>
        </Section>
    )
}
