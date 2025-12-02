import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />

      <footer style={{ textAlign: 'center', padding: '2rem', color: '#666', borderTop: '1px solid #222' }}>
        <p>&copy; {new Date().getFullYear()} Sushant S Mutta. All rights reserved.</p>
      </footer>
    </main>
  );
}
