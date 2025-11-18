"use client";

import ProfileImage from "@/components/atoms/ProfileImage";

interface Props {
  imageUrl: string;
}

export default function PerfilHeader({ imageUrl }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      <ProfileImage src={imageUrl} size={120} />

      <div>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Editar Perfil</h2>
        <p style={{ color: "#666" }}>Actualiza tu información personal y profesional</p>
      </div>
    </div>
  );
}
