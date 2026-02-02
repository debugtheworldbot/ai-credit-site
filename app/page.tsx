"use client";

import { motion } from "framer-motion"
import { BarChart3, Check, Clock, Copy, Cpu, FileCode, ShieldCheck, Terminal } from "lucide-react"
import React, { useEffect, useState } from "react"

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
        <span className="text-2xl">🤖</span>
        ai-credit
      </div>
      <div className="flex gap-6 text-sm font-medium text-muted-foreground">
        <a target="_blank" href="https://github.com/debugtheworldbot/ai-credit" className="hover:text-primary transition-colors">GitHub</a>
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
    <section className="relative flex flex-col items-center justify-center pt-12 pb-16 text-center max-w-4xl mx-auto px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
      >
        Quantify <span className="text-primary text-glow">AI Impact</span><br />
        in Your Codebase
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
      >
        Track, analyze, and report on contributions from Claude, Gemini, Codex, and Opencode — with absolute local security. 
        See exactly how much code your AI assistants are actually writing.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative flex items-center gap-0 p-1.5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-2 font-mono text-base md:text-lg">
              <Terminal className="w-5 h-5 text-primary/60" />
              <span className="text-zinc-100">npx ai-credit</span>
            </div>
            
            <div className="w-[1px] h-8 bg-white/10 mx-2" />
            
            <button 
              onClick={copyCommand}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 relative overflow-hidden active:scale-95 ${
                copied 
                  ? "bg-primary/20 text-primary" 
                  : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-zinc-100"
              }`}
            >
              <div className="flex items-center gap-2">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3] animate-in zoom-in duration-300" />
                    <span className="text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-right-2 duration-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span className="text-xs font-bold uppercase tracking-wider">Copy</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TerminalDemoSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-[#0c0c0c]"
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-2 text-xs text-muted-foreground font-mono">ai-credit — analysis</div>
        </div>
        <div className="p-6 font-mono text-sm md:text-base overflow-x-auto min-h-[400px] relative z-10">
           <TypewriterEffect />
        </div>
        {/* Simplified Scanline overlay (horizontal only) */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 z-20" />
      </motion.div>
    </section>
  );
}

const DEMO_OUTPUT = [
  "ai-credit (main) npx ai-credit",
  "╭──────────────────────────────────────────────────╮",
  "│ AI Contribution Analysis                         │",
  "│ Repository: /Users/eric/Developer/ai-contrib     │",
  "│ Scan time: 2/2/2026, 4:22:53 PM                  │",
  "╰──────────────────────────────────────────────────╯",
  " 📊 Overview",
  "┌─────────────┬───────┬─────────────────┐",
  "│ Metric      │ Value │ AI Contribution │",
  "├─────────────┼───────┼─────────────────┤",
  "│ Total Files │ 18    │ 15 (83.3%)      │",
  "├─────────────┼───────┼─────────────────┤",
  "│ Total Lines │ 3496  │ 1660 (47.5%)    │",
  "├─────────────┼───────┼─────────────────┤",
  "│ AI Sessions │ 6     │ -               │",
  "└─────────────┴───────┴─────────────────┘",
  " 🤖 Contribution by AI Tool",
  "┌───────────────────────────────┬──────────┬───────┬─────────────┬───────────────┬──────────────────┐",
  "│ Tool / Model                  │ Sessions │ Files │ Lines Added │ Lines Removed │ Share            │",
  "├───────────────────────────────┼──────────┼───────┼─────────────┼───────────────┼──────────────────┤",
  "│ Opencode                      │ 2        │ 12    │ +558        │ -128          │ 32.2%            │",
  "├───────────────────────────────┼──────────┼───────┼─────────────┼───────────────┼──────────────────┤",
  "│   └─ kimi-k2.5-free           │ 2        │ 12    │ +558        │ -128          │ 100.0% (of tool) │",
  "├───────────────────────────────┼──────────┼───────┼─────────────┼───────────────┼──────────────────┤",
  "│ Codex CLI                     │ 1        │ 11    │ +482        │ -303          │ 27.8%            │",
  "├───────────────────────────────┼──────────┼───────┼─────────────┼───────────────┼──────────────────┤",
  "│   └─ gpt-5.2-codex            │ 1        │ 11    │ +482        │ -303          │ 100.0% (of tool) │",
  "├───────────────────────────────┼──────────┼───────┼─────────────┼───────────────┼──────────────────┤",
  "│ Gemini CLI                    │ 2        │ 11    │ +357        │ -262          │ 20.6%            │",
  "├───────────────────────────────┼──────────┼───────┼─────────────┼───────────────┼──────────────────┤",
  "│   └─ gemini-2.5-pro           │ 1        │ 8     │ +330        │ -237          │ 92.4% (of tool)  │",
  "├───────────────────────────────┼──────────┼───────┼─────────────┼───────────────┼──────────────────┤",
  "│   └─ gemini-3-pro-preview     │ 1        │ 5     │ +27         │ -25           │ 7.6% (of tool)   │",
  "├───────────────────────────────┼──────────┼───────┼─────────────┼───────────────┼──────────────────┤",
  "│ Claude Code                   │ 1        │ 5     │ +338        │ -452          │ 19.5%            │",
  "├───────────────────────────────┼──────────┼───────┼─────────────┼───────────────┼──────────────────┤",
  "│   └─ claude-opus-4-5-20251101 │ 1        │ 5     │ +338        │ -452          │ 100.0% (of tool) │",
  "├───────────────────────────────┼──────────┼───────┼─────────────┼───────────────┼──────────────────┤",
  "└───────────────────────────────┴──────────┴───────┴─────────────┴───────────────┴──────────────────┘",
  "",
  "📈 Contribution Distribution",
  "",
  "<<<DISTRIBUTION_BAR>>>",
  "",
  "  ● Opencode        15.3%  (534 lines)",
  "  ● Codex CLI       13.2%  (461 lines)",
  "  ● Gemini CLI       9.8%  (342 lines)",
  "  ● Claude Code      9.2%  (323 lines)",
  "  ● Unknown/Human   52.5%  (1836 lines)"
];

const TypewriterEffect = () => {
  const [lines, setLines] = useState<string[]>(["ai-credit (main)"]);
  
  useEffect(() => {
    let outputTimer: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    // 1. Wait 500ms then 'input' the command and show loading state
    const inputTimer = setTimeout(() => {
      setLines([DEMO_OUTPUT[0], "Analyzing repository..."]);

      // 2. Wait 3s after command before showing output
      outputTimer = setTimeout(() => {
        // Remove "Analyzing..." line and start streaming from index 1
        setLines([DEMO_OUTPUT[0]]); 
        
        let currentLine = 1;
        interval = setInterval(() => {
          if (currentLine < DEMO_OUTPUT.length) {
            const nextLine = DEMO_OUTPUT[currentLine];
            setLines(prev => [...prev, nextLine]);
            currentLine++;
          } else {
            clearInterval(interval);
          }
        }, 25);
      }, 3000);
    }, 500);

    return () => {
      clearTimeout(inputTimer);
      clearTimeout(outputTimer);
      clearInterval(interval);
    };
  }, []);

  const renderLine = (line: string, i: number) => {
    // 0. Analyzing Status
    if (line === "Analyzing repository...") {
      return (
        <div key={i} className="animate-rainbow font-bold pb-2">
          {line}
        </div>
      );
    }

    // 1. Distribution Bar
    if (line === "<<<DISTRIBUTION_BAR>>>") {
      return (
        <div key={i} className="h-4 w-full max-w-[500px] flex rounded-sm overflow-hidden my-2 ring-1 ring-white/10">
          <div className="h-full bg-[#fef08a] w-[16%]" />
          <div className="h-full bg-[#3b82f6] w-[10.4%]" />
          <div className="h-full bg-[#f97316] w-[9.5%]" />
          <div className="h-full bg-[#10b981] w-[7.8%]" />
          <div className="h-full bg-white/20 flex-1" />
        </div>
      );
    }

    // 2. Prompt Line
    if (line.startsWith("ai-credit (main)")) {
      const showCommand = line.includes("npx ai-credit");
      return (
        <div key={i} className="text-foreground pb-2">
          <span className="text-red-400 font-bold">ai-credit</span>{" "}
          <span className="text-cyan-400 font-bold">(main)</span>{" "}
          {showCommand && (
            <span className="text-white">
              <span className="text-yellow-400">npx</span> ai-credit
            </span>
          )}
        </div>
      );
    }

    // 3. Headers
    if (line.includes("📊 Overview") || line.includes("🤖 Contribution by AI Tool") || line.includes("📈 Contribution Distribution")) {
      return (
        <div key={i} className="text-white font-bold mt-4 mb-2 whitespace-pre antialiased">
          {line}
        </div>
      );
    }

    // 4. Legend Dots
    if (line.trim().startsWith("●")) {
      const match = line.match(/●\s+(.*?)\s+(\d.*)/);
      if (match) {
        const [, toolName, rest] = match;
        let dotColor = "text-gray-500";
        if (toolName.includes("Opencode")) dotColor = "text-[#fef08a]";
        else if (toolName.includes("Gemini")) dotColor = "text-[#3b82f6]";
        else if (toolName.includes("Claude")) dotColor = "text-[#f97316]";
        else if (toolName.includes("Codex")) dotColor = "text-[#10b981]";
        
        return (
          <div key={i} className="text-gray-400 whitespace-pre py-0">
            {"  "}<span className={dotColor}>●</span>{" "}{toolName.padEnd(15)}{rest}
          </div>
        );
      }
    }

    // 5. Table Rows & Borders
    // "(of tool)" rows should be fully gray
    if (line.includes("(of tool)")) {
      return (
        <div
          key={i}
          className="text-gray-500 whitespace-pre overflow-visible tabular-nums"
          style={{
            fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            fontVariantLigatures: "none"
          }}
        >
          {line}
        </div>
      );
    }

    // Process the line for highlighting
    let processedLine = line
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Highlight Tool Names (Cyan)
    processedLine = processedLine.replace(
        /(Opencode|Gemini CLI|Claude Code|Codex CLI)/g, 
        '<span class="text-cyan-400">$1</span>'
    );
    
    // Highlight Numbers (+ Green, - Red)
    // Matches " +123 " or "│ +123 "
    processedLine = processedLine.replace(
        /([ │])(\+\d+)([ │])/g, 
        '$1<span class="text-green-400">$2</span>$3'
    );
    processedLine = processedLine.replace(
        /([ │])(-\d+)([ │])/g, 
        '$1<span class="text-red-400">$2</span>$3'
    );

    // Dim "(of tool)" to keep it subtle
    processedLine = processedLine.replace(
        /\(of tool\)/g,
        '<span class="text-gray-500">(of tool)</span>'
    );

    // Highlight Headers (White only to preserve mono width)
    if (line.includes("Metric") || line.includes("Value") || line.includes("Tool / Model") || line.includes("Sessions")) {
       processedLine = processedLine.replace(
           /(Metric|Value|AI Contribution|Tool \/ Model|Sessions|Files|Lines Added|Lines Removed|Share)/g,
           '<span class="text-white">$1</span>'
       );
    }
    
    // Dim Borders
    processedLine = processedLine.replace(
        /([│┌┐└┘├┤┬┴┼─])/g, 
        '<span class="text-white/20">$1</span>'
    );

    return (
        <div 
            key={i} 
            className="text-gray-400 whitespace-pre overflow-visible tabular-nums"
            style={{ 
              fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              fontVariantLigatures: "none"
            }}
            dangerouslySetInnerHTML={{ __html: processedLine }} 
        />
    );
  };

  return (
    <div className="space-y-0 text-xs md:text-sm leading-none tracking-normal overflow-x-auto">
      {lines.map((line, i) => renderLine(line, i))}
      <div className="w-2 h-4 bg-primary animate-cursor inline-block align-middle ml-1" />
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
          desc="Claude, Codex, Gemini, Opencode"
        />
        <StatCard 
          icon={<Clock className="w-6 h-6 text-blue-400" />}
          label="Analysis Speed"
          value="<5s"
          desc="Multithreaded architecture"
        />
      </div>
    </section>
  );
}

function StatCard({ icon, label, value, desc }: { icon: React.ReactNode, label: string, value: string, desc: string }) {
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
      title: "100% Secure & Private",
      desc: "Fully open-source. Your code never leaves your machine. No telemetry, no cloud processing.",
      icon: ShieldCheck
    },
    {
      title: "Verified Existence",
      desc: "We verify every line against the current codebase. Deleted or rewritten code is excluded.",
      icon: FileCode
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SupportedToolsSection() {
  const tools = ["Claude Code", "Gemini CLI", "Codex CLI", "Opencode"];
  
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
