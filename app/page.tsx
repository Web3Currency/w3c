// app/page.tsx
"use client";

import { motion } from "framer-motion";
import { Wallet, Shield, Users, MessageCircle, CheckCircle, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");
  const whatsappLink = "https://chat.whatsapp.com/YOUR_REAL_LINK_HERE"; // ← CHANGE THIS

  const connect = async () => {
    if (!window.ethereum) return alert("Install MetaMask");
    try {
      const acc = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAddress(`\( {acc[0].slice(0, 6)}... \){acc[0].slice(-4)}`);
    } catch {}
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO – 3D Glass Style */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-black to-black" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center max-w-5xl"
        >
          {/* Glowing W3C Logo */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="inline-block mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                W3C
              </span>
            </h1>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-300">
            Web3Currency
          </h2>

          <p className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            The safest place for beginners to learn crypto & trade P2P — no scams, no stress.
          </p>

          {/* Floating 3D Glass Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href={whatsappLink}
              target="_blank"
              whileHover={{ y: -12, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl font-bold text-xl shadow-2xl backdrop-blur-xl border border-white/10"
            >
              <span className="relative z-10 flex items-center gap-3">
                🚀 Join Community Now <ArrowRight className="group-hover:translate-x-2 transition" />
              </span>
              <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl group-hover:blur-2xl transition" />
            </motion.a>

            <motion.button
              onClick={connect}
              whileHover={{ y: -12, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold text-xl shadow-2xl backdrop-blur-xl border border-white/10 flex items-center gap-3"
            >
              <Wallet />
              <span className="relative z-10">{address || "Connect Wallet"}</span>
              <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl group-hover:blur-2xl transition" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Quick Trust Cards – Glass Style */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            "No Scams Guaranteed",
            "Beginner Friendly",
            "Escrow P2P Trades",
            "24/7 Real Humans"
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-cyan-500/20 shadow-2xl hover:border-cyan-400/60 transition group"
            >
              <CheckCircle className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition" />
              <p className="text-lg font-semibold text-cyan-100">{text}</p>
              <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-xl group-hover:blur-2xl transition" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA – Huge Floating Button */}
      <section className="py-32 px-6 flex justify-center">
        <motion.a
          href={whatsappLink}
          target="_blank"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -20, scale: 1.08 }}
          className="relative px-16 py-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl font-black text-3xl shadow-2xl backdrop-blur-2xl border-2 border-white/20"
        >
          <span className="relative z-10 flex items-center gap-4">
            Take Me In Now 🚀
          </span>
          <div className="absolute inset-0 rounded-3xl bg-white/30 blur-3xl" />
        </motion.a>
      </section>
    </main>
  );
}
