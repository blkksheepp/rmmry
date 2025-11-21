import { Plus } from 'lucide-react';
import Logo from '/src/assets/images/logo.svg?raw';
import { useState } from 'react';

export function Navbar() {
    const [hovered, setHovered] = useState(false);
    return <nav
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="select-none fixed top-0 left-0 w-full h-28 px-10 pt-6 flex items-start justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
            <div
                className='mt-1 text-foreground [&>svg]:w-16 [&>svg]:h-auto'
                dangerouslySetInnerHTML={{ __html: Logo }}
            />
            <div className="w-[350px]">
                <p
                    className={`
                    w-fit cursor-pointer uppercase text-5xl 
                    ${hovered ? 'text-background bg-foreground italic pr-2 font-light' : 'text-foreground'}
                    `}
                >
                    {hovered ? "Rememory" : "RMMRY"}
                </p>
            </div>

        </div>

        {/* Nav Links */}
        <div className='mt-0.5 uppercase font-light leading-snug tracking-wider flex flex-row w-full justify-between px-24'>
            <a className="hover:underline" href="#">Extension</a>

            <div className="flex flex-col">
                <a className="hover:underline" href="#overview">Overview</a>
                <a className="hover:underline" href="#capabilities">Capabilities</a>
                <a className="hover:underline" href="#our-vision">Our Vision</a>
            </div>
        </div>

        {/* CTA */}
        <button className="mt-0.5 uppercase bg-foreground w-full max-w-[400px] py-1 px-4 rounded-full text-background flex items-center justify-between">
            <span>Add Extension</span>
            <Plus className="w-5 h-5" strokeWidth={1.5} />
        </button>
    </nav>;
}