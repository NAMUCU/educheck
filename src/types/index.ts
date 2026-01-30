// 사용자 타입
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'teacher' | 'parent' | 'student';
  academyId: string;
}

// 학원
export interface Academy {
  id: string;
  name: string;
  address: string;
  phone: string;
}

// 학생
export interface Student {
  id: string;
  name: string;
  grade: string;
  parentId: string;
  teacherId: string;
  academyId: string;
}

// 시험지
export interface Exam {
  id: string;
  studentId: string;
  studentName: string;
  subject: string;
  title: string;
  uploadedAt: string;
  totalQuestions: number;
  correctCount: number;
  score: number;
  questions: ExamQuestion[];
}

// 시험 문제
export interface ExamQuestion {
  id: string;
  number: number;
  topic: string;
  concept: string;
  isCorrect: boolean;
  studentAnswer: string;
  correctAnswer: string;
}

// 약점 분석
export interface WeaknessAnalysis {
  studentId: string;
  weakTopics: WeakTopic[];
  learningPath: string[];
  prescriptionGuide: string;
}

export interface WeakTopic {
  topic: string;
  concept: string;
  accuracy: number;
  wrongCount: number;
}

// 학습 처방 리포트
export interface LearningReport {
  id: string;
  studentId: string;
  studentName: string;
  weekStart: string;
  weekEnd: string;
  totalProblems: number;
  averageScore: number;
  weakPoints: string[];
  recommendations: string[];
  encouragement: string;
  sentAt: string | null;
}

// 출결
export interface Attendance {
  id: string;
  studentId: string;
  studentName: string;
  date: string;
  checkInTime: string | null;
  checkOutTime: string | null;
  status: 'present' | 'absent' | 'late';
}

// 알림
export interface Notification {
  id: string;
  parentId: string;
  type: 'attendance' | 'report' | 'message';
  title: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}
