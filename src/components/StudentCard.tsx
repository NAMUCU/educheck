'use client';

import { Student } from '@/types';

interface StudentCardProps {
  student: Student;
  recentScore: number | null;
  onClick: () => void;
}

export default function StudentCard({ student, recentScore, onClick }: StudentCardProps) {
  // 이름에서 이니셜 추출 (한글 이름의 경우 첫 글자)
  const getInitials = (name: string): string => {
    if (!name) return '';
    // 한글 이름인 경우 첫 글자 반환
    if (/[가-힣]/.test(name)) {
      return name.charAt(0);
    }
    // 영문 이름인 경우 첫 글자들 반환
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // 점수에 따른 색상 반환
  const getScoreColor = (score: number): string => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  // 점수에 따른 상태 텍스트
  const getScoreStatus = (score: number): string => {
    if (score >= 80) return '우수';
    if (score >= 60) return '보통';
    return '주의';
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md p-5 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-blue-400 border-2 border-transparent"
    >
      <div className="flex items-center gap-4">
        {/* 아바타 */}
        <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold shrink-0">
          {getInitials(student.name)}
        </div>

        {/* 학생 정보 */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {student.name}
          </h3>
          <p className="text-sm text-gray-500">{student.grade}</p>
        </div>

        {/* 최근 점수 */}
        <div className="text-right shrink-0">
          {recentScore !== null ? (
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs text-gray-500">최근 점수</span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-2xl font-bold ${
                    recentScore >= 80
                      ? 'text-green-600'
                      : recentScore >= 60
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}
                >
                  {recentScore}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${getScoreColor(
                    recentScore
                  )}`}
                >
                  {getScoreStatus(recentScore)}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs text-gray-500">최근 점수</span>
              <span className="text-sm text-gray-400">기록 없음</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
