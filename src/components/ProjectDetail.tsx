import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface ProjectDetailProps {
  darkMode: boolean;
}

const projects = [
  {
    id: 1,
    title: 'Aplikasi El Movie',
    description: 'El Movie adalah aplikasi yang memudahkan pengguna menyimpan dan mengelola daftar film favorit dalam satu tempat secara praktis.',
    fullDescription: 'El Movie adalah aplikasi daftar film favorit yang membantu pengguna menyimpan dan mengelola koleksi film kesukaan mereka dalam satu tempat. Melalui aplikasi ini, pengguna dapat menambahkan film favorit ke dalam daftar pribadi sehingga film-film pilihan lebih mudah diingat, diakses, dan dikelola kapan saja. El Movie dirancang dengan tampilan sederhana dan mudah digunakan untuk mendukung pengalaman pengguna dalam mengorganisir film favorit secara praktis.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
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

export default function ProjectDetail({ darkMode }: ProjectDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find(p => p.id === parseInt(id || '0'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="text-center">
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Project tidak ditemukan
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kembali ke Home
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-800 text-gray-300 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft size={20} />
            Kembali
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Title */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain" // Changed from object-cover to object-contain
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Image Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Tentang Project
          </h2>
          <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {project.fullDescription}
          </p>

          {/* Tech Stack */}
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Teknologi yang Digunakan
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 text-sm font-medium rounded-full ${
                  darkMode
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                    : 'bg-blue-100 text-blue-600 border border-blue-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}