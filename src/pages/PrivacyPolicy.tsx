import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { PolicySection } from "@/components/legal/PolicySection";
import { Shield, Server, Users, Info, NotebookPen, Cookie, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/utils/seo-config";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO {...pageSEO.privacyPolicy} />
      <PageLayout>
      <SolutionHero
        badge="LEGAL"
        title={
          <>
            UsergyAI
            <span className="gradient-text animate-gradient"> Privacy Policy</span>
          </>
        }
        subtitle="Your trust is our priority. This policy explains how UsergyAI Private Limited collects, uses, and protects your data in compliance with Indian law."
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="mb-8">
            <p className="text-muted-foreground">
              <strong>Last Updated:</strong> November 9, 2025
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Effective Date:</strong> November 9, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none prose-lg prose-p:text-muted-foreground">
            <p>
              UsergyAI Private Limited ("UsergyAI," "we," "us," or "our") is
              committed to protecting your privacy. This Privacy Policy outlines
              our practices for collecting, using, maintaining, protecting, and
              disclosing personal data. We act as a <strong>Data Fiduciary</strong> under
              India's <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
            </p>
            <p>
              This policy applies to data we collect from:
            </p>
            <ul>
              <li>
                <strong>Website Visitors:</strong> Individuals who browse our website.
              </li>
              <li>
                <strong>Clients:</strong> Businesses that purchase our data annotation, QA,
                and multilingual services.
              </li>
              <li>
                <strong>Contributors:</strong> Our global network of 300,000+ independent
                contractors who perform services.
              </li>
            </ul>
          </div>

          {/* 1. Information We Collect */}
          <PolicySection title="Information We Collect" icon={Info}>
            <p>
              We collect different types of personal data depending on your
              interaction with us.
            </p>
            <h4>For Website Visitors:</h4>
            <ul>
              <li>
                <strong>Data you provide:</strong> When you fill out our contact
                form, we collect your <strong>Name</strong>,{" "}
                <strong>Email</strong>, <strong>Company</strong> (optional), and
                any information in your <strong>Message</strong>.
              </li>
              <li>
                <strong>Data we collect automatically:</strong> We may collect
                technical data such as your IP address, browser type, and
                usage data through cookies and analytics tools.
              </li>
            </ul>
            <h4>For Clients:</h4>
            <ul>
              <li>
                <strong>Business Contact Data:</strong> We collect names, email
                addresses, phone numbers, and job titles of our clients'
                employees to manage accounts, projects, and billing.
              </li>
              <li>
                <strong>Client Data:</strong> To perform our services, you may
                provide us with datasets for annotation, testing, or
                localization. This data may contain personal information. We
                process this data as a <strong>Data Processor</strong> on your behalf and
                strictly in accordance with your instructions and our Data
                Processing Agreement.
              </li>
            </ul>
            <h4>For Contributors (Our Expert Network):</h4>
            <ul>
              <li>
                <strong>Registration Data:</strong> Name, email, address, phone
                number, and password to create your account.
              </li>
              <li>
                <strong>Professional Data:</strong> Information about your
                skills, languages, professional credentials (e.g., medical
                licenses, legal degrees), and experience to match you with
                projects.
              </li>
              <li>
                <strong>Payment Data:</strong> Bank account or other payment
                details to process your compensation.
              </li>
              <li>
                <strong>Identity Verification Data:</strong> Government-issued ID
                or other information required for "Know Your Customer" (KYC)
                and compliance checks.
              </li>
            </ul>
          </PolicySection>

          {/* 2. How We Use Your Information */}
          <PolicySection title="How We Use Your Information" icon={NotebookPen}>
            <p>
              We use your personal data only for the specific purposes for
              which we received your consent.
            </p>
            <ul>
              <li>
                <strong>To provide services:</strong> To manage client projects,
                communicate with you, and deliver our data annotation and QA
                services.
              </li>
              <li>
                <strong>To manage our network:</strong> To vet and onboard new
                contributors, match contributors to projects, and process
                payments.
              </li>
              <li>
                <strong>To communicate:</strong> To respond to your inquiries
                (like from the contact form) and send project-related or
                marketing communications (with your consent).
              </li>
              <li>
                <strong>To improve our website:</strong> To analyze how our
                website is used and improve its functionality and security.
              </li>
              <li>
                <strong>To meet legal obligations:</strong> To comply with tax
                laws, fraud prevention, and other legal and regulatory
                requirements in India.
              </li>
            </ul>
          </PolicySection>

          {/* 3. Data Security */}
          <PolicySection title="Data Security" icon={Shield}>
            <p>
              We have implemented comprehensive technical, administrative, and
              physical security measures to protect your personal data.
            </p>
            <ul>
              <li>
                <strong>Certifications:</strong> We are compliant with SOC 2,
                HIPAA, and ISO 27001 standards to ensure enterprise-grade
                security for all client and contributor data.
              </li>
              <li>
                <strong>Access Control:</strong> Access to personal data is
                strictly limited to personnel and contributors who require it
                to perform their job functions and are bound by
                confidentiality agreements.
              </li>
              <li>
                <strong>Encryption:</strong> We use encryption (both in-transit
                and at-rest) to protect sensitive data.
              </li>
              <li>
                <strong>Data Breach Notification:</strong> In the event of a
                personal data breach, we will notify the Data Protection Board
                of India and affected individuals as required by the DPDP Act.
              </li>
            </ul>
          </PolicySection>

          {/* 4. Data Sharing & Third Parties */}
          <PolicySection title="Data Sharing and Third Parties" icon={Users}>
            <p>We do not sell your personal data. We may share it with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                provide services on our behalf, such as cloud hosting (e.g.,
                AWS, Google Cloud), payment processing, and analytics. These
                vendors are contractually bound to protect your data.
              </li>
              <li>
                <strong>Clients:</strong> We may share a contributor's
                non-identifying professional qualifications with clients to
                demonstrate expertise for a project.
              </li>
              <li>
                <strong>Legal Authorities:</strong> If required by law, court
                order, or other government request.
              </li>
            </ul>
          </PolicySection>

          {/* 5. Your Rights Under the DPDP Act */}
          <PolicySection title="Your Rights (as a Data Principal)" icon={Server}>
            <p>
              As an Indian resident, you are a "Data Principal" and have
              specific rights under the DPDP Act, 2023.
            </p>
            <ul>
              <li>
                <strong>Right to Information:</strong> You have the right to
                obtain a summary of the personal data we process and our
                processing activities.
              </li>
              <li>
                <strong>Right to Correction & Erasure:</strong> You can request
                to correct, complete, or update your personal data. You can
                also request the erasure of your data once the purpose for
                which it was collected is fulfilled.
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> You can withdraw
                your consent at any time. This will not affect the legality of
                processing based on consent before its withdrawal.
              </li>
              <li>
                <strong>Right to Grievance Redressal:</strong> You have the
                right to lodge a complaint with our Grievance Officer.
              </li>
            </ul>
            <p>
              To exercise these rights, please contact our Grievance Officer
              at <a href="mailto:privacy@usergy.ai">privacy@usergy.ai</a>.
            </p>
          </PolicySection>

          {/* 6. Cookies */}
          <PolicySection title="Cookies and Tracking" icon={Cookie}>
            <p>
              We use necessary cookies for website functionality and analytics
              cookies to understand traffic. We will request your consent
              before placing non-essential cookies on your device.
            </p>
          </PolicySection>

          {/* 7. Children's Privacy */}
          <PolicySection title="Children's Privacy" icon={Users}>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal data from children. In
              compliance with the DPDP Act, we will obtain verifiable parental
              consent before processing any data from a child.
            </p>
          </PolicySection>

          {/* 8. Contact Us */}
          <PolicySection title="Contact Us & Grievance Officer" icon={Mail}>
            <p>
              In compliance with Indian law, we have appointed a Grievance
              Officer. For any questions, concerns, or to exercise your rights,
              please contact:
            </p>
            <p>
              <strong>Grievance Officer</strong>
              <br />
              UsergyAI Private Limited
              <br />
              Email:{" "}
              <a href="mailto:privacy@usergy.ai">privacy@usergy.ai</a>
            </p>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page.
            </p>
          </PolicySection>
        </div>
      </section>
    </PageLayout>
    </>
  );
};

export default PrivacyPolicy;
