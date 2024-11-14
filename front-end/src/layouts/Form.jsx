import { forwardRef } from "react";
import FormComponent from "../components/FormComponent";

const Podcast = forwardRef((_props, ref) => {
  return (
    <section ref={ref} className="flex flex-wrap gap-x-8 mx-4 lg:mx-12">
      <div className=" flex-1 p-4 mx-0 my-auto">
        <p className="text-fluid-lg font-bold">
          Join now to start experiencing your Coffee Breaks like never ever
          before. <span className="italic">Immerse in the existentialism.</span>{" "}
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <FormComponent />
      </div>
      
    </section>
  );
});

Podcast.displayName = "Podcast";

export default Podcast;
