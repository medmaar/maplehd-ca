'use client';

async function getEmailjs() {
  const mod = await import('@emailjs/browser');
  return mod.default;
}

import { useState, FormEvent } from 'react';

const SERVICE_ID = 'service_84i1c0s';
const TEMPLATE_ID = 'template_wsb6yh8';
const PUBLIC_KEY = 'Xviff5xDI5EWUdF9P';

interface FormData {
  firstName: string;
  whatsappNumber: string;
}


export default function WhatsAppContactContent() {
  const [formData, setFormData] = useState<FormData>({ firstName: '', whatsappNumber: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      
      const emailjs = await getEmailjs();
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        firstName: formData.firstName,
        whatsappNumber: formData.whatsappNumber,
        website: 'MapleHD',
        toEmail: 'help@maplehd.ca',
        message: `WhatsApp Contact Request\nName: ${formData.firstName}\nWhatsApp: ${formData.whatsappNumber}`,
      });

      setSubmitted(true);
      setFormData({ firstName: '', whatsappNumber: '' });
      
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "MapleHD", "item": "https://maplehd.ca"}, {"@type": "ListItem", "position": 2, "name": "Contact Us on WhatsApp", "item": "https://maplehd.ca/whatsapp-contact"}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Contact Us on WhatsApp", "url": "https://maplehd.ca/whatsapp-contact", "inLanguage": "en-CA", "dateModified": "2026-07-19", "isPartOf": {"@type": "WebSite", "name": "MapleHD", "url": "https://maplehd.ca"}}) }} />
    <main className="bg-gray-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">
            Contact via <span className="text-green-400">WhatsApp</span>
          </h1>
          <p className="text-gray-400 text-lg">
            We'll contact you on WhatsApp within 1 minute during business hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-900 border border-green-700 rounded-lg p-8 text-center">
            <p className="text-green-300 font-semibold text-lg">✓ Message Received!</p>
            <p className="text-gray-300 mt-2">We'll contact you on WhatsApp shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Your first name"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">WhatsApp Number (with country code)</label>
              <input
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleInputChange}
                placeholder="+1 416 555 1234"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              />
              <p className="text-xs text-gray-500 mt-1">Include your country code (e.g., +1 for Canada)</p>
            </div>

            {error && (
              <div className="mb-4 text-red-400 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 text-white font-bold py-3 rounded-lg transition"
            >
              {loading ? 'Sending...' : 'Contact via WhatsApp'}
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              We won't share your WhatsApp number with anyone.
            </p>
          </form>
        )}

        <div className="mt-8 text-center">
          <a href="/" className="text-gray-400 hover:text-white text-sm">
            ← Back to home
          </a>
        </div>
      </div>
    </main>
    </>
  );
}
