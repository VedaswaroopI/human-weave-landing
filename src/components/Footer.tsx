import { Linkedin, Mail } from "lucide-react";

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
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
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
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  AI & Data Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Quality Assurance
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Multilingual Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Enterprise & BPO
                </a>
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
                <a href="#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Case Studies
                </a>
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
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline">
                  Contact
                </a>
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
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors hover:underline">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
