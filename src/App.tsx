import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Brain, 
  Gamepad2, 
  BarChart3, 
  Sparkles, 
  MessageSquareText, 
  Layers, 
  Palette, 
  CheckCircle2,
  ChevronRight,
  School,
  GraduationCap,
  Trophy,
  Dices
} from 'lucide-react';

// --- Shared Components ---

const Navbar = ({ view, setView }: { view: 'student' | 'teacher', setView: (v: 'student' | 'teacher') => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b-4 border-black">
      <div className="flex items-center">
        <img 
          src="/api/images/22-0.png" 
          alt="duck duck GOOSE Logo" 
          className="h-16 md:h-20 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex bg-slate-100 p-1 brutal-border rounded-xl relative">
        <button 
          onClick={() => setView('teacher')}
          className={`relative z-10 px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2 cursor-pointer ${view === 'teacher' ? 'text-white' : 'text-slate-500'}`}
        >
          {view === 'teacher' && (
            <motion.div 
              layoutId="toggle-bg"
              className="absolute inset-0 bg-goose-blue brutal-shadow rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <School size={18} />
          <span className="hidden xs:inline">Teacher</span>
        </button>
        <button 
          onClick={() => setView('student')}
          className={`relative z-10 px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2 cursor-pointer ${view === 'student' ? 'text-black' : 'text-slate-500'}`}
        >
          {view === 'student' && (
            <motion.div 
              layoutId="toggle-bg"
              className="absolute inset-0 bg-duck-yellow brutal-shadow rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <GraduationCap size={18} />
          <span className="hidden xs:inline">Student</span>
        </button>
      </div>
    </nav>
  );
};

// --- Student View Components ---

const StudentHero = () => (
  <section className="pt-32 pb-20 px-6 bg-duck-yellow/10">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
          LEARNING <br />
          <span className="text-play-pink">IS A TEAM</span> <br />
          SPORT.
        </h1>
        <p className="text-xl font-medium text-slate-700 mb-8 max-w-md">
          Forget boring quizzes. Move your character, roll the dice, and win mini-games with your squad.
        </p>
        <button className="bg-play-pink text-white px-8 py-4 text-xl font-black brutal-border brutal-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
          JOIN THE GAME
        </button>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="w-full aspect-square bg-white brutal-border brutal-shadow-lg rounded-3xl overflow-hidden relative">
          <img 
            src="https://picsum.photos/seed/duckgame/800/800" 
            alt="Game Board" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-duck-yellow rounded-full brutal-border flex items-center justify-center animate-bounce">🦆</div>
              <div className="w-12 h-12 bg-goose-blue rounded-full brutal-border flex items-center justify-center animate-bounce delay-100">🦢</div>
              <div className="w-12 h-12 bg-play-pink rounded-full brutal-border flex items-center justify-center animate-bounce delay-200">🐥</div>
            </div>
          </div>
        </div>
        <div className="absolute -top-6 -right-6 bg-learn-green brutal-border p-4 brutal-shadow rotate-12">
          <span className="font-black text-white">NEW MINI-GAMES!</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const MiniGameCard = ({ title, description, icon: Icon, color, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`p-8 brutal-border brutal-shadow-lg rounded-2xl ${color} flex flex-col gap-4`}
  >
    <div className="w-14 h-14 bg-white brutal-border rounded-xl flex items-center justify-center">
      <Icon size={32} className="text-black" />
    </div>
    <h3 className="text-3xl font-black">{title}</h3>
    <p className="font-medium text-black/80 leading-relaxed">{description}</p>
  </motion.div>
);

const StudentGames = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">THE MINI-GAMES</h2>
        <p className="text-xl text-slate-600">Quick, collaborative, and totally chaotic.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <MiniGameCard 
          title="Justify" 
          description="Brainstorm individually, then fight for your answer in your group. May the best logic win!"
          icon={MessageSquareText}
          color="bg-duck-yellow"
          delay={0.1}
        />
        <MiniGameCard 
          title="Form Up" 
          description="Everyone writes one sentence. Can you build a cohesive paragraph together or will it be a disaster?"
          icon={Layers}
          color="bg-learn-green"
          delay={0.2}
        />
        <MiniGameCard 
          title="Stack'd Up" 
          description="Rapid-fire MCQ. Get it wrong, and your tower of blocks starts to crumble. Don't fall!"
          icon={Trophy}
          color="bg-play-pink"
          delay={0.3}
        />
        <MiniGameCard 
          title="Picture This" 
          description="Pictionary with a twist. Draw, guess, draw again. Will the final guess match the original prompt?"
          icon={Palette}
          color="bg-goose-blue"
          delay={0.4}
        />
      </div>
    </div>
  </section>
);

// --- Teacher View Components ---

const TeacherHero = () => (
  <section className="pt-32 pb-20 px-6 bg-goose-blue/10">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block bg-white brutal-border px-4 py-1 rounded-full mb-6 font-bold text-goose-blue">
          TEACHER DASHBOARD
        </div>
        <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
          BEYOND THE <br />
          <span className="text-goose-blue">MULTIPLE CHOICE</span> <br />
          BUBBLE.
        </h1>
        <p className="text-xl font-medium text-slate-700 mb-8">
          Unlock deep insights into student reasoning through collaborative free-response gameplay.
        </p>
        <div className="flex gap-4">
          <button className="bg-goose-blue text-white px-8 py-4 text-xl font-black brutal-border brutal-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
            GET STARTED FREE
          </button>
          <button className="bg-white text-black px-8 py-4 text-xl font-black brutal-border brutal-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
            BOOK DEMO
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white brutal-border brutal-shadow-lg p-6 rounded-3xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-black">Class Insight Report</h3>
          <BarChart3 className="text-goose-blue" />
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl border-2 border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} className="text-duck-yellow fill-duck-yellow" />
              <span className="text-sm font-bold uppercase tracking-wider text-slate-500">AI Insight</span>
            </div>
            <p className="text-sm font-medium">"Group 4 shows strong conceptual understanding but struggles with concluding arguments in 'Form Up'."</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-learn-green/20 rounded-xl brutal-border">
              <div className="text-2xl font-black">84%</div>
              <div className="text-xs font-bold text-slate-600">COLLABORATION SCORE</div>
            </div>
            <div className="p-4 bg-play-pink/20 rounded-xl brutal-border">
              <div className="text-2xl font-black">12</div>
              <div className="text-xs font-bold text-slate-600">CRITICAL MISCONCEPTIONS</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">WHY DUCKDUCKGOOSE?</h2>
        <p className="text-xl text-slate-600">The evolution of classroom engagement.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-10 brutal-border rounded-3xl bg-slate-50 opacity-60">
          <h3 className="text-2xl font-black mb-6 text-slate-400">Traditional Quiz Apps</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-500">
              <div className="mt-1 text-red-500">✕</div>
              <span className="font-medium">Isolated MCQ guessing</span>
            </li>
            <li className="flex items-start gap-3 text-slate-500">
              <div className="mt-1 text-red-500">✕</div>
              <span className="font-medium">Surface-level data (Right/Wrong)</span>
            </li>
            <li className="flex items-start gap-3 text-slate-500">
              <div className="mt-1 text-red-500">✕</div>
              <span className="font-medium">Competitive stress over collaboration</span>
            </li>
          </ul>
        </div>
        <div className="p-10 brutal-border brutal-shadow-lg rounded-3xl bg-learn-green/10 relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-duck-yellow brutal-border px-3 py-1 text-xs font-black rotate-12">WINNER</div>
          <h3 className="text-2xl font-black mb-6">duckduckgoose</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-learn-green" size={20} />
              <span className="font-bold">Rich free-response justifications</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-learn-green" size={20} />
              <span className="font-bold">AI-augmented reasoning analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-learn-green" size={20} />
              <span className="font-bold">Group-based decision making</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const TeacherFeatures = () => (
  <section className="py-24 px-6 bg-slate-900 text-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-goose-blue rounded-xl flex items-center justify-center brutal-border">
            <Brain size={24} />
          </div>
          <h3 className="text-2xl font-black">AI Insights</h3>
          <p className="text-slate-400 font-medium">Our AI analyzes student justifications to find exactly where they are getting stuck, saving you hours of grading.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-duck-yellow rounded-xl flex items-center justify-center brutal-border">
            <Users size={24} className="text-black" />
          </div>
          <h3 className="text-2xl font-black">Team Dynamics</h3>
          <p className="text-slate-400 font-medium">Track how students collaborate. See who is leading discussions and who needs more support in group settings.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-play-pink rounded-xl flex items-center justify-center brutal-border">
            <Gamepad2 size={24} />
          </div>
          <h3 className="text-2xl font-black">Curriculum Sync</h3>
          <p className="text-slate-400 font-medium">Easily import your existing lessons or use our AI to generate collaborative mini-games from any topic.</p>
        </div>
      </div>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'student' | 'teacher'>('teacher');

  return (
    <div className="min-h-screen">
      <Navbar view={view} setView={setView} />
      
      <main>
        <AnimatePresence mode="wait">
          {view === 'student' ? (
            <motion.div
              key="student"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <StudentHero />
              <StudentGames />
              
              {/* Board Game Teaser */}
              <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto brutal-border brutal-shadow-lg bg-white p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1">
                    <h2 className="text-5xl font-black mb-6">THE BOARD IS WAITING.</h2>
                    <p className="text-xl font-medium text-slate-600 mb-8">
                      Move your character across the map. Roll the dice. Land on event spaces to trigger mini-games and earn points for your group.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-duck-yellow brutal-border rounded-xl brutal-shadow">
                        <Dices size={32} />
                      </div>
                      <span className="font-black text-2xl">ROLL TO START</span>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <img src="https://picsum.photos/seed/char1/300/300" alt="Character 1" className="brutal-border rounded-2xl" referrerPolicy="no-referrer" />
                    <img src="https://picsum.photos/seed/char2/300/300" alt="Character 2" className="brutal-border rounded-2xl mt-8" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="teacher"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <TeacherHero />
              <ComparisonSection />
              <TeacherFeatures />
              
              {/* Call to Action */}
              <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center bg-duck-yellow brutal-border brutal-shadow-lg p-16 rounded-3xl">
                  <h2 className="text-5xl font-black mb-8">READY TO TRANSFORM YOUR CLASSROOM?</h2>
                  <p className="text-xl font-bold mb-10">Join 5,000+ educators building collaborative learning environments.</p>
                  <button className="bg-black text-white px-12 py-6 text-2xl font-black brutal-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-xl cursor-pointer">
                    CREATE YOUR FREE ACCOUNT
                  </button>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-4 border-black bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <img 
              src="/api/images/22-0.png" 
              alt="duck duck GOOSE Logo" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex gap-8 font-bold">
            <a href="#" className="hover:text-play-pink">Privacy</a>
            <a href="#" className="hover:text-play-pink">Terms</a>
            <a href="#" className="hover:text-play-pink">Contact</a>
          </div>
          <p className="text-slate-500 font-medium">© 2026 duckduckgoose. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
