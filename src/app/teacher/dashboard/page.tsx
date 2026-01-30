'use client';

import Link from 'next/link';
import { mockDashboardStats, mockExams } from '@/data/mock';

export default function TeacherDashboard() {
  const stats = mockDashboardStats;
  const recentExams = mockExams.slice(0, 4);

  return (
    <div>
      {/* 환영 메시지 - 고정 헤더 */}
      <div className="sticky top-0 z-10 bg-blue-600 text-white p-6 -mx-4 lg:-mx-8 -mt-4 lg:-mt-8 mb-6">
        <h1 className="text-xl font-bold">안녕하세요, 김지훈 선생님</h1>
        <p className="text-blue-100 mt-1">오늘도 좋은 하루 되세요!</p>
      </div>

      <div className="space-y-6">
        {/* Stats Cards */}
        <section className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">총 학생 수</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}명</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">오늘 출석</p>
                <p className="text-2xl font-bold text-gray-900">{stats.todayAttendance}명</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">미발송 리포트</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingReports}건</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">주간 평균 점수</p>
                <p className="text-2xl font-bold text-gray-900">{stats.weeklyAvgScore}점</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Button */}
        <section className="mb-8">
          <Link
            href="/teacher/upload"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-xl font-semibold text-lg shadow-md transition-colors"
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              시험지 찍기
            </div>
          </Link>
        </section>

        {/* Recent Uploads */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">최근 업로드</h2>
          <div className="space-y-3">
            {recentExams.map((exam) => (
              <div
                key={exam.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{exam.studentName}</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                        {exam.subject}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{exam.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{exam.uploadedAt}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${
                      exam.score >= 80 ? 'text-green-600' :
                      exam.score >= 60 ? 'text-blue-600' : 'text-orange-600'
                    }`}>
                      {exam.score}점
                    </p>
                    <p className="text-xs text-gray-400">
                      {exam.correctCount}/{exam.totalQuestions}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
