
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      navigate('/thank-you');
    }, 1500);
    
    // In a real implementation, you would send this data to a server
    // For example using fetch:
    /*
    fetch('your-form-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        recipient: 'info.thehacco@gmail.com',
      }),
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      navigate('/thank-you');
    })
    .catch(error => {
      setLoading(false);
      console.error('Error submitting form:', error);
    });
    */
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-hac-blue dark:focus:ring-hac-lightblue focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-hac-blue dark:focus:ring-hac-lightblue focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Phone Number (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-hac-blue dark:focus:ring-hac-lightblue focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          placeholder="Your phone number"
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Service Needed (optional)
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-hac-blue dark:focus:ring-hac-lightblue focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option value="">Select a service</option>
          <option value="Bookkeeping">Bookkeeping</option>
          <option value="Payroll Services">Payroll Services</option>
          <option value="Company Registrations">Company Registrations</option>
          <option value="VAT Registrations">VAT Registrations</option>
          <option value="Tax Submissions">Tax Submissions</option>
          <option value="COIDA Registrations">COIDA Registrations</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-hac-blue dark:focus:ring-hac-lightblue focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${
            errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center bg-gradient-to-r from-hac-blue to-hac-lightblue text-white py-3 px-6 rounded-md hover:opacity-90 transition-all font-medium focus:outline-none focus:ring-2 focus:ring-hac-blue focus:ring-offset-2 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </>
        )}
      </button>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
        We'll get back to you as soon as possible
      </p>
    </form>
  );
};

export default ContactForm;
