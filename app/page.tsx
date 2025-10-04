import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import ZohoJourney from "@/components/main/ZohoJourney";
import ZohoProjects from "@/components/main/ZohoProjects";
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
        <ZohoJourney />
        <ZohoProjects />
        <Encryption />
        <Projects />
        {/* Section contact temporairement masquée */}
        {/* <Contact /> */}
        <Footer />
      </div>
    </main>
  );
}
