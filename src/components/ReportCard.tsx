'use client';

import { LearningReport } from '@/types';

interface ReportCardProps {
  report: LearningReport;
}

export default function ReportCard({ report }: ReportCardProps) {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const formatSentAt = (sentAt: string | null): string => {
    if (!sentAt) return '';
    const date = new Date(sentAt);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              {report.studentName} 학생 학습 리포트
            </h2>
            <p className="text-teal-100 text-sm mt-1">
              {formatDate(report.weekStart)} ~ {formatDate(report.weekEnd)}
            </p>
          </div>
          {/* Sent Status Indicator */}
          <div
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium
              ${report.sentAt
                ? 'bg-white/20 text-white'
                : 'bg-yellow-400 text-yellow-900'
              }
            `}
          >
            {report.sentAt ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>발송 완료</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>발송 대기</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 p-6 bg-teal-50/50">
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-teal-100">
          <p className="text-teal-600 text-sm font-medium mb-1">총 문제 수</p>
          <p className="text-3xl font-bold text-teal-700">
            {report.totalProblems}
            <span className="text-lg font-normal text-teal-500 ml-1">문제</span>
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-teal-100">
          <p className="text-teal-600 text-sm font-medium mb-1">평균 점수</p>
          <p className="text-3xl font-bold text-teal-700">
            {report.averageScore}
            <span className="text-lg font-normal text-teal-500 ml-1">점</span>
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="p-6 space-y-6">
        {/* Weak Points Section */}
        {report.weakPoints.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              보완이 필요한 부분
            </h3>
            <ul className="space-y-2">
              {report.weakPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-orange-50 rounded-lg p-3 border border-orange-100"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommendations Section */}
        {report.recommendations.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
              <svg
                className="w-5 h-5 text-teal-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              학습 추천 사항
            </h3>
            <ul className="space-y-2">
              {report.recommendations.map((recommendation, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-teal-50 rounded-lg p-3 border border-teal-100"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-teal-200 text-teal-700 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Encouragement Message */}
        {report.encouragement && (
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-5 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-1">
                  선생님의 응원 메시지
                </h4>
                <p className="text-green-700 leading-relaxed">
                  {report.encouragement}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer - Sent Time */}
      {report.sentAt && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            {formatSentAt(report.sentAt)}에 발송됨
          </p>
        </div>
      )}
    </div>
  );
}
