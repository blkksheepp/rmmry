import { ChevronDown, Plus } from "lucide-react"
import { useState } from "react";

export function Hero() {
    const [hovered, setHovered] = useState(true);

    return (
        <div className="flex flex-col justify-end w-full h-full select-none ~py-10/16 ~px-6/10">
            <div className="flex flex-col gap-8"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >   
                {/* Hero Text */}
                <p className="group max-w-max lg:max-w-[80%] text-foreground uppercase ~text-[2.5rem]/[5.1rem] ~leading-[2.5rem]/[5.1rem]">
                    Have your prompts <span className="text-muted">instantly accessible</span> with
                    {" "}
                    <span className="whitespace-nowrap">
                        <span className={`${hovered ? 'bg-foreground text-background pr-3 mr-1 font-light italic tracking-tighter' : ''} leading-none inline-block`}>{hovered ? "Rememory" : "RMMRY"}</span>
                        <span className={`${hovered ? 'font-light italic tracking-tighter -ml-3' : ''}`}>'s</span>
                    </span>
                    {" "}organization.
                </p>

                {/* Hero Buttons */}
                <div className="flex flex-row justify-start items-center ~gap-4/10">
                    {/* CTA */}
                    <button className="group flex justify-between items-center bg-foreground py-1 text-background uppercase ~px-1/2 ~pr-1.5/2 ~text-base/3xl ~w-[12rem]/[20rem]">
                        <Plus className="bg-foreground stroke-background px-0.5 py-0.5 rounded-full h-auto ~w-7/8" strokeWidth={1.75} />
                        <span className="mb-0.5 text-end">Add Extension</span>
                    </button>

                    {/* Discover */}
                    <button className="group flex items-center text-muted uppercase ~text-xs/xl">
                        <span className="text-start">Discover more</span>
                        <ChevronDown className="h-11 ~w-6/10" strokeWidth={1.1} />
                    </button>
                </div>
            </div>
        </div>
    );
}