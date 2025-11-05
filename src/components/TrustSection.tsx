import { Lock, Sparkles, Handshake, Shield } from "lucide-react";

export const TrustSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* LEFT: Testimonial */}
          <div className="glassmorphic bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 hover-lift group">
            <div className="mb-6">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 text-secondary" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L12 24h6l2-8c0-3.314-2.686-6-6-6H10zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L26 24h6l2-8c0-3.314-2.686-6-6-6h-4z" />
              </svg>
            </div>
            <blockquote className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
              "UsergyAI was the <span className="font-bold text-accent">ONLY partner</span> who could deliver our HIPAA-compliant medical dataset with perfect accuracy. Their experts aren't just annotators—they're <span className="font-bold text-secondary">doctors</span>."
            </blockquote>
            <div>
              <p className="font-bold text-base sm:text-lg">Dr. Sarah Chen</p>
              <p className="text-sm sm:text-base text-muted-foreground">Head of AI, Fortune 500 Healthcare</p>
            </div>
          </div>

          {/* RIGHT: Trust Indicators */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="glassmorphic bg-card border border-border rounded-2xl p-6 hover-lift group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Enterprise Security</h3>
                  <p className="text-sm text-muted-foreground mb-2">SOC 2, ISO 27001, HIPAA Compliant</p>
                  <p className="text-xs text-accent font-medium">"Your data is fortress-level secure"</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glassmorphic bg-card border border-border rounded-2xl p-6 hover-lift group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-secondary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Proven Quality</h3>
                  <p className="text-sm text-muted-foreground mb-2">99.5%+ Accuracy Guarantee</p>
                  <p className="text-xs text-secondary font-medium">"Dedicated PMs ensure perfection"</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glassmorphic bg-card border border-border rounded-2xl p-6 hover-lift group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">One Partner</h3>
                  <p className="text-sm text-muted-foreground mb-2">End-to-End Solution</p>
                  <p className="text-xs text-primary font-medium">"Data → QA → Localization. One vendor, one invoice."</p>
                </div>
              </div>
            </div>

            {/* Card 4 - GDPR */}
            <div className="glassmorphic bg-card border border-border rounded-2xl p-6 hover-lift group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Privacy Compliant</h3>
                  <p className="text-sm text-muted-foreground mb-2">GDPR & CCPA Certified</p>
                  <p className="text-xs text-accent font-medium">"Your users' privacy, protected"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
