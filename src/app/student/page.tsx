'use client';

import Link from 'next/link';

export default function StudentDashboard() {
  const studentName = '김민수';

  const stats = {
    averageScore: 85,
    monthlyExams: 5,
    improvementRate: 12,
  };

  const recentExams = [
    { id: 1, subject: '수학', title: '2차 함수 단원평가', date: '2024.01.25', score: 92 },
    { id: 2, subject: '영어', title: '문법 테스트', date: '2024.01.23', score: 88 },
    { id: 3, subject: '과학', title: '물리 중간고사', date: '2024.01.20', score: 78 },
    { id: 4, subject: '수학', title: '확률과 통계', date: '2024.01.18', score: 85 },
  ];

  const weaknesses = [
    { area: '이차방정식 활용 문제', accuracy: 45 },
    { area: '영어 관계대명사', accuracy: 52 },
    { area: '물리 에너지 보존', accuracy: 58 },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-amber-600';
    return 'text-red-500';
  };

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case '수학': return 'bg-blue-100 text-blue-700';
      case '영어': return 'bg-purple-100 text-purple-700';
      case '과학': return 'bg-teal-100 text-teal-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      {/* 환영 메시지 - 고정 헤더 */}
      <div className="sticky top-0 z-10 bg-emerald-600 text-white p-6 -mx-4 lg:-mx-8 -mt-4 lg:-mt-8 mb-6">
        <h1 className="text-xl font-bold">안녕하세요, {studentName}님!</h1>
        <p className="text-emerald-100 mt-1">오늘도 열심히 공부해볼까요?</p>
      </div>

      <div className="space-y-6">
        {/* 요약 통계 */}
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">평균 점수</p>
                <p className="text-2xl font-bold text-emerald-600">{stats.averageScore}점</p>
              </div>
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">이번 달 시험</p>
                <p className="text-2xl font-bold text-blue-600">{stats.monthlyExams}회</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">향상률</p>
                <p className="text-2xl font-bold text-green-600">+{stats.improvementRate}%</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 최근 시험 결과 */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">최근 시험 결과</h2>
            <Link href="/student/grades" className="text-sm text-emerald-600 hover:text-emerald-700">
              전체보기 →
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentExams.map((exam) => (
              <div key={exam.id} className="px-4 py-3 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${getSubjectColor(exam.subject)}`}>
                    {exam.subject}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{exam.title}</p>
                    <p className="text-sm text-gray-500">{exam.date}</p>
                  </div>
                </div>
                <span className={`text-lg font-bold ${getScoreColor(exam.score)}`}>
                  {exam.score}점
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 취약점 분석 */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">취약점 TOP 3</h2>
            <Link href="/student/weakness" className="text-sm text-emerald-600 hover:text-emerald-700">
              자세히 →
            </Link>
          </div>
          <div className="p-4 space-y-3">
            {weaknesses.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-900">{item.area}</span>
                    <span className="text-sm text-red-500">{item.accuracy}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-400 h-2 rounded-full"
                      style={{ width: `${item.accuracy}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 빠른 액션 */}
        <section className="grid grid-cols-2 gap-4">
          <Link
            href="/student/grades"
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl p-4 text-center font-semibold transition-colors"
          >
            내 성적 보기
          </Link>
          <Link
            href="/student/weakness"
            className="bg-white hover:bg-gray-50 text-gray-900 rounded-xl p-4 text-center font-semibold border border-gray-200 transition-colors"
          >
            취약점 분석
          </Link>
        </section>
      </div>
    </div>
  );
}
