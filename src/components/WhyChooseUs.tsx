import React from 'react';
import { Trophy, Clock, Shield, HeadsetIcon, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: <Trophy className="w-8 h-8 text-red-500" />,
    title: "Professional Players",
    description: "Our boosters are top 500 Radiant players with proven track records"
  },
  {
    icon: <Clock className="w-8 h-8 text-red-500" />,
    title: "24/7 Service",
    description: "Round-the-clock boosting service with fast completion times"
  },
  {
    icon: <Shield className="w-8 h-8 text-red-500" />,
    title: "Account Security",
    description: "VPN protection and secure handling of your account information"
  },
  {
    icon: <HeadsetIcon className="w-8 h-8 text-red-500" />,
    title: "Live Support",
    description: "24/7 customer support via Discord and email"
  },
  {
    icon: <Zap className="w-8 h-8 text-red-500" />,
    title: "Fast Delivery",
    description: "Most orders completed within 24-72 hours"
  },
  {
    icon: <Users className="w-8 h-8 text-red-500" />,
    title: "Duo Queue",
    description: "Option to play with your booster for a more interactive experience"
  }
];

export function WhyChooseUs() {
  return (
    <div className="w-full py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              {feature.icon}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}