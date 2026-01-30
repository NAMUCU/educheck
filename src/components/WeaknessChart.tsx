'use client';

import React from 'react';

interface WeakTopic {
  topic: string;
  concept: string;
  accuracy: number;
  wrongCount: number;
}

interface WeaknessChartProps {
  weakTopics: WeakTopic[];
}

export default function WeaknessChart({ weakTopics }: WeaknessChartProps) {
  const getBarColor = (accuracy: number): string => {
    if (accuracy < 50) {
      return 'bg-red-500';
    } else if (accuracy < 70) {
      return 'bg-yellow-500';
    } else {
      return 'bg-green-500';
    }
  };

  const getBarGradient = (accuracy: number): string => {
    if (accuracy < 50) {
      return 'from-red-600 to-red-400';
    } else if (accuracy < 70) {
      return 'from-yellow-600 to-yellow-400';
    } else {
      return 'from-green-600 to-green-400';
    }
  };

  const getTextColor = (accuracy: number): string => {
    if (accuracy < 50) {
      return 'text-red-600';
    } else if (accuracy < 70) {
      return 'text-yellow-600';
    } else {
      return 'text-green-600';
    }
  };

  if (!weakTopics || weakTopics.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">취약 영역 분석</h2>
        <p className="text-gray-500 text-center py-8">
          분석할 취약 영역이 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-6">취약 영역 분석</h2>

      <div className="space-y-6">
        {weakTopics.map((item, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            {/* Topic and Concept Info */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-800">{item.topic}</h3>
                <p className="text-sm text-gray-500">{item.concept}</p>
              </div>
              <div className="text-right">
                <span className={`font-bold text-lg ${getTextColor(item.accuracy)}`}>
                  {item.accuracy.toFixed(1)}%
                </span>
                <p className="text-xs text-gray-400">
                  오답 {item.wrongCount}회
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${getBarGradient(item.accuracy)} transition-all duration-500 ease-out`}
                  style={{ width: `${Math.min(Math.max(item.accuracy, 0), 100)}%` }}
                />
              </div>

              {/* Scale markers */}
              <div className="flex justify-between mt-1 text-xs text-gray-400">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Status Label */}
            <div className="mt-2">
              {item.accuracy < 50 && (
                <span className="inline-block px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded">
                  집중 학습 필요
                </span>
              )}
              {item.accuracy >= 50 && item.accuracy < 70 && (
                <span className="inline-block px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded">
                  보충 학습 권장
                </span>
              )}
              {item.accuracy >= 70 && (
                <span className="inline-block px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
                  양호
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-600 mb-2">정확도 기준</h4>
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-500" />
            <span className="text-gray-600">50% 미만: 집중 학습 필요</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-yellow-500" />
            <span className="text-gray-600">50-70%: 보충 학습 권장</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-green-500" />
            <span className="text-gray-600">70% 이상: 양호</span>
          </div>
        </div>
      </div>
    </div>
  );
}
