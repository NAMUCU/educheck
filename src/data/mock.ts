import {
  User,
  Academy,
  Student,
  Exam,
  WeaknessAnalysis,
  LearningReport,
  Attendance,
  Notification,
} from '@/types';

// 학원
export const mockAcademy: Academy = {
  id: 'academy-1',
  name: '수학왕 학원',
  address: '경기도 안양시 동안구 평촌동 123',
  phone: '031-123-4567',
};

// 사용자
export const mockTeacher: User = {
  id: 'teacher-1',
  name: '김지훈',
  email: 'teacher@educheck.kr',
  phone: '010-1234-5678',
  role: 'teacher',
  academyId: 'academy-1',
};

export const mockParent: User = {
  id: 'parent-1',
  name: '박영희',
  email: 'parent@educheck.kr',
  phone: '010-9876-5432',
  role: 'parent',
  academyId: 'academy-1',
};

// 학생
export const mockStudents: Student[] = [
  {
    id: 'student-1',
    name: '박민수',
    grade: '중2',
    parentId: 'parent-1',
    teacherId: 'teacher-1',
    academyId: 'academy-1',
  },
  {
    id: 'student-2',
    name: '이서연',
    grade: '중3',
    parentId: 'parent-2',
    teacherId: 'teacher-1',
    academyId: 'academy-1',
  },
  {
    id: 'student-3',
    name: '최준호',
    grade: '중2',
    parentId: 'parent-3',
    teacherId: 'teacher-1',
    academyId: 'academy-1',
  },
  {
    id: 'student-4',
    name: '김하은',
    grade: '중1',
    parentId: 'parent-4',
    teacherId: 'teacher-1',
    academyId: 'academy-1',
  },
  {
    id: 'student-5',
    name: '정우진',
    grade: '중3',
    parentId: 'parent-5',
    teacherId: 'teacher-1',
    academyId: 'academy-1',
  },
];

// 시험 결과
export const mockExams: Exam[] = [
  {
    id: 'exam-1',
    studentId: 'student-1',
    studentName: '박민수',
    subject: '수학',
    title: '이차방정식 단원평가',
    uploadedAt: '2025-01-28 14:30',
    totalQuestions: 20,
    correctCount: 14,
    score: 70,
    questions: [
      { id: 'q1', number: 1, topic: '이차방정식', concept: '근의 공식', isCorrect: true, studentAnswer: '①', correctAnswer: '①' },
      { id: 'q2', number: 2, topic: '이차방정식', concept: '인수분해', isCorrect: false, studentAnswer: '③', correctAnswer: '②' },
      { id: 'q3', number: 3, topic: '이차방정식', concept: '근의 공식', isCorrect: true, studentAnswer: '②', correctAnswer: '②' },
      { id: 'q4', number: 4, topic: '인수분해', concept: '공통인수', isCorrect: false, studentAnswer: '①', correctAnswer: '④' },
      { id: 'q5', number: 5, topic: '인수분해', concept: '완전제곱식', isCorrect: false, studentAnswer: '②', correctAnswer: '③' },
      { id: 'q6', number: 6, topic: '이차방정식', concept: '판별식', isCorrect: true, studentAnswer: '③', correctAnswer: '③' },
      { id: 'q7', number: 7, topic: '인수분해', concept: '완전제곱식', isCorrect: false, studentAnswer: '④', correctAnswer: '①' },
      { id: 'q8', number: 8, topic: '이차방정식', concept: '근과 계수의 관계', isCorrect: true, studentAnswer: '①', correctAnswer: '①' },
      { id: 'q9', number: 9, topic: '이차방정식', concept: '이항', isCorrect: false, studentAnswer: '②', correctAnswer: '④' },
      { id: 'q10', number: 10, topic: '이차방정식', concept: '근의 공식', isCorrect: true, studentAnswer: '③', correctAnswer: '③' },
      { id: 'q11', number: 11, topic: '인수분해', concept: '공통인수', isCorrect: true, studentAnswer: '②', correctAnswer: '②' },
      { id: 'q12', number: 12, topic: '이차방정식', concept: '판별식', isCorrect: true, studentAnswer: '④', correctAnswer: '④' },
      { id: 'q13', number: 13, topic: '인수분해', concept: '완전제곱식', isCorrect: false, studentAnswer: '①', correctAnswer: '②' },
      { id: 'q14', number: 14, topic: '이차방정식', concept: '이항', isCorrect: true, studentAnswer: '③', correctAnswer: '③' },
      { id: 'q15', number: 15, topic: '이차방정식', concept: '근의 공식', isCorrect: true, studentAnswer: '②', correctAnswer: '②' },
      { id: 'q16', number: 16, topic: '인수분해', concept: '인수분해 공식', isCorrect: true, studentAnswer: '①', correctAnswer: '①' },
      { id: 'q17', number: 17, topic: '이차방정식', concept: '근과 계수의 관계', isCorrect: true, studentAnswer: '④', correctAnswer: '④' },
      { id: 'q18', number: 18, topic: '이차방정식', concept: '판별식', isCorrect: true, studentAnswer: '②', correctAnswer: '②' },
      { id: 'q19', number: 19, topic: '인수분해', concept: '완전제곱식', isCorrect: true, studentAnswer: '③', correctAnswer: '③' },
      { id: 'q20', number: 20, topic: '이차방정식', concept: '이항', isCorrect: false, studentAnswer: '①', correctAnswer: '④' },
    ],
  },
  {
    id: 'exam-2',
    studentId: 'student-1',
    studentName: '박민수',
    subject: '수학',
    title: '인수분해 복습',
    uploadedAt: '2025-01-25 15:00',
    totalQuestions: 15,
    correctCount: 9,
    score: 60,
    questions: [
      { id: 'q1', number: 1, topic: '인수분해', concept: '공통인수', isCorrect: true, studentAnswer: '①', correctAnswer: '①' },
      { id: 'q2', number: 2, topic: '인수분해', concept: '완전제곱식', isCorrect: false, studentAnswer: '②', correctAnswer: '④' },
      { id: 'q3', number: 3, topic: '인수분해', concept: '완전제곱식', isCorrect: false, studentAnswer: '③', correctAnswer: '①' },
      { id: 'q4', number: 4, topic: '인수분해', concept: '인수분해 공식', isCorrect: true, studentAnswer: '④', correctAnswer: '④' },
      { id: 'q5', number: 5, topic: '인수분해', concept: '공통인수', isCorrect: true, studentAnswer: '②', correctAnswer: '②' },
      { id: 'q6', number: 6, topic: '인수분해', concept: '완전제곱식', isCorrect: false, studentAnswer: '①', correctAnswer: '③' },
      { id: 'q7', number: 7, topic: '인수분해', concept: '인수분해 공식', isCorrect: true, studentAnswer: '③', correctAnswer: '③' },
      { id: 'q8', number: 8, topic: '인수분해', concept: '공통인수', isCorrect: true, studentAnswer: '④', correctAnswer: '④' },
      { id: 'q9', number: 9, topic: '인수분해', concept: '완전제곱식', isCorrect: false, studentAnswer: '②', correctAnswer: '①' },
      { id: 'q10', number: 10, topic: '인수분해', concept: '인수분해 공식', isCorrect: true, studentAnswer: '①', correctAnswer: '①' },
      { id: 'q11', number: 11, topic: '인수분해', concept: '완전제곱식', isCorrect: false, studentAnswer: '④', correctAnswer: '②' },
      { id: 'q12', number: 12, topic: '인수분해', concept: '공통인수', isCorrect: true, studentAnswer: '③', correctAnswer: '③' },
      { id: 'q13', number: 13, topic: '인수분해', concept: '인수분해 공식', isCorrect: true, studentAnswer: '②', correctAnswer: '②' },
      { id: 'q14', number: 14, topic: '인수분해', concept: '완전제곱식', isCorrect: false, studentAnswer: '①', correctAnswer: '④' },
      { id: 'q15', number: 15, topic: '인수분해', concept: '공통인수', isCorrect: true, studentAnswer: '④', correctAnswer: '④' },
    ],
  },
  {
    id: 'exam-3',
    studentId: 'student-2',
    studentName: '이서연',
    subject: '수학',
    title: '이차함수 단원평가',
    uploadedAt: '2025-01-28 16:00',
    totalQuestions: 20,
    correctCount: 17,
    score: 85,
    questions: [],
  },
  {
    id: 'exam-4',
    studentId: 'student-3',
    studentName: '최준호',
    subject: '수학',
    title: '일차방정식 테스트',
    uploadedAt: '2025-01-27 14:00',
    totalQuestions: 15,
    correctCount: 12,
    score: 80,
    questions: [],
  },
];

// 약점 분석
export const mockWeaknessAnalysis: Record<string, WeaknessAnalysis> = {
  'student-1': {
    studentId: 'student-1',
    weakTopics: [
      { topic: '인수분해', concept: '완전제곱식', accuracy: 25, wrongCount: 6 },
      { topic: '이차방정식', concept: '이항', accuracy: 50, wrongCount: 2 },
      { topic: '인수분해', concept: '공통인수', accuracy: 67, wrongCount: 1 },
    ],
    learningPath: ['완전제곱식 기초', '완전제곱식 응용', '이항 기초', '이차방정식 종합'],
    prescriptionGuide: '민수는 인수분해, 특히 완전제곱식에서 반복적으로 실수하고 있습니다. 완전제곱식 공식 (a±b)² = a² ± 2ab + b²를 다시 정리하고, 기초 문제부터 차근차근 풀어보는 것이 좋겠습니다.',
  },
  'student-2': {
    studentId: 'student-2',
    weakTopics: [
      { topic: '이차함수', concept: '꼭짓점', accuracy: 67, wrongCount: 2 },
      { topic: '이차함수', concept: '그래프 이동', accuracy: 75, wrongCount: 1 },
    ],
    learningPath: ['이차함수 꼭짓점 공식', '그래프 평행이동'],
    prescriptionGuide: '서연이는 전반적으로 우수하나, 이차함수 꼭짓점 찾기에서 약간의 실수가 있습니다. 꼭짓점 공식을 복습하면 금방 향상될 것입니다.',
  },
};

// 학습 처방 리포트
export const mockReports: LearningReport[] = [
  {
    id: 'report-1',
    studentId: 'student-1',
    studentName: '박민수',
    weekStart: '2025-01-20',
    weekEnd: '2025-01-26',
    totalProblems: 35,
    averageScore: 65,
    weakPoints: ['완전제곱식 공식 활용', '이항 실수'],
    recommendations: [
      '이번 주에 완전제곱식 연습 문제 10개만 더 풀면 잡힐 것 같습니다',
      '이항할 때 부호 바뀌는 것을 체크리스트로 확인하는 습관을 들이면 좋겠습니다',
    ],
    encouragement: '민수가 이번 주에 열심히 해서 이차방정식 근의 공식은 확실히 잡았어요! 조금만 더 힘내면 인수분해도 금방 마스터할 수 있을 거예요.',
    sentAt: '2025-01-27 09:00',
  },
  {
    id: 'report-2',
    studentId: 'student-1',
    studentName: '박민수',
    weekStart: '2025-01-27',
    weekEnd: '2025-02-02',
    totalProblems: 20,
    averageScore: 70,
    weakPoints: ['완전제곱식 공식 활용'],
    recommendations: [
      '완전제곱식 문제를 꾸준히 복습 중입니다',
      '다음 주에는 판별식 문제를 추가로 연습하면 좋겠습니다',
    ],
    encouragement: '민수가 지난주보다 5점이나 올랐어요! 꾸준히 노력하는 모습이 보여서 정말 기특합니다.',
    sentAt: null,
  },
];

// 출결
export const mockAttendance: Attendance[] = [
  { id: 'att-1', studentId: 'student-1', studentName: '박민수', date: '2025-01-30', checkInTime: '15:02', checkOutTime: '18:05', status: 'present' },
  { id: 'att-2', studentId: 'student-2', studentName: '이서연', date: '2025-01-30', checkInTime: '15:10', checkOutTime: null, status: 'present' },
  { id: 'att-3', studentId: 'student-3', studentName: '최준호', date: '2025-01-30', checkInTime: null, checkOutTime: null, status: 'absent' },
  { id: 'att-4', studentId: 'student-4', studentName: '김하은', date: '2025-01-30', checkInTime: '15:35', checkOutTime: null, status: 'late' },
  { id: 'att-5', studentId: 'student-5', studentName: '정우진', date: '2025-01-30', checkInTime: '14:55', checkOutTime: '17:50', status: 'present' },
  { id: 'att-6', studentId: 'student-1', studentName: '박민수', date: '2025-01-29', checkInTime: '15:00', checkOutTime: '18:00', status: 'present' },
  { id: 'att-7', studentId: 'student-2', studentName: '이서연', date: '2025-01-29', checkInTime: '15:05', checkOutTime: '18:10', status: 'present' },
  { id: 'att-8', studentId: 'student-3', studentName: '최준호', date: '2025-01-29', checkInTime: '15:00', checkOutTime: '18:00', status: 'present' },
];

// 학부모 알림
export const mockNotifications: Notification[] = [
  {
    id: 'noti-1',
    parentId: 'parent-1',
    type: 'attendance',
    title: '등원 알림',
    message: '박민수 학생이 15:02에 학원에 도착했습니다.',
    createdAt: '2025-01-30 15:02',
    isRead: true,
  },
  {
    id: 'noti-2',
    parentId: 'parent-1',
    type: 'attendance',
    title: '하원 알림',
    message: '박민수 학생이 18:05에 학원에서 출발했습니다.',
    createdAt: '2025-01-30 18:05',
    isRead: false,
  },
  {
    id: 'noti-3',
    parentId: 'parent-1',
    type: 'report',
    title: '주간 학습 리포트',
    message: '박민수 학생의 1월 4주차 학습 처방 리포트가 도착했습니다.',
    createdAt: '2025-01-27 09:00',
    isRead: true,
  },
  {
    id: 'noti-4',
    parentId: 'parent-1',
    type: 'attendance',
    title: '등원 알림',
    message: '박민수 학생이 15:00에 학원에 도착했습니다.',
    createdAt: '2025-01-29 15:00',
    isRead: true,
  },
  {
    id: 'noti-5',
    parentId: 'parent-1',
    type: 'attendance',
    title: '하원 알림',
    message: '박민수 학생이 18:00에 학원에서 출발했습니다.',
    createdAt: '2025-01-29 18:00',
    isRead: true,
  },
];

// 대시보드 통계
export const mockDashboardStats = {
  totalStudents: 45,
  todayAttendance: 38,
  pendingReports: 5,
  recentUploads: 12,
  weeklyAvgScore: 72,
};
