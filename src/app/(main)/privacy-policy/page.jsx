import H1 from '@/components/typography/H1'
import H3 from '@/components/typography/H3'
import P from '@/components/typography/P'
import Section from '@/components/uielements/Section'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <Section className="py-6 mb-6">
            <H1 className="mb-2 !text-4xl">Privacy Policy</H1>
            <P>Welcome to TheDesignValue! This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website and use our services. We are committed to protecting your privacy and ensuring that your personal information is handled with care.</P>

            <P>By using our website and services, you consent to the practices described in this Privacy Policy. If you do not agree with the practices outlined in this Privacy Policy, please do not use our website or services.</P>

            <H3 className="mt-6 mb-2">1. Information We Collect</H3>

            <H3 className="ms-6 mb-2">1.1. Personal Information</H3>
            <P className="ms-6">We may collect personal information from you when you visit our website, register for our courses, and use our services. This may include, but is not limited to:</P>
            <ul className="list-disc ml-8 text-gray-500">
                <li>Your name</li>
                <li>Contact information (email address, phone number)</li>
                <li>Billing information</li>
                <li>Student identification information</li>
                <li>User-generated content (such as comments and reviews)</li>
                <li>Any other information you voluntarily provide</li>
            </ul>

            <H3 className="ms-3 my-2">1.2. Non-Personal Information</H3>
            <P className="ms-6">
                We may also collect non-personal information, such as:
            </P>
            <ul className="list-disc ml-8 text-gray-500">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Date and time of visit</li>
                <li>Referring website</li>
                <li>Pages viewed</li>
                <li>Clickstream data</li>
                <li>Other analytics data</li>
            </ul>

            <H3 className="mt-6 mb-2">2. How We Use Your Information</H3>
            <P className="ms-6">
                We may use your personal information for the following purposes:
            </P>
            <ul className="list-disc ml-8 text-gray-500">
                <li>To provide and manage our services</li>
                <li>To communicate with you about our courses and updates</li>
                <li>To process payments and invoices</li>
                <li>To respond to your inquiries and requests</li>
                <li>To improve our website and services</li>
                <li>To personalize your experience</li>
                <li>To comply with legal obligations</li>
                <li>For any other purpose you provide consent for</li>
            </ul>

            <H3 className="mt-6 mb-2">3. How We Protect Your Information</H3>
            <P className="ms-6">
                We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, secure socket layer (SSL) technology, and regular security assessments of our systems.
            </P>

            <H3 className="mt-6 mb-2">4. Disclosure of Your Information</H3>

            <P className="ms-6">
                We may disclose your personal information to third parties for the following purposes:
            </P>
            <ul className="list-disc ml-8 text-gray-500">
                <li>Service providers and contractors who assist us in providing our services</li>
                <li>Legal obligations, including responding to lawful requests from law enforcement and government authorities</li>
                <li>Protection of our rights, privacy, safety, or property, and that of our affiliates, users, and the public</li>
                <li>Business transfers, such as a merger, acquisition, or sale of all or a portion of our assets</li>
                <li>With your consent or at your direction</li>
            </ul>

            <H3 className="mt-6 mb-2">5. Your Choices</H3>
            <P className="ms-6">
                You have the following choices regarding your personal information:
            </P>
            <ul className="list-disc ml-8 text-gray-500">
                <li>You can review, update, or delete your personal information by contacting us at <Link className="text-primary hover:text-black" href="mailto:connect.thedesignvalue@gmail.com">connect.thedesignvalue@gmail.com</Link></li>
                <li>You can opt out of receiving marketing communications from us by following the instructions provided in the communication</li>
                <li>You can set your browser to refuse cookies or alert you when cookies are being sent</li>
            </ul>

            <H3 className="mt-6 mb-2">6. Third-Party Links</H3>

            <P className="ms-6">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of these websites before providing any personal information to them.</P>

            <H3 className="mt-6 mb-2">7. Children&apos;s Privacy</H3>
            <P className="ms-6">Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected personal information from a child under 13, please contact us, and we will take appropriate steps to remove the information.</P>

            <H3 className="mt-6 mb-2">8. Changes to this Privacy Policy</H3>

            <P className="ms-6">We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the updated Privacy Policy on our website with a new effective date. We encourage you to review this Privacy Policy periodically.</P>

            <H3 className="mt-6 mb-2">9. Contact Us</H3>

            <P className="ms-6">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <Link className="text-primary hover:text-black" href="mailto:connect.thedesignvalue@gmail.com">connect.thedesignvalue@gmail.com</Link>.
            </P>
        </Section>
    )
}
