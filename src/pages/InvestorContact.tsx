import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  title: z.string().min(2, "Title must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.string().min(5, "Please enter a valid phone number or Telegram"),
  investmentTypes: z.array(z.string()).min(1, "Please select at least one investment type"),
});

type FormData = z.infer<typeof formSchema>;

const InvestorContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    title: "",
    email: "",
    mobile: "",
    investmentTypes: [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleInvestmentTypeChange = (type: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      investmentTypes: checked
        ? [...prev.investmentTypes, type]
        : prev.investmentTypes.filter((t) => t !== type),
    }));
    if (errors.investmentTypes) {
      setErrors((prev) => ({ ...prev, investmentTypes: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = formSchema.parse(formData);
      
      // Send to edge function
      const { error } = await supabase.functions.invoke('send-investor-inquiry', {
        body: validatedData,
      });

      if (error) {
        throw new Error(error.message);
      }
      
      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Please check your information",
          description: "Some fields need your attention.",
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
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Join our journey and help{" "}
              <span className="gradient-text">grow the future of finance</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              U-topia is growing fast and we are always keen to speak to partners that share our vision. Let's speak today on how you can get involved:
            </p>
          </div>

          {/* Form or Thank You */}
          <div className="max-w-lg mx-auto">
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Thank you for reaching out!
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We've received your message and will get back to you shortly. Our team is excited to explore potential opportunities with you.
                </p>
                <Link to="/">
                  <Button variant="hero" size="lg">
                    Back to Home
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    placeholder="Enter your Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className={`bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company <span className="text-destructive">*</span></Label>
                  <Input
                    id="company"
                    placeholder="Enter your Company Name"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    required
                    className={`bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground ${errors.company ? "border-destructive" : ""}`}
                  />
                  {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-foreground">Title <span className="text-destructive">*</span></Label>
                  <Input
                    id="title"
                    placeholder="Enter your title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                    className={`bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground ${errors.title ? "border-destructive" : ""}`}
                  />
                  {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className={`bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-foreground">Mobile/Telegram <span className="text-destructive">*</span></Label>
                  <Input
                    id="mobile"
                    placeholder="Enter your Phone or Telegram"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    required
                    className={`bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground ${errors.mobile ? "border-destructive" : ""}`}
                  />
                  {errors.mobile && <p className="text-sm text-destructive">{errors.mobile}</p>}
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground">Are you interested in Crypto or Equity Investment? <span className="text-destructive">*</span></Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="crypto"
                        checked={formData.investmentTypes.includes("crypto")}
                        onCheckedChange={(checked) => handleInvestmentTypeChange("crypto", checked === true)}
                      />
                      <Label htmlFor="crypto" className="text-foreground cursor-pointer">Crypto</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="equity"
                        checked={formData.investmentTypes.includes("equity")}
                        onCheckedChange={(checked) => handleInvestmentTypeChange("equity", checked === true)}
                      />
                      <Label htmlFor="equity" className="text-foreground cursor-pointer">Equity</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="token-equity"
                        checked={formData.investmentTypes.includes("token-equity")}
                        onCheckedChange={(checked) => handleInvestmentTypeChange("token-equity", checked === true)}
                      />
                      <Label htmlFor="token-equity" className="text-foreground cursor-pointer">Token & Equity</Label>
                    </div>
                  </div>
                  {errors.investmentTypes && <p className="text-sm text-destructive">{errors.investmentTypes}</p>}
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
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorContact;
