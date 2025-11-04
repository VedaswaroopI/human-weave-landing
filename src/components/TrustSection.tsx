import { Lock, Sparkles, Handshake } from "lucide-react";

export const TrustSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* LEFT: Testimonial */}
          <div className="glassmorphic bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 hover-lift">
            <div className="mb-6">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-secondary opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L12 24h6l2-8c0-3.314-2.686-6-6-6H10zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L26 24h6l2-8c0-3.314-2.686-6-6-6h-4z" />
              </svg>
            </div>
            <blockquote className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
              "UsergyAI was the <span className="font-bold text-accent">ONLY partner</span> who could deliver our HIPAA-compliant medical dataset with perfect accuracy. Their experts aren't just annotators—they're <span className="font-bold text-secondary">doctors</span>."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                SC
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base">Dr. Sarah Chen</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Head of AI, Fortune 500 Healthcare</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Trust Indicators */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="glassmorphic bg-card border border-border rounded-2xl p-6 hover-lift group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Enterprise Security</h3>
                  <p className="text-sm text-muted-foreground mb-2">SOC 2, ISO 27001, HIPAA Compliant</p>
                  <p className="text-xs text-accent">"Your data is fortress-level secure"</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glassmorphic bg-card border border-border rounded-2xl p-6 hover-lift group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Proven Quality</h3>
                  <p className="text-sm text-muted-foreground mb-2">99.5%+ Accuracy Guarantee</p>
                  <p className="text-xs text-secondary">"Dedicated PMs ensure perfection"</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glassmorphic bg-card border border-border rounded-2xl p-6 hover-lift group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">One Partner</h3>
                  <p className="text-sm text-muted-foreground mb-2">End-to-End Solution</p>
                  <p className="text-xs text-primary">"Data → QA → Localization. One vendor, one invoice."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
