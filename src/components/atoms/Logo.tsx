"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="logo flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Logo EMI"
        width={100}
        height={55}
        priority
      />
      <span className="font-semibold text-lg"></span>
    </div>
  );
}
