import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does the boosting process work?",
    answer: "Once you place an order, one of our professional Radiant players will begin playing on your account to achieve your desired rank. We use VPN protection and take all necessary security measures."
  },
  {
    question: "How long does the boost take?",
    answer: "The duration varies based on the rank difference and current server conditions. On average, we complete 2-3 ranks per day, always ensuring a high win rate and account safety."
  },
  {
    question: "Is my account information safe?",
    answer: "Absolutely! We use secure encryption for all data transmission and delete your credentials immediately after completing the boost. Our boosters use VPNs matching your regular play location."
  },
  {
    question: "Can I play on my account during the boost?",
    answer: "We recommend not playing during the boosting process to ensure the fastest possible completion and maintain account security."
  },
  {
    question: "Do you offer a guarantee?",
    answer: "Yes! We guarantee reaching your desired rank or your money back. If you're not satisfied, we offer a full refund within 24 hours of order completion."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-300 border-t border-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}