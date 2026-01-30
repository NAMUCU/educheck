import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  color: string;
}

const colorVariants: Record<string, { bg: string; icon: string }> = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-500',
  },
  green: {
    bg: 'bg-green-50',
    icon: 'text-green-500',
  },
  red: {
    bg: 'bg-red-50',
    icon: 'text-red-500',
  },
  yellow: {
    bg: 'bg-yellow-50',
    icon: 'text-yellow-500',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-500',
  },
  indigo: {
    bg: 'bg-indigo-50',
    icon: 'text-indigo-500',
  },
  pink: {
    bg: 'bg-pink-50',
    icon: 'text-pink-500',
  },
  gray: {
    bg: 'bg-gray-50',
    icon: 'text-gray-500',
  },
};

export default function StatCard({ title, value, icon, color }: StatCardProps) {
  const colorClasses = colorVariants[color] || colorVariants.blue;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6">
      <div className="flex items-center gap-4">
        {/* Icon container */}
        <div
          className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg ${colorClasses.bg} flex items-center justify-center`}
        >
          <div className={`w-6 h-6 sm:w-7 sm:h-7 ${colorClasses.icon}`}>
            {icon}
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base text-gray-500 font-medium truncate">
            {title}
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-1">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
        </div>
      </div>
    </div>
  );
}
