import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import { motion, useAnimation } from 'framer-motion';

function Home() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      controls.start({
        y: offset * 0.2,
        opacity: 1 - offset / 500,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div className="bg-gradient-to-r from-green-50 via-white to-green-100 text-gray-800">
      {/* Hero Section */}
<div className="relative bg-gradient-to-r from-green-800 via-blue-700 to-black text-white pt-32 pb-20 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{
      backgroundImage: "url('/images/471177045_122180371616148517_1257703468018429464_n.jpg')",
    }}
  ></div>

  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute w-[500px] h-[500px] bg-green-500 opacity-30 blur-[200px] rounded-full top-10 left-20"></div>
    <div className="absolute w-[400px] h-[400px] bg-blue-400 opacity-20 blur-[150px] rounded-full bottom-10 right-20"></div>
    <div className="absolute w-[300px] h-[300px] bg-teal-300 opacity-30 blur-[100px] rounded-full top-1/3 left-1/3"></div>
  </div>

  {/* Hero Content */}
  <motion.div
    animate={controls}
    initial={{ y: 0, opacity: 1 }}
    className="relative z-10 container mx-auto px-4 text-center"
  >
    <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
      <Typewriter
        words={[
          'ยินดีต้อนรับสู่ Mobile Concept',
          'ติดตั้งเครื่องเสียงคุณภาพสูง',
          'ยกระดับการขับขี่ของคุณ',
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
    <p className="text-lg leading-relaxed mb-8 drop-shadow-lg">
      ผู้เชี่ยวชาญด้านเครื่องเสียงรถยนต์ที่มีประสบการณ์กว่า <strong>30 ปี</strong>
    </p>
    <div className="flex justify-center gap-4">
      <a
        href="#works"
        className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-full shadow-lg font-semibold hover:shadow-xl transition-transform transform hover:scale-105"
      >
        ดูผลงานของเรา
      </a>
      <a
        href="/contact"
        className="bg-white text-green-700 px-8 py-3 rounded-full shadow-lg font-semibold border border-green-500 hover:bg-green-100 transition-transform transform hover:scale-105"
      >
        ติดต่อเรา
      </a>
    </div>
  </motion.div>
</div>

      {/* Highlighted Services Section */}
      <div id="highlighted-services" className="py-16 bg-gradient-to-r from-white via-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-12">
            บริการเด่นของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'DSP Audio System',
                description: 'เพิ่มคุณภาพเสียงที่คมชัด ด้วยเทคโนโลยี Digital Signal Processing.',
                image: '/images/4BFB92F5-4C70-4DA4-99E0-47946E30ABA8.png',
              },
              {
                title: 'CarPlay & Android Auto',
                description: 'เชื่อมต่อสมาร์ทโฟนเพื่อใช้งานแผนที่ เพลง และการโทรได้อย่างง่ายดาย.',
                image: '/images/2C4F5373-BA25-4FB4-AD01-03AA7566F528.jpg',
              },
              {
                title: 'High-Quality Rear Cameras',
                description: 'เพิ่มความปลอดภัยด้วยกล้องมองหลังที่คมชัดและใช้งานง่าย.',
                image: '/images/S__22650883.jpg',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-[30px] shadow-lg text-center transition transform hover:scale-105 border border-green-300"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-green-600">{service.title}</h3>
                <p className="text-gray-700 mt-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

{/* Works Section */}
<div id="works" className="py-16 bg-gradient-to-r from-green-50 via-white to-green-100">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-green-600 mb-12">
      ผลงานของเรา
    </h2>
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="rounded-lg shadow-lg"
    >
      {[
        {
          title: 'อัพเกรดระบบเสียงใน Audi Q5',
          description: 'ระบบเสียงที่สมบูรณ์แบบพร้อม DSP Processor',
          image: '/images/321643307_687421602926909_682371482683613103_n.jpg',
        },
        {
          title: 'ติดตั้งระบบเสียงใน BMW 120D',
          description: 'เสียง Hi-Res คุณภาพสูงสำหรับรถระดับพรีเมียม',
          image: '/images/277802756_5176217042454220_2636590167866787241_n.jpg',
        },
        {
          title: 'ชุดอัพเกรดเครื่องเสียง Plug & Play',
          description: 'ยกระดับประสบการณ์เสียงในรถของคุณด้วยชุดอัปเกรดเครื่องเสียง Plug & Play.',
          image: '/images/902FE1DF-F061-4373-B943-45F6106BF323.jpg',
        },
      ].map((work, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-stretch h-full">
            <div className="grid grid-cols-5 gap-6 items-center bg-white p-10 rounded-[30px] shadow-lg transition transform hover:scale-105 border border-green-300 w-full min-h-[350px]">
              <div className="col-span-3 space-y-6">
                <h3 className="text-3xl font-bold text-green-600">{work.title}</h3>
                <p className="text-gray-700">{work.description}</p>
              </div>
              <div className="col-span-2 flex justify-center items-center">
                <img
                  src={work.image}
                  alt={work.title}
                  className="max-w-full max-h-[200px] rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

      {/* Customer Reviews Section */}
      <div id="reviews" className="py-16 bg-gradient-to-r from-white via-green-50 to-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-12">
            รีวิวจากลูกค้า
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-lg shadow-lg"
          >
            {[
              {
                stars: 5,
                review: 'บริการสุดยอด คุณภาพเสียงที่ดีเยี่ยม.',
                customer: 'คุณ Nay Dhana',
              },
              {
                stars: 5,
                review: 'แนะนำอย่างมาก เจ้าของเป็นกันเองและใส่ใจลูกค้า.',
                customer: 'คุณ Moshe Shoshan',
              },
              {
                stars: 5,
                review: 'ประสบการณ์ที่ดีและเสียงที่สมบูรณ์แบบ!',
                customer: 'คุณ RAMASU UIRSAP',
              },
            ].map((feedback, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-white rounded-[20px] shadow-md flex flex-col justify-between min-h-[250px] border border-green-300">
                  <div className="flex justify-center mb-4">
                    {[...Array(feedback.stars)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic">{feedback.review}</p>
                  <p className="text-md text-green-600 font-bold mt-4">— {feedback.customer}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;