'use client';
import Link from 'next/link';
import { useState, ChangeEvent } from 'react';

export default function CommentForm() {
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    agreeToPolicy: false,
  });
  const [formError, setFormError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { name, value } = target;

    // Handle checkbox separately
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');

    const { comment, name, email, agreeToPolicy } = formData;

    if (!comment || !name || !email) {
      setFormError('Please fill out all required fields.');
      return;
    }

    if (!agreeToPolicy) {
      setFormError('You must agree to the Privacy Policy to submit a comment.');
      return;
    }

    // Placeholder for form submission logic (e.g., send to API)
    console.log('Comment submitted:', formData);

    // Reset form after submission
    setFormData({
      comment: '',
      name: '',
      email: '',
      agreeToPolicy: false,
    });
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Leave a Reply</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-800 mb-2 font-semibold transition-all hover:border-b-2 hover:border-brand-blue">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-950 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue shadow-sm transition-all"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-800 mb-2 font-semibold transition-all hover:border-b-2 hover:border-brand-blue">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-dark-950 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue shadow-sm transition-all"
            />
          </div>
          {/* Comment */}
          <div className="md:col-span-2">
            <label htmlFor="comment" className="block text-gray-800 mb-2 font-semibold transition-all hover:border-b-2 hover:border-brand-blue">Comment*</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-dark-950 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue shadow-sm transition-all"
            />
          </div>
          {/* Checkbox */}
          <div className="md:col-span-2 flex items-center">
            <input
              type="checkbox"
              id="agreeToPolicy"
              name="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleChange}
              className="accent-brand-blue mr-2"
            />
            <label htmlFor="agreeToPolicy" className="text-gray-600">
              By using this form you agree that your personal data would be processed in accordance with our{' '}
              <Link href="/privacy-policy" className="text-brand-blue hover:underline">
                Privacy Policy
              </Link>.
            </label>
          </div>
          {/* Form Error */}
          {formError && (
            <div className="md:col-span-2">
              <p className="text-red-500 text-sm text-center">{formError}</p>
            </div>
          )}
          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-blue to-blue-700 text-white hover:bg-brand-blue/80 transition-all duration-300 font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}