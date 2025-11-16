// src/pages/Contact.tsx
import * as React from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { pageSEO } from "@/utils/seo-config";
import { generateLocalBusinessSchema } from "@/hooks/useSEO";
import { PageLayout } from "@/components/layouts/PageLayout";
import { SolutionHero } from "@/components/SolutionHero";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { ParticleButton } from "@/components/ui/particle-button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, CalendarClock, ShieldCheck, ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { sanitizeText, sanitizeEmail, RateLimiter, generateClientToken } from "@/lib/sanitize";
import { NetworkError, RateLimitError, getErrorMessage, logError } from "@/utils/errors";
import { FORM_CONFIG, RATE_LIMIT, EXTERNAL_URLS, COMPANY } from "@/constants";

// Rate limiter instance using constants
const rateLimiter = new RateLimiter(RATE_LIMIT.MAX_ATTEMPTS, RATE_LIMIT.WINDOW_MS);

// 1. Define the validation schema with zod using constants
const formSchema = z.object({
  name: z.string()
    .trim()
    .min(FORM_CONFIG.MIN_NAME_LENGTH, { 
      message: `Name must be at least ${FORM_CONFIG.MIN_NAME_LENGTH} characters.` 
    })
    .max(FORM_CONFIG.MAX_NAME_LENGTH, { 
      message: `Name must be less than ${FORM_CONFIG.MAX_NAME_LENGTH} characters.` 
    })
    .regex(/^[a-zA-Z\s'-]+$/, { 
      message: "Name can only contain letters, spaces, hyphens, and apostrophes." 
    }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(FORM_CONFIG.MAX_EMAIL_LENGTH, { 
      message: `Email must be less than ${FORM_CONFIG.MAX_EMAIL_LENGTH} characters.` 
    })
    .toLowerCase(),
  company: z.string()
    .trim()
    .max(FORM_CONFIG.MAX_COMPANY_LENGTH, { 
      message: `Company name must be less than ${FORM_CONFIG.MAX_COMPANY_LENGTH} characters.` 
    })
    .optional(),
  message: z.string()
    .trim()
    .min(FORM_CONFIG.MIN_MESSAGE_LENGTH, { 
      message: `Message must be at least ${FORM_CONFIG.MIN_MESSAGE_LENGTH} characters.` 
    })
    .max(FORM_CONFIG.MAX_MESSAGE_LENGTH, { 
      message: `Message must be less than ${FORM_CONFIG.MAX_MESSAGE_LENGTH} characters.` 
    }),
});

// 2. Define the Contact Page component
const Contact = () => {
  const localBusinessSchema = generateLocalBusinessSchema();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // 3. Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // 4. Define the onSubmit handler with enhanced security
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Check rate limiting
      if (rateLimiter.isLimited(values.email)) {
        const resetTime = rateLimiter.getResetTime(values.email);
        throw new RateLimitError(
          `Too many submissions. Please try again in ${resetTime} seconds.`,
          resetTime
        );
      }

      // Sanitize all inputs before sending
      const sanitizedData = {
        name: sanitizeText(values.name, FORM_CONFIG.MAX_NAME_LENGTH),
        email: sanitizeEmail(values.email),
        company: values.company ? sanitizeText(values.company, FORM_CONFIG.MAX_COMPANY_LENGTH) : '',
        message: sanitizeText(values.message, FORM_CONFIG.MAX_MESSAGE_LENGTH),
        _clientToken: generateClientToken(),
        _timestamp: new Date().toISOString(),
      };

      // Get form endpoint from environment variable with fallback
      const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xblqrklj";

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new NetworkError(
          errorData.error || "Failed to send message.",
          response.status
        );
      }

      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 5000,
      });
      form.reset();
      
      // Clear rate limit on successful submission
      setTimeout(() => rateLimiter.clear(values.email), RATE_LIMIT.RESET_DELAY_MS);
      
    } catch (error) {
      logError(error, 'Contact Form Submission');
      
      const errorMessage = getErrorMessage(error);
      const fallbackMessage = ` Or contact us directly at ${COMPANY.EMAIL}`;
      
      toast.error(errorMessage + fallbackMessage, {
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <SEO {...pageSEO.contact} structuredData={localBusinessSchema} />
      {/* We use PageLayout but will omit the FinalCTA from this page. */}
      <div className="min-h-screen flex flex-col">
        <PageLayout>
        {/* 1. Hero Section */}
        <SolutionHero
          badge="CONTACT US"
          title={
            <>
              Let's Build the Future,
              <br />
              <span className="gradient-text animate-gradient">Together.</span>
            </>
          }
          subtitle={`Have a project in mind, a question about our ${COMPANY.EXPERT_NETWORK_SIZE} expert network, or a general inquiry? We're ready to listen and help you get started.`}
        />

        {/* 2. Main Content Section (Form + Info) */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Column 1: Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Start the Conversation</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're here to provide the human expertise you need to make your AI project a success. Fill out the form, or for a more direct consultation, <a href={EXTERNAL_URLS.CALENDLY} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80 underline">book a time with our team</a>. Learn more <Link to="/why-us" className="text-secondary hover:text-secondary/80 underline">about our unique approach</Link>.
                  </p>
                </div>

                <div className="space-y-6">
                  <a href={EXTERNAL_URLS.CALENDLY} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <CalendarClock className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold">Book a Free Consultation</h3>
                      <p className="text-muted-foreground text-sm">
                        Skip the email. Schedule a 30-minute call directly with our solutions team.
                      </p>
                      <span className="text-sm font-semibold text-secondary flex items-center gap-1 group-hover:gap-2 transition-all mt-2">
                        Find a Time <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                  
                  <a href={EXTERNAL_URLS.EMAIL} className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold">Email Us Directly</h3>
                      <p className="text-muted-foreground text-sm">
                        Prefer to send details via email? Our inbox is always open.
                      </p>
                      <span className="text-sm font-semibold text-primary group-hover:underline">
                        {COMPANY.EMAIL}
                      </span>
                    </div>
                  </a>
                </div>

                <div className="pt-8">
                  <h3 className="text-lg font-semibold mb-4">Your Data is Secure</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                      <span>SOC 2 Type II</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                      <span>HIPAA & GDPR</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                      <span>ISO 27001</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Form */}
              <div className="relative glassmorphic bg-card/50 p-8 md:p-12 rounded-2xl border border-border overflow-hidden">
                <GlowingEffect spread={40} glow={true} proximity={100} borderWidth={2.5} disabled={false} />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Tell Us About Your Project</h2>
                  <Form {...form}>
                    <form 
                      onSubmit={form.handleSubmit(onSubmit)} 
                      className="space-y-6"
                      noValidate
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Work Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company <span className="text-muted-foreground text-xs">(Optional)</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company, Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How can we help?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project, data needs, or any questions you have..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <ParticleButton 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </ParticleButton>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
    </>
  );
};

export default Contact;
