import { useRef } from "react";
import Navbar from "../src/components/Navbar";
import FormComponent from "./components/FormComponent";
import Headline from "./layouts/Headline";
import About from "./layouts/About";
import Episodes from "./layouts/Episodes";

function App() {
  const formRef = useRef(null);

  return (
    <div className="p-4 lg:pt-8 lg:px-16 space-y-8">
      <Navbar formRef={formRef} /> {/* Passing the formRef to Navbar */}
      <Headline />
      <About />
      <Episodes />
      <FormComponent ref={formRef} /> {/* ref to FormComponent */}
    </div>
  );
}

export default App;
