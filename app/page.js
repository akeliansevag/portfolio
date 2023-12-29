import Header from "./components/homepage/Header";
import Banner from "./components/homepage/Banner";
import About from "./components/homepage/About";
import Skills from "./components/homepage/Skills";
import Education from "./components/homepage/Education";
import Experience from "./components/homepage/Experience";
import Portfolio from "./components/homepage/portfolio/Portfolio";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <Header />
      <About />
      <Skills />
      {/* <Experience /> */}
      {/* <Education />
      <Portfolio />
      <Footer /> */}
    </main>
  )
}
