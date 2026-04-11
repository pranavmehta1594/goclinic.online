"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "WhatsApp Appointment Booking",
    description:
      "Allow patients to book appointments instantly via WhatsApp without installing any app.",
    image: "/images/features/whatsapp.png",
  },
  {
    title: "ABHA Health Records",
    description:
      "Securely access and manage patient health records using ABHA integration.",
    image: "/images/features/abha.png",
  },
  {
    title: "Call & Consultation Tracking",
    description:
      "Track all patient calls and consultations in one unified dashboard.",
    image: "/images/features/call-tracking.png",
  },
  {
    title: "AI Prescription Summaries",
    description:
      "Automatically generate summaries of consultations for better patient care.",
    image: "/images/features/ai-summary.png",
  },
  {
    title: "Real-Time Dashboard",
    description:
      "Monitor appointments, patients, and clinic performance in real-time.",
    image: "/images/features/dashboard.png",
  },
  {
    title: "Auto Dialer for Clinics",
    description:
      "Boost efficiency by automating patient follow-ups and reminders.",
    image: "/images/features/dialer.png",
  },
  {
    title: "AI Chat Assistant",
    description:
      "Answer patient queries instantly using AI-powered chat automation.",
    image: "/images/features/chat.png",
  },
  {
    title: "Smart Lead Allocation",
    description:
      "Automatically assign patient inquiries to the right doctor or staff.",
    image: "/images/features/lead.png",
  },
  {
    title: "Patient Interaction Timeline",
    description:
      "View complete patient history including chats, visits, and reports.",
    image: "/images/features/timeline.png",
  },
  {
    title: "Clinic Funnel Management",
    description:
      "Track patient journey from inquiry to treatment with ease.",
    image: "/images/features/funnel.png",
  },
  {
    title: "Follow-Up Notifications",
    description:
      "Never miss a patient follow-up with smart notifications.",
    image: "/images/features/notifications.png",
  },
  {
    title: "Advanced Caller ID",
    description:
      "Identify patients instantly with detailed caller information.",
    image: "/images/features/caller-id.png",
  },
  {
    title: "Message Templates",
    description:
      "Use pre-built templates for faster and professional communication.",
    image: "/images/features/templates.png",
  },
  {
    title: "Custom CRM Fields",
    description:
      "Customize your clinic CRM based on your workflow and needs.",
    image: "/images/features/crm.png",
  },
];

export default function GoClinicFeaturesGrid() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-medium text-gray-800 mb-4">
          Built for Clinics, Doctors, and Hospitals
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          GoClinic helps you manage patients, automate workflows, and deliver
          better healthcare experiences — all in one platform.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 text-left hover:shadow-md transition"
            >
              
              {/* Image */}
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}