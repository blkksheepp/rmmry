import { Plus } from "lucide-react"
import contentImg from '../../assets/images/content.jpg';

const BgPatterns = () => {
    return (
        <svg className="absolute z-20 w-full h-full inset-0 opacity-1 overflow-hidden pointer-events-none" width="100%" height="100%">
            {/* Wireframe Grid */}
            <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.3" opacity="0.3" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Top Left Extension lines */}
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
            <line x1="0" y1="28%" x2="100%" y2="28%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
        </svg>
    )
}

const Overview = () => {
    return (
        <div id="overview" className="h-full lg:h-screen lg:overflow-y-hidden bg-primary select-none scroll-mt-16">

            {/* Main Content */}
            <div className="h-full lg:flex-1 lg:flex lg:flex-row">
                {/* Details Secttion */}
                <div className="w-full h-screen lg:h-full pt-8 ~pl-6/10 pb-12 flex flex-col justify-between">
                    <div>
                        {/* Nav Header */}
                        <div className="flex flex-row items-center ~gap-16/32 pt-4 pb-6 font-light ~text-base/lg uppercase">
                            <p className="text-foreground">01</p>
                            <p className="text-background bg-foreground px-4 rounded-full">The Problem</p>
                        </div>

                        {/* Heading */}
                        <p className="text-foreground ~text-4xl/5xl uppercase w-[85%] lg:w-[70%]">The tools you use aren’t built for keeping your work accessible.</p>
                    </div>

                    {/* Description */}
                    <div>
                        {/* Description Heading */}
                        <p className="text-foreground ~text-5xl/6xl uppercase mr-10">Lost Prompts, Lost Time</p>
                        {/* Description Content */}
                        <p className="~mt-2/4 leading-relaxed text-foreground ~text-base/lg uppercase w-[90%] md:w-[80%] lg:w-[75%] xl:w-[60%]">
                            Most LLMs bury your past prompts and scatter them across chats. 
                            Search is unreliable and slow when you need something instantly. 
                            Important work gets lost, forgotten, or trapped in long conversations. 
                            You shouldn’t have to rewrite the same prompt twice.
                        </p>

                        {/* Nav Dots */}
                        <div className="flex flex-row gap-2.5 mt-8">
                            <div className='w-6 h-4 rounded-full bg-foreground border border-foreground'></div>
                            <div className='w-4 h-4 rounded-full border-[2px] border-foreground border-opacity-55'></div>
                            <div className='w-4 h-4 rounded-full border-[2px] border-foreground border-opacity-55'></div>
                            <div className='w-4 h-4 rounded-full border-[2px] border-foreground border-opacity-55'></div>
                        </div>
                    </div>
                </div>

                {/* Media Section */}
                <div className="w-full bg-primary h-screen lg:pt-8 flex flex-col">
                    {/* Nav Header */}
                    <div className="opacity-0 pointer-events-none flex flex-row items-center ~gap-16/32 pt-4 pb-6 font-light ~text-base/lg uppercase">
                        <p className="text-foreground">01</p>
                        <p className="text-background bg-foreground px-4 rounded-full">Overview</p>
                    </div>

                    {/* Heading */}
                    <p className="pr-4 sm:~pr-6/10 lg:pr-0 self-end lg:self-start text-foreground ~/md:~text-3xl/5xl sm:~text-4xl/5xl uppercase">The Problematic UX</p>

                    {/* Media */}
                    <div className="~mt-4/8 w-full h-full relative">
                        {/* Image */}

                        <img src={contentImg} alt="Overview Media 1" className="absolute w-full h-full rotate-[180deg] object-cover" />

                        {/* Button */}
                        <button className="absolute w-[350px] bottom-24 left-1/2 translate-x-[-50%] flex justify-between items-center bg-[#e6eef1] text-[#0f1724] px-4 py-0.5 rounded-full uppercase">
                            <span>Learn More</span>
                            <Plus className="px-0.5 py-0.5 rounded-full h-auto w-7" strokeWidth={1.5} />
                        </button>

                        <BgPatterns />

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Overview

