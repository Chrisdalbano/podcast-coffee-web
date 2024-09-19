import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

function Navbar({ formRef }) {
  const handleClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="grid grid-cols-[2fr_1fr_1fr] border-b border-gray-800 max-lg:grid-cols-1 max-lg:border-none">
      <div className="items-left flex gap-4 border-r border-gray-800 max-lg:border-none ">
        <Logo />
      </div>
      <div className="flex items-center border-r border-gray-800 max-lg:border-none py-2 lg:px-8">
        <p>
          <span>Nourishing the mind & spirit since </span>
          <span className="italic">2024</span>.
        </p>
      </div>
      <div className="flex items-center max-lg:border-y max-lg:border-gray-800 py-2 lg:px-8">
        From thinkers to listeners.
      </div>
      <ul className="font-bold justify-between max-lg:col-span-1 flex items-right [&>*]:mx-2 col-span-3 border-t border-gray-800 max-lg:border-none py-2">
        <li>
          <ul className="flex gap-4 underline">
            <li>
              <Link to="/">Podcast</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </li>

        <li className="">
          <Link onClick={handleClick} className="text-white py-2 px-4 bg-black">
            Join
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
