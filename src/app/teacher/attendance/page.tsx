'use client';

import { useState, useMemo } from 'react';
import { mockStudents, mockAttendance } from '@/data/mock';
import { Attendance } from '@/types';

export default function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const [attendanceRecords, setAttendanceRecords] = useState<Attendance[]>(mockAttendance);

  // Filter attendance records for selected date
  const todayAttendance = useMemo(() => {
    return attendanceRecords.filter(record => record.date === selectedDate);
  }, [attendanceRecords, selectedDate]);

  // Get current time in HH:mm format
  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  // Determine status based on check-in time (15:00 is the standard time)
  const determineStatus = (checkInTime: string): 'present' | 'late' => {
    const [hours, minutes] = checkInTime.split(':').map(Number);
    const checkInMinutes = hours * 60 + minutes;
    const standardMinutes = 15 * 60; // 15:00
    return checkInMinutes > standardMinutes + 10 ? 'late' : 'present';
  };

  // Handle check-in
  const handleCheckIn = (studentId: string, studentName: string) => {
    const currentTime = getCurrentTime();
    const status = determineStatus(currentTime);

    const existingRecord = todayAttendance.find(r => r.studentId === studentId);

    if (existingRecord) {
      // Update existing record
      setAttendanceRecords(prev =>
        prev.map(record =>
          record.id === existingRecord.id
            ? { ...record, checkInTime: currentTime, status }
            : record
        )
      );
    } else {
      // Create new record
      const newRecord: Attendance = {
        id: `att-new-${Date.now()}`,
        studentId,
        studentName,
        date: selectedDate,
        checkInTime: currentTime,
        checkOutTime: null,
        status,
      };
      setAttendanceRecords(prev => [...prev, newRecord]);
    }
  };

  // Handle check-out
  const handleCheckOut = (studentId: string, studentName: string) => {
    const currentTime = getCurrentTime();

    const existingRecord = todayAttendance.find(r => r.studentId === studentId);

    if (existingRecord) {
      // Update existing record
      setAttendanceRecords(prev =>
        prev.map(record =>
          record.id === existingRecord.id
            ? { ...record, checkOutTime: currentTime }
            : record
        )
      );
    } else {
      // Create new record with only check-out (unusual case)
      const newRecord: Attendance = {
        id: `att-new-${Date.now()}`,
        studentId,
        studentName,
        date: selectedDate,
        checkInTime: null,
        checkOutTime: currentTime,
        status: 'absent',
      };
      setAttendanceRecords(prev => [...prev, newRecord]);
    }
  };

  // Get status badge styling
  const getStatusBadge = (status: 'present' | 'absent' | 'late') => {
    const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
    switch (status) {
      case 'present':
        return `${baseClasses} bg-green-100 text-green-700`;
      case 'absent':
        return `${baseClasses} bg-red-100 text-red-700`;
      case 'late':
        return `${baseClasses} bg-yellow-100 text-yellow-700`;
      default:
        return baseClasses;
    }
  };

  // Get status label in Korean
  const getStatusLabel = (status: 'present' | 'absent' | 'late') => {
    switch (status) {
      case 'present':
        return '출석';
      case 'absent':
        return '결석';
      case 'late':
        return '지각';
      default:
        return '';
    }
  };

  // Get attendance record for a student
  const getStudentAttendance = (studentId: string) => {
    return todayAttendance.find(record => record.studentId === studentId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-blue-600">출결 관리</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Date Selector */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            날짜 선택
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Attendance Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {todayAttendance.filter(r => r.status === 'present').length}
            </div>
            <div className="text-sm text-green-700">출석</div>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {todayAttendance.filter(r => r.status === 'late').length}
            </div>
            <div className="text-sm text-yellow-700">지각</div>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-red-600">
              {mockStudents.length - todayAttendance.filter(r => r.status !== 'absent').length}
            </div>
            <div className="text-sm text-red-700">결석</div>
          </div>
        </div>

        {/* Student Attendance List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b border-blue-100">
            <h2 className="font-semibold text-blue-800">학생 출결 현황</h2>
          </div>
          <ul className="divide-y divide-gray-100">
            {mockStudents.map((student) => {
              const attendance = getStudentAttendance(student.id);
              const status = attendance?.status || 'absent';

              return (
                <li key={student.id} className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Student Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium">
                          {student.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.grade}</div>
                      </div>
                    </div>

                    {/* Time Info */}
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex flex-col">
                        <span className="text-gray-500">등원</span>
                        <span className="font-medium text-gray-900">
                          {attendance?.checkInTime || '-'}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500">하원</span>
                        <span className="font-medium text-gray-900">
                          {attendance?.checkOutTime || '-'}
                        </span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div>
                      <span className={getStatusBadge(status)}>
                        {getStatusLabel(status)}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCheckIn(student.id, student.name)}
                        disabled={!!attendance?.checkInTime}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          attendance?.checkInTime
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                      >
                        등원
                      </button>
                      <button
                        onClick={() => handleCheckOut(student.id, student.name)}
                        disabled={!attendance?.checkInTime || !!attendance?.checkOutTime}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          !attendance?.checkInTime || attendance?.checkOutTime
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                      >
                        하원
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
