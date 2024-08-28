import NaviBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

const Home = () => {
  return (
    <>
      <NaviBar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default Home;
