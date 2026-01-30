'use client';

import Link from 'next/link';
import { Exam } from '@/types';

interface ExamResultCardProps {
  exam: Exam;
}

export default function ExamResultCard({ exam }: ExamResultCardProps) {
  const wrongQuestions = exam.questions.filter((q) => !q.isCorrect);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500 border-green-500';
    if (score >= 60) return 'text-yellow-500 border-yellow-500';
    return 'text-red-500 border-red-500';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-50';
    if (score >= 60) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden hover:shadow-lg transition-shadow">
      {/* 헤더 */}
      <div className="bg-blue-600 text-white px-6 py-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">{exam.title}</h3>
            <p className="text-blue-100 text-sm mt-1">{exam.subject}</p>
          </div>
          <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">
            {formatDate(exam.uploadedAt)}
          </span>
        </div>
      </div>

      {/* 본문 */}
      <div className="p-6">
        {/* 학생 정보 및 점수 */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-500 text-sm">학생</p>
            <p className="text-xl font-semibold text-gray-800">{exam.studentName}</p>
          </div>

          {/* 점수 원형 */}
          <div
            className={`w-24 h-24 rounded-full border-4 flex flex-col items-center justify-center ${getScoreColor(exam.score)} ${getScoreBgColor(exam.score)}`}
          >
            <span className="text-3xl font-bold">{exam.score}</span>
            <span className="text-xs">점</span>
          </div>
        </div>

        {/* 정답률 */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">정답 수</span>
            <span className="text-xl font-bold text-blue-600">
              {exam.correctCount}/{exam.totalQuestions}
            </span>
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${(exam.correctCount / exam.totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* 틀린 문제 목록 */}
        {wrongQuestions.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2" />
              틀린 문제 ({wrongQuestions.length}개)
            </h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {wrongQuestions.map((question) => (
                <div
                  key={question.id}
                  className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded mr-2">
                        {question.number}번
                      </span>
                      <span className="text-sm text-gray-800 font-medium">
                        {question.topic}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 ml-1">
                    개념: {question.concept}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {wrongQuestions.length === 0 && (
          <div className="mb-6 bg-green-50 rounded-lg p-4 text-center">
            <span className="text-green-600 font-medium">
              모든 문제를 맞혔습니다!
            </span>
          </div>
        )}

        {/* 학생 상세 페이지 링크 */}
        <Link
          href={`/students/${exam.studentId}`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          학생 상세 정보 보기
        </Link>
      </div>
    </div>
  );
}
