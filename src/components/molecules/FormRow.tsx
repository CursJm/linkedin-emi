"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function FormRow({ children }: Props) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      {children}
    </div>
  );
}
