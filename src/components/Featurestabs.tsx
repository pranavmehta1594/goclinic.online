"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type Feature = {
  id: number;
  title: string;
  icon: string;
  image: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "AI Call Summaries",
    icon: "/icons/summary.svg",
    image: "/images/feature1.png",
  },
  {
    id: 2,
    title: "AI Sentiment Analysis",
    icon: "/icons/sentiment.svg",
    image: "/images/feature2.png",
  },
  {
    id: 3,
    title: "AI Sales Assistant",
    icon: "/icons/sales.svg",
    image: "/images/feature3.png",
  },
  {
    id: 4,
    title: "Call Recording",
    icon: "/icons/record.svg",
    image: "/images/feature4.png",
  },
  {
    id: 5,
    title: "Live Team Status",
    icon: "/icons/team.svg",
    image: "/images/feature5.png",
  },
  {
    id: 6,
    title: "Advanced Caller ID",
    icon: "/icons/caller.svg",
    image: "/images/feature6.png",
  },
  {
    id: 7,
    title: "Follow-Up Reminder",
    icon: "/icons/reminder.svg",
    image: "/images/feature7.png",
  },
  {
    id: 8,
    title: "Auto Dialer",
    icon: "/icons/dialer.svg",
    image: "/images/feature8.png",
  },
  {
    id: 9,
    title: "Auto Lead Allocation",
    icon: "/icons/lead.svg",
    image: "/images/feature9.png",
  },
  {
    id: 10,
    title: "Live Dashboard",
    icon: "/icons/dashboard.svg",
    image: "/images/feature10.png",
  },
  {
    id: 11,
    title: "Call Analytics",
    icon: "/icons/analytics.svg",
    image: "/images/feature11.png",
  },
  {
    id: 12,
    title: "Biz Whatsapp Integration",
    icon: "/icons/whatsapp.svg",
    image: "/images/feature12.png",
  },
];

const CRMFeatureTabs = () => {
  const [active, setActive] = useState(features[0]); // default first selected

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center order-2 lg:order-1">
          <div className="relative w-[280px] md:w-[340px] lg:w-[380px] transition-all duration-500">
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg order-1 lg:order-2">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            All That You Need in One <br /> Call Management CRM App
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-3 gap-4">
            {features.map((item) => (
              <Card
                key={item.id}
                onClick={() => setActive(item)}
                className={cn(
                  "cursor-pointer flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300",
                  active.id === item.id
                    ? "border-orange-500 shadow-md bg-orange-50"
                    : "border-gray-200 hover:shadow-sm"
                )}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-6 h-6 mb-2"
                />
                <p className="text-sm text-center font-medium">
                  {item.title}
                </p>
              </Card>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90">
              See All Features
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMFeatureTabs;