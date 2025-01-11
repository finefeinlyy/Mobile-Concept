import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Typical from 'react-typical';

function Home() {
  return (
    <div className="bg-gradient-to-r from-green-50 via-white to-green-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 via-green-500 to-green-400 text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/images/471177045_122180371616148517_1257703468018429464_n.jpg)" }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
            <Typical
              steps={[
                'ยินดีต้อนรับสู่ Mobile Concept',
                3000,
                'ติดตั้งเครื่องเสียงคุณภาพสูง',
                3000,
                'ยกระดับการขับขี่ของคุณ',
                3000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </h1>
          <p className="text-lg leading-relaxed mb-8 drop-shadow-lg">
            ผู้เชี่ยวชาญด้านเครื่องเสียงรถยนต์ที่มีประสบการณ์กว่า <strong>30 ปี</strong>
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#works"
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-3 rounded-full shadow-lg font-semibold hover:shadow-xl hover:from-green-400 hover:to-green-600 transition-transform transform hover:scale-105"
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
        </div>
      </div>

      {/* Highlighted Services Section */}
      <div id="highlighted-services" className="py-16 bg-gradient-to-r from-white via-green-50 to-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-12">
            บริการเด่นของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105">
              <img
                src="/images/4BFB92F5-4C70-4DA4-99E0-47946E30ABA8.png"
                alt="DSP Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-green-600">ระบบเสียง DSP</h3>
              <p className="text-gray-800 mt-4">
                เพิ่มคุณภาพเสียงที่คมชัด ด้วยเทคโนโลยี Digital Signal Processing
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105">
              <img
                src="/images/2C4F5373-BA25-4FB4-AD01-03AA7566F528.jpg"
                alt="CarPlay Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-green-600">
                CarPlay & Android Auto
              </h3>
              <p className="text-gray-800 mt-4">
                เชื่อมต่อสมาร์ทโฟนเพื่อใช้งานแผนที่ เพลง และการโทรได้อย่างง่ายดาย
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105">
              <img
                src="/images/S__22650883.jpg"
                alt="Camera Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-green-600">
                กล้องมองหลังคุณภาพสูง
              </h3>
              <p className="text-gray-800 mt-4">
                เพิ่มความปลอดภัยด้วยกล้องมองหลังที่คมชัดและใช้งานง่าย
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Works Section */}
      <div id="works" className="py-16 bg-gradient-to-b from-green-50 to-green-100">
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
            {
  [
    {
      title: "อัพเกรดระบบเสียงใน Audi Q5",
      description: "ระบบเสียงที่สมบูรณ์แบบพร้อม DSP Processor",
      image: "/images/321643307_687421602926909_682371482683613103_n.jpg",
      alt: "ติดตั้งใน Audi Q5",
    },
    {
      title: "ติดตั้งระบบเสียงใน BMW 120D",
      description: "เสียง Hi-Res คุณภาพสูงสำหรับรถระดับพรีเมียม",
      image: "/images/277802756_5176217042454220_2636590167866787241_n.jpg",
      alt: "ติดตั้งระบบเสียงใน BMW 120D",
    },
    {
      title: "ชุดอัพเกรดเครื่องเสียง Plug & Play",
      description: "ยกระดับประสบการณ์เสียงในรถของคุณด้วยชุดอัปเกรดเครื่องเสียง Plug & Play",
      image: "/images/902FE1DF-F061-4373-B943-45F6106BF323.jpg",
      alt: "ชุดอัพเกรดเครื่องเสียง Plug & Play",
    },
  ].map((work, index) => (
    <SwiperSlide key={index}>
      <div className="grid grid-cols-5 gap-6 items-start bg-white bg-opacity-90 p-10 rounded-lg shadow-lg transition transform hover:scale-105 h-96">
        <div className="col-span-3 space-y-6">
          <h3 className="text-3xl font-bold text-green-600">{work.title}</h3>
          <p className="text-gray-800 text-lg">{work.description}</p>
        </div>
        <div className="col-span-2 flex justify-center items-center h-full">
          <img
            src={work.image}
            alt={work.alt}
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      </div>
    </SwiperSlide>
  ))}
          </Swiper>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div id="reviews" className="py-16 bg-gradient-to-r from-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-12">
            รีวิวจากลูกค้า ใน Google Maps
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
    review: "The Best Car Audio Shop in town. The Boss and staff are so patient and good service. Fair price for the best quality car audio. I am very satisfied that I chose this shop.",
    customer: "คุณ Nay Dhana",
  },
  {
    stars: 5,
    review: "super professional car stereo installation, the owner is very friendly and will go far to make you happy, all with a very affordable cost, recommend!",
    customer: "คุณ Moshe Shoshan",
  },
  {
    stars: 5,
    review: "If you are in need for great sound stage in your ride, there are no better choices than here. Surprisingly, the advisors are far more friendly and sincere than many other shops in town. Very reasonable price for the job well done. Highly recommended.",
    customer: "คุณ RAMASU UIRSAP",
  },
].map((feedback, index) => (
  <SwiperSlide key={index}>
    <div className="p-8 bg-white rounded-lg shadow-md flex flex-col justify-between min-h-[350px]">
      {/* ดาวรีวิว */}
      <div className="flex justify-center mb-4">
        {[...Array(feedback.stars)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-xl">★</span>
        ))}
      </div>

      {/* ข้อความรีวิว */}
      <div className="flex-grow">
        <p className="text-xl text-gray-800 italic text-center">{feedback.review}</p>
      </div>

      {/* ชื่อลูกค้า */}
      <p className="text-lg text-green-600 font-bold text-center mt-4">— {feedback.customer}</p>
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