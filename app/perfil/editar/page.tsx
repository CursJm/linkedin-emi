"use client";

import PerfilHeader from "@/components/organisms/PerfilHeader";
import EditarPerfilForm from "@/components/organisms/EditarPerfilForm";

export default function EditarPerfilPage() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center p-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">

        {/* PERFIL HEADER REQUIERE imageUrl */}
        <PerfilHeader imageUrl="/perfil.png" />

        <div className="h-6" />

        <EditarPerfilForm />
      </div>
    </div>
  );
}
