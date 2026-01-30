'use client';

import { mockReports, mockStudents } from '@/data/mock';

export default function ParentPage() {
  const studentReports = mockReports.filter(
    (report) => report.studentId === 'student-1'
  );
  const student = mockStudents.find((s) => s.id === 'student-1');
  const latestReport = studentReports.length > 0 ? studentReports[studentReports.length - 1] : null;

  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return `${startDate.getMonth() + 1}월 ${startDate.getDate()}일 ~ ${endDate.getDate()}일`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-violet-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-500';
  };

  return (
    <div>
      {/* 환영 메시지 - 고정 헤더 */}
      <div className="sticky top-0 z-10 bg-violet-600 text-white p-6 -mx-4 lg:-mx-8 -mt-4 lg:-mt-8 mb-6">
        <h1 className="text-xl font-bold">{student?.name || '박민수'}의 학습 현황</h1>
        <p className="text-violet-200 mt-1">{student?.grade || '중2'} | 수학왕 학원</p>
      </div>

      <div className="space-y-6">
        {/* 요약 통계 */}
        {latestReport && (
          <section className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">이번 주 문제 수</p>
                  <p className="text-2xl font-bold text-violet-600">{latestReport.totalProblems}문제</p>
                </div>
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">평균 점수</p>
                  <p className={`text-2xl font-bold ${getScoreColor(latestReport.averageScore)}`}>
                    {latestReport.averageScore}점
                  </p>
                </div>
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 이번 주 학습 리포트 */}
        {latestReport ? (
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-gray-900">이번 주 학습 리포트</h2>
              <span className="text-sm text-gray-500">
                {formatDateRange(latestReport.weekStart, latestReport.weekEnd)}
              </span>
            </div>

            <div className="p-4 space-y-4">
              {/* 보완이 필요한 부분 */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                    </svg>
                  </span>
                  조금 더 연습이 필요해요
                </h3>
                <div className="space-y-2">
                  {latestReport.weakPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-2 bg-amber-50 rounded-lg px-3 py-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      <span className="text-sm text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 선생님 추천 */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                  선생님의 학습 조언
                </h3>
                <div className="space-y-2">
                  {latestReport.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-2 bg-violet-50 rounded-lg px-3 py-2">
                      <span className="w-5 h-5 bg-violet-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-violet-700 text-xs font-bold">{index + 1}</span>
                      </span>
                      <span className="text-sm text-gray-700">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 격려 메시지 */}
              <div className="bg-violet-50 rounded-lg p-4 border border-violet-100">
                <p className="text-sm font-semibold text-violet-700 mb-1">선생님의 한마디</p>
                <p className="text-sm text-gray-700">{latestReport.encouragement}</p>
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">아직 리포트가 없습니다</h3>
            <p className="text-gray-500">이번 주 학습이 완료되면 리포트가 생성됩니다.</p>
          </section>
        )}

        {/* 문의 안내 */}
        <section className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">궁금한 점이 있으신가요?</h3>
              <p className="text-sm text-gray-500">학습 상담이 필요하시면 언제든 연락주세요.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
