'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { mockExams, mockWeaknessAnalysis } from '@/data/mock';

export default function StudentGradeDetailPage() {
  const params = useParams();
  const examId = params.id as string;

  // Find the exam by ID
  const exam = mockExams.find((e) => e.id === examId) || mockExams[0];

  // Get wrong questions
  const wrongQuestions = exam.questions.filter((q) => !q.isCorrect);

  // Get weakness analysis for this student
  const weakness = mockWeaknessAnalysis[exam.studentId];

  // Extract unique weak concepts from wrong questions
  const weakConcepts = [...new Set(wrongQuestions.map((q) => q.concept))];

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-50 border-green-200';
    if (score >= 60) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  // Get explanation for wrong answer (mock data)
  const getExplanation = (concept: string): string => {
    const explanations: Record<string, string> = {
      '인수분해': '인수분해는 다항식을 두 개 이상의 인수의 곱으로 나타내는 것입니다. 공통인수를 먼저 찾고, 공식을 적용하세요.',
      '완전제곱식': '완전제곱식 공식: (a+b)² = a² + 2ab + b², (a-b)² = a² - 2ab + b². 중간항의 부호에 주의하세요.',
      '공통인수': '각 항에서 공통으로 포함된 인수를 찾아 묶어내세요. 계수와 문자 모두 확인해야 합니다.',
      '이항': '이항할 때는 부호가 바뀝니다. 좌변에서 우변으로, 또는 우변에서 좌변으로 옮길 때 +는 -로, -는 +로 바뀝니다.',
      '근의 공식': 'x = (-b ± √(b²-4ac)) / 2a. 판별식 D = b²-4ac의 값에 따라 근의 개수가 결정됩니다.',
      '판별식': '판별식 D = b²-4ac. D>0이면 서로 다른 두 실근, D=0이면 중근, D<0이면 실근이 없습니다.',
      '근과 계수의 관계': '이차방정식 ax²+bx+c=0의 두 근을 α, β라 하면, α+β = -b/a, αβ = c/a 입니다.',
      '인수분해 공식': 'a²-b² = (a+b)(a-b), a²±2ab+b² = (a±b)². 공식을 정확히 암기하고 적용하세요.',
    };
    return explanations[concept] || '이 개념을 다시 복습하고 관련 문제를 더 풀어보세요.';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href="/student/grades"
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
          <h1 className="text-xl font-bold text-gray-900">시험 결과 상세</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Exam Info Header */}
        <section className={`rounded-xl shadow-sm p-6 border ${getScoreBgColor(exam.score)}`}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{exam.title}</h2>
              <div className="mt-2 space-y-1">
                <p className="text-gray-600 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {exam.subject}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(exam.uploadedAt)}
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className={`text-5xl font-bold ${getScoreColor(exam.score)}`}>
                {exam.score}
              </div>
              <div className="text-gray-500 text-sm mt-1">점</div>
              <div className="text-gray-600 text-sm mt-2">
                {exam.correctCount}/{exam.totalQuestions} 정답
              </div>
            </div>
          </div>
        </section>

        {/* Question-by-Question Breakdown */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            문제별 분석
          </h3>

          {exam.questions.length > 0 ? (
            <div className="space-y-3">
              {exam.questions.map((question) => (
                <div
                  key={question.id}
                  className={`p-4 rounded-lg border ${
                    question.isCorrect
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Correct/Incorrect Icon */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      question.isCorrect ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {question.isCorrect ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{question.number}번</span>
                          <span className={`text-sm font-medium px-2 py-0.5 rounded ${
                            question.isCorrect
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {question.isCorrect ? '정답' : '오답'}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {question.topic}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 mt-1">
                        관련 개념: <span className="font-medium">{question.concept}</span>
                      </p>

                      {!question.isCorrect && (
                        <div className="mt-3 p-3 bg-white rounded-lg border border-red-100">
                          <div className="flex items-center gap-4 text-sm mb-2">
                            <span className="text-gray-500">
                              내 답: <span className="font-medium text-red-600">{question.studentAnswer}</span>
                            </span>
                            <span className="text-gray-500">
                              정답: <span className="font-medium text-green-600">{question.correctAnswer}</span>
                            </span>
                          </div>
                          <div className="text-sm text-gray-700 bg-blue-50 p-2 rounded">
                            <span className="font-medium text-blue-700">해설: </span>
                            {getExplanation(question.concept)}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              문제별 상세 정보가 없습니다.
            </p>
          )}
        </section>

        {/* Summary of Mistakes */}
        {wrongQuestions.length > 0 && (
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              오답 요약
            </h3>

            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <p className="text-gray-700 mb-3">
                총 <span className="font-bold text-red-600">{wrongQuestions.length}문제</span>를 틀렸습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {wrongQuestions.map((q) => (
                  <span
                    key={q.id}
                    className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {q.number}번
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Weak Concepts */}
        {weakConcepts.length > 0 && (
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              취약 개념
            </h3>

            <div className="space-y-3">
              {weakConcepts.map((concept, index) => {
                const wrongCountForConcept = wrongQuestions.filter((q) => q.concept === concept).length;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">{concept}</span>
                    </div>
                    <span className="text-sm text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">
                      {wrongCountForConcept}문제 오답
                    </span>
                  </div>
                );
              })}
            </div>

            {weakness && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">학습 처방</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  {weakness.prescriptionGuide}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Retry Button */}
        <div className="pb-6">
          <button
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-4 px-6 rounded-xl text-lg font-semibold transition-colors shadow-md"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              다시 풀어보기
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
