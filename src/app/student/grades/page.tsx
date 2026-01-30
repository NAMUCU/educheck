'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { mockExams } from '@/data/mock';
import { Exam } from '@/types';

// 과목 필터 타입
type SubjectFilter = '전체' | '수학' | '영어' | '과학';

// 학생용 시험 데이터 (student-1: 박민수의 시험 결과 + 추가 데이터)
const studentExams: Exam[] = [
  ...mockExams.filter((exam) => exam.studentId === 'student-1'),
  // 추가 테스트 데이터
  {
    id: 'exam-5',
    studentId: 'student-1',
    studentName: '박민수',
    subject: '영어',
    title: '영어 문법 테스트',
    uploadedAt: '2025-01-26 10:30',
    totalQuestions: 25,
    correctCount: 21,
    score: 84,
    questions: [],
  },
  {
    id: 'exam-6',
    studentId: 'student-1',
    studentName: '박민수',
    subject: '과학',
    title: '물리 단원평가',
    uploadedAt: '2025-01-24 14:00',
    totalQuestions: 20,
    correctCount: 11,
    score: 55,
    questions: [],
  },
  {
    id: 'exam-7',
    studentId: 'student-1',
    studentName: '박민수',
    subject: '영어',
    title: '영어 독해 테스트',
    uploadedAt: '2025-01-22 11:00',
    totalQuestions: 20,
    correctCount: 18,
    score: 90,
    questions: [],
  },
  {
    id: 'exam-8',
    studentId: 'student-1',
    studentName: '박민수',
    subject: '과학',
    title: '화학 단원평가',
    uploadedAt: '2025-01-20 15:30',
    totalQuestions: 15,
    correctCount: 10,
    score: 67,
    questions: [],
  },
];

export default function StudentGradesPage() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectFilter>('전체');

  // 필터링된 시험 목록
  const filteredExams = useMemo(() => {
    if (selectedSubject === '전체') {
      return studentExams;
    }
    return studentExams.filter((exam) => exam.subject === selectedSubject);
  }, [selectedSubject]);

  // 통계 계산
  const stats = useMemo(() => {
    const exams = selectedSubject === '전체' ? studentExams : filteredExams;
    if (exams.length === 0) {
      return { totalExams: 0, averageScore: 0, highestScore: 0, lowestScore: 0 };
    }

    const scores = exams.map((exam) => exam.score);
    const averageScore = Math.round(
      scores.reduce((sum, score) => sum + score, 0) / scores.length
    );
    const highestScore = Math.max(...scores);
    const lowestScore = Math.min(...scores);

    return {
      totalExams: exams.length,
      averageScore,
      highestScore,
      lowestScore,
    };
  }, [selectedSubject, filteredExams]);

  // 과목별 통계
  const subjectStats = useMemo(() => {
    const subjects = ['수학', '영어', '과학'] as const;
    return subjects.map((subject) => {
      const exams = studentExams.filter((exam) => exam.subject === subject);
      if (exams.length === 0) return { subject, count: 0, average: 0 };
      const avg = Math.round(
        exams.reduce((sum, e) => sum + e.score, 0) / exams.length
      );
      return { subject, count: exams.length, average: avg };
    });
  }, []);

  // 점수에 따른 색상 결정
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getScoreBorderColor = (score: number) => {
    if (score >= 80) return 'border-green-200';
    if (score >= 60) return 'border-yellow-200';
    return 'border-red-200';
  };

  // 날짜 포맷팅
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const subjects: SubjectFilter[] = ['전체', '수학', '영어', '과학'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* 헤더 */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-7 h-7"
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
            </div>
            <div>
              <h1 className="text-2xl font-bold">내 성적 보기</h1>
              <p className="text-blue-100 text-sm mt-0.5">박민수 | 중2</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* 요약 통계 카드 */}
        <section className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-4">
            <h2 className="text-white font-bold text-lg flex items-center gap-2">
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
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              성적 요약
            </h2>
          </div>

          <div className="p-5">
            {/* 전체 통계 */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <p className="text-slate-500 text-xs mb-1">총 시험</p>
                <p className="text-xl font-bold text-blue-600">
                  {stats.totalExams}
                  <span className="text-sm font-normal text-slate-400">회</span>
                </p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-3 text-center">
                <p className="text-slate-500 text-xs mb-1">평균</p>
                <p className={`text-xl font-bold ${getScoreColor(stats.averageScore)}`}>
                  {stats.averageScore}
                  <span className="text-sm font-normal text-slate-400">점</span>
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-3 text-center">
                <p className="text-slate-500 text-xs mb-1">최고</p>
                <p className="text-xl font-bold text-green-600">
                  {stats.highestScore}
                  <span className="text-sm font-normal text-slate-400">점</span>
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-3 text-center">
                <p className="text-slate-500 text-xs mb-1">최저</p>
                <p className={`text-xl font-bold ${getScoreColor(stats.lowestScore)}`}>
                  {stats.lowestScore}
                  <span className="text-sm font-normal text-slate-400">점</span>
                </p>
              </div>
            </div>

            {/* 과목별 차트 */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-700">과목별 평균</h3>
              {subjectStats.map((stat) => (
                <div key={stat.subject} className="flex items-center gap-3">
                  <span className="w-12 text-sm font-medium text-slate-600">
                    {stat.subject}
                  </span>
                  <div className="flex-1 bg-slate-100 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        stat.average >= 80
                          ? 'bg-gradient-to-r from-green-400 to-green-500'
                          : stat.average >= 60
                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-500'
                          : 'bg-gradient-to-r from-red-400 to-red-500'
                      }`}
                      style={{ width: `${stat.average}%` }}
                    />
                  </div>
                  <span
                    className={`w-12 text-right text-sm font-bold ${getScoreColor(
                      stat.average
                    )}`}
                  >
                    {stat.average}점
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 과목 필터 */}
        <section>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedSubject === subject
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </section>

        {/* 시험 결과 목록 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            시험 결과
            <span className="text-sm font-normal text-slate-400">
              ({filteredExams.length}건)
            </span>
          </h2>

          {filteredExams.length > 0 ? (
            <div className="space-y-3">
              {filteredExams.map((exam) => (
                <div
                  key={exam.id}
                  className={`bg-white rounded-xl p-4 shadow-sm border ${getScoreBorderColor(
                    exam.score
                  )} hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            exam.subject === '수학'
                              ? 'bg-blue-100 text-blue-700'
                              : exam.subject === '영어'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-teal-100 text-teal-700'
                          }`}
                        >
                          {exam.subject}
                        </span>
                        <span className="text-xs text-slate-400">
                          {formatDate(exam.uploadedAt)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-800">{exam.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {exam.correctCount}/{exam.totalQuestions}문제 정답
                      </p>
                    </div>

                    {/* 점수 표시 */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-16 h-16 rounded-full flex flex-col items-center justify-center ${getScoreBgColor(
                          exam.score
                        )}`}
                      >
                        <span
                          className={`text-2xl font-bold ${getScoreColor(exam.score)}`}
                        >
                          {exam.score}
                        </span>
                        <span className="text-xs text-slate-500">점</span>
                      </div>

                      {/* 상세보기 버튼 */}
                      <Link
                        href={`/student/grades/${exam.id}`}
                        className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
                      >
                        <svg
                          className="w-5 h-5 text-blue-600"
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
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 text-center border border-slate-100">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-slate-400"
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
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                시험 결과가 없습니다
              </h3>
              <p className="text-slate-500">
                선택한 과목의 시험 결과가 아직 없습니다.
              </p>
            </div>
          )}
        </section>

        {/* 점수 기준 안내 */}
        <section className="bg-white rounded-xl p-4 border border-slate-100">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">점수 기준 안내</h3>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-slate-600">우수 (80점 이상)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="text-slate-600">보통 (60-79점)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="text-slate-600">노력필요 (60점 미만)</span>
            </div>
          </div>
        </section>
      </main>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 safe-area-pb">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-around py-2">
            <button className="flex flex-col items-center gap-1 py-2 px-4 text-slate-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-xs">홈</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-2 px-4 text-blue-600">
              <svg
                className="w-6 h-6"
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
              <span className="text-xs font-medium">성적</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-2 px-4 text-slate-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="text-xs">학습</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-2 px-4 text-slate-400">
              <svg
                className="w-6 h-6"
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
              <span className="text-xs">내 정보</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
