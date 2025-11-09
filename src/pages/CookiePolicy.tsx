import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { PolicySection } from "@/components/legal/PolicySection";
import {
  Cookie,
  Shield,
  Settings,
  Globe,
  BarChart,
  MessageSquare,
  User,
  Info
} from "lucide-react";

const CookiePolicy = () => {
  return (
    <PageLayout>
      <SolutionHero
        badge="LEGAL"
        title={
          <>
            UsergyAI
            <span className="gradient-text animate-gradient"> Cookie Policy</span>
          </>
        }
        subtitle="Learn how we use cookies and similar technologies to provide, protect, and improve our services while respecting your privacy."
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
              This Cookie Policy explains how <strong>UsergyAI Private Limited</strong> ("UsergyAI," 
              "we," "us," or "our") uses cookies and similar tracking technologies when you visit 
              our website. This policy is designed to help you understand what cookies are, how we 
              use them, and the choices you have regarding their use.
            </p>
            <p>
              By continuing to use our website, you consent to our use of cookies as described in 
              this policy, subject to the preferences you set using our cookie consent banner.
            </p>
          </div>

          {/* 1. What Are Cookies */}
          <PolicySection title="What Are Cookies?" icon={Cookie}>
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, 
              tablet) when you visit a website. They are widely used to make websites work more 
              efficiently and provide information to website owners.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies:
            </p>
            <ul>
              <li>
                <strong>Persistent cookies:</strong> Remain on your device for a set period or 
                until you delete them.
              </li>
              <li>
                <strong>Session cookies:</strong> Are temporary and are deleted when you close 
                your browser.
              </li>
            </ul>
            <p>
              We also use similar technologies such as web beacons, pixels, and local storage 
              to collect information about your use of our website.
            </p>
          </PolicySection>

          {/* 2. Types of Cookies We Use */}
          <PolicySection title="Types of Cookies We Use" icon={Settings}>
            <h4>Necessary Cookies (Always Active)</h4>
            <p>
              These cookies are essential for the website to function properly. They enable core 
              functionality such as security, network management, and accessibility. Without these 
              cookies, certain services you have requested cannot be provided.
            </p>
            <p><strong>Examples:</strong></p>
            <ul>
              <li>Authentication and security cookies</li>
              <li>Load balancing cookies</li>
              <li>Cookie consent preferences</li>
            </ul>
            <p><strong>Duration:</strong> Session to 1 year</p>

            <h4 className="mt-6">Analytics Cookies (Optional)</h4>
            <p>
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously. This helps us improve our website's performance 
              and user experience.
            </p>
            <p><strong>Examples:</strong></p>
            <ul>
              <li>Google Analytics (page views, session duration, bounce rate)</li>
              <li>Performance monitoring (page load times, errors)</li>
              <li>User behavior analysis (click patterns, navigation paths)</li>
            </ul>
            <p><strong>Duration:</strong> Up to 2 years</p>

            <h4 className="mt-6">Marketing Cookies (Optional)</h4>
            <p>
              These cookies track your browsing activity across websites to build a profile of 
              your interests and show you relevant advertisements on other platforms. We may use 
              third-party advertising services that use these cookies.
            </p>
            <p><strong>Examples:</strong></p>
            <ul>
              <li>LinkedIn Insight Tag</li>
              <li>Google Ads remarketing</li>
              <li>Facebook Pixel</li>
            </ul>
            <p><strong>Duration:</strong> Up to 1 year</p>

            <h4 className="mt-6">Preference Cookies (Optional)</h4>
            <p>
              These cookies allow our website to remember choices you make (such as your language 
              preference or region) and provide enhanced, more personalized features.
            </p>
            <p><strong>Examples:</strong></p>
            <ul>
              <li>Language preferences</li>
              <li>Display preferences (theme, layout)</li>
              <li>Previous form inputs</li>
            </ul>
            <p><strong>Duration:</strong> Up to 1 year</p>
          </PolicySection>

          {/* 3. How We Use Cookies */}
          <PolicySection title="How We Use Cookies" icon={BarChart}>
            <p>
              We use cookies for the following purposes:
            </p>
            <ul>
              <li>
                <strong>To provide and secure our services:</strong> Cookies help us deliver 
                the core functionality of our website and keep it secure.
              </li>
              <li>
                <strong>To improve user experience:</strong> We use cookies to remember your 
                preferences and provide a personalized experience.
              </li>
              <li>
                <strong>To analyze website performance:</strong> Analytics cookies help us 
                understand how visitors use our website, allowing us to improve its design 
                and functionality.
              </li>
              <li>
                <strong>To deliver relevant content:</strong> We use cookies to show you 
                content and advertisements that are more relevant to your interests.
              </li>
              <li>
                <strong>To comply with legal obligations:</strong> Some cookies are necessary 
                to help us comply with legal and regulatory requirements.
              </li>
            </ul>
          </PolicySection>

          {/* 4. Third-Party Cookies */}
          <PolicySection title="Third-Party Cookies" icon={Globe}>
            <p>
              In addition to our own cookies, we may use various third-party cookies to report 
              usage statistics, deliver advertisements, and provide enhanced functionality.
            </p>
            <p>
              <strong>Third parties we work with include:</strong>
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> Web analytics service to understand how 
                visitors interact with our website.
              </li>
              <li>
                <strong>LinkedIn:</strong> For professional networking features and advertising.
              </li>
              <li>
                <strong>Calendly:</strong> For scheduling consultations and meetings.
              </li>
            </ul>
            <p>
              These third parties have their own privacy policies and cookie policies. We recommend 
              reviewing them to understand how they use cookies and your rights.
            </p>
          </PolicySection>

          {/* 5. Your Cookie Choices */}
          <PolicySection title="Your Cookie Choices and Controls" icon={User}>
            <p>
              You have several options for managing cookies on our website:
            </p>
            
            <h4>Cookie Consent Banner</h4>
            <p>
              When you first visit our website, you will see a cookie consent banner. You can:
            </p>
            <ul>
              <li><strong>Accept All:</strong> Consent to all cookies</li>
              <li><strong>Necessary Only:</strong> Only allow essential cookies</li>
              <li><strong>Customize:</strong> Choose which types of cookies to allow</li>
            </ul>
            <p>
              You can change your preferences at any time by clicking the "Cookie Settings" 
              link in our website footer.
            </p>

            <h4>Browser Controls</h4>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul>
              <li>View and delete cookies stored on your device</li>
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete all cookies when you close your browser</li>
              <li>Receive a notification before a cookie is stored</li>
            </ul>
            <p>
              <strong>Note:</strong> Blocking or deleting cookies may impact your experience 
              and limit functionality on our website.
            </p>

            <h4>Opt-Out Links</h4>
            <p>
              You can opt out of certain third-party cookies using these resources:
            </p>
            <ul>
              <li>
                Google Analytics:{" "}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Browser Add-on
                </a>
              </li>
              <li>
                Network Advertising Initiative:{" "}
                <a 
                  href="http://www.networkadvertising.org/choices/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Opt-Out Tool
                </a>
              </li>
            </ul>
          </PolicySection>

          {/* 6. Legal Basis and Compliance */}
          <PolicySection title="Legal Basis and Compliance" icon={Shield}>
            <p>
              Our use of cookies is based on your consent, except for necessary cookies which 
              are required for the website to function.
            </p>
            
            <h4>GDPR Compliance (European Users)</h4>
            <p>
              If you are in the European Economic Area (EEA), our cookie practices comply with 
              the General Data Protection Regulation (GDPR). We:
            </p>
            <ul>
              <li>Obtain your explicit consent before using non-essential cookies</li>
              <li>Allow you to withdraw consent at any time</li>
              <li>Provide clear information about cookie purposes and durations</li>
              <li>Respect "Do Not Track" signals where technically feasible</li>
            </ul>

            <h4>Indian Data Protection Compliance</h4>
            <p>
              For users in India, our cookie practices align with the Digital Personal Data 
              Protection Act, 2023 (DPDP Act). We ensure transparency in our data collection 
              practices and obtain consent as required by Indian law.
            </p>
          </PolicySection>

          {/* 7. Updates to This Policy */}
          <PolicySection title="Updates to This Cookie Policy" icon={Info}>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our 
              practices, technologies, legal requirements, or for other operational reasons.
            </p>
            <p>
              When we make significant changes, we will notify you by:
            </p>
            <ul>
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Displaying a notice on our website</li>
              <li>Requesting renewed consent if required by law</li>
            </ul>
            <p>
              We encourage you to review this policy periodically to stay informed about how 
              we use cookies.
            </p>
          </PolicySection>

          {/* 8. Contact Us */}
          <PolicySection title="Contact Us" icon={MessageSquare}>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact us:
            </p>
            <p>
              <strong>UsergyAI Private Limited</strong>
              <br />
              Email: <a href="mailto:privacy@usergy.ai">privacy@usergy.ai</a>
              <br />
              Phone: <a href="tel:+917330703310">+91 733 070 3310</a>
            </p>
            <p>
              For privacy-related inquiries, you can also contact our Data Protection Officer 
              at the email address above.
            </p>
          </PolicySection>
        </div>
      </section>
    </PageLayout>
  );
};

export default CookiePolicy;