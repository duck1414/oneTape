import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex K.",
    rank: "Diamond to Immortal",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop",
    comment: "Incredible service! The booster was very professional and completed the job faster than expected.",
    rating: 5
  },
  {
    name: "Sarah M.",
    rank: "Gold to Platinum",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    comment: "Great communication throughout the process. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael R.",
    rank: "Silver to Diamond",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
    comment: "Worth every penny. The booster even gave me tips to maintain my new rank.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <div className="w-full py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.rank}</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-300">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}