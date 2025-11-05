export const TrustSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Trusted by Teams Building the <span className="gradient-text">Future</span>
          </h2>
        </div>

        {/* Large Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="glassmorphic bg-gradient-to-br from-card to-muted/50 border border-border rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-5xl sm:text-6xl mb-6 text-secondary/40">"</div>
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                UsergyAI was the only partner who could deliver our HIPAA-compliant medical dataset with <span className="text-accent font-bold">perfect accuracy</span>. Their experts aren't just annotators—they're actual <span className="text-secondary font-bold">doctors</span>.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-xl">
                  SC
                </div>
                <div>
                  <p className="font-bold text-lg">Dr. Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">Head of AI, Fortune 500 Healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar - Clean, Inline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-6 glassmorphic bg-card border border-border rounded-2xl hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">99.5%+</div>
              <p className="text-sm text-muted-foreground">Accuracy Guaranteed</p>
            </div>
            <div className="text-center p-6 glassmorphic bg-card border border-border rounded-2xl hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">SOC 2</div>
              <p className="text-sm text-muted-foreground">Enterprise Security</p>
            </div>
            <div className="text-center p-6 glassmorphic bg-card border border-border rounded-2xl hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">HIPAA</div>
              <p className="text-sm text-muted-foreground">Healthcare Compliant</p>
            </div>
            <div className="text-center p-6 glassmorphic bg-card border border-border rounded-2xl hover-lift">
              <div className="text-3xl font-bold gradient-text mb-2">GDPR</div>
              <p className="text-sm text-muted-foreground">Privacy Protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
