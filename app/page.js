import Header from "./components/homepage/Header";
import Banner from "./components/homepage/Banner";
import About from "./components/homepage/About";
import Skills from "./components/homepage/Skills/Skills";

export default function Home() {
  return (
    <main>
      <Banner />
      <Header />
      <About />
      <Skills />
    </main>
  )
}
