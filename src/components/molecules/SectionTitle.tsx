"use client";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-xl font-semibold text-gray-700 border-b pb-1 mb-3">
      {title}
    </h2>
  );
}
