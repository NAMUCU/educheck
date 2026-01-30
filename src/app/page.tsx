'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      {/* 로고 & 타이틀 */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">에듀체크</h1>
        <p className="text-xl text-gray-600">시험지 사진 한 장이 학습 처방전이 됩니다</p>
      </div>

      {/* 로그인 선택 */}
      <div className="w-full max-w-md space-y-4">
        <Link
          href="/teacher/dashboard"
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-4 px-6 rounded-xl text-lg font-semibold transition-colors shadow-md"
        >
          선생님으로 시작하기
        </Link>

        <Link
          href="/parent"
          className="block w-full bg-violet-500 hover:bg-violet-600 text-white text-center py-4 px-6 rounded-xl text-lg font-semibold transition-colors shadow-md"
        >
          학부모로 시작하기
        </Link>

        <Link
          href="/student"
          className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 px-6 rounded-xl text-lg font-semibold transition-colors shadow-md"
        >
          학생으로 시작하기
        </Link>
      </div>

      {/* 하단 안내 */}
      <p className="mt-12 text-sm text-gray-500">
        데모 버전입니다. 실제 데이터는 사용되지 않습니다.
      </p>
    </div>
  );
}
