"use client";

import Image from "next/image";

interface Props {
  src?: string;
  alt?: string;
  size?: number;
  onClick?: () => void;
}

export default function Avatar({ src = "/perfil.png", alt = "Avatar", size = 40, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="rounded-full overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
      />
    </button>
  );
}
