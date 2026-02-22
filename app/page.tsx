import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import Footer from "@/components/main/Footer";
import Contact from "@/components/main/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <Experience />
        {/* Sections Zoho retirées */}
        {/* <ZohoJourney /> */}
        {/* <ZohoProjects /> */}
        <Encryption />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
