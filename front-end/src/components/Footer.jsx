import { useState } from "react";
import Logo from "./Logo";
import Unsubscribe from "./Unsubscribe";

function Footer() {
  const [showUnsubscribe, setShowUnsubscribe] = useState(false);

  const toggleUnsubscribe = () => setShowUnsubscribe(!showUnsubscribe);

  return (
    <footer className="bg-[--var(--primary-color)] text-white py-8 relative">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8 px-6 border-t border-[var(--complementary-color)]">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <div className="mt-8 pt-6 flex flex-col text-sm text-[var(--complementary-color)] gap-4 items-center">
          <p>&copy; 2024 Existential Coffee Break. All rights reserved.</p>
          <p
            className="font-bold text-fluid-sm underline cursor-pointer"
            onClick={toggleUnsubscribe}
          >
            Unsubscribe?
          </p>
        </div>
      </div>

      {/* Conditionally Render Unsubscribe Form with Overlay */}
      {showUnsubscribe && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleUnsubscribe} // Close when clicking the overlay
        >
          <div
            className=" p-8 rounded-lg  w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside form
          >
            {/* Close Button */}
            <button
              className="absolute top-0 right-0 text-6xl text-[var(--primary-color)] hover:text-[var(--header-color)]"
              onClick={toggleUnsubscribe}
            >
              &times;
            </button>
            {/* Unsubscribe Form Component */}
            <Unsubscribe />
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
