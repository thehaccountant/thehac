
import { useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Contact Us | HAC - The Home of Accounting Consulting";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact HAC for expert accounting, tax, payroll & business compliance services. Email: info.thehacco@gmail.com. Phone: +27 63 381 6727.');
    }

    // Animation for elements with animate-on-scroll class
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight - 100 && elementBottom > 0;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initial check for elements in viewport
    animateOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-gray-100 dark:from-hac-darkblue dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're ready to help you succeed with your financial and compliance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3 animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact <span className="gradient-text">Information</span>
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Email Us
                  </h3>
                  <a 
                    href="mailto:info.thehacco@gmail.com"
                    className="flex items-center text-hac-blue dark:text-hac-lightblue hover:underline"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    info.thehacco@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Call or WhatsApp Us
                  </h3>
                  <a 
                    href="tel:+27633816727"
                    className="flex items-center text-hac-blue dark:text-hac-lightblue hover:underline"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    +27 63 381 6727
                  </a>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Our Response Times
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Email Inquiries</span>
                      <span className="text-gray-900 dark:text-gray-100 font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Phone Calls</span>
                      <span className="text-gray-900 dark:text-gray-100 font-medium">Business hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Urgent Matters</span>
                      <span className="text-gray-900 dark:text-gray-100 font-medium">Priority handling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3 animate-on-scroll">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
