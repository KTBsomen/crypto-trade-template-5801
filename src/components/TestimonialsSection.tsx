"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Operations Lead",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Switching to InvoicePDF cut our invoice prep time by 80%. The API is fast and reliable."
  },
  {
    name: "Sarah Johnson",
    role: "Founder, D2C Brand",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "Design once, generate forever. The placeholder system made automation effortless."
  },
  {
    name: "David Wilson",
    role: "Finance Manager",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "PDF quality is excellent and the coin-based pricing keeps costs predictable."
  },
  {
    name: "Emily Zhang",
    role: "CTO",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Integration took less than a day. Webhooks + storage simplified our pipeline."
  },
  {
    name: "James Rodriguez",
    role: "Product Engineer",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "The designer is intuitive and the API response times are consistently great."
  },
  {
    name: "Lisa Thompson",
    role: "Agency Owner",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "We generate thousands of PDFs monthly for clients—zero hiccups so far."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Loved by Teams</h2>
          <p className="text-muted-foreground text-lg">
            Join businesses shipping documents with InvoicePDF
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;