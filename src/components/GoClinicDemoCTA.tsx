"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GoClinicDemoCTA() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Background Card */}
          <div className="absolute w-[320px] h-[380px] bg-[#E8E5DF] rounded-3xl top-16 left-10 z-0" />

          {/* Phone Image */}
          <div className="relative w-[260px] h-[520px] z-10">
            <Image
              src="/images/demo/phone.png"
              alt="GoClinic App"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Floating Top Card */}
          <div className="absolute top-10 left-0 bg-white shadow-lg rounded-xl p-4 w-[240px] z-20">
            <Image
              src="/images/demo/call-card.png"
              alt="Call Card"
              width={240}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Floating Bottom Analytics Card */}
          <div className="absolute bottom-10 left-5 bg-white shadow-xl rounded-xl p-3 w-[280px] z-20 border">
            <Image
              src="/images/demo/analytics-card.png"
              alt="Analytics"
              width={280}
              height={140}
              className="object-contain"
            />
          </div>

          {/* Decorative Spark */}
          <div className="absolute top-20 right-10 text-orange-400 text-2xl">
            ✦
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-gray-800 leading-tight mb-6">
            Get a personalized walkthrough of GoClinic in action
          </h2>

          <button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:scale-105 transition">
            Schedule Your Demo
          </button>
        </motion.div>

      </div>
    </section>
  );
}