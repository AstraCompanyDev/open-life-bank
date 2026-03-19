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

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  location: z.string().trim().min(1, "Location is required").max(200, "Location must be less than 200 characters"),
});

const GetUPay = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    subscribeNewsletter: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
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
        location: formData.location,
      });

      // Send to edge function
      const { error } = await supabase.functions.invoke('send-upay-signup', {
        body: {
          ...validatedData,
          subscribeNewsletter: formData.subscribeNewsletter,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      toast({
        title: "Success!",
        description: "You've been added to the uPay waitlist. We'll be in touch soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        location: "",
        subscribeNewsletter: false,
      });
      setErrors({});
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-500" />

        <div className="container mx-auto max-w-2xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Be one of the first{" "}
              <span className="gradient-text">to get a uPay card</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
              Sign-up today to get pre-approved for your own customizable uPay card. Taking back control of your money and financial future is coming soon!
            </p>
          </div>

          {/* Form */}
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
              <Label htmlFor="location" className="text-foreground">Location <span className="text-destructive">*</span></Label>
              <Input
                id="location"
                name="location"
                placeholder="Where are you located?"
                value={formData.location}
                onChange={handleInputChange}
                required
                className={`bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground ${
                  errors.location ? "border-destructive" : ""
                }`}
              />
              {errors.location && (
                <p className="text-sm text-destructive">{errors.location}</p>
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
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetUPay;
