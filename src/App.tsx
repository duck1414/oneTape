import React, { useState } from 'react';
import { RankSelector } from './components/RankSelector';
import { PriceCalculator } from './components/PriceCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Sword, Shield, Zap, Users, Target, Award } from 'lucide-react';

function App() {
  const [currentRank, setCurrentRank] = useState(0);
  const [currentTier, setCurrentTier] = useState(0);
  const [desiredRank, setDesiredRank] = useState(0);
  const [desiredTier, setDesiredTier] = useState(0);
  const [activeBoostType, setActiveBoostType] = useState('rank');

  const boostTypes = [
    { id: 'rank', name: 'Rank Boost', icon: <Award className="w-4 h-4" /> },
    { id: 'duo', name: 'Duo Boost', icon: <Users className="w-4 h-4" /> },
    { id: 'netwin', name: 'Net Win Boost', icon: <Target className="w-4 h-4" /> },
    { id: 'placements', name: 'Placements Boost', icon: <Sword className="w-4 h-4" /> },
    { id: 'unrated', name: 'Unrated Boost', icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Navigation */}
      <nav className="bg-gray-800/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-red-500">ValorantBoost</div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6">
                <a href="#boosting" className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors">
                  <Sword className="w-4 h-4" />
                  Boosting
                </a>
                <a href="#accounts" className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors">
                  <Users className="w-4 h-4" />
                  Accounts
                </a>
                <a href="#coaching" className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors">
                  <Award className="w-4 h-4" />
                  Coaching
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Boost Type Navigation */}
      <div className="bg-gray-800/50 border-y border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 py-2">
            {boostTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveBoostType(type.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeBoostType === type.id
                    ? 'bg-red-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {type.icon}
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-red-600/20 to-gray-900 pb-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Reach Your Dream Rank
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Professional boosting service by top-ranked Radiant players. Fast, safe, and reliable.
          </p>
          <a 
            href="#boost-calculator"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-gray-800 rounded-2xl p-6 md:p-10 shadow-xl" id="boost-calculator">
          {/* Quick Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Shield className="w-6 h-6 text-red-500" />,
                title: "100% Safe",
                description: "Secure boosting with VPN protection"
              },
              {
                icon: <Zap className="w-6 h-6 text-red-500" />,
                title: "Fast Delivery",
                description: "Professional boosters available 24/7"
              },
              {
                icon: <Sword className="w-6 h-6 text-red-500" />,
                title: "Skilled Players",
                description: "All our boosters are Immortal+"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700/50 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  {feature.icon}
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Rank Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <RankSelector
              label="Current Rank"
              selectedRank={currentRank}
              selectedTier={currentTier}
              onRankChange={setCurrentRank}
              onTierChange={setCurrentTier}
            />
            <RankSelector
              label="Desired Rank"
              selectedRank={desiredRank}
              selectedTier={desiredTier}
              onRankChange={setDesiredRank}
              onTierChange={setDesiredTier}
            />
          </div>

          {/* Price Calculator */}
          <div className="flex justify-center mt-10">
            <PriceCalculator
              currentRank={currentRank}
              currentTier={currentTier}
              desiredRank={desiredRank}
              desiredTier={desiredTier}
            />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <section id="why-choose-us" className="py-20">
        <WhyChooseUs />
      </section>

      <section id="testimonials" className="py-20 bg-gray-800">
        <Testimonials />
      </section>

      <section id="faq" className="py-20">
        <FAQ />
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ValorantBoost</h3>
              <p className="text-gray-400">Professional Valorant boosting service trusted by thousands of players worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#how-it-works" className="hover:text-red-500">How it Works</a></li>
                <li><a href="#pricing" className="hover:text-red-500">Pricing</a></li>
                <li><a href="#faq" className="hover:text-red-500">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>24/7 Support</li>
                <li>Discord: ValorantBoost</li>
                <li>Email: support@valorantboost.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 ValorantBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;