import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="flex gap-4 pt-8 pb-2 mx-12 border-b-4 border-gray-800">
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Join</Link>
    </nav>
  );
}

export default Navbar;