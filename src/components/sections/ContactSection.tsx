'use client';
import { useState } from 'react';

// Define the type for formData
interface FormData {
  name: string;
  email: string;
  services: string[]; // Explicitly type services as string[]
  phoneCode: string;
  phoneNumber: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    services: [], // Now correctly typed as string[]
    phoneCode: '',
    phoneNumber: '',
    message: '',
  });

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  return (
    <section className="container mx-auto px-4 md:px-[10%] py-12">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        {['Web Development', 'Mobile Apps', 'Digital Marketing'].map((service) => (
          <button
            key={service}
            onClick={() => handleServiceToggle(service)}
            className={`px-4 py-2 rounded-md text-white font-semibold transition-colors ${
              formData.services.includes(service)
                ? 'bg-teal-500 hover:bg-teal-600'
                : 'bg-dark-900 hover:bg-dark-800'
            }`}
          >
            {service}
          </button>
        ))}
      </div>
      <form className="max-w-2xl mx-auto bg-dark-900/50 backdrop-blur-md rounded-lg p-8 shadow-xl border border-gray-600/20">
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="mb-4 flex gap-4">
          <div className="w-1/3">
            <label className="block text-gray-400 mb-2">Phone Code</label>
            <input
              type="text"
              value={formData.phoneCode}
              onChange={(e) => setFormData((prev) => ({ ...prev, phoneCode: e.target.value }))}
              className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500"
              placeholder="+91"
            />
          </div>
          <div className="w-2/3">
            <label className="block text-gray-400 mb-2">Phone Number</label>
            <input
              type="text"
              value={formData.phoneNumber}
              onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
              className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-500 min-h-[150px]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white font-semibold py-3 rounded-md hover:bg-teal-600 transition-all"
        >
          Submit
        </button>
      </form>
    </section>
  );
}