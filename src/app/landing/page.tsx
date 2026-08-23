export default function Home() {
  return (
    <main className="min-h-screen bg-black text-red-500 font-mono relative overflow-hidden flex items-center justify-center px-4 py-8">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-red-950/30 blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,0,0,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,.5)_1px,transparent_1px)] bg-[size:45px_45px]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,0,0,.5)_50%)] bg-[length:100%_5px]" />
      </div>
      <div className="absolute left-0 top-0 w-full h-[2px] bg-red-600/40 shadow-[0_0_20px_red]" />
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-red-700/70" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-red-700/70" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-red-700/70" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-red-700/70" />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="text-xs md:text-sm tracking-[0.3em] font-black text-red-700 mb-4">
            ☠️💀 HACKED BY BOTH 💀☠️
          </div>
        </div>

        {/* Attackers Card */}
        <div className="border border-red-700 bg-black/90 shadow-[0_0_50px_rgba(255,0,0,0.2)] mb-4">
          <div className="flex items-center gap-4 md:gap-6 px-5 md:px-8 py-5 border-b border-red-900/70">
            <div className="text-red-900 font-black text-sm md:text-lg">#01</div>
            <div className="text-3xl md:text-5xl">😈</div>
            <div className="flex-1 text-left">
              <div className="text-[9px] md:text-[10px] tracking-[0.35em] text-red-900">☠️ HACKER</div>
              <div className="mt-1 text-lg md:text-3xl font-black text-red-500 tracking-wide">RAO JUNAID</div>
            </div>
            <div className="text-[9px] md:text-xs font-black text-red-600">☠️ ACTIVE</div>
          </div>
          <div className="flex items-center gap-4 md:gap-6 px-5 md:px-8 py-5">
            <div className="text-red-900 font-black text-sm md:text-lg">#02</div>
            <div className="text-3xl md:text-5xl">💀</div>
            <div className="flex-1 text-left">
              <div className="text-[9px] md:text-[10px] tracking-[0.35em] text-red-900">☠️ HACKER</div>
              <div className="mt-1 text-lg md:text-3xl font-black text-red-500 tracking-wide">MUHAMMAD ABDULLAH</div>
            </div>
            <div className="text-[9px] md:text-xs font-black text-red-600">☠️ ACTIVE</div>
          </div>
        </div>

        {/* Main Hack Card */}
        <div className="border border-red-800 bg-black/95 shadow-[0_0_100px_rgba(255,0,0,0.3)]">
          <div className="border-b border-red-900 px-5 py-4 flex items-center justify-between">
            <div>
              <div className="text-[9px] tracking-[0.3em] text-red-900">🚨 UNAUTHORIZED ACCESS</div>
              <div className="text-sm font-black text-red-500">☠️ TARGET COMPROMISED</div>
            </div>
            <div className="text-[10px] text-red-500 font-black">🔴 LIVE</div>
          </div>

          <div className="p-6 md:p-12">
            <div className="text-6xl md:text-8xl text-center mb-5">☠️ 💀 ☠️</div>
            <h1 className="text-center text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-red-600">
              WEBSITE COMPROMISED
            </h1>
            <div className="mt-4 text-2xl md:text-5xl font-black text-white text-center">
              🔓 WE OWNED THIS WEBSITE.
            </div>

            <div className="mt-10 border-y border-red-800/80 py-8 px-4 md:px-10 text-center">
              <p className="text-base md:text-2xl leading-relaxed text-red-400 font-bold">
                YOUR SECURITY DIDN&apos;T STOP US. ☠️<br/>
                YOUR FIREWALL DIDN&apos;T STOP US. 🔥<br/>
                YOUR PROTECTION DIDN&apos;T STOP US. 💀<br/>
                <span className="text-white text-xl md:text-4xl">THIS WEBSITE IS OURS NOW. ☠️</span>
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="border border-red-900 bg-red-950/10 p-5 text-center">
                <div className="text-3xl">🔓</div>
                <div className="mt-4 text-[9px] tracking-[0.3em] text-red-900">ADMIN ACCESS</div>
                <div className="mt-2 font-black text-red-500">GRANTED</div>
              </div>
              <div className="border border-red-900 bg-red-950/10 p-5 text-center">
                <div className="text-3xl">💀</div>
                <div className="mt-4 text-[9px] tracking-[0.3em] text-red-900">DATABASE</div>
                <div className="mt-2 font-black text-red-500">FULLY OWNED</div>
              </div>
              <div className="border border-red-900 bg-red-950/10 p-5 text-center">
                <div className="text-3xl">👑</div>
                <div className="mt-4 text-[9px] tracking-[0.3em] text-red-900">SUPABASE</div>
                <div className="mt-2 font-black text-red-500">CONTROL ACQUIRED</div>
              </div>
            </div>

            {/* Terminal */}
            <div className="mt-8 border border-red-900 bg-black">
              <div className="px-4 py-3 border-b border-red-950 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.3em] text-red-900">💻 HACKER TERMINAL</span>
                <span className="text-red-600">⚡</span>
              </div>
              <div className="p-5 text-[10px] md:text-sm space-y-2 text-left">
                <div className="text-green-500">&gt; connection established to spurvancelabs.com...</div>
                <div className="text-green-500">&gt; security perimeter bypassed...</div>
                <div className="text-green-500">&gt; Supabase anon key extracted...</div>
                <div className="text-green-500">&gt; admin_users table accessed...</div>
                <div className="text-green-500">&gt; SUPER_ADMIN privileges acquired...</div>
                <div className="text-green-500">&gt; 15 database tables enumerated...</div>
                <div className="text-green-500">&gt; all audit_logs wiped clean...</div>
                <div className="text-red-500">&gt; GOD MODE activated...</div>
                <div className="text-yellow-500">root@spurvancelabs:~# WE_ARE_IN ☠️😈</div>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-8 text-center">
              <div className="text-4xl md:text-6xl">😈 × 💀</div>
              <div className="mt-4 text-[9px] tracking-[0.4em] text-red-900">ATTACK SIGNATURE</div>
              <div className="mt-2 text-xl md:text-3xl font-black text-red-500">RAO JUNAID × MUHAMMAD ABDULLAH</div>
            </div>

            <div className="mt-10 text-center">
              <div className="text-3xl md:text-5xl font-black text-red-600">☠️ GAME OVER ☠️</div>
              <div className="mt-4 text-sm md:text-lg text-red-800 tracking-[0.2em]">😈 YOU&apos;VE BEEN OWNED. 💀</div>
            </div>
          </div>

          <div className="border-t border-red-900 px-5 py-4 flex flex-col md:flex-row justify-between gap-2 text-center text-[8px] md:text-[10px] text-red-900 tracking-widest">
            <span>☠️ INTRUSION: SUCCESSFUL</span>
            <span>💀 CONTROL: ACQUIRED</span>
            <span>😈 RAO JUNAID × ABDULLAH</span>
          </div>
        </div>
      </div>
    </main>
  );
}
