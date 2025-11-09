import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">UsergyAI</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The human insight behind AI's potential.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/usergy-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/+917330703310"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:connect@usergy.ai"
                className="hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h3 className="text-base font-bold">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/data-services" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Data Services
                </Link>
              </li>
              <li>
                <Link to="/solutions/quality-assurance" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/solutions/content-moderation" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Content Moderation
                </Link>
              </li>
              <li>
                <Link to="/solutions/multilingual" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Multilingual Services
                </Link>
              </li>
              <li>
                <Link to="/solutions/enterprise-bpo" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Enterprise BPO
                </Link>
              </li>
              <li>
                <Link to="/solutions/research-insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Research & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="text-base font-bold">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Projects Board
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-4">
            <h3 className="text-base font-bold">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Security & Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Status Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 UsergyAI. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors hover:underline">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="hover:text-foreground transition-colors hover:underline">
              Cookie Policy
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("cookie-consent");
                window.location.reload();
              }}
              className="hover:text-foreground transition-colors hover:underline"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
