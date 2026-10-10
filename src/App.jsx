import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 font-sans selection:bg-zinc-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <header className="mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
            Pranav Kumar Indraganti
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-6 max-w-2xl leading-relaxed">
            Computer Science Undergraduate & Full-Stack Developer specializing in Machine Learning, Computer Vision, and scalable web applications.
          </p>
          <div className="flex gap-4">
            <a href="mailto:pranavkumarindraganti@gmail.com" className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors border border-zinc-800 rounded-md hover:bg-zinc-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://github.com" className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors border border-zinc-800 rounded-md hover:bg-zinc-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://linkedin.com" className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors border border-zinc-800 rounded-md hover:bg-zinc-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </header>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-zinc-100 mb-8 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
            Experience
          </h2>
          <div className="space-y-8 border-l border-zinc-800 pl-6 ml-3">
            {[
              {
                role: "Open Source Contributor",
                company: "GirlScript Summer of Code",
                date: "May 2026 - June 2026",
                desc: "Worked on Open-Source Projects under the AI/ML Track utilizing Python, Numpy, Pandas, PyTorch, and TensorFlow."
              },
              {
                role: "Event Management Member",
                company: "CodeChef VIT - Chennai Chapter",
                date: "Jun 2026 - Present",
                desc: "Contributed to major chapter events including Freshers' Expo '26 and the Innovation Unbound Hackathon."
              }
            ].map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-zinc-800 border border-zinc-600" />
                <h3 className="text-lg font-medium text-zinc-100">{exp.role}</h3>
                <div className="text-sm text-zinc-400 mb-2">{exp.company} • {exp.date}</div>
                <p className="text-sm text-zinc-400 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-zinc-100 mb-8 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-6 border border-zinc-800 rounded-lg hover:bg-zinc-900/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-zinc-100">VehiCount</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-zinc-300 transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              </div>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                A real-time computer vision traffic surveillance system using YOLOv8 and ByteTrack with spatial tripwire algorithms for directional counting.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300">PyTorch</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300">OpenCV</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300">YOLOv8</span>
              </div>
            </div>

            <div className="group p-6 border border-zinc-800 rounded-lg hover:bg-zinc-900/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-zinc-100">PhocusApp</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-zinc-300 transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              </div>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                A full-stack student focus application pairing a distraction-free Pomodoro timer with an intuitive task manager to maximize productivity.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300">Next.js</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300">TypeScript</span>
                <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300">MongoDB</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}