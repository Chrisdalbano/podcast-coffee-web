import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../src/components/Navbar";
import FormSection from "../src/layouts/Form";
import Headline from "./layouts/Headline";
import About from "./layouts/About";
import Episodes from "./layouts/Episodes";
import Footer from "./components/Footer";

function App() {
  const formRef = useRef(null);
  const aboutRef = useRef(null);
  const podcastRef = useRef(null);

  const { ref: aboutInViewRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });
  const { ref: podcastInViewRef, inView: podcastInView } = useInView({
    triggerOnce: true,
  });
  const { ref: formInViewRef, inView: formInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="scroll-container">
      <div className="scroll-section">
        <Navbar jumpRefs={{ formRef, aboutRef, podcastRef }} />

        <Headline />
      </div>

      {/* About Section */}
      <div
        ref={aboutInViewRef}
        className={`scroll-section fade-in ${aboutInView ? "show" : ""}`}
      >
        <About ref={aboutRef} />
      </div>

      {/* Episodes Section */}
      <div
        ref={podcastInViewRef}
        className={`scroll-section fade-in ${podcastInView ? "show" : ""}`}
      >
        <Episodes ref={podcastRef} />
      </div>

      {/* Form Section */}
      <div
        ref={formInViewRef}
        className={`scroll-section fade-in ${formInView ? "show" : ""}`}
      >
        <FormSection ref={formRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
