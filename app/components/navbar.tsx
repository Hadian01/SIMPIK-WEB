"use client";

import { useState } from "react";
import { Menu, Bell, User } from "lucide-react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="w-full px-6 py-3 flex items-center justify-between border border-[#c7c4ec]"
        style={{ backgroundColor: "#CFC7FF", color: "#000000" }}
      >
        {/* kiri */}
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={26} />
          </button>
          <h1 className="text-md font-semibold tracking-wide">SIMPIK</h1>
        </div>

        {/* Kanan */}
        <div className="flex items-center gap-4">
          <button onClick={() => setNotifOpen(!notifOpen)}>
            <Bell size={22} />
          </button>
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-8 h-8 rounded-full border"
          />
          <span className="text-sm font-medium">Hadian Nelvi</span>
        </div>
      </nav>

      {/* SIDEBAR */}
      {sidebarOpen && (
    <div
        className="fixed inset-0 bg-black/40 z-20"
        onClick={() => setSidebarOpen(false)}
    >
        <div
        className="w-64 h-full shadow-xl transform transition-transform duration-300"
        style={{ backgroundColor: "#E3DFFF", color: "#000000" }}
        onClick={(e) => e.stopPropagation()}
        >
      <h2 className="text-lg font-semibold mb-4 p-4">Menu</h2>
            <ul className="grid gap-3">
              <a href="/" className="hover:text-purple-900">Dashboard</a>
              <a href="/report" className="hover:text-purple-900">Report</a>
              <a href="/settings" className="hover:text-purple-900">Produk</a>
            </ul>
          </div>
        </div>
      )}
      {/* NOTIFICATION DROPDOWN */}
      {notifOpen && (
        <div className="absolute top-14 right-8 bg-white shadow-lg border rounded-md w-60 z-30">
          <div className="p-3 border-b font-semibold">Notifications</div>
          <ul className="p-2 text-sm">
            <li className="py-2 border-b">No notifications yet</li>
          </ul>
        </div>
      )}
    </>
  );
}
