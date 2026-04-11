"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Tab = {
  id: string;
  title: string;
  heading: string;
  description: string;
  image: string;
};

const tabs: Tab[] = [
  {
    id: "whatsapp-booking",
    title: "WhatsApp Booking",
    heading: "Book Appointments Directly from WhatsApp",
    description:
      "GoClinic allows patients to book appointments directly via WhatsApp. No app downloads required. Doctors can manage bookings in real-time and reduce manual workload.",
    image: "/images/whatsapp.png",
  },
  {
    id: "abha-integration",
    title: "ABHA Integration",
    heading: "Access Patient Records with ABHA",
    description:
      "Seamlessly integrate ABHA to access patient medical history securely. Improve diagnosis speed and provide better healthcare decisions.",
    image: "/images/abha.png",
  },
  {
    id: "doctor-dashboard",
    title: "Doctor Dashboard",
    heading: "A Dashboard Doctors Will Actually Use Daily",
    description:
      "Manage appointments, patient records, and prescriptions in one place. Designed for simplicity and efficiency for busy doctors.",
    image: "/images/dashboard.png",
  },
  {
    id: "hospital-management",
    title: "Hospital Management",
    heading: "Complete Hospital Data Management",
    description:
      "Track staff, manage patients, billing, and analytics in a single platform. Reduce complexity and improve operational efficiency.",
    image: "/images/hospital.png",
  },
  {
    id: "analytics",
    title: "Analytics",
    heading: "Smart Insights for Better Decisions",
    description:
      "Get real-time insights on patient flow, revenue, and performance. Make data-driven decisions easily.",
    image: "/images/analytics.png",
  },
];

export default function GoClinicTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="w-full py-12 px-4 bg-gradient-to-b from-white via-blue-50 to-gray-50">
      <div className="w-full max-w-7xl mx-auto px-0">
      
      {/* Tabs */}
      <div className="flex gap-3 overflow-x-auto bg-gray-100 p-2 rounded-full mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
              activeTab.id === tab.id
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black">
              {activeTab.heading}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              {activeTab.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-[350px] rounded-2xl overflow-hidden bg-gray-100"
          >
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

      </div>
      </div>
    </section>
  );
}