import { forwardRef } from "react";

const FormComponent = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="join_form"
      className="border-black border-2 bg-[#1C1C1C]"
    >
      <form className="flex flex-col">
        <label className="text-white p-2">Join Now!</label>
        <input type="text" className="m-2 p-2" placeholder="Name" />
        <input type="text" className="m-2 p-2" placeholder="Email" />
        <button type="submit" className="text-white m-2 p-2">
          Sign Up
        </button>
      </form>
    </div>
  );
});

export default FormComponent;
