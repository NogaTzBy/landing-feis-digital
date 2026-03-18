import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShaderStats from "@/components/ShaderStats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ShaderStats />
        <ContainerScroll>
          <Services />
        </ContainerScroll>
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
