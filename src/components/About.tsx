import { GraduationCap, Code, Smartphone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
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

  return (
    <section
      id="about"
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
            Tentang Saya
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-600">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Pendidikan
                  </h3>
                  <p
                    className={`text-lg ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    Semester 8 - Program Studi Informatika
                  </p>
                  <p
                    className={`font-semibold ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    Universitas Muhammadiyah Malang
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-600">
                  <Code className="text-white" size={28} />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Web Development
                  </h3>
                  <p
                    className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    Membangun aplikasi web modern dengan teknologi terkini dan best practices
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-600">
                  <Smartphone className="text-white" size={28} />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Mobile Development
                  </h3>
                  <p
                    className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    Mengembangkan aplikasi mobile yang responsif dan user-friendly
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div
              className={`p-8 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Profil Singkat
              </h3>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Saya adalah mahasiswa Informatika semester 8 di Universitas Muhammadiyah Malang yang memiliki
                passion dalam pengembangan software, khususnya di bidang web dan mobile development.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Saya selalu antusias untuk mempelajari teknologi baru dan mengaplikasikan ilmu yang telah
                dipelajari dalam proyek-proyek yang meaningful dan bermanfaat bagi masyarakat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
