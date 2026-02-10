import { Mail, Phone, Instagram, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contacts = [
    {
      icon: <Phone size={28} />,
      label: 'WhatsApp',
      value: '085156351140',
      link: 'https://wa.me/6285156351140'
    },
    {
      icon: <Instagram size={28} />,
      label: 'Instagram',
      value: '@rafisndptraa__',
      link: 'https://instagram.com/rafisndptraa__'
    },
    {
      icon: <Mail size={28} />,
      label: 'Email',
      value: 'rafindrasandi26@gmail.com',
      link: 'mailto:rafindrasandi26@gmail.com'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Hubungi Saya
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p
            className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Mari terhubung dan berdiskusi tentang proyek Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div
                className={`p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-750 shadow-xl hover:shadow-2xl hover:shadow-blue-600/20'
                    : 'bg-gray-50 hover:bg-gray-100 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-4 rounded-full transition-all duration-300 ${
                      darkMode
                        ? 'bg-blue-600 text-white group-hover:bg-blue-500'
                        : 'bg-blue-600 text-white group-hover:bg-blue-700'
                    }`}
                  >
                    {contact.icon}
                  </div>
                </div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {contact.label}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {contact.value}
                </p>
                <div className="mt-4">
                  <span
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                      darkMode
                        ? 'text-blue-400 group-hover:text-blue-300'
                        : 'text-blue-600 group-hover:text-blue-700'
                    }`}
                  >
                    Hubungi
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`inline-block p-8 rounded-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Mari Berkolaborasi!
            </h3>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Saya terbuka untuk diskusi mengenai proyek, kolaborasi, atau peluang kerja.
              Jangan ragu untuk menghubungi saya melalui salah satu platform di atas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
