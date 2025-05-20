
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Home, Phone } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const ThankYou = () => {
  useEffect(() => {
    // Update page title
    document.title = "Thank You | HAC - The Home of Accounting Consulting";
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-br from-white to-gray-100 dark:from-hac-darkblue dark:to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-lg mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-to-r from-hac-blue to-hac-lightblue p-4 rounded-full">
              <Check className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Thank You!
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Your message has been sent successfully. We appreciate you contacting HAC, and we'll be in touch shortly.
          </p>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              What happens next?
            </h2>
            
            <ol className="space-y-4 text-left">
              <li className="flex items-start">
                <div className="bg-hac-blue/10 dark:bg-hac-lightblue/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-hac-blue dark:text-hac-lightblue font-medium text-sm">1</span>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our team will review your inquiry within 24 hours.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-hac-blue/10 dark:bg-hac-lightblue/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-hac-blue dark:text-hac-lightblue font-medium text-sm">2</span>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">
                    We'll contact you via email or phone to discuss your needs in more detail.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-hac-blue/10 dark:bg-hac-lightblue/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-hac-blue dark:text-hac-lightblue font-medium text-sm">3</span>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">
                    We'll provide a customized solution tailored to your specific requirements.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <CTAButton 
              to="/" 
              variant="outline" 
              size="md" 
              icon={<Home className="h-5 w-5" />}
            >
              Return to Home
            </CTAButton>
            
            <CTAButton 
              href="tel:+27633816727" 
              variant="primary" 
              size="md" 
              icon={<Phone className="h-5 w-5" />}
            >
              Call Us Now
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
