
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Phone, Mail, ArrowRight } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "HAC - Your Home for Financial Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert accounting, tax, payroll & business compliance services at HAC - The Home of Accounting Consulting.');
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

  const services = [
    {
      title: 'Bookkeeping',
      subtitle: 'HAC Finance Solutions',
      description: 'Professional bookkeeping services to keep your financial records accurate and audit-ready.',
    },
    {
      title: 'Payroll Services',
      subtitle: 'HAC Payroll Pros',
      description: 'End-to-end payroll solutions including payslips, compliance, and employee tax submissions.',
    },
    {
      title: 'Company Registrations',
      subtitle: 'CIPC & SARS',
      description: 'New company registrations and amendments handled smoothly through CIPC with zero hassle.',
    },
    {
      title: 'Tax Compliance',
      subtitle: 'SARS, VAT, PAYE, UIF',
      description: 'Stay compliant with all tax requirements and avoid penalties with our expert tax services.',
    },
  ];

  const testimonials = [
    {
      quote: "Professional and fast service every time!",
      author: "Sipho M."
    },
    {
      quote: "Helped me register my business and file my tax without stress.",
      author: "Nomsa K."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-gray-100 dark:from-hac-darkblue dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="animate-fade-in">
                <div className="mb-2 text-hac-blue dark:text-hac-lightblue font-medium">
                  Welcome to HAC
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                  Your Home for <span className="gradient-text">Financial Services</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                  Expert Accounting, Tax, Payroll & Business Compliance Services — All Under One Roof.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <CTAButton 
                    href="tel:+27633816727" 
                    size="lg" 
                    icon={<Phone className="h-5 w-5" />}
                  >
                    Book a Consultation
                  </CTAButton>
                  
                  <CTAButton 
                    to="/contact" 
                    variant="outline" 
                    size="lg" 
                    icon={<Mail className="h-5 w-5" />}
                  >
                    Contact Us
                  </CTAButton>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 animate-fade-in">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
                <div className="mb-6">
                  <div className="text-2xl font-bold bg-gradient-to-r from-hac-blue to-hac-lightblue text-transparent bg-clip-text">
                    HAC
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    The Home of Accounting Consulting
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  At HAC (The Home of Accounting Consulting), we simplify your financial world so you can focus on what matters most — growing your business. Whether you're a startup, SME, or established business, our tailored solutions help you stay compliant, efficient, and profitable.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
                    Need expert financial guidance?
                  </div>
                  <a
                    href="tel:+27633816727"
                    className="flex items-center text-hac-blue dark:text-hac-lightblue hover:underline"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +27 63 381 6727
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive financial and compliance solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                className="animate-on-scroll"
              />
            ))}
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <Link 
              to="/services" 
              className="inline-flex items-center text-hac-blue dark:text-hac-lightblue hover:underline font-medium"
            >
              View All Services
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Why Choose <span className="gradient-text">HAC</span>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We believe that every business deserves professional accounting and financial support. Our team of experts is committed to helping you navigate the complexities of finance and compliance.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 mr-4 bg-hac-blue/10 dark:bg-hac-lightblue/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-hac-blue dark:text-hac-lightblue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Expert Team</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Our team of qualified professionals has years of experience in accounting and financial services.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 mr-4 bg-hac-blue/10 dark:bg-hac-lightblue/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-hac-blue dark:text-hac-lightblue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Tailored Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      We customize our services to meet the unique needs of your business.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 mr-4 bg-hac-blue/10 dark:bg-hac-lightblue/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-hac-blue dark:text-hac-lightblue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Timely Service</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      We understand the importance of meeting deadlines and provide prompt service.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 animate-on-scroll">
              {/* Testimonials */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  What Our Clients Say
                </h3>
                
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index} 
                      className="p-4 border-l-4 border-hac-blue dark:border-hac-lightblue bg-gray-50 dark:bg-gray-800 rounded-r-lg"
                    >
                      <p className="italic text-gray-600 dark:text-gray-300 mb-2">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        — {testimonial.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-hac-blue to-hac-lightblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Need help with finance or compliance?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-on-scroll">
            Let us do the hard work so you can focus on growing your business.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <CTAButton 
              href="tel:+27633816727" 
              variant="secondary" 
              size="lg" 
              icon={<Phone className="h-5 w-5" />}
            >
              +27 63 381 6727
            </CTAButton>
            
            <CTAButton 
              href="mailto:info.thehacco@gmail.com" 
              variant="secondary" 
              size="lg" 
              icon={<Mail className="h-5 w-5" />}
            >
              info.thehacco@gmail.com
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
