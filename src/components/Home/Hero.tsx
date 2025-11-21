import { ChevronDown, Plus } from "lucide-react"
import { useState } from "react";

export function Hero() {
    const [hovered, setHovered] = useState(true);

    return (
        <div className="select-none w-full h-full flex flex-col justify-end px-10 py-16">
            <div className="flex flex-col gap-8"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >   
                {/* Hero Text */}
                <p className="group max-w-[80%] uppercase text-[82px] leading-[82px] text-foreground">
                    Have your prompts <span className="text-muted">instantly accessible</span> with
                    {" "}
                    <span className={`${hovered ? 'bg-foreground text-background pr-3 mr-1 font-light italic tracking-tighter' : ''} leading-none inline-block`}>{hovered ? "Rememory" : "RMMRY"}</span>
                    <span className={`${hovered ? 'font-light italic tracking-tighter -ml-3' : ''}`}>'s</span> organization.
                </p>

                {/* Hero Buttons */}
                <div className="flex flex-row gap-10 items-center justify-start">
                    {/* CTA */}
                    <button className="group w-[320px] bg-foreground text-background py-1 uppercase text-3xl flex items-center justify-between px-2 gap-2">
                        <Plus className="mt-0.5 w-8 h-auto p-0.5 bg-foreground rounded-full stroke-background" strokeWidth={1.75} />
                        <span>Add Extension</span>
                    </button>

                    {/* Discover */}
                    <button className="group uppercase text-muted text-xl flex items-center">
                        <span>Discover more</span>
                        <ChevronDown className="w-10 h-11" strokeWidth={1.1} />
                    </button>
                </div>
            </div>
        </div>
    );
}