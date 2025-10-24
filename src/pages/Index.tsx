import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingSkillsIcons from "@/components/FloatingSkillsIcons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FloatingSkillsIcons />
      <ScrollAnimatedSection><About /></ScrollAnimatedSection>
      <ScrollAnimatedSection><Experience /></ScrollAnimatedSection>
      <ScrollAnimatedSection><Projects /></ScrollAnimatedSection>
      <ScrollAnimatedSection><Skills /></ScrollAnimatedSection>
      <ScrollAnimatedSection><Leadership /></ScrollAnimatedSection>
      <Contact />
      <Footer />
    </div>
  );
};

const ScrollAnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default Index;
