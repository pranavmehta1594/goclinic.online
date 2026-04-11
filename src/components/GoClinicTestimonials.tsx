"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Dr. Rahul Sharma",
    role: "Clinic Owner",
    image: "/images/testimonials/user1.jpg",
    content:
      "GoClinic helped us streamline patient bookings and reduce manual work significantly. WhatsApp integration is a game changer.",
  },
  {
    name: "Dr. Ankit Mehta",
    role: "Hospital Administrator",
    image: "/images/testimonials/user2.jpg",
    content:
      "Managing patient data and follow-ups has become incredibly easy. The dashboard gives us full visibility in real-time.",
  },
  {
    name: "Dr. Priya Jain",
    role: "Senior Consultant",
    image: "/images/testimonials/user3.jpg",
    content:
      "The automation features and reminders have improved our patient engagement and reduced no-shows.",
  },
  {
    name: "Dr. Kunal Verma",
    role: "Multi-speciality Clinic",
    image: "/images/testimonials/user4.jpg",
    content:
      "Everything from booking to records is centralized. It saves us hours every day.",
  },
];

export default function GoClinicTestimonials() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-medium text-gray-800 mb-12">
          We’re Not Saying GoClinic is Magic… But Doctors Think It Is
        </h2>

        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-3"
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between shadow-sm border">
                  
                  {/* Content */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.content}
                  </p>

                  {/* Divider */}
                  <div className="border-t pt-4 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}