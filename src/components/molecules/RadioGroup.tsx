"use client";

import { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

export default function RadioGroup({ label, children }: Props) {
  return (
    <div className="mb-4">
      <p className="font-medium text-gray-700 mb-1">{label}</p>
      <div className="flex flex-col gap-1">
        {children}
      </div>
    </div>
  );
}
