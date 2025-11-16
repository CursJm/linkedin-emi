"use client";

interface NotificationButtonProps {
  onClick?: () => void;
}

export default function NotificationButton({ onClick }: NotificationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition"
    >
      <span className="text-blue-700 text-xl">🔔</span>
    </button>
  );
}
