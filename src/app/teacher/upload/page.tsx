'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockStudents } from '@/data/mock';

// Mock OCR result data
const mockOCRResult = {
  answers: [
    { number: 1, studentAnswer: '1', correctAnswer: '1', isCorrect: true },
    { number: 2, studentAnswer: '3', correctAnswer: '2', isCorrect: false },
    { number: 3, studentAnswer: '2', correctAnswer: '2', isCorrect: true },
    { number: 4, studentAnswer: '4', correctAnswer: '4', isCorrect: true },
    { number: 5, studentAnswer: '1', correctAnswer: '3', isCorrect: false },
    { number: 6, studentAnswer: '3', correctAnswer: '3', isCorrect: true },
    { number: 7, studentAnswer: '2', correctAnswer: '2', isCorrect: true },
    { number: 8, studentAnswer: '4', correctAnswer: '1', isCorrect: false },
    { number: 9, studentAnswer: '1', correctAnswer: '1', isCorrect: true },
    { number: 10, studentAnswer: '3', correctAnswer: '3', isCorrect: true },
  ],
};

type ViewState = 'upload' | 'processing' | 'result';

export default function UploadPage() {
  const [viewState, setViewState] = useState<ViewState>('upload');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [subject, setSubject] = useState('');
  const [examTitle, setExamTitle] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Mock file upload
    setUploadedFile('exam_photo.jpg');
  };

  const handleFileSelect = () => {
    // Mock file selection
    setUploadedFile('exam_photo.jpg');
  };

  const handleUpload = () => {
    if (!selectedStudent || !subject || !examTitle || !uploadedFile) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    setViewState('processing');

    // Simulate processing delay
    setTimeout(() => {
      setViewState('result');
    }, 2500);
  };

  const handleSaveResult = () => {
    alert('결과가 저장되었습니다.');
    // Reset form
    setViewState('upload');
    setSelectedStudent('');
    setSubject('');
    setExamTitle('');
    setUploadedFile(null);
  };

  const correctCount = mockOCRResult.answers.filter((a) => a.isCorrect).length;
  const totalCount = mockOCRResult.answers.length;
  const score = Math.round((correctCount / totalCount) * 100);

  // Processing State
  if (viewState === 'processing') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md w-full">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-blue-500 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            시험지 분석 중...
          </h2>
          <p className="text-gray-600 mb-4">
            OCR로 답안을 인식하고 자동 채점하고 있습니다.
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full animate-pulse"
              style={{ width: '60%' }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Result State
  if (viewState === 'result') {
    const selectedStudentData = mockStudents.find(
      (s) => s.id === selectedStudent
    );

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewState('upload')}
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
              </button>
              <h1 className="text-xl font-bold text-gray-900">채점 결과</h1>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-6">
          {/* Score Summary Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {selectedStudentData?.name} | {selectedStudentData?.grade}
                </p>
                <h2 className="text-xl font-bold text-gray-900">{examTitle}</h2>
                <p className="text-sm text-gray-500">{subject}</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center border-4 border-blue-500">
                  <span className="text-3xl font-bold text-blue-600">
                    {score}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">점</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{totalCount}</p>
                <p className="text-sm text-gray-500">총 문항</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {correctCount}
                </p>
                <p className="text-sm text-gray-500">정답</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-500">
                  {totalCount - correctCount}
                </p>
                <p className="text-sm text-gray-500">오답</p>
              </div>
            </div>
          </div>

          {/* OCR Recognized Answers */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              OCR 인식 결과
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {mockOCRResult.answers.map((answer) => (
                <div
                  key={answer.number}
                  className={`p-3 rounded-xl text-center ${
                    answer.isCorrect
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <p className="text-xs text-gray-500 mb-1">{answer.number}번</p>
                  <p
                    className={`text-lg font-bold ${
                      answer.isCorrect ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {answer.studentAnswer}
                  </p>
                  {!answer.isCorrect && (
                    <p className="text-xs text-gray-500 mt-1">
                      정답: {answer.correctAnswer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Wrong Answers Detail */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">오답 분석</h3>
            <div className="space-y-3">
              {mockOCRResult.answers
                .filter((a) => !a.isCorrect)
                .map((answer) => (
                  <div
                    key={answer.number}
                    className="flex items-center justify-between p-4 bg-red-50 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                        {answer.number}
                      </span>
                      <div>
                        <p className="text-gray-900">
                          학생 답안:{' '}
                          <span className="font-bold text-red-500">
                            {answer.studentAnswer}번
                          </span>
                        </p>
                        <p className="text-sm text-gray-500">
                          정답:{' '}
                          <span className="font-medium text-green-600">
                            {answer.correctAnswer}번
                          </span>
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-6 h-6 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ))}
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveResult}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold transition-colors shadow-md"
          >
            결과 저장
          </button>
        </main>
      </div>
    );
  }

  // Upload State (default)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/teacher/dashboard"
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
            <h1 className="text-xl font-bold text-gray-900">시험지 업로드</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Upload Area */}
        <div
          className={`bg-white rounded-2xl shadow-md p-8 mb-6 border-2 border-dashed transition-colors cursor-pointer ${
            isDragOver
              ? 'border-blue-500 bg-blue-50'
              : uploadedFile
              ? 'border-green-500 bg-green-50'
              : 'border-gray-300 hover:border-blue-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleFileSelect}
        >
          <div className="flex flex-col items-center justify-center py-8">
            {uploadedFile ? (
              <>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-10 h-10 text-green-500"
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
                </div>
                <p className="text-lg font-semibold text-green-600 mb-2">
                  파일이 선택되었습니다
                </p>
                <p className="text-gray-500">{uploadedFile}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setUploadedFile(null);
                  }}
                  className="mt-4 text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  파일 제거
                </button>
              </>
            ) : (
              <>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-10 h-10 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  시험지 사진을 촬영하거나 업로드하세요
                </p>
                <p className="text-gray-500 text-sm">
                  클릭하거나 파일을 드래그하여 업로드
                </p>
              </>
            )}
          </div>
        </div>

        {/* Form Fields */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          {/* Student Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              학생 선택
            </label>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-gray-900"
            >
              <option value="">학생을 선택하세요</option>
              {mockStudents.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} ({student.grade})
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              과목
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="예: 수학, 영어, 국어"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Exam Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              시험 제목
            </label>
            <input
              type="text"
              value={examTitle}
              onChange={(e) => setExamTitle(e.target.value)}
              placeholder="예: 이차방정식 단원평가"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={!selectedStudent || !subject || !examTitle || !uploadedFile}
            className={`w-full py-4 rounded-xl text-lg font-semibold transition-colors shadow-md ${
              selectedStudent && subject && examTitle && uploadedFile
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            시험지 분석하기
          </button>
        </div>
      </main>
    </div>
  );
}
