import Header from "./components/Homepage/Header";
import Banner from "./components/Homepage/Banner";
import About from "./components/Homepage/About";
import Skills from "./components/Homepage/Skills/Skills";
import Education from "./components/Homepage/Education/Education";
import Experience from "./components/Homepage/Experience/Experience";
import Portfolio from "./components/Homepage/Portfolio/Portfolio";

export default function Home() {
  return (
    <main>
      <Banner />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
    </main>
  )
}
