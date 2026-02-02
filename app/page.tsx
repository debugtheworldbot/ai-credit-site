"use client";

import { motion } from "framer-motion";
import { Terminal, BarChart3, ShieldCheck, Clock, FileCode, Cpu, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen pb-20 overflow-hidden">
      <Navbar />
      <HeroSection />
      <TerminalDemoSection />
      <StatsPreviewSection />
      <FeaturesSection />
      <SupportedToolsSection />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <nav className="w-full max-w-6xl mx-auto flex items-center justify-between p-6 z-50">
      <div className="flex items-center gap-2 font-mono text-xl font-bold tracking-tighter">
        <div className="w-4 h-4 bg-primary rounded-sm shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
        ai-credit
      </div>
      <div className="flex gap-6 text-sm font-medium text-muted-foreground">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#tools" className="hover:text-primary transition-colors">Tools</a>
        <a href="https://github.com" className="hover:text-primary transition-colors">GitHub</a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx ai-credit");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex flex-col items-center justify-center pt-20 pb-32 text-center max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium rounded-full bg-secondary/50 border border-border text-primary font-mono"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        v1.0.0 Available Now
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
      >
        Quantify <span className="text-primary text-glow">AI Impact</span><br />
        in Your Codebase
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
      >
        Track, analyze, and report on contributions from Claude, Gemini, Codex, and Aider.
        See exactly how much code your AI assistants are actually writing.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-4"
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <button 
            onClick={copyCommand}
            className="relative flex items-center gap-4 px-8 py-4 bg-background border border-border rounded-lg font-mono text-lg hover:bg-secondary/50 transition-all active:scale-[0.98]"
          >
            <span className="text-primary">$</span> npx ai-credit
            {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-muted-foreground" />}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function TerminalDemoSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 mb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-[#0c0c0c]"
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-2 text-xs text-muted-foreground font-mono">ai-credit — analysis</div>
        </div>
        <div className="p-6 font-mono text-sm md:text-base overflow-x-auto min-h-[400px]">
           <TypewriterEffect />
        </div>
        {/* Scanline overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
      </motion.div>
    </section>
  );
}

const TypewriterEffect = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  const output = [
    "> npx ai-credit .",
    "🔍 Detecting AI tools...",
    "✅ Found Claude Code projects",
    "✅ Found Gemini CLI sessions",
    "Analyzing 142 files...",
    "----------------------------------------",
    "📊 Overview:",
    "  Total Files: 142",
    "  Total Lines: 12,450",
    "  AI Contributed: 3,735 (30.0%)",
    "",
    "🤖 By Tool:",
    "  Claude Code: 2,500 lines (67%)",
    "  Gemini CLI:  1,235 lines (33%)",
    "",
    "Done in 0.4s."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < output.length) {
        setLines(prev => [...prev, output[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-1">
      {lines.map((line, i) => (
        <div key={i} className={cn(
          "break-words",
          line.startsWith(">") ? "text-primary font-bold" : 
          line.startsWith("✅") ? "text-green-400" : 
          line.includes("Overview") || line.includes("By Tool") ? "text-accent font-bold mt-4" : "text-gray-300"
        )}>
          {line}
        </div>
      ))}
      <div className="w-2 h-5 bg-primary animate-cursor inline-block align-middle ml-1" />
    </div>
  );
};

function StatsPreviewSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard 
          icon={<FileCode className="w-6 h-6 text-primary" />}
          label="Verified Lines"
          value="100%"
          desc="Only existing code is counted"
        />
        <StatCard 
          icon={<Cpu className="w-6 h-6 text-accent" />}
          label="Tools Supported"
          value="4+"
          desc="Claude, Codex, Gemini, Aider"
        />
        <StatCard 
          icon={<Clock className="w-6 h-6 text-blue-400" />}
          label="Analysis Speed"
          value="<1s"
          desc="Multithreaded architecture"
        />
      </div>
    </section>
  );
}

function StatCard({ icon, label, value, desc }: { icon: any, label: string, value: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-secondary/20 border border-white/5 hover:border-primary/20 transition-all"
    >
      <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit">{icon}</div>
      <div className="text-4xl font-bold mb-2 font-mono tracking-tight">{value}</div>
      <div className="text-lg font-medium text-white mb-1">{label}</div>
      <div className="text-sm text-muted-foreground">{desc}</div>
    </motion.div>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Verified Existence",
      desc: "We verify every line against the current codebase. Deleted or rewritten code is excluded.",
      icon: ShieldCheck
    },
    {
      title: "Visual Reports",
      desc: "Generate beautiful console charts, JSON data, or Markdown summaries for your PRs.",
      icon: BarChart3
    },
    {
      title: "Universal Support",
      desc: "Works with any language. Analyzes text-based logs from your favorite AI tools.",
      icon: Terminal
    }
  ];

  return (
    <section id="features" className="py-32 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for precision.</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Most tools just count chat history. We analyze the <span className="text-primary">actual code</span> that made it into production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <f.icon className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SupportedToolsSection() {
  const tools = ["Claude Code", "Gemini CLI", "Codex CLI", "Aider"];
  
  return (
    <section id="tools" className="py-20 border-t border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-10 text-muted-foreground">Trusted by users of</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          {tools.map((tool, i) => (
             <div key={i} className="text-xl md:text-2xl font-mono font-bold text-white/40 hover:text-white transition-colors cursor-default">
               {tool}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-white/5 mt-auto pt-10 pb-10 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} ai-credit. Open source MIT License.</p>
    </footer>
  );
}
