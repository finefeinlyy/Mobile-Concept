import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="bg-gradient-to-r from-green-100 via-white to-green-100 py-16">
      <div className="container mx-auto px-4 pt-28">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-green-600">
            เกี่ยวกับเรา
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            เราคือผู้เชี่ยวชาญด้านเครื่องเสียงรถยนต์ที่พร้อมยกระดับการขับขี่ของคุณ
          </p>
          <span className="block w-16 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mt-4"></span>
        </motion.div>

        {/* Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-600">
                ยินดีต้อนรับสู่ Mobile Concept
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                ร้านติดตั้งเครื่องเสียงรถยนต์ที่มุ่งมั่นยกระดับประสบการณ์การขับขี่ของคุณ  
                ด้วยสโลแกน <strong className="text-green-600">"Upgrade Your Drive"</strong>
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                ด้วยประสบการณ์กว่า <strong className="text-green-600">30 ปี</strong>  
                ในการทำงานด้าน <strong>Digital Signal Processing (DSP)</strong> ของผู้ก่อตั้ง  
                เรามีความเชี่ยวชาญในการออกแบบและติดตั้งระบบเสียงที่ตอบโจทย์ทุกความต้องการของคุณ
              </p>
              <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
                <li>ปรับแต่งระบบเสียงให้เหมาะสมกับรถยนต์และสไตล์การฟังเพลง</li>
                <li>ให้คำปรึกษาโดยทีมงานผู้เชี่ยวชาญ ใจดี และคุยง่าย</li>
                <li>เลือกใช้ผลิตภัณฑ์คุณภาพสูงและเทคโนโลยีล้ำสมัย</li>
                <li>บริการหลังการขายที่คุณวางใจได้</li>
              </ul>
              <p className="text-gray-800 text-lg leading-relaxed">
                ไม่ว่าคุณจะเป็นผู้ที่ชื่นชอบเสียงเพลง หรือมองหาการอัปเกรดระบบเสียงรถยนต์  
                เราพร้อมช่วยคุณเปลี่ยนการขับขี่ให้สนุกสนานและมีสไตล์มากขึ้น!
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:from-green-400 hover:to-green-600 hover:shadow-xl transition-transform transform hover:scale-105"
              >
                ติดต่อเรา
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="/images/269601006_4809351669140761_4178242157110599041_n.jpg"
                alt="Papa Pom the Owner"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-green-600 opacity-30 rounded-lg"></div>
            </div>
            <p className="text-gray-700 mt-4 text-lg italic">
              “คุณป้อม ผู้ก่อตั้ง Mobile Concept ด้วยประสบการณ์กว่า 30 ปีในวงการเครื่องเสียงรถยนต์ เชี่ยวชาญด้าน Digital Signal Processing (DSP) พร้อมมุ่งมั่นยกระดับประสบการณ์การขับขี่ของคุณให้เหนือชั้น”
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;