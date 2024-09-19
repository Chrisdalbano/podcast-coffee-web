function Headline() {
  return (
    <section className=" h-[60dvh] flex flex-col   justify-evenly">
      <div className="  mt-10">
        <h1 className="text-4xl md:text-7xl lg:text-8xl my-2 font-bold flex flex-col items-center ">
          <span className="italic m-auto font-serif">Get </span>
          <span className="">Existential</span>
          <span className="italic  font-serif">In Your</span>
          <span>Coffee Break</span>
        </h1>
      </div>
      <div className="flex w-auto items-center space-x-2 mt-[15dvh] font-semibold">
        <h2 className="text-base lg:text-2xl">
          Have a Better Break. Stay Caffeinated, Listen to Philosophy
        </h2>
        <button className="  p-2 border border-gray-800 font-bold  bg-transparent">
          Sign Up
        </button>
      </div>
    </section>
  );
}

export default Headline;
