'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { mockStudents, mockWeaknessAnalysis, mockExams } from '@/data/mock';

export default function StudentDetailPage() {
  const params = useParams();
  const studentId = (params.id as string) || 'student-1';

  // Find student or default to first student
  const student = mockStudents.find((s) => s.id === studentId) || mockStudents[0];

  // Get weakness analysis for this student
  const weakness = mockWeaknessAnalysis[studentId] || mockWeaknessAnalysis['student-1'];

  // Get exams filtered by student
  const studentExams = mockExams.filter((exam) => exam.studentId === studentId);

  // Get top 3 weak topics
  const topWeakTopics = weakness?.weakTopics.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href="/teacher/students"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">학생 상세</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Student Info Header */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{student.name}</h2>
              <p className="text-gray-500 text-lg">{student.grade}</p>
            </div>
          </div>
        </section>

        {/* Weakness Analysis Section */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            약점 분석
          </h3>

          {topWeakTopics.length > 0 ? (
            <div className="space-y-4">
              {topWeakTopics.map((topic, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">
                      {topic.topic} - {topic.concept}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        topic.accuracy < 50
                          ? 'text-red-500'
                          : topic.accuracy < 70
                          ? 'text-yellow-500'
                          : 'text-green-500'
                      }`}
                    >
                      {topic.accuracy}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        topic.accuracy < 50
                          ? 'bg-red-400'
                          : topic.accuracy < 70
                          ? 'bg-yellow-400'
                          : 'bg-green-400'
                      }`}
                      style={{ width: `${topic.accuracy}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    오답 횟수: {topic.wrongCount}회
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              아직 분석된 약점이 없습니다.
            </p>
          )}
        </section>

        {/* Prescription Guide Section */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            처방 가이드
          </h3>

          {weakness ? (
            <div className="space-y-4">
              {/* Learning Path */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2">학습 경로 추천</h4>
                <div className="flex flex-wrap gap-2">
                  {weakness.learningPath.map((path, index) => (
                    <div key={index} className="flex items-center">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {index + 1}. {path}
                      </span>
                      {index < weakness.learningPath.length - 1 && (
                        <svg
                          className="w-4 h-4 text-gray-400 mx-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Prescription */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2">상세 처방</h4>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {weakness.prescriptionGuide}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              아직 처방 가이드가 없습니다.
            </p>
          )}
        </section>

        {/* Recent Exam History Section */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            최근 시험 이력
          </h3>

          {studentExams.length > 0 ? (
            <div className="space-y-3">
              {studentExams.map((exam) => (
                <div
                  key={exam.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{exam.title}</h4>
                    <p className="text-sm text-gray-500">
                      {exam.subject} | {exam.uploadedAt}
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-2xl font-bold ${
                        exam.score >= 80
                          ? 'text-green-500'
                          : exam.score >= 60
                          ? 'text-yellow-500'
                          : 'text-red-500'
                      }`}
                    >
                      {exam.score}점
                    </div>
                    <p className="text-sm text-gray-500">
                      {exam.correctCount}/{exam.totalQuestions} 정답
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              아직 시험 이력이 없습니다.
            </p>
          )}
        </section>

        {/* Report Button */}
        <div className="pb-6">
          <Link
            href="/teacher/reports"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-4 px-6 rounded-xl text-lg font-semibold transition-colors shadow-md"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              리포트 발송
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
