"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GoClinicWhatsappSection() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-white via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
            GoClinic + WhatsApp: Simplify Patient Engagement
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              • <strong>One unified number</strong> – manage all patient bookings and queries from a single WhatsApp number.
            </li>

            <li>
              • <strong>Instant appointment booking</strong> – patients can book appointments directly via WhatsApp without apps.
            </li>

            <li>
              • <strong>ABHA integration</strong> – securely fetch patient health records for faster diagnosis.
            </li>

            <li>
              • <strong>Automated reminders</strong> – reduce no-shows with auto appointment reminders.
            </li>

            <li>
              • <strong>Unified patient timeline</strong> – track chats, visits, prescriptions, and reports in one place.
            </li>

            <li>
              • <strong>Smart replies & automation</strong> – quick responses for FAQs and faster patient handling.
            </li>

            <li>
              • <strong>Analytics dashboard</strong> – track bookings, patient flow, and clinic performance.
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 border border-gray-400 rounded-xl hover:bg-black hover:text-white transition">
            Request a Demo
          </button>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          
          {/* BACKGROUND CARD */}
          <div className="absolute w-[280px] h-[360px] bg-gray-200 rounded-2xl top-10 right-10"></div>

          {/* FLOATING INFO CARD */}
          <div className="absolute top-0 left-10 bg-white border rounded-xl shadow-md p-4 w-[220px]">
            <h4 className="font-semibold text-sm mb-1">
              WhatsApp Booking Enabled
            </h4>
            <p className="text-xs text-gray-500">
              Patients can book instantly using WhatsApp. No app needed.
            </p>
            <span className="text-xs text-green-600 font-medium mt-2 inline-block">
              Connected
            </span>
          </div>

          {/* PHONE IMAGE */}
          <div className="relative w-[250px] h-[450px] z-10">
            <Image
              src="/images/phone-ui.png"
              alt="WhatsApp UI"
              fill
              className="object-contain"
            />
          </div>

          {/* SMALL FLOATING AVATARS */}
          <div className="absolute bottom-10 left-0 w-10 h-10 rounded-full overflow-hidden border">
            <Image
              src="/images/user1.jpg"
              alt="user"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-5 right-0 w-10 h-10 rounded-full overflow-hidden border">
            <Image
              src="/images/user2.jpg"
              alt="user"
              fill
              className="object-cover"
            />
          </div>

          {/* DECOR ICON */}
          <div className="absolute top-5 right-5 text-orange-400 text-2xl">
            ✦
          </div>

        </motion.div>
      </div>
    </section>
  );
}