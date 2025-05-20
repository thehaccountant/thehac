
import { Check } from 'lucide-react';
import CTAButton from './CTAButton';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  bulletPoints?: string[];
  className?: string;
}

const ServiceCard = ({
  title,
  subtitle,
  description,
  bulletPoints = [],
  className = '',
}: ServiceCardProps) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 ${className} animate-on-scroll`}>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-hac-blue dark:text-hac-lightblue font-medium mb-4">
        {subtitle}
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      
      {bulletPoints.length > 0 && (
        <ul className="mb-6 space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-hac-blue dark:text-hac-lightblue mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300 text-sm">{point}</span>
            </li>
          ))}
        </ul>
      )}
      
      <div className="flex justify-center mt-4">
        <CTAButton to="/contact" variant="outline" size="sm">
          Enquire Now
        </CTAButton>
      </div>
    </div>
  );
};

export default ServiceCard;
