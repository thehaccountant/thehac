
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-hac-darkblue/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/hacnobg1.png" 
                alt="HAC Logo" 
                className="h-12 w-auto mr-3"
              />
              <div className="hidden sm:block">
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  The Home for Accounting Consulting
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-hac-blue dark:hover:text-hac-lightblue ${
                  isActive(link.path)
                    ? "text-hac-blue dark:text-hac-lightblue border-b-2 border-hac-blue dark:border-hac-lightblue pb-1"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              asChild
              className="bg-gradient-to-r from-hac-blue to-hac-lightblue text-white hover:opacity-90 transition-opacity"
              size="sm"
            >
              <a href="tel:+27633816727" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <Button
              asChild
              size="icon"
              variant="outline"
              className="bg-gradient-to-r from-hac-blue to-hac-lightblue text-white border-none p-2 rounded-full hover:opacity-90"
            >
              <a href="tel:+27633816727" aria-label="Call us">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-hac-darkblue border-t border-gray-200 dark:border-gray-700 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive(link.path)
                      ? "bg-gray-100 dark:bg-gray-800 text-hac-blue dark:text-hac-lightblue"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
