import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import {
  Shield,
  Server,
  Users,
  Briefcase,
  FileText,
  Gavel,
  Globe,
  XCircle,
  Copyright,
  Landmark,
  Mail
} from "lucide-react";

// Helper component for styled sections
const PolicySection: React.FC<{
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}> = ({ title, icon: Icon, children }) => (
  <div className="pt-8">
    <div className="flex items-center gap-3 mb-4">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-accent" />
      </span>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
      {children}
    </div>
  </div>
);

const TermsOfService = () => {
  return (
    <PageLayout>
      <SolutionHero
        badge="LEGAL"
        title={
          <>
            UsergyAI
            <span className="gradient-text animate-gradient"> Terms of Service</span>
          </>
        }
        subtitle="These are the terms and conditions for using our website and engaging our services. Please read them carefully."
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
              These Terms of Service ("Terms") govern your access to and use of
              the website (the "Website") and the data services provided by{" "}
              <strong>UsergyAI Private Limited</strong> ("UsergyAI," "we,"
              "us," or "our").
            </p>
            <p>
              By accessing the Website or using our Services, you agree to be
              bound by these Terms.
            </p>
          </div>

          {/* 1. Definitions */}
          <PolicySection title="Definitions" icon={FileText}>
            <ul>
              <li>
                <strong>"Website"</strong> refers to all content and pages
                located within the UsergyAI domain.
              </li>
              <li>
                <strong>"Client"</strong> refers to any individual or entity
                that engages UsergyAI for paid services, such as data
                annotation, quality assurance, or localization.
              </li>
              <li>
                <strong>"Contributor"</strong> refers to an individual
                who has registered as part of our expert network to perform
                services for UsergyAI as an independent contractor.
              </li>
              <li>
                <strong>"User"</strong> refers to any Website Visitor, Client,
                or Contributor, as the context requires.
              </li>
              <li>
                <strong>"Services"</strong> refers to the data annotation, QA,
                localization, BPO, and other services UsergyAI provides.
              </li>
              <li>
                <strong>"Client Data"</strong> refers to any data, information,
                or materials provided by a Client to UsergyAI for the purpose
                of receiving Services.
              </li>
              <li>
                <strong>"Deliverables"</strong> refers to the processed,
                annotated, or translated Client Data returned to the Client by
                UsergyAI.
              </li>
            </ul>
          </PolicySection>

          {/* 2. Terms for Clients */}
          <PolicySection title="Terms for Clients" icon={Briefcase}>
            <p>
              These terms apply specifically to our Clients.
            </p>
            <h4>2.1. Service Agreements</h4>
            <p>
              The specific scope, fees, timelines, and deliverables for
              Services will be defined in a separate Master Service Agreement
              (MSA) or Statement of Work (SOW) executed between you and
              UsergyAI. These Terms are incorporated by reference into any such
              agreement.
            </p>
            <h4>2.2. Client Data and Ownership</h4>
            <p>
              You (the Client) retain all right, title, and interest in and to
              your Client Data. You grant UsergyAI a temporary, non-exclusive,
              worldwide, royalty-free license to use, modify, and process
              Client Data *solely* for the purpose of performing the Services
              outlined in the SOW.
            </p>
            <h4>2.3. Intellectual Property of Deliverables</h4>
            <p>
              Upon full and final payment for the Services, UsergyAI assigns to
              you all right, title, and interest in and to the Deliverables. We
              retain no rights to use, distribute, or sub-license the
              Deliverables for any other purpose, except as required by law.
            </p>
            <h4>2.4. Payment</h4>
            <p>
              Payment terms, invoicing, and applicable taxes will be governed
              by your MSA or SOW. Failure to make timely payments may result in
              a suspension of Services.
            </p>
          </PolicySection>

          {/* 3. Terms for Contributors */}
          <PolicySection title="Terms for Contributors" icon={Users}>
            <p>
              These terms apply specifically to our 300,000+ expert network
              Contributors.
            </p>
            <h4>3.1. Independent Contractor Status</h4>
            <p>
              You acknowledge and agree that you are an independent contractor,
              not an employee, partner, or agent of UsergyAI. You are not
              eligible for any employee benefits and are solely responsible for
              your own taxes, insurance, and equipment.
            </p>
            <h4>3.2. Confidentiality</h4>
            <p>
              As a Contributor, you will be exposed to sensitive Client Data.
              You agree to maintain strict confidentiality of all information
              you access. You will not copy, store, share, or disclose any
              Client Data or project information to any third party, in
              perpetuity. Breach of this confidentiality is a material breach
              of these Terms and may result in immediate termination and legal
              action.
            </p>
            <h4>3.3. Payment for Services</h4>
            <p>
              UsergyAI agrees to pay you for Services rendered at the rates and
              schedules specified in your Contributor Agreement or applicable
              project assignment.
            </p>
          </PolicySection>

          {/* 4. General Website Use */}
          <PolicySection title="General Website Use" icon={Globe}>
            <h4>4.1. License to Use Website</h4>
            <p>
              We grant you a limited, non-exclusive, non-transferable license
              to access and use the Website for your personal or internal
              business purposes.
            </p>
            <h4>4.2. Prohibited Activities</h4>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>
                Use the Website for any illegal purpose or in violation of any
                local, state, national, or international law.
              </li>
              <li>
                Scrape, "data-mine," or use any automated means to access the
                Website or its content.
              </li>
              <li>
                Attempt to gain unauthorized access to our systems, servers,
                or networks.
              </li>
              <li>
                Interfere with the security or proper functioning of the
                Website.
              </li>
            </ul>
          </PolicySection>

          {/* 5. Our Intellectual Property */}
          <PolicySection title="Our Intellectual Property" icon={Copyright}>
            <p>
              Excluding Client Data and Deliverables, all content on the
              Website, including text, graphics, logos, trademarks, and
              software (collectively, "UsergyAI Content"), is the exclusive
              property of UsergyAI Private Limited and is protected by
              copyright, trademark, and other intellectual property laws.
            </p>
          </PolicySection>

          {/* 6. Disclaimers and Liability */}
          <PolicySection title="Disclaimers and Liability" icon={XCircle}>
            <h4>6.1. Disclaimer of Warranties</h4>
            <p>
              The Website is provided "as is" and "as available" without
              warranties of any kind. We do not warrant that the Website will
              be error-free or uninterrupted.
            </p>
            <p>
              Our warranties regarding the Services (e.g., accuracy guarantees
              like 99.5%+) are not covered by this public disclaimer and are
              instead governed by your specific MSA or SOW.
            </p>
            <h4>6.2. Limitation of Liability</h4>
            <p>
              To the fullest extent permitted by law, UsergyAI Private Limited
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or
              revenues, whether incurred directly or indirectly, arising from
              your use of the Website.
            </p>
          </PolicySection>

          {/* 7. Governing Law and Dispute Resolution */}
          <PolicySection title="Governing Law and Dispute Resolution" icon={Gavel}>
            <p>
              These Terms and any dispute arising from them shall be governed
              by and construed in accordance with the laws of India, without
              regard to its conflict of law principles.
            </p>
            <p>
              You agree to submit to the exclusive jurisdiction of the competent
              courts located in <strong>Bengaluru, Karnataka, India</strong> for the
              resolution of any legal matter arising from these Terms.
            </p>
          </PolicySection>

          {/* 8. Contact Us */}
          <PolicySection title="Contact Us" icon={Mail}>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p>
              <strong>UsergyAI Private Limited</strong>
              <br />
              Email: <a href="mailto:legal@usergy.ai">legal@usergy.ai</a>
            </p>
          </PolicySection>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsOfService;
