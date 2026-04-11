"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type IntegrationItem = {
  name: string;
  icon: string;
};

type Section = {
  title: string;
  items: IntegrationItem[];
};

const leadSources: Section = {
  title: "Lead Sources",
  items: [
    { name: "WhatsApp", icon: "/images/integrations/whatsapp.png" },
    { name: "Website", icon: "/images/integrations/website.png" },
    { name: "Google Ads", icon: "/images/integrations/google.png" },
    { name: "Facebook", icon: "/images/integrations/facebook.png" },
    { name: "Instagram", icon: "/images/integrations/instagram.png" },
    { name: "Referral", icon: "/images/integrations/referral.png" },
  ],
};

const webhooks: Section = {
  title: "Webhook Events",
  items: [
    { name: "Appointment Event", icon: "/images/integrations/call.png" },
    { name: "Patient Interaction", icon: "/images/integrations/interaction.png" },
    { name: "Email Notification", icon: "/images/integrations/email.png" },
    { name: "Custom Event", icon: "/images/integrations/custom.png" },
  ],
};

const crms: Section = {
  title: "CRM Integrations",
  items: [
    { name: "Zoho CRM", icon: "/images/integrations/zoho.png" },
    { name: "Salesforce", icon: "/images/integrations/salesforce.png" },
    { name: "HubSpot", icon: "/images/integrations/hubspot.png" },
    { name: "Freshsales", icon: "/images/integrations/freshsales.png" },
    { name: "LeadSquared", icon: "/images/integrations/leadsquared.png" },
  ],
};

function IntegrationCard({ title, items }: Section) {
  return (
    <div className="bg-gray-100 rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border"
          >
            <div className="relative w-5 h-5">
              <Image
                src={item.icon}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GoClinicIntegrationSection() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-medium text-gray-800 mb-4">
          Multiple Lead Sources? Existing CRM?
          <br />
          GoClinic integrates with them all.
        </h2>

        <p className="text-gray-500 mb-12">
          Seamlessly connect your clinic tools, automate workflows, and manage everything in one place.
        </p>

        {/* Main Box */}
        <div className="bg-gray-200 rounded-3xl p-8 relative">
          
          {/* Custom Integration Badge */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-white px-6 py-2 rounded-full shadow flex items-center gap-2">
            <span>⚙️</span>
            <span className="text-sm font-medium">Custom Integration</span>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <IntegrationCard {...leadSources} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <IntegrationCard {...webhooks} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <IntegrationCard {...crms} />
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-10 bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:scale-105 transition">
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
}