import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex pt-8 pb-2 mx-12 border-b-4 border-gray-800 justify-between">
      <div className="flex gap-4 ">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
      </div>

      <Link to="/" className="text-white py-1 px-4 bg-black">Join</Link>
    </nav>
  );
}

export default Navbar;
