import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

interface ContactSectionProps {
  visibleElements: Set<string>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ visibleElements }) => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [hasAnimatedHeader, setHasAnimatedHeader] = useState(false);
  const [hasAnimatedContent, setHasAnimatedContent] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita il comportamento predefinito del form
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xyzjoyyd', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage(true); // Mostra il messaggio di successo
        form.reset(); // Resetta il form
      } else {
        console.error('Errore durante invio del form');
      }
    } catch (error) {
      console.error('Errore di rete:', error);
    }
  };

  useEffect(() => {
    if (visibleElements.has('contact-header') && !hasAnimatedHeader) {
      setHasAnimatedHeader(true);
    }
    if (visibleElements.has('contact-content') && !hasAnimatedContent) {
      setHasAnimatedContent(true);
    }
  }, [visibleElements, hasAnimatedHeader, hasAnimatedContent]);

  return (
    <section id="contact" className="py-20 border-t-8 border-black bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            hasAnimatedHeader ? 'animate-slide-up' : ''
          }`}
          id="contact-header"
        >
          <h2 className="text-6xl font-black mb-4">CONTACT</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 delay-200 ${
            hasAnimatedContent ? 'animate-slide-up' : ''
          }`}
          id="contact-content"
        >
          <div>
            <h3 className="text-2xl font-black mb-6">GET IN TOUCH</h3>
            <p className="text-lg font-light mb-6">
              Ready to work together? Let's create something extraordinary.
            </p>

            <div className="flex gap-4 mb-8">
              <a href="mailto:brtsml@pm.me" className="bg-white text-black p-4 hover:bg-gray-200 transition-all duration-200">
                <Mail size={24} />
              </a>
              <a href="https://github.com/alienpingu" className="bg-white text-black p-4 hover:bg-gray-200 transition-all duration-200">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sbertocco/" className="bg-white text-black p-4 hover:bg-gray-200 transition-all duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  className="w-full p-4 bg-white text-black border-2 border-white focus:border-gray-300 outline-none font-mono"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  className="w-full p-4 bg-white text-black border-2 border-white focus:border-gray-300 outline-none font-mono"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  rows={4}
                  className="w-full p-4 bg-white text-black border-2 border-white focus:border-gray-300 outline-none font-mono resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black p-4 font-black hover:bg-gray-200 transition-all duration-200"
              >
                SEND MESSAGE
              </button>
              {successMessage && (
                <p className="text-green-500 mt-4">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
