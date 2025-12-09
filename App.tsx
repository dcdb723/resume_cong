import React from 'react';
import { RESUME_DATA } from './constants';
import WorkCard from './components/WorkCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            {RESUME_DATA.name}
          </h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          </div>
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-full transition-colors">
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-32 pb-0 px-6 container mx-auto relative overflow-hidden">
        {/* Subtle Background Animation */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
           <div className="absolute top-[-10%] left-[10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
           <div className="absolute bottom-[-10%] right-[10%] w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 animate-fade-in-up">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 shadow-lg shadow-blue-200/50">
               <div className="bg-white rounded-full px-6 py-1.5 text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 uppercase tracking-widest">
                 Product Manager
               </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Building digital products that <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 relative">
                matter.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Right Profile Image */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in flex flex-col items-center md:items-start" style={{ animationDelay: '0.3s' }}>
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full md:rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative group mb-6 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src="/images/profile.png" 
                alt={RESUME_DATA.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            <div className="w-full opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
               <div className="bg-white/50 backdrop-blur-sm border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-center md:text-left">
                 <h2 className="text-xl font-bold text-slate-900 mb-3 pb-3 border-b border-slate-100 flex items-center justify-center md:justify-start gap-3">
                   <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
                     <span className="material-icons text-sm">person</span>
                   </div>
                   {RESUME_DATA.name}
                 </h2>
                 
                 <div className="space-y-2 pl-0.5">
                   <div className="flex items-center justify-center md:justify-start gap-3 text-slate-600 group/item hover:text-blue-600 transition-colors cursor-default">
                     <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-100 transition-colors shrink-0">
                       <span className="material-icons text-[16px]">location_on</span>
                     </div>
                     <span className="text-sm font-medium">{RESUME_DATA.contact.address}</span>
                   </div>

                   <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center justify-center md:justify-start gap-3 text-slate-600 group/item hover:text-blue-600 transition-colors">
                     <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-100 transition-colors shrink-0">
                       <span className="material-icons text-[16px]">email</span>
                     </div>
                     <span className="text-sm font-medium">{RESUME_DATA.contact.email}</span>
                   </a>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills & Education Section - Redesigned */}
      <section id="skills" className="pt-8 pb-12 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-slate-50/50 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/40 to-transparent -z-10"></div>
        
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            
            {/* Left Column: Skills */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                  <span className="material-icons text-xl">psychology</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Expertise</h2>
              </div>

              <div className="grid gap-6">
                {RESUME_DATA.skills.map((skillGroup, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {skillGroup.items.map(skill => (
                        <span key={skill} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Education */}
            <div className="flex-1 md:max-w-md space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
                  <span className="material-icons text-xl">school</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Education</h2>
              </div>

              <div className="space-y-6 relative">
                 {/* Connecting Line */}
                 <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 -z-10"></div>

                 {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-16 group">
                    {/* Timeline Dot */}
                    <div className="absolute left-[26px] top-1.5 h-3 w-3 rounded-full bg-white border-[3px] border-indigo-500 z-10 group-hover:scale-125 transition-transform"></div>
                    
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
                      <h4 className="text-lg font-bold text-slate-800 leading-tight mb-1">{edu.degree}</h4>
                      <p className="text-indigo-600 font-medium text-sm mb-3">{edu.school}</p>
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        <span className="flex items-center gap-1.5">
                          <span className="material-icons text-sm">event</span>
                          {edu.year}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-icons text-sm">place</span>
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
             <div className="h-px bg-slate-200 flex-1"></div>
             <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest px-4">Work History</h2>
             <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {RESUME_DATA.experience.map((job) => (
              <WorkCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 text-slate-400 py-12 text-center text-sm">
        <p>© {new Date().getFullYear()} Cong Deng. All rights reserved.</p>
        {/* <p className="mt-2 opacity-60 flex items-center justify-center gap-1">
          Built with <span className="text-slate-600 font-medium">React</span> & <span className="text-slate-600 font-medium">Tailwind CSS</span>
        </p> */}
      </footer>

      <a
        href="/resume.pdf"
        download="Cong_Deng_Resume.pdf"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-slate-900 text-white shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors hover:scale-110 duration-200"
        title="Download Resume"
      >
        <span className="material-icons">download</span>
      </a>
    </div>
  );
};

export default App;