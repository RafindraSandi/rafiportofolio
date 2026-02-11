import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectsProps {
  darkMode: boolean;
}

const projects = [
  {
    id: 1,
    title: 'Aplikasi El Movie',
    description: 'El Movie adalah aplikasi yang memudahkan pengguna menyimpan dan mengelola daftar film favorit dalam satu tempat secara praktis.',
    fullDescription: 'El Movie adalah aplikasi daftar film favorit yang membantu pengguna menyimpan dan mengelola koleksi film kesukaan mereka dalam satu tempat. Melalui aplikasi ini, pengguna dapat menambahkan film favorit ke dalam daftar pribadi sehingga film-film pilihan lebih mudah diingat, diakses, dan dikelola kapan saja. El Movie dirancang dengan tampilan sederhana dan mudah digunakan untuk mendukung pengalaman pengguna dalam mengorganisir film favorit secara praktis.',
    tech: ['Dart', 'Flutter', 'Firebase'],
    images: [
      '/images/El_movie_1.jpeg',
      '/images/El Movie 2.jpeg',
      '/images/El Movie 3.jpeg',
      '/images/El Movie 4.jpeg',
      '/images/El Movie 5.jpeg'
    ],
    image: '/images/El_Movie_Cover.jpeg'
  },
  {
    id: 2,
    title: 'Website Toko Lokal',
    description: 'Toko Lokal adalah website e-commerce yang menyediakan berbagai produk lokal berkualitas, mulai dari fashion hingga aksesoris, dengan pengalaman belanja yang mudah dan nyaman.',
    fullDescription: 'Toko Lokal merupakan platform e-commerce yang berfokus pada penjualan produk-produk lokal dari berbagai kategori, seperti fashion dan aksesoris. Website ini hadir untuk mendukung pelaku usaha lokal dengan menyediakan wadah digital yang memudahkan mereka menjangkau lebih banyak pelanggan. Dengan tampilan yang modern, navigasi yang sederhana, dan proses belanja yang praktis, Toko Lokal bertujuan memberikan pengalaman berbelanja yang aman, nyaman, dan terpercaya bagi pengguna.',
    tech: ['Typescript', 'React', 'Tailwind CSS', 'Supabase'],
    images: [
      '/images/toko1.png',
      '/images/toko2.png',
      '/images/toko3.png',
      '/images/toko4.png',
      '/images/toko5.png',
      '/images/toko6.png',
      '/images/toko7.png'
    ],
    image: '/images/toko2.png'
  },
  {
    id: 3,
    title: 'Website Urbania Properti',
    description: 'Urbania Properti adalah website properti di Malang yang menawarkan rumah dan villa dengan lokasi strategis untuk hunian maupun investasi.',
    fullDescription: 'Urbania Properti merupakan platform properti yang berfokus pada penyediaan informasi dan penawaran rumah serta villa di wilayah Malang. Website ini menghadirkan berbagai pilihan properti dengan lokasi strategis, desain modern, dan lingkungan yang nyaman, sehingga cocok untuk kebutuhan hunian maupun investasi. Dengan tampilan yang informatif dan mudah digunakan, Urbania Properti membantu calon pembeli menemukan properti yang sesuai dengan kebutuhan dan preferensi mereka secara cepat dan terpercaya.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    images: [
      '/images/urbania1.png',
      '/images/urbania2.png',
      '/images/urbania3.png',
      '/images/urbania4.png',
      '/images/urbania5.png',
      '/images/urbania6.png'
    ],
    image: '/images/urbania1.png'
  },
  {
    id: 4,
    title: 'Aplikasi Shoopedia',
    description: 'Shoopedia adalah aplikasi e-commerce yang memungkinkan pengguna melakukan pembelian dan penjualan barang dengan mudah dan aman dalam satu platform.',
    fullDescription: 'Shoopedia merupakan aplikasi e-commerce yang dirancang untuk memfasilitasi pengguna dalam melakukan transaksi jual beli barang secara online. Melalui aplikasi ini, pengguna dapat membeli berbagai produk sesuai kebutuhan maupun menjual barang yang mereka miliki dengan proses yang praktis. Dengan antarmuka yang sederhana, fitur yang lengkap, serta sistem transaksi yang aman, Shoopedia hadir untuk memberikan pengalaman berbelanja dan berjualan yang nyaman layaknya platform e-commerce pada umumnya.',
    tech: ['Dart', 'Flutter', 'Javascript', 'Firebase', 'Node.js'],
    images: [
      '/images/shoopedia1.jpg',
      '/images/shoopedia2.jpg',
      '/images/shoopedia3.jpg',
      '/images/shoopedia4.jpg',
      '/images/shoopedia5.jpg',
      '/images/shoopedia6.jpg',
      '/images/shoopedia7.jpg',
      '/images/shoopedia8.jpg',
      '/images/shoopedia9.jpg',
      '/images/shoopedia10.jpg',
      '/images/shoopedia11.jpg',
      '/images/shoopedia12.jpg',
      '/images/shoopedia13.jpg',
      '/images/shoopedia14.jpg',
      '/images/shoopedia15.jpg'
    ],
    image: '/images/shoopedia1.jpg'
  },
  {
    id: 5,
    title: 'Website HomeSpace',
    description: 'HomeSpace adalah website properti yang menyediakan berbagai pilihan properti di Blitar, Bali, dan Papua untuk kebutuhan hunian maupun investasi.',
    fullDescription: 'HomeSpace merupakan platform properti yang menghadirkan beragam pilihan properti di beberapa wilayah Indonesia, khususnya Blitar, Bali, dan Papua. Website ini menawarkan berbagai jenis properti, seperti rumah, villa, dan properti lainnya yang dapat disesuaikan dengan kebutuhan pengguna, baik untuk hunian pribadi maupun investasi. Dengan tampilan yang modern, informasi yang lengkap, serta navigasi yang mudah digunakan, HomeSpace bertujuan membantu pengguna menemukan properti yang tepat di lokasi yang diinginkan secara cepat, mudah, dan terpercaya.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    images: [
      '/images/homespace1.png',
      '/images/homespace2.png',
      '/images/homespace3.png',
      '/images/homespace4.png',
      '/images/homespace5.png',
      '/images/homespace6.png',
      '/images/homespace7.png',
      '/images/homespace8.png',
      '/images/homespace9.png',
      '/images/homespace10.png',
      '/images/homespace11.png',
      '/images/homespace12.png'
    ],
    image: '/images/homespace1.png'
  },
  {
    id: 6,
    title: 'Design Website Prima Laundry',
    description: 'Prima Laundry adalah desain website dashboard internal untuk UMKM laundry di Kota Malang yang digunakan oleh admin atau pemilik untuk mengelola transaksi dan laporan keuangan.',
    fullDescription: 'Prima Laundry merupakan desain website sistem internal yang diperuntukkan khusus bagi admin atau pemilik UMKM laundry di Kota Malang. Website ini dirancang sebagai dashboard manajemen yang menampilkan fitur utama berupa pengelolaan transaksi laundry, pemantauan operasional, serta penyajian laporan keuangan secara terstruktur. Desain website mengutamakan tampilan yang sederhana, informatif, dan mudah digunakan agar pemilik laundry dapat memantau dan mengelola bisnis secara efisien tanpa akses publik, sehingga data operasional dan keuangan tetap aman dan terkontrol.',
    tech: ['Figma'],
    images: [
      '/images/primalaundry1.png',
      '/images/primalaundry2.png',
      '/images/primalaundry3.png',
      '/images/primalaundry4.png',
      '/images/primalaundry5.png'
    ],
    image: '/images/primalaundry2.png'
  },
  {
    id: 7,
    title: 'Design Aplikasi ZyloStore',
    description: 'ZyloStore adalah desain aplikasi e-commerce yang memungkinkan pengguna melakukan pembelian dan penjualan barang dengan tampilan modern dan mudah digunakan.',
    fullDescription: 'ZyloStore merupakan desain aplikasi e-commerce yang dirancang untuk mendukung aktivitas jual beli barang secara online. Aplikasi ini memungkinkan pengguna untuk melakukan pembelian berbagai produk sekaligus menjual barang yang mereka miliki layaknya platform e-commerce pada umumnya. Desain ZyloStore mengutamakan antarmuka yang modern, navigasi yang intuitif, serta alur transaksi yang jelas agar pengguna dapat berbelanja dan berjualan dengan nyaman. Fokus utama desain aplikasi ini adalah memberikan pengalaman pengguna yang praktis, efisien, dan menarik.',
    tech: ['Figma'],
   images: [
      '/images/zylostore1.png',
      '/images/zylostore2.png',
      '/images/zylostore3.png',
      '/images/zylostore4.png',
      '/images/zylostore5.png',
      '/images/zylostore6.png',
      '/images/zylostore7.png',
      '/images/zylostore8.png'
    ],
    image: '/images/zylostore1.png'
  }
];

export default function Projects({ darkMode }: ProjectsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="project"
      ref={sectionRef}
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
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
            Project Saya
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p
            className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Berikut adalah beberapa project yang telah saya kerjakan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 delay-${index === 4 ? 500 : index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div
                className={`rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  darkMode
                    ? 'bg-gray-900 shadow-xl hover:shadow-2xl hover:shadow-blue-600/20'
                    : 'bg-white shadow-lg hover:shadow-2xl'
                }`}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 text-sm leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          darkMode
                            ? 'bg-blue-600/20 text-blue-400'
                            : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}