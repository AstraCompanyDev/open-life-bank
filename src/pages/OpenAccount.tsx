import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  mobile: z.string().trim().min(1, "Mobile number is required").max(20, "Mobile number must be less than 20 characters"),
});

const OpenAccount = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subscribeNewsletter: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = formSchema.parse({
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
      });

      const { error } = await supabase.functions.invoke('send-ubank-signup', {
        body: {
          ...validatedData,
          subscribeNewsletter: formData.subscribeNewsletter,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to the uBank waitlist. We'll be in touch soon!",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="relative pt-32 pb-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          
          <div className="container mx-auto max-w-2xl relative z-10 text-center">
            <div className="animate-fade-up">
              <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Thank you for your interest!
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                We've received your application. Our team will review it and get back to you shortly with next steps.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-500" />

        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Be the First to hear about{" "}
              <span className="gradient-text">U-Topia</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
              Join the waitlist to be among the first to experience seamless crypto management with 70,000+ assets in one app.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up delay-200">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Name <span className="text-destructive">*</span></Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground ${
                  errors.name ? "border-destructive" : ""
                }`}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email <span className="text-destructive">*</span></Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground ${
                  errors.email ? "border-destructive" : ""
                }`}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-foreground">Mobile <span className="text-destructive">*</span></Label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="Enter your Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                className={`bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground ${
                  errors.mobile ? "border-destructive" : ""
                }`}
              />
              {errors.mobile && (
                <p className="text-sm text-destructive">{errors.mobile}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="newsletter"
                checked={formData.subscribeNewsletter}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, subscribeNewsletter: checked === true }))
                }
              />
              <Label htmlFor="newsletter" className="text-muted-foreground cursor-pointer">
                Subscribe to Newsletter
              </Label>
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join Waitlist"}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenAccount;