import React from 'react';
import { ChevronLeft, ChevronRight, Server } from 'lucide-react';

const ranks = [
  { name: 'Iron', tiers: ['I', 'II', 'III'], color: 'from-gray-400 to-gray-600' },
  { name: 'Bronze', tiers: ['I', 'II', 'III'], color: 'from-amber-600 to-amber-800' },
  { name: 'Silver', tiers: ['I', 'II', 'III'], color: 'from-gray-300 to-gray-400' },
  { name: 'Gold', tiers: ['I', 'II', 'III'], color: 'from-yellow-400 to-yellow-600' },
  { name: 'Platinum', tiers: ['I', 'II', 'III'], color: 'from-cyan-400 to-cyan-600' },
  { name: 'Diamond', tiers: ['I', 'II', 'III'], color: 'from-purple-400 to-purple-600' },
  { name: 'Ascendant', tiers: ['I', 'II', 'III'], color: 'from-green-400 to-green-600' },
  { name: 'Immortal', tiers: ['I', 'II', 'III'], color: 'from-red-400 to-red-600' },
  { name: 'Radiant', tiers: ['I'], color: 'from-yellow-200 to-yellow-400' },
];

interface RankSelectorProps {
  label: string;
  selectedRank: number;
  selectedTier: number;
  onRankChange: (rank: number) => void;
  onTierChange: (tier: number) => void;
}

export function RankSelector({ label, selectedRank, selectedTier, onRankChange, onTierChange }: RankSelectorProps) {
  const [rr, setRR] = React.useState('0-20');
  const [server, setServer] = React.useState('EU');

  return (
    <div className="flex flex-col items-center gap-6 bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
      <h3 className="text-xl font-bold text-gray-200">{label}</h3>
      
      <div className="flex items-center gap-6">
        <button
          onClick={() => selectedRank > 0 && onRankChange(selectedRank - 1)}
          className="p-2 rounded-full hover:bg-gray-700/50 transition-all transform hover:scale-110 active:scale-95"
          disabled={selectedRank === 0}
        >
          <ChevronLeft className={`w-6 h-6 ${selectedRank === 0 ? 'text-gray-600' : 'text-gray-400'}`} />
        </button>
        
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-br ${ranks[selectedRank].color} opacity-20 blur-xl rounded-full transition-all duration-300 group-hover:opacity-30`} />
          <div className="w-36 h-36 relative transition-transform duration-300 transform group-hover:scale-110">
            <img
              src={`https://raw.githubusercontent.com/valorant-api/assets/main/ranks/${ranks[selectedRank].name.toLowerCase()}-${selectedTier + 1}.png`}
              alt={`${ranks[selectedRank].name} ${ranks[selectedRank].tiers[selectedTier]}`}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <button
          onClick={() => selectedRank < ranks.length - 1 && onRankChange(selectedRank + 1)}
          className="p-2 rounded-full hover:bg-gray-700/50 transition-all transform hover:scale-110 active:scale-95"
          disabled={selectedRank === ranks.length - 1}
        >
          <ChevronRight className={`w-6 h-6 ${selectedRank === ranks.length - 1 ? 'text-gray-600' : 'text-gray-400'}`} />
        </button>
      </div>

      <div className="flex gap-3">
        {ranks[selectedRank].tiers.map((tier, index) => (
          <button
            key={tier}
            onClick={() => onTierChange(index)}
            className={`w-12 h-12 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              selectedTier === index
                ? `bg-gradient-to-br ${ranks[selectedRank].color} text-white shadow-lg`
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
            }`}
          >
            {tier}
          </button>
        ))}
      </div>

      <div className="flex gap-4 w-full mt-2">
        <div className="flex-1">
          <label className="text-sm text-gray-400 mb-1 block">Current RR</label>
          <select
            value={rr}
            onChange={(e) => setRR(e.target.value)}
            className="w-full bg-gray-700/50 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="0-20">0-20 RR</option>
            <option value="21-40">21-40 RR</option>
            <option value="41-60">41-60 RR</option>
            <option value="61-80">61-80 RR</option>
            <option value="81-100">81-100 RR</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="text-sm text-gray-400 mb-1 block">Server</label>
          <select
            value={server}
            onChange={(e) => setServer(e.target.value)}
            className="w-full bg-gray-700/50 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="EU">Europe</option>
            <option value="NA">North America</option>
            <option value="AP">Asia Pacific</option>
            <option value="KR">Korea</option>
          </select>
        </div>
      </div>
    </div>
  );
}