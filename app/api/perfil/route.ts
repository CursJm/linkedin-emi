import { NextResponse } from "next/server";

let perfil = {
  id: 1,
  nombre: "Juan",
  apellido: "Perez",
  carrera: "Ingeniería de Sistemas",
  semestre: "8",
  telefono: "76543210",
  email: "juan@example.com",
  ciudad: "La Paz",
  fotoPerfil: "/perfil.png",
  resumen: "Estudiante de ingeniería apasionado por el desarrollo web.",
  habilidades: ["React", "Node.js"],
  intereses: ["Desarrollo Web"],
  disponibilidad: "tiempo-completo"
};

export async function GET() {
  return NextResponse.json(perfil);
}

export async function PUT(req: Request) {
  const data = await req.json();
  perfil = { ...perfil, ...data };
  return NextResponse.json({ success: true, perfil });
}
