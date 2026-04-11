"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question:
      "Is GoClinic really the future of clinic management or just another tool?",
    answer:
      "GoClinic is designed to simplify operations with WhatsApp booking, ABHA integration, and real-time dashboards — making it a practical and powerful solution for modern clinics.",
  },
  {
    question: "Can GoClinic handle my clinic’s daily chaos?",
    answer:
      "Yes. From appointment booking to patient records and follow-ups, everything is streamlined into one system.",
  },
  {
    question: "Do I need training to use GoClinic?",
    answer:
      "Not really. The platform is designed to be simple and intuitive, so doctors and staff can start using it quickly.",
  },
  {
    question: "Will GoClinic save my time or add more work?",
    answer:
      "It actually saves time by automating repetitive tasks like reminders, bookings, and follow-ups.",
  },
  {
    question: "Does GoClinic offer automation features?",
    answer:
      "Yes, including WhatsApp automation, smart replies, and patient engagement tools.",
  },
  {
    question: "How easy is it to switch from my existing system?",
    answer:
      "Very easy. We help with onboarding, data migration, and setup so you can switch smoothly.",
  },
];

export default function GoClinicFAQ() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-gray-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-medium text-gray-800 text-center mb-12">
          Got Doubts? Let’s Clear Them Together
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b"
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-medium py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-gray-500 pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}