import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import TimelineComponent from "@/components/TimelineComponent";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className='w-full h-full'>
        <HeroBanner />
        <Skills />
        <TimelineComponent />
        <BlogSection />
      </section>
      <Footer />
    </>
  );
}
