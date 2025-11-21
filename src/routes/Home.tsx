import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Home/Hero';
import { ThemeToggle } from '../components/ThemeToggle';

const Home = () => {
  return (
    <div className="w-full min-h-screen relative">
      {/* Background */}
      <div className="-z-10 opacity-85 absolute inset-0 w-full h-full">
        {/* Prompt Input */}
        <div className="top-[20%] left-[16%] w-[400px] relative">
          <div className="absolute -top-6 left-0 text-[14px] text-muted font-mono uppercase tracking-wider">Prompt Input</div>
          <div className="relative bg-background border border-dashed border-zinc-700 p-4">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-icon"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-icon"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-icon"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-icon"></div>

            <textarea
              value={"This is a long prompt I spent ages writing. I know I’ll need it again, but where do I keep it? If I leave it in this chat, it’ll get buried forever. I just need a simple way to save and find it later."}
              className="w-full bg-transparent text-muted-2 font-mono text-xs md:text-sm focus:outline-none resize-none leading-relaxed min-h-[100px]"
              spellCheck={false}
              placeholder="Enter your unstructured thought here..."
            />
          </div>
        </div>

        {/* Saved Prompt */}
        <div className="top-[30%] left-[64%] w-[340px] relative">
          <div className="text-muted-2 relative bg-background border border-zinc-700 border-dashed w-full pt-3 pb-4 px-4 flex flex-col gap-1 items-start justify-center">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-icon"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-icon"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-icon"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-icon"></div>

            
            <p className="text-muted">Saved Memory with titles</p>
            <p className="text-[13px] leading-[13px] font-[300]">and meaningful descriptions</p>
            <div className="mt-1.5 flex flex-row gap-2 text-[12px] font-[300]">
              <p className="bg-zinc-500/10 text-muted py-0.5 px-2">and</p>
              <p className="bg-zinc-500/10 text-muted py-0.5 px-2">tags</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-screen">
        <Navbar />
        <Hero />
        <ThemeToggle />
      </div>

      <svg className="fixed inset-0 pointer-events-none -z-20 opacity-30" width="100%" height="100%">
        {/* Wireframe Grid */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="var(--color-foreground)" strokeWidth="0.3" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Top Left Extension lines */}
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="var(--color-foreground)" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="0" y1="28%" x2="100%" y2="28%" stroke="var(--color-foreground)" strokeWidth="0.5" strokeDasharray="4 4" />
        
        {/* Bottom Right Extension lines */}
        <line x1="60%" y1="0%" x2="97%" y2="139%" stroke="var(--color-foreground)" strokeWidth="0.5"/>
        <line x1="0%" y1="100%" x2="139%" y2="0%" stroke="var(--color-foreground)" strokeWidth="0.5" />
      </svg>
    </div>
  )
}

export default Home