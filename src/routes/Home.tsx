import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Home';
import { ThemeToggle } from '../components/ThemeToggle';
import { useEffect, useState } from 'react';
import Overview from '../components/Overview';

const BgPatterns = () => {
  return (
    <svg className="-z-20 absolute w-full [@media(max-height:900px)]:min-h-[calc(100vh+100px)] inset-0 opacity-30 overflow-hidden pointer-events-none" width="100%" height="100%">
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
  const promptText = "This is a long prompt I spent ages writing. I know I’ll need it again, but where do I keep it? If I leave it in this chat, it’ll get buried forever. I just need a simple way to save it.";

  const [promptRows, setRows] = useState(6);
  useEffect(() => {
    const onResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1200) {
        setRows(6);
      } else {
        setRows(5);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [promptText]);

  return (
    <div className="-z-10 absolute inset-0 opacity-85 w-full h-full overflow-hidden">
      {/* Prompt Input */}
      <div className="relative h-fit ~top-[8rem]/[12.5rem] ~/xxl:~left-[1.5rem]/[20.4rem] ~w-[18rem]/[24rem]">
        <div className="-top-6 left-0 absolute font-mono text-muted uppercase tracking-wider ~text-xs/sm">Prompt Input</div>
        <div className="relative bg-background p-4 border border-zinc-700 border-dashed">
          <div className="top-0 left-0 absolute border-icon border-t-2 border-l-2 w-3 h-3"></div>
          <div className="top-0 right-0 absolute border-icon border-t-2 border-r-2 w-3 h-3"></div>
          <div className="bottom-0 left-0 absolute border-icon border-b-2 border-l-2 w-3 h-3"></div>
          <div className="right-0 bottom-0 absolute border-icon border-r-2 border-b-2 w-3 h-3"></div>

          <textarea
            rows={promptRows}
            value={promptText}
            className="bg-transparent focus:outline-none w-full min-h-fit font-mono text-muted-2 leading-relaxed resize-none ~text-[0.84rem]/[0.85rem]"
            spellCheck={false}
            placeholder="Enter your unstructured thought here..."
          />
        </div>
      </div>



      {/* Saved Prompt */}
      <div className="top-[25%] relative ~/xxl:~left-[0.4rem]/[81.9rem] ~w-[18rem]/[21.2rem]">
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
    <div>
      <div className="relative w-full h-screen">
        <Navbar />


        {/* Background */}
        <BgElements />
        <BgPatterns />

        <div className="flex flex-col justify-center items-center [@media(max-height:900px)]:min-h-[calc(100vh+100px)] h-screen">
          

          {/* Content */}
          <Hero />
        </div>

        <div>
          <Overview />
        </div>

      </div>
      <ThemeToggle />
    </div>

  )
}

export default Home