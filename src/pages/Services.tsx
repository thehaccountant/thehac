import { useEffect } from 'react';
import { Mail, FileText, Users, Check, Calendar } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Services = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Our Services | HAC - The Home of Accounting Consulting";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive accounting services including bookkeeping, payroll services, company registrations, and tax submissions by HAC.');
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

  const serviceCategories = [
    {
      id: 'bookkeeping',
      title: 'Bookkeeping Services',
      subtitle: 'HAC Finance Solutions',
      description: 'Streamline your finances today!',
      content: 'Our experienced team provides accurate and timely bookkeeping to keep your records audit-ready.',
      icon: <FileText className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'Monthly financial statements',
        'Balance sheet preparation',
        'Income statement preparation',
        'Accounts payable management',
        'Accounts receivable management'
      ]
    },
    {
      id: 'payroll',
      title: 'Payroll Services',
      subtitle: 'HAC Payroll Pros',
      description: 'Ensure your team gets paid on time, every time.',
      content: 'We offer end-to-end payroll solutions including payslips, compliance, and employee tax submissions.',
      icon: <Users className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'Payslip generation',
        'Statutory deductions',
        'PAYE submissions',
        'UIF registrations',
        'Employee tax certificates (IRP5/IT3a)'
      ]
    },
    {
      id: 'registration',
      title: 'Company Registrations & Amendments',
      subtitle: 'HAC Registration Experts',
      description: 'Start your business with confidence.',
      content: 'We handle new registrations and amendments through CIPC with zero hassle.',
      icon: <Check className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'New company registrations (CIPC)',
        'Company amendments (CIPC)',
        'Director changes',
        'Address changes',
        'Company name changes'
      ]
    },
    {
      id: 'annual-returns',
      title: 'Annual Return Submissions',
      subtitle: 'HAC Compliance Hub',
      description: 'Stay compliant with ease.',
      content: 'We submit annual returns to CIPC accurately and on time to avoid penalties.',
      icon: <Calendar className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'CIPC annual return submissions',
        'Compliance status tracking',
        'Financial statements preparation',
        'Deadline management',
        'Penalty avoidance strategies'
      ]
    },
    {
      id: 'vat',
      title: 'VAT Registrations',
      subtitle: 'HAC VAT Wizards',
      description: 'Unlock VAT benefits today.',
      content: 'We help you register and manage VAT via SARS eFiling effortlessly.',
      icon: <FileText className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'VAT registration',
        'VAT return submissions',
        'VAT calculations',
        'VAT compliance review',
        'VAT planning and strategy'
      ]
    },
    {
      id: 'paye-uif',
      title: 'PAYE & UIF',
      subtitle: 'HAC Tax Essentials',
      description: 'Stay ahead of tax obligations.',
      content: 'Complete PAYE & UIF registrations done for you — fast and correctly.',
      icon: <FileText className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'PAYE registration with SARS',
        'UIF registration',
        'Monthly submissions',
        'Compliance monitoring',
        'Employee registrations/deregistrations'
      ]
    },
    {
      id: 'tax',
      title: 'Taxation Submissions',
      subtitle: 'HAC Tax Masters',
      description: 'Maximize your tax efficiency.',
      content: 'From individuals to companies, we handle tax return submissions and guidance.',
      icon: <FileText className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'Individual tax returns',
        'Company tax returns',
        'Provisional tax submissions',
        'Tax planning and advisory',
        'SARS dispute resolution'
      ]
    },
    {
      id: 'compliance',
      title: 'Tax Compliance Status Pin',
      subtitle: 'HAC Compliance Assurance',
      description: 'Ensure your business stays in good standing.',
      content: 'We\'ll help you generate your compliance status pin for tenders and banking.',
      icon: <Check className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'TCS pin generation',
        'Compliance status verification',
        'Tax clearance certificates',
        'Tender compliance',
        'Banking requirements compliance'
      ]
    },
    {
      id: 'coida',
      title: 'COIDA Registrations + LGS',
      subtitle: 'HAC COIDA Solutions',
      description: 'Secure your workplace and protect your staff.',
      content: 'We register you with the Compensation Fund and get your Letter of Good Standing.',
      icon: <Users className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'COIDA registrations',
        'Annual return submissions',
        'Letter of Good Standing',
        'Compliance monitoring',
        'Claims management assistance'
      ]
    },
    {
      id: 'customs',
      title: 'Customs Registration',
      subtitle: 'HAC Customs Concierge',
      description: 'Expand globally.',
      content: 'Register for Import & Export with SARS and scale your business with ease.',
      icon: <FileText className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'Import registrations',
        'Export registrations',
        'Customs compliance',
        'SARS customs liaison',
        'Documentation assistance'
      ]
    },
    {
      id: 'csd',
      title: 'CSD Registrations',
      subtitle: 'HAC Tender Advantage',
      description: 'Unlock tender opportunities.',
      content: 'Let us register your business on the CSD database for government work.',
      icon: <Check className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'CSD registration',
        'Profile setup',
        'Documentation verification',
        'Renewal management',
        'Status monitoring'
      ]
    },
    {
      id: 'sars',
      title: 'SARS Company Registrations',
      subtitle: 'HAC Corporate Setup Solutions',
      description: 'Register with SARS easily.',
      content: 'Company tax registration and SARS eFiling setup made easy.',
      icon: <FileText className="h-8 w-8 text-hac-blue dark:text-hac-lightblue" />,
      features: [
        'Company income tax registration',
        'eFiling profile setup',
        'Representative user registration',
        'Tax number verification',
        'Compliance monitoring'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-gray-100 dark:from-hac-darkblue dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Expert accounting, tax, payroll & business compliance services tailored to your needs.
            </p>
            
            <CTAButton 
              to="/contact" 
              variant="primary" 
              size="lg" 
              icon={<Mail className="h-5 w-5" />}
              className="px-8 py-2.5 shadow-lg"
            >
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {serviceCategories.map((category, index) => (
              <div 
                key={category.id} 
                id={category.id}
                className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } animate-on-scroll rounded-2xl p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors`}
              >
                <div className="md:w-1/3 flex flex-col">
                  <div className="mb-4 p-4 bg-gradient-to-br from-hac-blue/10 to-hac-lightblue/10 dark:from-hac-blue/20 dark:to-hac-lightblue/20 inline-flex rounded-xl">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                  <p className="text-hac-blue dark:text-hac-lightblue font-medium mb-4">
                    {category.subtitle}
                  </p>
                  <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    {category.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {category.content}
                  </p>
                  <div className="mt-auto">
                    <CTAButton 
                      to="/contact" 
                      variant="primary" 
                      size="sm"
                      className="rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      Enquire Now
                    </CTAButton>
                  </div>
                </div>
                
                <div className="md:w-2/3 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    What We Offer:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-hac-blue dark:text-hac-lightblue mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-end">
                    <a 
                      href="mailto:info.thehacco@gmail.com" 
                      className="text-hac-blue dark:text-hac-lightblue hover:underline flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/50"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      <span>Email for Details</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-hac-blue to-hac-lightblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a consultation and discover how we can help your business thrive.
          </p>
          
          <CTAButton 
            to="/contact" 
            variant="secondary" 
            size="lg"
            className="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Contact Us Now
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default Services;
