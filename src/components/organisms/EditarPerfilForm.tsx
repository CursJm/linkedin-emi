"use client";

import { useState, useEffect } from "react";

// Atoms
import InputText from "../atoms/InputText";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import Radio from "../atoms/Radio";

// Moléculas
import SectionTitle from "../molecules/SectionTitle";
import ChipList from "../molecules/ChipList";
import RadioGroup from "../molecules/RadioGroup";

// Organism
import PerfilHeader from "./PerfilHeader";

// Tipado del perfil
interface Perfil {
  nombre: string;
  apellido: string;
  carrera: string;
  semestre: number | string;
  telefono: string;
  email: string;
  ciudad: string;
  resumen: string;
  fotoPerfil: string;
  habilidades: string[];
  intereses: string[];
  disponibilidad: string;
}

export default function EditarPerfilForm() {
  const [perfil, setPerfil] = useState<Perfil | null>(null);

  // ──────────────────────────────────────────────
  // Obtener datos desde API
  // ──────────────────────────────────────────────
  useEffect(() => {
    fetch("/api/perfil")
      .then((res) => res.json())
      .then((data: Perfil) => setPerfil(data));
  }, []);

  if (!perfil) return <p>Cargando...</p>;

  // ──────────────────────────────────────────────
  // Función para actualizar campos del estado
  // ──────────────────────────────────────────────
  const updateField = (
    field: keyof Perfil,
    value: string | number | string[]
  ) => {
    setPerfil({ ...perfil, [field]: value });
  };

  // ──────────────────────────────────────────────
  // Guardar cambios en la API
  // ──────────────────────────────────────────────
  const guardarCambios = async () => {
    await fetch("/api/perfil", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(perfil),
    });

    alert("Perfil actualizado correctamente");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">

      {/* Encabezado con foto */}
      <PerfilHeader
        imageUrl={perfil.fotoPerfil}
      />

      {/* ─────────────────────────────── */}
      {/* DATOS PERSONALES */}
      {/* ─────────────────────────────── */}
      <SectionTitle title="Datos Personales" />

      <InputText
        label="Nombre"
        value={perfil.nombre}
        onChange={(v: string) => updateField("nombre", v)}
      />

      <InputText
        label="Apellido"
        value={perfil.apellido}
        onChange={(v: string) => updateField("apellido", v)}
      />

      <Select
        label="Carrera"
        options={[
          "Ingeniería de Sistemas",
          "Ingeniería Civil",
          "Ingeniería Comercial",
        ]}
        value={perfil.carrera}
        onChange={(v: string) => updateField("carrera", v)}
      />

      <InputText
        label="Semestre"
        value={String(perfil.semestre)}
        onChange={(v: string) => updateField("semestre", v)}
      />

      <InputText
        label="Teléfono"
        value={perfil.telefono}
        onChange={(v: string) => updateField("telefono", v)}
      />

      <InputText
        label="Email"
        value={perfil.email}
        disabled
        onChange={() => {}}
      />

      <InputText
        label="Ciudad"
        value={perfil.ciudad}
        onChange={(v: string) => updateField("ciudad", v)}
      />

      {/* ─────────────────────────────── */}
      {/* INFORMACIÓN PROFESIONAL */}
      {/* ─────────────────────────────── */}
      <SectionTitle title="Información Profesional" />

      <TextArea
        label="Resumen Profesional"
        value={perfil.resumen}
        onChange={(v: string) => updateField("resumen", v)}
      />

      {/* Habilidades */}
      <ChipList
        label="Habilidades"
        items={perfil.habilidades}
        onAdd={() => {
          const nueva = prompt("Nueva habilidad:");
          if (!nueva) return;
          updateField("habilidades", [...perfil.habilidades, nueva]);
        }}
        onRemove={(item: string) =>
          updateField(
            "habilidades",
            perfil.habilidades.filter((x) => x !== item)
          )
        }
      />

      {/* Intereses */}
      <ChipList
        label="Intereses Laborales"
        items={perfil.intereses}
        onAdd={() => {
          const nueva = prompt("Nuevo interés:");
          if (!nueva) return;
          updateField("intereses", [...perfil.intereses, nueva]);
        }}
        onRemove={(item: string) =>
          updateField(
            "intereses",
            perfil.intereses.filter((x) => x !== item)
          )
        }
      />

      {/* ─────────────────────────────── */}
      {/* DISPONIBILIDAD */}
      {/* ─────────────────────────────── */}
      <SectionTitle title="Disponibilidad" />

      <RadioGroup label="Tipo de disponibilidad">
        <Radio
          label="Tiempo Completo"
          value="tiempo-completo"
          checked={perfil.disponibilidad === "tiempo-completo"}
          onChange={(v: string) => updateField("disponibilidad", v)}
        />
        <Radio
          label="Medio Tiempo"
          value="medio-tiempo"
          checked={perfil.disponibilidad === "medio-tiempo"}
          onChange={(v: string) => updateField("disponibilidad", v)}
        />
        <Radio
          label="Pasantía"
          value="pasantia"
          checked={perfil.disponibilidad === "pasantia"}
          onChange={(v: string) => updateField("disponibilidad", v)}
        />
        <Radio
          label="Remoto"
          value="remoto"
          checked={perfil.disponibilidad === "remoto"}
          onChange={(v: string) => updateField("disponibilidad", v)}
        />
      </RadioGroup>

      {/* BOTÓN GUARDAR */}
      <button
        onClick={guardarCambios}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
      >
        Guardar Cambios
      </button>

    </div>
  );
}
