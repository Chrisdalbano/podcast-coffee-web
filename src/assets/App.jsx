import { useRef } from "react";
import Navbar from "../Components/Navbar";
import FormComponent from "../Components/FormComponent";
import Headline from "../Layouts/Headline";
import About from "../Layouts/About";

function App() {
  const formRef = useRef(null);

  return (
    <div className="p-6 lg:p-12">
      <Navbar formRef={formRef} /> {/* Passing the formRef to Navbar */}
      <Headline />
      <About />
      <FormComponent ref={formRef} /> {/* ref to FormComponent */}
    </div>
  );
}

export default App;
