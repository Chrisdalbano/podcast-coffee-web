import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-[--var(--primary-color)] text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8 px-6 border-t border-[var(--complementary-color)]">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="mt-8 pt-6  text-sm text-[var(--complementary-color)]">
          <p>&copy; 2024 Existential Coffee Break. All rights reserved.</p>
        </div>
        {/* Navigation Links */}

        {/* Social Media or Other Info */}
      </div>

      {/* Footer Bottom Section */}
    </footer>
  );
}

export default Footer;
