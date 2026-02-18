
import { Link } from "react-router-dom";
import { Mail, Phone, Home, Check, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const businessHours = [
    { day: "Monday", hours: "9 am–5 pm" },
    { day: "Tuesday", hours: "9 am–5 pm" },
    { day: "Wednesday", hours: "9 am–5 pm" },
    { day: "Thursday", hours: "9 am–5 pm" },
    { day: "Friday", hours: "9 am–5 pm" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/hacnobg1.png" 
                alt="HAC Logo" 
                className="h-12 w-auto mb-2"
              />
              <div className="text-sm text-gray-600 dark:text-gray-400">
                The Home for Accounting Consulting
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Your Home for Financial Services - expert accounting, tax, payroll & business compliance services.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+27633816727"
                aria-label="Call us"
                className="text-gray-600 hover:text-hac-blue dark:text-gray-400 dark:hover:text-hac-lightblue transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:info.thehacco@gmail.com"
                aria-label="Email us"
                className="text-gray-600 hover:text-hac-blue dark:text-gray-400 dark:hover:text-hac-lightblue transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-hac-blue dark:text-gray-400 dark:hover:text-hac-lightblue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-hac-blue dark:text-gray-400 dark:hover:text-hac-lightblue transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-hac-blue dark:text-gray-400 dark:hover:text-hac-lightblue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-hac-blue dark:text-gray-400 dark:hover:text-hac-lightblue transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-hac-blue dark:text-hac-lightblue" />
                <span className="text-gray-600 dark:text-gray-400">Bookkeeping</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-hac-blue dark:text-hac-lightblue" />
                <span className="text-gray-600 dark:text-gray-400">Payroll Services</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-hac-blue dark:text-hac-lightblue" />
                <span className="text-gray-600 dark:text-gray-400">Company Registrations</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-hac-blue dark:text-hac-lightblue" />
                <span className="text-gray-600 dark:text-gray-400">Tax Submissions</span>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              <span className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-hac-blue dark:text-hac-lightblue" />
                Business Hours
              </span>
            </h3>
            <ul className="space-y-2">
              {businessHours.map((schedule) => (
                <li key={schedule.day} className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{schedule.day}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} HAC (The Home of Accounting Consulting). All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="text-sm text-gray-600 hover:text-hac-blue dark:text-gray-400 dark:hover:text-hac-lightblue transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/services"
                className="text-sm text-gray-600 hover:text-hac-blue dark:text-gray-400 dark:hover:text-hac-lightblue transition-colors"
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
