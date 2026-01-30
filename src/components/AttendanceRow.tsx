'use client';

import { Attendance } from '@/types';

interface AttendanceRowProps {
  attendance: Attendance;
  onCheckIn: (id: string) => void;
  onCheckOut: (id: string) => void;
}

const formatTime = (time: string | null): string => {
  if (!time) return '--:--';
  const date = new Date(time);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

const getStatusBadge = (status: Attendance['status']) => {
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';

  switch (status) {
    case 'present':
      return {
        className: `${baseClasses} bg-green-100 text-green-800`,
        label: '출석',
      };
    case 'absent':
      return {
        className: `${baseClasses} bg-red-100 text-red-800`,
        label: '결석',
      };
    case 'late':
      return {
        className: `${baseClasses} bg-yellow-100 text-yellow-800`,
        label: '지각',
      };
  }
};

export default function AttendanceRow({
  attendance,
  onCheckIn,
  onCheckOut,
}: AttendanceRowProps) {
  const statusBadge = getStatusBadge(attendance.status);

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-4 py-3 text-sm text-gray-900">
        {attendance.studentName}
      </td>
      <td className="px-4 py-3 text-sm text-gray-600">
        {formatTime(attendance.checkInTime)}
      </td>
      <td className="px-4 py-3 text-sm text-gray-600">
        {formatTime(attendance.checkOutTime)}
      </td>
      <td className="px-4 py-3">
        <span className={statusBadge.className}>{statusBadge.label}</span>
      </td>
      <td className="px-4 py-3">
        <div className="flex gap-2">
          {!attendance.checkInTime && (
            <button
              onClick={() => onCheckIn(attendance.id)}
              className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              등원
            </button>
          )}
          {attendance.checkInTime && !attendance.checkOutTime && (
            <button
              onClick={() => onCheckOut(attendance.id)}
              className="px-3 py-1 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
            >
              하원
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}
