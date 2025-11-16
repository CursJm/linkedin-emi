"use client";

import { useState } from "react";
import TopBar from "@/components/organisms/TopBar";
import Sidebar from "@/components/organisms/Sidebar";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <TopBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 p-6 mt-[70px]">
        <h1 className="text-2xl font-bold">Bienvenido al Sistema EMI</h1>
      </main>

      <Footer />
    </div>
  );
}

