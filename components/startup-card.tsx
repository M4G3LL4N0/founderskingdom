import React from 'react';

interface StartupCardProps {
  startup: {
    id: string;
    name: string;
    stage: string;
    score: number;
    momentum: number;
    category: string;
    description: string;
  };
  compact?: boolean;
}

const StartupCard = ({ startup, compact = false }: StartupCardProps) => {
  const getPriorityLabel = (score: number) => {
    if (score >= 85) return "High Priority";
    if (score >= 70) return "Medium Priority";
    return "Low Priority";
  };

  const getPriorityClasses = (score: number) => {
    if (score >= 85) return "bg-red-600/20 text-red-200 border border-red-400/20";
    if (score >= 70) return "bg-yellow-600/20 text-yellow-100 border border-yellow-400/20";
    return "bg-green-600/20 text-green-100 border border-green-400/20";
  };

  const priorityLabel = getPriorityLabel(startup.score);
  const priorityClass = getPriorityClasses(startup.score);

  return (
    <div className={compact ? "flex flex-col items-center w-48" : "flex flex-col items-center w-full"}>
      <div className="text-gray-600 mb-2 font-medium">
        {startup.name}
      </div>
      <div className="text-sm text-gray-500 mb-1">
        {startup.stage} · {startup.category}
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="text-sm text-gray-500">
          Score: {startup.score}/100        </div>
        <div className={`rounded-full px-2 py-1 text-xs ${priorityClass}`}>
          {priorityLabel}
        </div>
      </div>
      <div className="text-gray-500 text-sm mb-2">
        Momentum: {startup.momentum}
      </div>
      {!compact && (
        <div className="text-sm text-gray-400 leading-relaxed">
          {startup.description}
        </div>
      )}
    </div>
  );
};

export default StartupCard;
