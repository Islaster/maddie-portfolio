function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-12 py-6 text-black bg-white">
      {/* Left: Logo */}
      <div className="h-20">
        <a href="#home">
          <img src="/navbar/logo.png" alt="logo" className="h-full" />
        </a>
      </div>

      {/* Right: Socials desktop */}
      <div className="hidden md:flex items-center space-x-4 text-sm font-semibold">
        <span>🌴 Los Angeles, CA</span>
        <a href="mailto:maddiehmhong@gmail.com" className="hover:underline">
          email
        </a>
        <a
          href="https://www.instagram.com/hmdehong"
          target="_blank"
          className="hover:underline"
        >
          insta
        </a>
        <a
          href="https://linkedin.com/in/maddiehong"
          target="_blank"
          className="hover:underline"
        >
          linkedin
        </a>
      </div>

      {/* Mobile-only contact link */}
      <div className="md:hidden">
        <a href="#connect" className="text-sm font-semibold hover:underline">
          contacts
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
