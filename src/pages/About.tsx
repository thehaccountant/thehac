
import { useEffect } from 'react';
import CTAButton from '../components/CTAButton';
import { Check, Target, Users, Clock } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "About Us | HAC - The Home of Accounting Consulting";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about HAC - a South African financial services firm providing professional accounting support to businesses of all sizes.');
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

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, providing the highest quality service to our clients.',
      icon: <Check className="h-8 w-8 text-white" />
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest level of integrity and transparency in all our business dealings.',
      icon: <Target className="h-8 w-8 text-white" />
    },
    {
      title: 'Client Focus',
      description: 'Our clients are at the heart of everything we do. We listen to their needs and tailor our solutions accordingly.',
      icon: <Users className="h-8 w-8 text-white" />
    },
    {
      title: 'Efficiency',
      description: 'We value efficiency and timeliness, ensuring that all client work is completed promptly and accurately.',
      icon: <Clock className="h-8 w-8 text-white" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-gray-100 dark:from-hac-darkblue dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="gradient-text">HAC</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your trusted partner for financial services and business compliance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-on-scroll">
              <div className="bg-gradient-to-r from-hac-blue to-hac-lightblue p-1 rounded-xl">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-8">
                  <div className="mb-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-hac-blue to-hac-lightblue text-transparent bg-clip-text">
                      HAC
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      The Home of Accounting Consulting
                    </div>
                  </div>
                  
                  <p className="text-xl italic text-gray-600 dark:text-gray-300 mb-4">
                    "Every business — big or small — deserves professional accounting support."
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Our Mission</div>
                    <div className="text-hac-blue dark:text-hac-lightblue font-medium">
                      Your Home for Financial Services
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Who We <span className="gradient-text">Are</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                HAC is a South African financial services firm that believes every business — big or small — deserves professional accounting support. Our team consists of compliance specialists, finance experts, and business advisors working to help you grow with confidence.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We founded HAC with a simple mission: to make professional financial services accessible, understandable, and valuable to businesses of all sizes. Our focus is on building long-term relationships with our clients, becoming a trusted advisor for all financial matters.
              </p>
              
              <CTAButton to="/contact" size="md">
                Get to Know Us Better
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We are guided by a set of core values that define how we operate and serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden animate-on-scroll"
              >
                <div className="bg-gradient-to-r from-hac-blue to-hac-lightblue p-4 flex justify-center">
                  <div className="bg-white/20 rounded-full p-3">
                    {value.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Who We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We work with a diverse range of clients across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-on-scroll">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Startups
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                New businesses looking to establish proper financial systems from day one. We help with company registration, tax setup, and initial financial planning.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-hac-blue dark:text-hac-lightblue mr-2" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Company registration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-hac-blue dark:text-hac-lightblue mr-2" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Tax registration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-hac-blue dark:text-hac-lightblue mr-2" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Initial financial setup</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-on-scroll">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Small & Medium Businesses
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Established businesses seeking to optimize their financial operations and ensure full compliance with regulations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-hac-blue dark:text-hac-lightblue mr-2" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Bookkeeping & accounting</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-hac-blue dark:text-hac-lightblue mr-2" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Payroll management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-hac-blue dark:text-hac-lightblue mr-2" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Tax compliance & planning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-on-scroll">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Growing Enterprises
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Businesses expanding their operations who need scalable financial solutions and strategic guidance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-hac-blue dark:text-hac-lightblue mr-2" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Financial strategy development</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-hac-blue dark:text-hac-lightblue mr-2" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Custom compliance solutions</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-hac-blue dark:text-hac-lightblue mr-2" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Business growth advisory</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-hac-blue to-hac-lightblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Ready to work with us?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-on-scroll">
            Let's start a conversation about your financial needs.
          </p>
          
          <CTAButton 
            to="/contact" 
            variant="secondary" 
            size="lg"
            className="animate-on-scroll"
          >
            Contact Us Today
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default About;
