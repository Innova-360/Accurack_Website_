import React from 'react';
import Header from '../ui/Headers/Header';
import Image from 'next/image';
import { FaStar, FaQuoteRight, FaBuilding } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ross Geller',
      role: 'Retail Manager',
      image: 'https://i.pravatar.cc/200',
      quote: 'Accurack cut our stock costs by 35% and delivery times by 20% in just 3 months.',
      rating: 4.7,
      company: 'ABC Distributors',
      highlight: false,
    },
    {
      name: 'Joey Tribbiani',
      role: 'Restaurant Owner',
      image: 'https://i.pravatar.cc/300',
      quote: 'Accurack streamlined our logistics and made inventory headaches disappear overnight.',
      rating: 5.0,
      company: 'Tribbiani Foods',
      highlight: true, // middle one highlighted
    },
    {
      name: 'Rachel Green',
      role: 'Fashion Buyer',
      image: 'https://i.pravatar.cc/400',
      quote: 'I love how seamless and intuitive Accurack is — it’s a game-changer for us.',
      rating: 4.9,
      company: 'Bloom Fashion Co.',
      highlight: false,
    },
  ];

  return (
    <div className="w-full py-20 max-w-6xl mx-auto px-6">
      <Header title="Customer Success Stories" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
        {testimonials.map((t, index) => (
          <div key={index} className="flex flex-col items-center">
            
            {/* Reviewer Image */}
            <img
              src={t.image}
              alt={t.name}
              width={50}
              height={50}
              className="rounded-full object-cover"
            />

            {/* Name and Role */}
            <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-6">{t.role}</p>

            {/* Message Box */}
            <div
              className={`relative w-full h-70 rounded-3xl shadow-[0px_0px_17px_-4px_rgba(0,_0,_0,_0.1)] px-8 py-10 flex flex-col items-center text-center ${
                t.highlight ? 'bg-primary text-white' : 'bg-white text-gray-700'
              }`}
            >
              {/* Company Logo/Icon */}
              <FaBuilding className={`fa-3x mb-4 ${t.highlight ? 'text-white' : 'text-primary'}`} />

              {/* Message */}
              <p className="text-base leading-relaxed mb-6">{t.quote}</p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.round(t.rating)
                          ? 'text-yellow-400'
                          : t.highlight
                          ? 'text-white/40'
                          : 'text-gray-300'
                      } w-5 h-5`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{t.rating.toFixed(1)}</span>
              </div>

              {/* Quote Icon */}
              <FaQuoteRight className={`fa-xl ${t.highlight ? 'text-white/70' : 'text-gray-400'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
