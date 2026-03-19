import React from 'react';

interface FeatureBandItem {
  title: string;
  body: string;
}

interface FeatureBandProps {
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureBandItem[];
}

export default function FeatureBand({
  eyebrow,
  title,
  description,
  items,
}: FeatureBandProps) {
  return (
    <div className="py-12 bg-gray-50">
      {eyebrow && <div className="text-2xl font-bold text-gray-800 mb-4">{eyebrow}</div>}
      <h2 className="text-3xl font-semibold text-gray-900 mb-3">{title}</h2>
      <p className="text-lg text-gray-600 mb-8">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-full">
            <h3 className="text-xl font-medium text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 flex-1">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
