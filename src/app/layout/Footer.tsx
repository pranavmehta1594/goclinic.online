"use client";

import Image from "next/image";
// import { Facebook, Instagram, Youtube, LinkedIn } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-gray-300 px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          
          {/* ABOUT */}
          <div>
            <h4 className="text-white font-semibold mb-4">ABOUT</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Newsroom</li>
              <li>Become a Partner</li>
            </ul>

            {/* CONTACT */}
            <h4 className="text-white font-semibold mt-6 mb-3">CONTACT</h4>
            <p className="text-sm">care@goclinic.ai</p>
            <p className="text-sm">+91 8179880074</p>
          </div>

          {/* FEATURES */}
          <div>
            <h4 className="text-white font-semibold mb-4">FEATURES</h4>
            <ul className="space-y-2 text-sm">
              <li>Clinic Management</li>
              <li>WhatsApp Booking</li>
              <li>Patient Records</li>
              <li>Auto Reminders</li>
              <li className="text-white">More Features →</li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-3">PRODUCTS</h4>
            <ul className="space-y-2 text-sm">
              <li>Call Management</li>
              <li>WhatsApp CRM</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm">
              <li>Contact Sales</li>
              <li>FAQ</li>
              <li>Tutorials</li>
              <li>Compliance</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-white font-semibold mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm">
              <li>Blogs</li>
              <li>API Docs</li>
              <li>Integrations</li>
              <li>Webinars</li>
            </ul>
          </div>

          {/* REVIEW SECTION */}
          <div>
            <h4 className="text-white font-semibold mb-4">Review Us</h4>

            <div className="space-y-3">
              <div className="bg-white text-black rounded-xl p-3 text-sm">
                ⭐⭐⭐⭐⭐ Review us
              </div>

              <div className="bg-white text-black rounded-xl p-3 text-sm">
                ⭐⭐⭐⭐☆ Trust Reviews
              </div>

              <div className="bg-blue-600 text-white rounded-xl p-4 text-sm">
                ⭐⭐⭐⭐⭐ User Rating
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-8">
          
          {/* LOGO */}
          <div className="text-4xl font-bold text-orange-500">
            GoClinic
          </div>

          {/* APP DOWNLOAD */}
          <div className="flex gap-4">
            <Image
              src="/images/appstore.png"
              alt="App Store"
              width={140}
              height={40}
            />
            <Image
              src="/images/playstore.png"
              alt="Play Store"
              width={140}
              height={40}
            />
          </div>

          {/* SOCIAL */}
          {/* <div className="flex gap-4">
            <div className="bg-gray-800 p-2 rounded-full">
              <Facebook size={18} />
            </div>
            <div className="bg-gray-800 p-2 rounded-full">
              <Instagram size={18} />
            </div>
            <div className="bg-gray-800 p-2 rounded-full">
              <Youtube size={18} />
            </div>
            <div className="bg-gray-800 p-2 rounded-full">
              <LinkedIn size={18} />
            </div>
          </div> */}
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
          <p>© 2026 GoClinic. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Usage Policy</span>
            <span>Data Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}