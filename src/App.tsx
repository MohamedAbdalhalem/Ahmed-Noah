import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Testimonials from "./Components/Testimonials/Testimonials";
import Work from "./Components/Work/Work";


export default function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Work />
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}
