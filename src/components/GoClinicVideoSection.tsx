"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

export default function GoClinicVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-white via-blue-50 to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-medium text-gray-800 mb-10">
          See How GoClinic Works: Quick Video Overview
        </h2>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full h-[250px] md:h-[500px] rounded-2xl overflow-hidden bg-gray-100"
        >
          
          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              <Image
                src="/images/video-thumbnail.png" // replace with your image
                alt="GoClinic Video"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                
                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                >
                  <Play className="text-black w-6 h-6 md:w-8 md:h-8 ml-1" />
                </button>

              </div>
            </>
          ) : (
            /* Video */
            <video
              src="/videos/go-clinic-demo.mp4" // replace with your video
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>

      </div>
    </section>
  );
}