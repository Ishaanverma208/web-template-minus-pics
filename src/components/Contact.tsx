import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: error.message || "Please try again or email me directly at ishaanverma208@gmail.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ishaanverma208@gmail.com",
      href: "mailto:ishaanverma208@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9161479852",
      href: "tel:+919161479852"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Ishaanverma208",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ishaan-verma-b47146305/",
      color: "hover:text-accent"
    }
  ];

  return (
    <section ref={ref} id="contact" className={`py-32 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-20 left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-left mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Let's connect! I'm always open to discussing new opportunities, collaborations, or just having a chat about tech
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="p-8 bg-card border-border hover-glow">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card border-border hover-glow">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center border border-border hover:border-primary/50 hover-scale hover:shadow-[0_12px_40px_hsl(217_60%_55%/0.4)] ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently seeking full-time opportunities in AI/ML, Data Analytics, and Software Development. If you have an exciting project or role, let's talk!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-8 md:p-10 bg-card border-border hover-glow">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background border-border focus:border-primary transition-colors"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background border-border focus:border-primary transition-colors"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-background border-border focus:border-primary transition-colors"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover-lift shadow-lg hover:shadow-[0_20px_60px_-10px_hsl(217_60%_55%/0.6)]"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
