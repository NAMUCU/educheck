'use client';

import { useState } from 'react';

// Mock data for weakness analysis
const mockWeaknessData = {
  overallSummary: {
    totalWeakConcepts: 12,
    criticalWeaknesses: 3,
    improvingAreas: 5,
    averageMastery: 58,
  },
  subjectBreakdown: [
    { subject: '수학', weakCount: 5, avgMastery: 52, color: 'blue' },
    { subject: '영어', weakCount: 3, avgMastery: 65, color: 'green' },
    { subject: '과학', weakCount: 2, avgMastery: 70, color: 'purple' },
    { subject: '국어', weakCount: 2, avgMastery: 55, color: 'orange' },
  ],
  topWeakConcepts: [
    {
      id: 1,
      conceptName: '이차방정식의 근의 공식',
      subject: '수학',
      errorFrequency: 8,
      masteryLevel: 25,
      recommendedMaterials: [
        { type: '동영상', title: '이차방정식 기초부터 심화까지', link: '#' },
        { type: '문제집', title: '수학의 정석 p.125-140', link: '#' },
      ],
    },
    {
      id: 2,
      conceptName: '관계대명사 which/that 구분',
      subject: '영어',
      errorFrequency: 6,
      masteryLevel: 35,
      recommendedMaterials: [
        { type: '동영상', title: '관계대명사 완벽정리', link: '#' },
        { type: '워크시트', title: '관계대명사 연습문제 30선', link: '#' },
      ],
    },
    {
      id: 3,
      conceptName: '뉴턴의 운동법칙 적용',
      subject: '과학',
      errorFrequency: 5,
      masteryLevel: 42,
      recommendedMaterials: [
        { type: '실험영상', title: '뉴턴 법칙 실험으로 이해하기', link: '#' },
        { type: '문제집', title: '물리 개념원리 3장', link: '#' },
      ],
    },
    {
      id: 4,
      conceptName: '삼각함수의 그래프',
      subject: '수학',
      errorFrequency: 5,
      masteryLevel: 38,
      recommendedMaterials: [
        { type: '동영상', title: '삼각함수 그래프 그리기', link: '#' },
        { type: '앱', title: 'GeoGebra 그래프 연습', link: '#' },
      ],
    },
    {
      id: 5,
      conceptName: '비문학 독해 - 논증 구조 파악',
      subject: '국어',
      errorFrequency: 4,
      masteryLevel: 48,
      recommendedMaterials: [
        { type: '강의', title: '비문학 독해 전략 특강', link: '#' },
        { type: '기출문제', title: '수능 비문학 기출 모음', link: '#' },
      ],
    },
  ],
  studyOrder: [
    {
      step: 1,
      concept: '이차방정식의 근의 공식',
      reason: '가장 빈출되는 개념이며, 다른 수학 개념의 기초가 됩니다.',
      estimatedTime: '3일',
      priority: 'critical',
    },
    {
      step: 2,
      concept: '삼각함수의 그래프',
      reason: '이차방정식 학습 후 연계하여 학습하면 효과적입니다.',
      estimatedTime: '2일',
      priority: 'high',
    },
    {
      step: 3,
      concept: '관계대명사 which/that 구분',
      reason: '영어 문법의 핵심 개념으로, 독해력 향상에 필수입니다.',
      estimatedTime: '2일',
      priority: 'high',
    },
    {
      step: 4,
      concept: '뉴턴의 운동법칙 적용',
      reason: '과학 전반에 걸쳐 활용되는 기본 개념입니다.',
      estimatedTime: '3일',
      priority: 'medium',
    },
    {
      step: 5,
      concept: '비문학 독해 - 논증 구조 파악',
      reason: '꾸준한 연습이 필요하며, 다른 과목 학습과 병행하세요.',
      estimatedTime: '지속적',
      priority: 'medium',
    },
  ],
  aiRecommendations: [
    {
      type: 'insight',
      icon: '💡',
      title: '학습 패턴 분석 결과',
      content: '수학 계산 실수가 많습니다. 문제를 풀 때 검산하는 습관을 들이세요. 특히 이차방정식에서 부호 실수가 자주 발생합니다.',
    },
    {
      type: 'schedule',
      icon: '📅',
      title: '추천 학습 스케줄',
      content: '하루 90분씩 집중 학습을 권장합니다. 수학 45분 → 휴식 10분 → 다른 과목 35분 패턴이 효과적입니다.',
    },
    {
      type: 'method',
      icon: '📚',
      title: '학습 방법 제안',
      content: '개념 이해 → 기본 문제 → 응용 문제 순서로 학습하세요. 오답 노트를 작성하면 같은 실수를 줄일 수 있습니다.',
    },
    {
      type: 'motivation',
      icon: '🎯',
      title: '목표 설정 팁',
      content: '2주 후 모의고사까지 상위 3개 취약점 극복을 목표로 하세요. 충분히 달성 가능한 목표입니다!',
    },
  ],
};

export default function StudentWeaknessPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [expandedConcept, setExpandedConcept] = useState<number | null>(null);

  const { overallSummary, subjectBreakdown, topWeakConcepts, studyOrder, aiRecommendations } = mockWeaknessData;

  const getMasteryColor = (level: number) => {
    if (level < 30) return { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-100' };
    if (level < 50) return { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-100' };
    if (level < 70) return { bg: 'bg-yellow-500', text: 'text-yellow-600', light: 'bg-yellow-100' };
    return { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-100' };
  };

  const getSubjectColor = (color: string) => {
    const colors: Record<string, { bg: string; text: string; light: string; border: string }> = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-100', border: 'border-blue-500' },
      green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-100', border: 'border-green-500' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-100', border: 'border-purple-500' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-100', border: 'border-orange-500' },
    };
    return colors[color] || colors.blue;
  };

  const getPriorityBadge = (priority: string) => {
    const badges: Record<string, { bg: string; text: string; label: string }> = {
      critical: { bg: 'bg-red-100', text: 'text-red-700', label: '긴급' },
      high: { bg: 'bg-orange-100', text: 'text-orange-700', label: '높음' },
      medium: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: '보통' },
      low: { bg: 'bg-green-100', text: 'text-green-700', label: '낮음' },
    };
    return badges[priority] || badges.medium;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">나의 취약점 분석</h1>
          <p className="text-indigo-100 mt-1">AI가 분석한 맞춤형 학습 처방전</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Overall Weakness Summary */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            전체 취약점 요약
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-red-600">{overallSummary.totalWeakConcepts}</p>
              <p className="text-sm text-red-700 mt-1">총 취약 개념</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-orange-600">{overallSummary.criticalWeaknesses}</p>
              <p className="text-sm text-orange-700 mt-1">긴급 보완 필요</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-green-600">{overallSummary.improvingAreas}</p>
              <p className="text-sm text-green-700 mt-1">개선 중인 영역</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-blue-600">{overallSummary.averageMastery}%</p>
              <p className="text-sm text-blue-700 mt-1">평균 숙달도</p>
            </div>
          </div>

          {/* Overall Mastery Gauge */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">전체 숙달도</span>
              <span className="text-sm font-bold text-indigo-600">{overallSummary.averageMastery}%</span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                style={{ width: `${overallSummary.averageMastery}%` }}
              />
              {/* Markers */}
              <div className="absolute top-0 left-[30%] w-0.5 h-full bg-white/50" />
              <div className="absolute top-0 left-[50%] w-0.5 h-full bg-white/50" />
              <div className="absolute top-0 left-[70%] w-0.5 h-full bg-white/50" />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0%</span>
              <span>30%</span>
              <span>50%</span>
              <span>70%</span>
              <span>100%</span>
            </div>
          </div>
        </section>

        {/* Subject-by-Subject Breakdown */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            과목별 취약점 분석
          </h2>

          {/* Subject Bar Chart */}
          <div className="space-y-4">
            {subjectBreakdown.map((subject, index) => {
              const colors = getSubjectColor(subject.color);
              const isSelected = selectedSubject === subject.subject;

              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    isSelected ? `${colors.border} ${colors.light}` : 'border-transparent bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedSubject(isSelected ? null : subject.subject)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${colors.light} flex items-center justify-center`}>
                        <span className={`font-bold ${colors.text}`}>{subject.subject.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{subject.subject}</p>
                        <p className="text-xs text-gray-500">취약 개념 {subject.weakCount}개</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl font-bold ${colors.text}`}>{subject.avgMastery}%</p>
                      <p className="text-xs text-gray-500">평균 숙달도</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${colors.bg} rounded-full transition-all duration-500`}
                      style={{ width: `${subject.avgMastery}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subject Comparison Pie Chart Visual */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm font-medium text-gray-600 mb-3 text-center">취약 개념 분포</p>
            <div className="flex items-center justify-center gap-6">
              {/* Simple visual representation */}
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {subjectBreakdown.reduce((acc, subject, index) => {
                    const total = subjectBreakdown.reduce((sum, s) => sum + s.weakCount, 0);
                    const percentage = (subject.weakCount / total) * 100;
                    const previousPercentages = subjectBreakdown.slice(0, index).reduce((sum, s) => sum + (s.weakCount / total) * 100, 0);
                    const colors = ['#3b82f6', '#22c55e', '#a855f7', '#f97316'];

                    acc.push(
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={colors[index]}
                        strokeWidth="20"
                        strokeDasharray={`${percentage * 2.51} ${251 - percentage * 2.51}`}
                        strokeDashoffset={`${-previousPercentages * 2.51}`}
                      />
                    );
                    return acc;
                  }, [] as JSX.Element[])}
                </svg>
              </div>

              <div className="space-y-2">
                {subjectBreakdown.map((subject, index) => {
                  const colors = getSubjectColor(subject.color);
                  const total = subjectBreakdown.reduce((sum, s) => sum + s.weakCount, 0);
                  const percentage = Math.round((subject.weakCount / total) * 100);

                  return (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded ${colors.bg}`} />
                      <span className="text-sm text-gray-600">{subject.subject}</span>
                      <span className="text-sm font-medium text-gray-900">{percentage}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Top 5 Weak Concepts */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            TOP 5 취약 개념
          </h2>

          <div className="space-y-4">
            {topWeakConcepts.map((concept, index) => {
              const masteryColors = getMasteryColor(concept.masteryLevel);
              const isExpanded = expandedConcept === concept.id;

              return (
                <div
                  key={concept.id}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => setExpandedConcept(isExpanded ? null : concept.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full ${masteryColors.light} flex items-center justify-center flex-shrink-0`}>
                          <span className={`text-sm font-bold ${masteryColors.text}`}>{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{concept.conceptName}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                              {concept.subject}
                            </span>
                            <span className="text-xs text-red-500 font-medium">
                              오답 {concept.errorFrequency}회
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-bold ${masteryColors.text}`}>
                          {concept.masteryLevel}%
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-500">숙달도</span>
                        <span className={`text-xs font-medium ${masteryColors.text}`}>
                          {concept.masteryLevel < 30 ? '집중 학습 필요' :
                           concept.masteryLevel < 50 ? '보충 학습 필요' :
                           concept.masteryLevel < 70 ? '추가 연습 권장' : '양호'}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${masteryColors.bg} rounded-full transition-all duration-500`}
                          style={{ width: `${concept.masteryLevel}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content - Recommended Materials */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-100">
                      <p className="text-sm font-medium text-gray-700 mb-3">추천 학습 자료</p>
                      <div className="space-y-2">
                        {concept.recommendedMaterials.map((material, mIndex) => (
                          <a
                            key={mIndex}
                            href={material.link}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                              {material.type === '동영상' && (
                                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                              {material.type === '문제집' && (
                                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                              )}
                              {material.type === '워크시트' && (
                                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              )}
                              {material.type === '실험영상' && (
                                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                              )}
                              {(material.type === '강의' || material.type === '기출문제' || material.type === '앱') && (
                                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{material.title}</p>
                              <p className="text-xs text-gray-500">{material.type}</p>
                            </div>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* AI Study Recommendations */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-md p-6 border border-indigo-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            AI 학습 추천
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiRecommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{rec.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{rec.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Study Order Section */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            이 순서로 공부하세요
          </h2>
          <p className="text-sm text-gray-500 mb-6">AI가 분석한 최적의 학습 순서입니다</p>

          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

            <div className="space-y-6">
              {studyOrder.map((step, index) => {
                const priorityBadge = getPriorityBadge(step.priority);

                return (
                  <div key={index} className="relative flex gap-4">
                    {/* Step number circle */}
                    <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      index === 0 ? 'bg-gradient-to-br from-indigo-500 to-purple-500' :
                      index === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                      index === 2 ? 'bg-gradient-to-br from-pink-500 to-orange-500' :
                      index === 3 ? 'bg-gradient-to-br from-orange-500 to-yellow-500' :
                      'bg-gradient-to-br from-yellow-500 to-green-500'
                    } shadow-lg`}>
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{step.concept}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${priorityBadge.bg} ${priorityBadge.text} font-medium`}>
                          {priorityBadge.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{step.reason}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>예상 소요 시간: <strong className="text-gray-700">{step.estimatedTime}</strong></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Start Study Button */}
          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 mx-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              학습 시작하기
            </button>
          </div>
        </section>

        {/* Mastery Legend */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-3">숙달도 기준 안내</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-500" />
              <span className="text-gray-600">30% 미만: 집중 학습 필요</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-orange-500" />
              <span className="text-gray-600">30-50%: 보충 학습 필요</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-500" />
              <span className="text-gray-600">50-70%: 추가 연습 권장</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500" />
              <span className="text-gray-600">70% 이상: 양호</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
