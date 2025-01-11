import React from 'react';
import { FaPhoneAlt, FaFacebook, FaEnvelope, FaClock } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { motion } from 'framer-motion';
import Typical from 'react-typical';

function Contact() {
  return (
    <div className="bg-gradient-to-r from-green-100 via-white to-green-100 py-16">
      <div className="container mx-auto px-4">
        {/* หัวข้อ */}
        <h1 className="text-4xl font-bold text-center text-green-600 mb-12">
          <Typical
            steps={['ติดต่อเรา', 2000, 'พูดคุยกับเราได้เลย!', 2000]}
            loop={Infinity}
          />
          <span className="block w-16 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mt-4"></span>
        </h1>

        {/* Section หลัก */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* คอลัมน์ Google Maps และแผนที่ */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Google Maps */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8142971679454!2d100.62401617522566!3d13.729690186659859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fa0d92ffa9f%3A0xdafd94c8acad0101!2z4Lij4LmJ4Liy4LiZ4LmA4LiE4Lij4Li34LmI4Lit4LiH4LmA4Liq4Li14Lii4LiH4Lij4LiWIE1vYmlsZSBDb25jZXB0IEF1ZGlvIC0gVXBncmFkZSB5b3VyIGRyaXZlICE!5e0!3m2!1sth!2sth!4v1736595156308!5m2!1sth!2sth"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* ภาพแผนที่ */}
            <div className="shadow-lg rounded-lg overflow-hidden">
              <img
                src="/images/2102E31B-9F44-465C-BFA0-2A8188327235.png"
                alt="แผนที่ร้านโมบาย คอนเซปท์"
                className="w-full h-auto"
              />
              
            </div>
            <p className="text-gray-600 text-center mt-4">
                แผนที่ร้านโมบาย คอนเซปท์ และ QR Code สำหรับนำทาง
              </p>
          </motion.div>

          {/* คอลัมน์ช่องทางการติดต่อ */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* ช่องทางการติดต่อ */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform text-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">ช่องทางการติดต่อ</h3>
              <div className="flex flex-col gap-4">
                {/* เบอร์โทร */}
                <div className="flex items-center justify-center gap-4">
                  <FaPhoneAlt className="text-green-600 text-2xl" />
                  <a
                    href="tel:+66816322663"
                    className="text-gray-800 font-medium text-lg hover:underline"
                  >
                    +66 81 632 2663
                  </a>
                </div>
                {/* อีเมล */}
                <div className="flex items-center justify-center gap-4">
                  <FaEnvelope className="text-green-600 text-2xl" />
                  <a
                    href="mailto:mconceptth@gmail.com"
                    className="text-gray-800 font-medium text-lg hover:underline"
                  >
                    mconceptth@gmail.com
                  </a>
                </div>
                {/* Facebook */}
                <div className="flex items-center justify-center gap-4">
                  <FaFacebook className="text-green-600 text-2xl" />
                  <a
                    href="https://www.facebook.com/profile.php?id=61554455525393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-medium text-lg hover:underline"
                  >
                    Facebook
                  </a>
                </div>
                {/* Line */}
                <div className="flex items-center justify-center gap-4">
                  <SiLine className="text-green-600 text-2xl" />
                  <a
                    href="https://lin.ee/jRtdduS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-medium text-lg hover:underline"
                  >
                    Line
                  </a>
                </div>
              </div>
            </div>

            {/* เวลาทำการ */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <FaClock className="text-green-600" /> เวลาทำการ
              </h3>
              <p className="text-gray-600">วันจันทร์ - วันศุกร์: 9:00 - 18:00 น.</p>
              <p className="text-gray-600">วันเสาร์: 10:00 - 17:00 น.</p>
              <p className="text-gray-600">วันอาทิตย์: หยุดทำการ</p>
            </div>

            {/* คำถามที่พบบ่อย */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">คำถามที่พบบ่อย</h3>
              <details className="mb-4">
                <summary className="font-medium text-gray-800 cursor-pointer">
                  ร้านอยู่ที่ไหน?
                </summary>
                <p className="text-gray-600 mt-2">
                  ร้านของเราอยู่ที่ 686/2 ซ. พัฒนาการ 38 แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250
                </p>
              </details>
              <details className="mb-4">
                <summary className="font-medium text-gray-800 cursor-pointer">
                  รับชำระเงินแบบใดบ้าง?
                </summary>
                <p className="text-gray-600 mt-2">
                  เรารับชำระเงินผ่านบัตรเครดิต, เดบิต, โอนเงิน และเงินสด
                </p>
              </details>
              <details>
                <summary className="font-medium text-gray-800 cursor-pointer">
                  มีที่จอดรถหรือไม่?
                </summary>
                <p className="text-gray-600 mt-2">
                  มีที่จอดรถสะดวกสบายรองรับลูกค้าทุกท่าน
                </p>
              </details>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;