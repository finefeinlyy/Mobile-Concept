import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { FaAward, FaUsers, FaTools } from "react-icons/fa";

function Services() {
  return (
    <div className="bg-gradient-to-r from-green-100 via-white to-green-100 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-green-600">
            บริการของเรา
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            บริการครบวงจรด้านระบบเสียงและอุปกรณ์เสริมสำหรับรถยนต์
          </p>
          <span className="block w-16 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mt-4"></span>
        </motion.div>

        {/* Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* รายละเอียดบริการ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                <strong className="text-green-600">Mobile Concept</strong> ให้บริการด้านระบบเครื่องเสียงและอุปกรณ์เสริมสำหรับรถยนต์ที่ครบวงจร ด้วยทีมงานมืออาชีพที่ชำนาญรถสมัยใหม่ทุกรุ่น
              </p>

              {/* รายการบริการ */}
              <ul className="list-none space-y-4">
                {[
                  "จำหน่ายชุดเครื่องเสียงไฮเอนด์จากทั่วโลก",
                  "อุปกรณ์เสริม: กล้องบันทึก, กล้องมองหลัง, จอแอนดรอย, ระบบ CarPlay & Android Auto, กล่อง AI Box Android",
                  "บริการถอดย้ายระบบเสียงข้ามคัน",
                  "ปลดล็อคจอและเปลี่ยนวิทยุ",
                  "บริการ Wrap รถ และติดฟิล์มกรองแสง",
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <FaCheckCircle className="text-green-600 text-3xl flex-shrink-0" />
                    <span className="text-gray-800 text-lg">{service}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-800 text-lg leading-relaxed">
                ไม่ว่าคุณจะต้องการปรับแต่งหรือเพิ่มฟังก์ชันให้กับรถของคุณ เราพร้อมตอบสนองทุกความต้องการเพื่อยกระดับการขับขี่ของคุณให้สมบูรณ์แบบ
              </p>
            </div>
          </motion.div>

          {/* รูปภาพบริการ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="/images/471521621_122180837666148517_7198626254187450997_n.jpg" 
                alt="บริการของเรา"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-green-600 opacity-30 rounded-lg"></div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
            ทำไมต้องเลือกเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
  {
    title: "ประสบการณ์กว่า 30 ปี",
    description: "ผู้เชี่ยวชาญในระบบเสียงรถยนต์ที่พร้อมตอบโจทย์ทุกความต้องการ",
    icon: <FaAward className="text-green-600 text-6xl mx-auto mb-4" />,
  },
  {
    title: "ทีมงานมืออาชีพ",
    description: "ช่างผู้ชำนาญการและใจดี พร้อมให้คำปรึกษาอย่างตรงจุด",
    icon: <FaUsers className="text-green-600 text-6xl mx-auto mb-4" />,
  },
  {
    title: "อุปกรณ์ทันสมัย",
    description: "ใช้เทคโนโลยีและผลิตภัณฑ์ที่ทันสมัยที่สุด",
    icon: <FaTools className="text-green-600 text-6xl mx-auto mb-4" />,
  },
].map((highlight, index) => (
  <div
    key={index}
    className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
  >
    {highlight.icon}
    <h3 className="text-2xl font-bold text-green-600">
      {highlight.title}
    </h3>
    <p className="text-gray-700 mt-4">{highlight.description}</p>
  </div>
))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;