import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Home/Hero';
import { ThemeToggle } from '../components/ThemeToggle';

const BgPatterns = () => {
  return (
    <svg className="-z-20 fixed inset-0 opacity-30 pointer-events-none" width="100%" height="100%">
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
      <line x1="60%" y1="0%" x2="97%" y2="139%" stroke="var(--color-foreground)" strokeWidth="0.5" />
      <line x1="0%" y1="100%" x2="139%" y2="0%" stroke="var(--color-foreground)" strokeWidth="0.5" />
    </svg>
  )
}

const BgElements = () => {
  return (
    <div className="-z-10 absolute inset-0 opacity-85 w-full h-full">
      {/* Prompt Input */}
      <div className="top-[20%] left-[16%] relative w-[400px]">
        <div className="-top-6 left-0 absolute font-mono text-[14px] text-muted uppercase tracking-wider">Prompt Input</div>
        <div className="relative bg-background p-4 border border-zinc-700 border-dashed">
          <div className="top-0 left-0 absolute border-icon border-t-2 border-l-2 w-3 h-3"></div>
          <div className="top-0 right-0 absolute border-icon border-t-2 border-r-2 w-3 h-3"></div>
          <div className="bottom-0 left-0 absolute border-icon border-b-2 border-l-2 w-3 h-3"></div>
          <div className="right-0 bottom-0 absolute border-icon border-r-2 border-b-2 w-3 h-3"></div>

          <textarea
            value={"This is a long prompt I spent ages writing. I know I’ll need it again, but where do I keep it? If I leave it in this chat, it’ll get buried forever. I just need a simple way to save and find it later."}
            className="bg-transparent focus:outline-none w-full min-h-[100px] font-mono text-muted-2 text-xs md:text-sm leading-relaxed resize-none"
            spellCheck={false}
            placeholder="Enter your unstructured thought here..."
          />
        </div>
      </div>

      {/* Saved Prompt */}
      <div className="top-[30%] left-[64%] relative w-[340px]">
        <div className="relative flex flex-col justify-center items-start gap-1 bg-background px-4 pt-3 pb-4 border border-zinc-700 border-dashed w-full text-muted-2">
          <div className="top-0 left-0 absolute border-icon border-t-2 border-l-2 w-3 h-3"></div>
          <div className="top-0 right-0 absolute border-icon border-t-2 border-r-2 w-3 h-3"></div>
          <div className="bottom-0 left-0 absolute border-icon border-b-2 border-l-2 w-3 h-3"></div>
          <div className="right-0 bottom-0 absolute border-icon border-r-2 border-b-2 w-3 h-3"></div>


          <p className="text-muted">Saved Memory with titles</p>
          <p className="font-[300] text-[13px] leading-[13px]">and meaningful descriptions</p>
          <div className="flex flex-row gap-2 mt-1.5 font-[300] text-[12px]">
            <p className="bg-zinc-500/10 px-2 py-0.5 text-muted">and</p>
            <p className="bg-zinc-500/10 px-2 py-0.5 text-muted">tags</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">      
      {/* Background */}
      <BgElements />
      <BgPatterns />
      

      {/* Content */}
      <div className="flex flex-col justify-center items-center h-screen">
        <Navbar />
        <Hero />
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Home