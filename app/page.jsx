import Image from "next/image";

import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
// Font files can be colocated inside of `pages`
import Skills from "@/components/Skills";
import Courses from "@/components/Courses";
import Certifications from "@/components/Certifications";
import Portfolios from "@/components/Portfolios";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Banner />
      <AboutMe />
      <Projects />
      <Skills />
      <Courses />
      <Certifications />
      <Portfolios />
      <Footer />
    </main>
  );
}
