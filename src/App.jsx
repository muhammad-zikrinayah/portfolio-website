import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import ScrollWrapper from "./assets/ScrollWrapper";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/gallery";

function App() {
  return (
    <>
      <Navbar />
      <ScrollWrapper>
        <Home />
        <About />
        <Skill />
        <Project />
        <Gallery />
        <Contact />
        <Footer />
      </ScrollWrapper>
    </>
  );
}

export default App;
