"use client";

import Image from "next/image";

interface Props {
  src: string;
  size?: number;
  onChangePhoto?: () => void; // ← agregar esta prop opcional
}

export default function ProfileImage({ src, size = 120, onChangePhoto }: Props) {
  return (
    <div style={{ textAlign: "center" }}>
      <Image
        src={src}
        alt="Foto de perfil"
        width={size}
        height={size}
        style={{ borderRadius: "9999px", objectFit: "cover" }}
      />

      {onChangePhoto && (
        <button
          onClick={onChangePhoto}
          style={{
            marginTop: "0.5rem",
            background: "#30597a",
            color: "white",
            padding: "0.4rem 0.8rem",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Cambiar foto
        </button>
      )}
    </div>
  );
}
