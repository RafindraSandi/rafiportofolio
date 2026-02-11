import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('project');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-2">
              <p
                className={`text-lg font-medium ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Halo, saya
              </p>
              <h1
                className={`text-5xl md:text-6xl font-bold leading-tight ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Rafindra Sandi Putra Atmaja
              </h1>
            </div>

            <p
              className={`text-xl md:text-2xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Mahasiswa Informatika semester 8<br />
              Universitas Muhammadiyah Malang
            </p>

            <button
              onClick={scrollToProjects}
              className={`group px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/50'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl'
              }`}
            >
              Lihat Project
              <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={20} />
            </button>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${
                  darkMode ? 'bg-blue-600' : 'bg-blue-400'
                }`}
              ></div>
              <img
                src="/images/foto-diri.jpg"
                alt="Profile"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className={darkMode ? 'text-gray-400' : 'text-gray-600'} size={32} />
      </div>
    </section>
  );
}