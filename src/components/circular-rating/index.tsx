import React from "react";

interface CircularRatingProps {
  rating: number;
  className?: string;
}

export const CircularRating: React.FC<CircularRatingProps> = ({
  rating,
  className = "",
}) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(rating / 100) * circumference} ${circumference}`;

  return (
    <div className={`relative w-20 h-20 ${className}`}>
      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
        {/* Background circle */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="4"
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#FFD700"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-sm font-bold">{rating}%</span>
      </div>
    </div>
  );
};
