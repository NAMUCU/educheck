'use client';

import { useState, useMemo } from 'react';
import { mockAttendance } from '@/data/mock';

type ViewMode = 'calendar' | 'list';

export default function ParentAttendancePage() {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });

  // Filter attendance for student-1 (박민수)
  const studentAttendance = useMemo(() => {
    return mockAttendance
      .filter((att) => att.studentId === 'student-1')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  // Filter by selected month
  const filteredAttendance = useMemo(() => {
    return studentAttendance.filter((att) => att.date.startsWith(selectedMonth));
  }, [studentAttendance, selectedMonth]);

  // Monthly summary
  const monthlySummary = useMemo(() => {
    const present = filteredAttendance.filter((att) => att.status === 'present').length;
    const absent = filteredAttendance.filter((att) => att.status === 'absent').length;
    const late = filteredAttendance.filter((att) => att.status === 'late').length;
    return { present, absent, late };
  }, [filteredAttendance]);

  // Generate calendar days for selected month
  const calendarDays = useMemo(() => {
    const [year, month] = selectedMonth.split('-').map(Number);
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    const days: (null | { day: number; attendance: typeof filteredAttendance[0] | null })[] = [];

    // Add empty slots for days before the first day of month
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null);
    }

    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${selectedMonth}-${String(day).padStart(2, '0')}`;
      const attendance = filteredAttendance.find((att) => att.date === dateStr) || null;
      days.push({ day, attendance });
    }

    return days;
  }, [selectedMonth, filteredAttendance]);

  const getStatusBadge = (status: 'present' | 'absent' | 'late') => {
    const styles = {
      present: 'bg-green-100 text-green-800 border-green-200',
      absent: 'bg-red-100 text-red-800 border-red-200',
      late: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    };
    const labels = {
      present: '출석',
      absent: '결석',
      late: '지각',
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return `${date.getMonth() + 1}월 ${date.getDate()}일 (${days[date.getDay()]})`;
  };

  const getMonthLabel = () => {
    const [year, month] = selectedMonth.split('-').map(Number);
    return `${year}년 ${month}월`;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const [year, month] = selectedMonth.split('-').map(Number);
    let newYear = year;
    let newMonth = month + (direction === 'next' ? 1 : -1);

    if (newMonth > 12) {
      newMonth = 1;
      newYear++;
    } else if (newMonth < 1) {
      newMonth = 12;
      newYear--;
    }

    setSelectedMonth(`${newYear}-${String(newMonth).padStart(2, '0')}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-600 text-white px-4 py-6">
        <h1 className="text-2xl font-bold">출결 확인</h1>
        <p className="text-teal-100 mt-1">박민수</p>
      </header>

      <main className="p-4 space-y-4">
        {/* Monthly Summary */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            {getMonthLabel()} 출결 현황
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-green-50 rounded-lg p-3 text-center border border-green-100">
              <p className="text-2xl font-bold text-green-600">{monthlySummary.present}</p>
              <p className="text-sm text-green-700">출석 일수</p>
            </div>
            <div className="bg-red-50 rounded-lg p-3 text-center border border-red-100">
              <p className="text-2xl font-bold text-red-600">{monthlySummary.absent}</p>
              <p className="text-sm text-red-700">결석 일수</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 text-center border border-yellow-100">
              <p className="text-2xl font-bold text-yellow-600">{monthlySummary.late}</p>
              <p className="text-sm text-yellow-700">지각 일수</p>
            </div>
          </div>
        </div>

        {/* View Toggle & Month Navigation */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="font-medium text-gray-800 min-w-[100px] text-center">
                {getMonthLabel()}
              </span>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                목록
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  viewMode === 'calendar'
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                달력
              </button>
            </div>
          </div>

          {/* Calendar View */}
          {viewMode === 'calendar' && (
            <div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                  <div
                    key={day}
                    className={`text-center text-sm font-medium py-2 ${
                      idx === 0 ? 'text-red-500' : idx === 6 ? 'text-blue-500' : 'text-gray-600'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((dayInfo, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square p-1 rounded-lg ${
                      dayInfo ? 'bg-gray-50' : ''
                    }`}
                  >
                    {dayInfo && (
                      <div className="h-full flex flex-col items-center justify-center">
                        <span className="text-sm text-gray-700">{dayInfo.day}</span>
                        {dayInfo.attendance && (
                          <div
                            className={`w-2 h-2 rounded-full mt-1 ${
                              dayInfo.attendance.status === 'present'
                                ? 'bg-green-500'
                                : dayInfo.attendance.status === 'absent'
                                ? 'bg-red-500'
                                : 'bg-yellow-500'
                            }`}
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>출석</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span>결석</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span>지각</span>
                </div>
              </div>
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-3">
              {filteredAttendance.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  이 달의 출결 기록이 없습니다.
                </div>
              ) : (
                filteredAttendance.map((att) => (
                  <div
                    key={att.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{formatDate(att.date)}</p>
                      <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                        <span>
                          등원: {att.checkInTime || '-'}
                        </span>
                        <span>
                          하원: {att.checkOutTime || '-'}
                        </span>
                      </div>
                    </div>
                    {getStatusBadge(att.status)}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
