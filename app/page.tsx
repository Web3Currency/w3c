"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const dm = "https://wa.me/2347032754611";
  const community = "https://chat.whatsapp.com/EUEkJYcfSYB3aJuBSERi5N";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFounder, setShowFounder] = useState(false);   // ← ADD THIS

  const testimonies = [
    "Chinedu sold 800 PI", "Amaka bought 1000 USDT", "Olurinde sold 500 USDT",
    "Fatima sold 0.3 ETH", "Emeka sold 25 TON", "Grace bought 300 USDT",
    "Ibrahim sold 0.1 BTC", "Blessing bought 800 USDT", "Emmanuel sold 10 USDT",
    "Scopido sold 25 TON", "Everest bought 30 PI", "Mike bought 700 USDT",
    "Adewale bought 550 USDT", "Oluyemi sold 75 PI", "Deborah sold 500 PI"
  ];

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % testimonies.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* FIXED HEADER WITH COMMUNITY LOGO + TEXT */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          {/* Your REAL community logo */}
          <Image
            src="/logo.png"        // ← this is now your W3C community logo
            alt="W3C"
            width={40}
            height={40}
            className="drop-shadow-md"
            priority
          />
          <span className="text-xl md:text-1xl font-black tracking-tight">
            WEB3CURRENCY
          </span>
        </motion.div>

        {/* Menu button (unchanged) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </header>

      {/* SLIDE-IN MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-black/95 backdrop-blur-2xl border-l border-white/10 p-8 pt-24"
            >
              <div className="space-y-6">
                {[
                  { label: "Home", onClick: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); } },
                  { label: "Mission", onClick: () => { document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); } },
                  { label: "How To Trade", onClick: () => { document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); } },
                  { label: "Recent Trades", onClick: () => { document.getElementById('trades')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); } },
                  { label: "FAQ", onClick: () => { document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); } },
                  { label: "Join W3C", href: community, external: true }
                ].map((item, i) => (
                  item.href ? (
                    <motion.a
                      key={i}
                      href={item.href}
                      target="_blank"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="block text-2xl font-bold text-white hover:text-gray-300 transition"
                    >
                      {item.label}
                    </motion.a>
                  ) : (
                    <motion.button
                      key={i}
                      onClick={item.onClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="block text-2xl font-bold text-white hover:text-gray-300 transition text-left"
                    >
                      {item.label}
                    </motion.button>
                  )
                ))}
            </div>

              {/* About the Founder – premium glass button */}
              <motion.button
                onClick={() => setShowFounder(true)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 
                           bg-black/60 backdrop-blur-xl 
                           rounded-2xl border border-white/20 
                           py-4 px-6 
                           text-sm font-bold text-gray-300 
                           hover:text-white hover:bg-white/10 hover:border-white/40 
                           hover:shadow-2xl hover:shadow-white/10
                           transition-all duration-300 
                           flex items-center justify-center gap-2"
              >
                <span>About the Founder</span>
                <span className="text-lg">→</span>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* FOUNDER MODAL – Updated with your exact speech */}
      <AnimatePresence>
        {showFounder && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFounder(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />

            {/* Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-md mx-auto bg-black/90 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl"
            >
              <button
                onClick={() => setShowFounder(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center text-center space-y-6">
                {/* Photo on top */}
                <Image
                  src="https://i.imgur.com/3fm8w5G.png"
                  alt="Jake - Founder of Web3Currency"
                  width={140}
                  height={140}
                  className="rounded-full border-4 border-white/20 shadow-2xl"
                  priority
                />

                {/* Greetings + Speech below, center */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4">Hi,</h3>
                  <p className="text-gray-300 text-base leading-relaxed text-center">
                    I’m Jake, the lead of Web3Currency (W3C). I started this community because I noticed two major challenges in the crypto space: many people lose money to scams, and the complexity of crypto can be overwhelming for beginners.
                    <br /><br />
                    At W3C, I personally oversee all trades, provide hands-on guidance, and create a supportive environment where members can learn and grow safely. My goal is to make crypto accessible, transparent, and trustworthy for everyone. Here, you can trade with confidence, access verified opportunities, and get real-time support whenever you need it.
                    <br /><br />
                    Community Lead.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>      

      <main className="min-h-screen bg-black text-white relative overflow-hidden pt-16">

        {/* Glass background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />
        </div>

        {/* Animated Crypto Chart Grid Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <motion.path
              d="M 0 900 Q 150 850 250 800 T 500 650 T 750 400 T 1000 100"
              fill="none"
              stroke="url(#chartGlow)"
              strokeWidth="3"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
              transition={{
                pathLength: { duration: 3, ease: "easeInOut" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            <motion.circle
              r="6"
              fill="rgba(255,255,255,0.8)"
              filter="url(#glow)"
              initial={{ offsetDistance: "0%", opacity: 0 }}
              animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
              transition={{
                offsetDistance: { duration: 4, repeat: Infinity, ease: "linear" },
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ offsetPath: "path('M 0 900 Q 150 850 250 800 T 500 650 T 750 400 T 1000 100')" }}
            />
          </svg>
        </div>

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-5 text-center">
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 360] }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 35, repeat: Infinity, ease: "linear" }
            }}
            className="mb-8"
          >
            <Image
              src="/coin.png"
              alt="Web3Currency"
              width={300}
              height={300}
              className="drop-shadow-2xl"
              priority
            />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-4">Master Crypto & Web3<br />Without the Confusion</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mb-10">
            Join W3C, a trusted community where beginners learn and stay updated on crypto market trends, make P2P trades, get real guidance, and position for Web3 opportunities safely.
          </p>

          {/* Join Community Button */}
          <div className="flex justify-center mb-8">
            <a
              href={community}
              target="_blank"
              className="py-4 px-12 bg-white backdrop-blur-xl rounded-2xl font-bold text-xl text-black border border-white/20 shadow-2xl hover:bg-white/90 transition whitespace-nowrap"
            >
              JOIN COMMUNITY
            </a>
          </div>

          {/* Social Icons - Below Button */}
          <div className="flex gap-4">
            <motion.a
              href="https://chat.whatsapp.com/EUEkJYcfSYB3aJuBSERi5N"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg hover:bg-white/20 transition"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://x.com/Web3CurrencyNG"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg hover:bg-white/20 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://t.me/w3currency"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg hover:bg-white/20 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://github.com/Web3Currency"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg hover:bg-white/20 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </motion.a>
          </div>
        </section>

        {/* ABOUT/MISSION */}
        <section id="mission" className="relative py-32 px-6 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-4xl font-bold mb-8 text-white"
            >
              OUR MISSION
            </motion.h2>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative p-12 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl"
            >
              <div className="absolute inset-0 bg-white/5 rounded-3xl blur-2xl" />
              <p className="relative text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                At Web3Currency, we believe crypto should be accessible to everyone, not just tech experts.
                We're breaking down barriers by providing personalized education and creating a safe space
                where newcomers can learn, ask questions, and make their first trades with confidence.
              </p>
              <p className="relative text-lg text-gray-400">
                No scams. Just honest guidance from people who genuinely want to see you succeed.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* EXPLORE FEATURES CTA */}
        <section className="py-20 px-5 flex justify-center">
          <a
            href={community}
            target="_blank"
            className="py-4 px-12 bg-white backdrop-blur-xl rounded-2xl font-bold text-xl text-black border border-white/20 shadow-2xl hover:bg-white/90 transition whitespace-nowrap"
          >
            EXPLORE FEATURES
          </a>
        </section>

        {/* LEARN, CONNECT, EARN CARDS */}
<section className="py-16 px-5">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    
    {/* LEARN CARD */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0, duration: 0.6 }}
      className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition"
    >
      <div className="w-16 h-16 mb-6 border-2 border-white rounded-lg flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">LEARN</h3>
      <p className="text-gray-400 leading-relaxed">
        Master crypto basics with clear, beginner-friendly guidance from experienced community members.
      </p>
    </motion.div>

    {/* TRADE CARD */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition"
>
  <div className="w-16 h-16 mb-6 border-2 border-white rounded-lg flex items-center justify-center">
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  </div>
  <h3 className="text-2xl font-bold text-white mb-4">TRADE</h3>
  <p className="text-gray-400 leading-relaxed">
    Gain practical experience with simple, structured guidance on spot and future trading. 
    Learn how to read the market, manage risk, execute safer entries, and build consistency at your own pace.
  </p>
</motion.div>

    {/* CONNECT CARD */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition"
    >
      <div className="w-16 h-16 mb-6 border-2 border-white rounded-lg flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">CONNECT</h3>
      <p className="text-gray-400 leading-relaxed">
        Build meaningful relationships with like-minded individuals. Share insights, ask questions, and grow together in a supportive environment.
      </p>
    </motion.div>

    {/* EARN CARD */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition"
    >
      <div className="w-16 h-16 mb-6 border-2 border-white rounded-lg flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">EARN</h3>
      <p className="text-gray-400 leading-relaxed">
        Discover verified airdrops, early opportunities, and real ways to take part in Web3 incentivized testnet projects, all guided by community expertise.
      </p>
    </motion.div>

  </div>
</section>

        {/* HOW TO TRADE */}
<section id="how" className="py-20 px-5">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-200">HOW TO TRADE</h2>
  
  {/* Main Context Line */}
  <p className="text-center text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-2">
    Buy and sell crypto using Naira on WhatsApp for easy communication and faster response time.
  </p>
  
  {/* Reassuring Subtext */}
  <p className="text-center text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-12">
    Trusted process designed to keep beginners and experts safe.
  </p>

  {/* 4 Steps with Sequential Glow */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
    {["Message Admin", "Get Rate", "Send/Receive", "Done!"].map((t, i) => (
      <motion.a
        key={i}
        href="https://wa.me/p/7485729861549969/2347032754611"
        target="_blank"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
        className="text-center cursor-pointer group"
      >
        <motion.div 
          className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-2xl font-black group-hover:bg-white/20 transition"
          animate={{
            boxShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 20px rgba(255,255,255,0.6)",
              "0 0 0px rgba(255,255,255,0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          0{i + 1}
        </motion.div>
        <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition">{t}</p>
      </motion.a>
    ))}
  </div>

  {/* Trust Badges */}
  <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-2xl mx-auto">
    <div className="flex items-center gap-2 text-white">
      <span className="text-1xl">⚡</span>
      <span className="font-bold text-sm md:text-base">FAST</span>
    </div>
    <div className="flex items-center gap-2 text-white">
      <span className="text-1xl">💱</span>
      <span className="font-bold text-sm md:text-base">FAIR RATE</span>
    </div>
    <div className="flex items-center gap-2 text-white">
      <span className="text-1xl">✅</span>
      <span className="font-bold text-sm md:text-base">VERIFIED</span>
    </div>
  </div>
</section>

{/* W3C CRYPTO EXCHANGE */}
<section id="trades" className="py-16 px-4 relative overflow-hidden bg-black">
  <div className="max-w-lg mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden border border-white/10"
      style={{
        background: "rgba(20, 20, 20, 0.4)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
      }}
    >
      {/* Header */}
      <div className="px-6 py-4 text-left border-b border-white/10">
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          W3C P2P<br />
          <span className="text-gray-400 text-xl md:text-2xl">CRYPTO EXCHANGE</span>
        </h2>
      </div>

      {/* Trading Chart Area */}
      <div className="relative px-4 py-8 h-56 bg-gradient-to-b from-transparent to-black/20">

        {/* Blurred Candlestick Background */}
        <div className="absolute inset-4" style={{ filter: "blur(3px)", opacity: 0.3 }}>
          <svg viewBox="0 0 300 120" className="w-full h-full">
            {[...Array(15)].map((_, i) => {
              const x = i * 20 + 10;
              const isGreen = Math.random() > 0.5;
              const high = 20 + Math.random() * 40;
              const low = high + 20 + Math.random() * 40;
              const bodyHeight = 8 + Math.random() * 12;
              return (
                <g key={`candle-${i}`}>
                  <line x1={x} y1={high} x2={x} y2={low} stroke="#666" strokeWidth="1"/>
                  <rect
                    x={x-3}
                    y={high + 5}
                    width="6"
                    height={bodyHeight}
                    fill={isGreen ? "#4ade80" : "#ef4444"}
                    opacity="0.6"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Centered Trade Notification with Bold Font */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {testimonies.map((trade, i) => {
              const currentIndex = Math.floor((Date.now() / 3000) % testimonies.length);
              if (i !== currentIndex) return null;

              return (
                <motion.div
                  key={`trade-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="text-base md:text-lg font-black text-white text-center px-4"
                  style={{
                    textShadow: "0 0 10px rgba(255,255,255,0.5)"
                  }}
                >
                  {trade}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* BUY & SELL BUTTONS */}
      <div className="px-6 pb-4 flex gap-4">
        <motion.a
          href={dm}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-4 text-xl font-black text-white text-center rounded-xl border-2 border-green-500/30"
          style={{
            background: "linear-gradient(145deg, #16a34a, #15803d)",
            boxShadow: "0 0 25px rgba(34, 197, 94, 0.4)"
          }}
          animate={{
            boxShadow: [
              "0 0 25px rgba(34, 197, 94, 0.4)",
              "0 0 35px rgba(34, 197, 94, 0.7)",
              "0 0 25px rgba(34, 197, 94, 0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          BUY
        </motion.a>

        <motion.a
          href={dm}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-4 text-xl font-black text-white text-center rounded-xl border-2 border-red-500/30"
          style={{
            background: "linear-gradient(145deg, #dc2626, #b91c1c)",
            boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)"
          }}
          animate={{
            boxShadow: [
              "0 0 25px rgba(239, 68, 68, 0.4)",
              "0 0 35px rgba(239, 68, 68, 0.7)",
              "0 0 25px rgba(239, 68, 68, 0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          SELL
        </motion.a>
      </div>

      {/* Security Line Under Buttons */}
      <p className="text-center text-sm text-gray-400 pb-6 px-6">
        Secure trading for both beginners and experts.
      </p>
    </motion.div>
  </div>
</section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-5 max-w-3xl mx-auto space-y-4">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-200"
          >
           FAQ
          </motion.h2>
          {["What do I get as a member?", "Is it safe for beginners?", "How fast are payments?", "What if I make a mistake?", "Can I see real proof?"].map((q, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left py-5 px-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex justify-between items-center hover:bg-white/15 transition"
              >
                <span className="font-medium text-lg">{q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 py-4 text-gray-400 bg-white/5 rounded-b-2xl border-x border-b border-white/10">
                  {i === 0 && "Trusted Crypto and Web3 guildance, peer to peer trade and support, access to airdrops and opportunities, and a community with a voice."}
                  {i === 1 && "Yes! Every trade goes through admin only."}
                  {i === 2 && "Most trades complete under 10 minutes."}
                  {i === 3 && "Just message me — I'll fix it instantly."}
                  {i === 4 && "Yes! See live trades above."}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* FINAL CTA */}
<section className="py-20 px-5 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-10 leading-tight"
  >
    Ready To Start<br />
    Your Web3 Journey?
  </motion.h2>
  
  <a 
    href={dm} 
    target="_blank" 
    className="inline-block px-16 py-6 bg-white/10 backdrop-blur-xl rounded-2xl font-black text-2xl md:text-3xl border-4 border-white shadow-2xl hover:bg-white/20 transition"
  >
    LEARN MORE
  </a>
</section>

        <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/10">
          © 2025 Web3Currency<br />Built with love for the community
        </footer>
      </main>
    </>
  );
}
