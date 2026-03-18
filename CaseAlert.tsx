import React from 'react';

type RiskLevel = 'high' | 'medium' | 'low';

interface CaseAlertProps {
  risk: RiskLevel;
  label: string;
}

export default function CaseAlert({ risk, label }: CaseAlertProps) {
  const bg = risk === 'high' ? 'bg-red-600' : risk === 'medium' ? 'bg-yellow-600' : 'bg-green-600';
  const textBg = risk === 'high' ? 'text-white' : 'text-gray-900';
  
  return (
    <div className="fixed bottom-4 right-4 rounded-full shadow-lg px-3 py-1.5 text-sm font-medium transition-transform duration-300">
      <span className={`{textBg} rounded-full`}>{label}</span>
      <span className="ml-2 text-white">{risk.toUpperCase()}</span>
    </div>
  );
}
