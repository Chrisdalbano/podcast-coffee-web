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
    <div className="mx-4 sm:mx-6 md:mx-2 lg:pt-8 lg:px-16 space-y-4">
      <Navbar jumpRefs={{ formRef, aboutRef, podcastRef }} />
      <Headline />

      {/* About Section */}
      <div
        ref={aboutInViewRef}
        className={`fade-in ${aboutInView ? "show" : ""}`}
      >
        <About ref={aboutRef} />
      </div>

      {/* Episodes Section */}
      <div
        ref={podcastInViewRef}
        className={`fade-in ${podcastInView ? "show" : ""}`}
      >
        <Episodes ref={podcastRef} />
      </div>

      {/* Form Section */}
      <div
        ref={formInViewRef}
        className={`fade-in ${formInView ? "show" : ""}`}
      >
        <FormSection ref={formRef} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
