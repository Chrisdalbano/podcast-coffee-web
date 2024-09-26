import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar({ jumpRefs }) {
  const handleScrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="grid grid-cols-[2fr_1fr_1fr] border-b border-[var(--contrast-color)] max-lg:grid-cols-1 max-lg:border-none">
      <div className="items-left flex gap-4 border-r border-[var(--contrast-color)] max-lg:border-none ">
        <Logo />
      </div>
      <div className="flex items-center border-r  text-fluid-base border-[var(--contrast-color)] max-lg:border-none  lg:px-8">
        <p>
          <span>Nourishing the mind & spirit since </span>
          <span className="italic">2024</span>.
        </p>
      </div>
      <div className="flex items-center max-lg:border-y text-fluid-base max-lg:border-[var(--contrast-color)]  lg:px-8">
        From thinkers to listeners.
      </div>
      <ul className="font-bold justify-between max-lg:col-span-1 flex items-right col-span-3 border-t border-[var(--contrast-color)] max-lg:border-none">
        <li>
          <ul className="flex gap-4 items-center h-full pl-4 max-lg:pl-0 underline">
            <li>
              {/* Scroll to the "Podcast" section */}
              <Link onClick={() => handleScrollTo(jumpRefs.podcastRef)}>
                Podcast
              </Link>
            </li>
            <li>
              {/* Scroll to the "About" section */}
              <Link onClick={() => handleScrollTo(jumpRefs.aboutRef)}>
                About
              </Link>
            </li>
          </ul>
        </li>

        <li className="">
          {/* Scroll to the "Form" section */}
          <Link
            onClick={() => handleScrollTo(jumpRefs.formRef)}
            className="text-[var(--primary-color)] py-2 block bg-[var(--contrast-color)] h-full px-8 "
          >
            Join
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
