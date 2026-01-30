'use client';

import { Notification } from '@/types';

interface NotificationItemProps {
  notification: Notification;
  onClick: (notification: Notification) => void;
}

// 상대 시간 표시 함수
function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  // 날짜만 비교하기 위해 시간 제거
  const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const nowOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diffTime = nowOnly.getTime() - dateOnly.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return '오늘';
  } else if (diffDays === 1) {
    return '어제';
  } else {
    return `${diffDays}일 전`;
  }
}

// 알림 타입별 아이콘 컴포넌트
function AttendanceIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}

// 알림 타입별 아이콘 반환
function getNotificationIcon(type: Notification['type']) {
  switch (type) {
    case 'attendance':
      return <AttendanceIcon />;
    case 'report':
      return <ReportIcon />;
    case 'message':
      return <MessageIcon />;
    default:
      return <MessageIcon />;
  }
}

// 알림 타입별 배경색 반환
function getIconBackgroundColor(type: Notification['type']): string {
  switch (type) {
    case 'attendance':
      return 'bg-teal-100 text-teal-600';
    case 'report':
      return 'bg-emerald-100 text-emerald-600';
    case 'message':
      return 'bg-green-100 text-green-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
}

export default function NotificationItem({ notification, onClick }: NotificationItemProps) {
  const handleClick = () => {
    onClick(notification);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative flex items-start gap-3 p-4 cursor-pointer
        transition-all duration-200 ease-in-out
        hover:bg-teal-50 hover:shadow-sm
        border-b border-gray-100 last:border-b-0
        ${!notification.isRead ? 'bg-green-50/50' : 'bg-white'}
      `}
    >
      {/* 읽지 않음 표시 (파란 점) */}
      {!notification.isRead && (
        <div className="absolute top-4 left-1 w-2 h-2 bg-blue-500 rounded-full" />
      )}

      {/* 타입별 아이콘 */}
      <div
        className={`
          flex-shrink-0 w-10 h-10 rounded-full
          flex items-center justify-center
          ${getIconBackgroundColor(notification.type)}
        `}
      >
        {getNotificationIcon(notification.type)}
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex-1 min-w-0">
        {/* 제목과 시간 */}
        <div className="flex items-start justify-between gap-2">
          <h3
            className={`
              text-sm font-medium truncate
              ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'}
            `}
          >
            {notification.title}
          </h3>
          <span className="flex-shrink-0 text-xs text-gray-400">
            {getRelativeTime(notification.createdAt)}
          </span>
        </div>

        {/* 메시지 미리보기 */}
        <p
          className={`
            mt-1 text-sm line-clamp-2
            ${!notification.isRead ? 'text-gray-600' : 'text-gray-500'}
          `}
        >
          {notification.message}
        </p>
      </div>
    </div>
  );
}
