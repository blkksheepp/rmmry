import { ChevronDown, Plus } from 'lucide-react';
import Logo from '/src/assets/images/logo.svg?raw';
import { useEffect, useRef, useState } from 'react';

export function Navbar() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const [hovered, setHovered] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [menuExpanded, setMenuExpanded] = useState(false);
    const isMobile = screenWidth < 1024; // md breakpoint
    const navExpandedMobileClass = menuExpanded && isMobile ? (screenWidth >= 768 ? "pb-[8rem]" : "pb-[10rem]") : '';
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuExpanded = () => {
        if (isMobile) setMenuExpanded(!menuExpanded);
    }

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        // Check if the new focus target is outside the wrapper
        if (!wrapperRef.current?.contains(e.relatedTarget as Node)) {
            setMenuExpanded(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') {
            setMenuExpanded(false);
        }
    }



    return (
        <nav
            onClick={handleMenuExpanded}
            ref={wrapperRef}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`
                top-0 left-0 fixed flex justify-between items-center lg:items-start
                bg-blur-bg backdrop-blur-sm py-8 w-full select-none
                ~h-10/28 ~px-6/10
                overflow-visible
                transition-padding duration-200 ease-in-out
                ${navExpandedMobileClass}
            `}
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div
                    className='[&>svg]:h-auto text-foreground [&>svg]:~w-[2rem]/[3.2rem]'
                    dangerouslySetInnerHTML={{ __html: Logo }}
                />
                <div className="relative w-fit ">
                    {/* Invisible full-length text to reserve width */}
                    <p className="opacity-0 uppercase pointer-events-none ~/2xl:~text-2xl/5xl">
                        Rememory
                    </p>

                    {/* Visible animated text */}
                    <p
                        className={`
                            absolute top-0 left-0 w-fit cursor-pointer uppercase ~/2xl:~text-2xl/5xl
                            ${hovered ? 'text-background bg-foreground italic pr-2 font-light' : 'text-foreground'}
                        `}
                    >
                        {hovered ? "Rememory" : "RMMRY"}
                    </p>
                </div>

            </div>

            {/* Nav Links */}
            <div className='hidden lg:flex flex-row justify-between gap-4 lg:gap-0 lg:mt-0.5 w-full font-light uppercase leading-snug tracking-wider ~lg/2xl:~px-4/24'>
                <a className="hover:underline" href="#">Extension</a>

                <div className="flex flex-col">
                    <a className="hover:underline" href="#overview">Overview</a>
                    <a className="hover:underline" href="#capabilities">Capabilities</a>
                    <a className="hover:underline" href="#our-vision">Our Vision</a>
                </div>
            </div>

            {/* CTA */}
            <div className="flex flex-row justify-end items-center gap-2 w-full">
                {/* Desktop CTA */}
                <button className="hidden sm:flex justify-between items-center bg-foreground px-4 md:py-1 rounded-full w-full sm:~max-w-[8rem]/[25rem] text-background uppercase ~/md:~py-0/1">
                    <span>Add Extension</span>
                    <Plus className="w-5 h-5" strokeWidth={1.5} />
                </button>

                <div className="lg:hidden relative flex flex-col gap-2 lg:mt-0.5 w-full max-w-[8rem]">
                    {/* Anchor wrapper */}
                    <div className="relative flex justify-end w-full">
                        {/* Tablet CTA */}
                        <button onClick={handleMenuExpanded} className="flex justify-between items-center bg-foreground px-4 md:py-1 rounded-full w-full max-w-[7.5rem] text-background uppercase ~/md:~py-0/1">
                            <span>Menu</span>
                            <ChevronDown className="w-6 h-6 translate-y-[1px]" strokeWidth={1.5} />
                        </button>

                        {/* Absolute element positioned immediately under button */}
                        <div
                            onBlur={() => setMenuExpanded(false)}
                            className={`lg:hidden absolute top-full ~right-1.5/2.5 mt-1.5 flex flex-col items-end gap-0.5 
                                font-light uppercase leading-snug tracking-wider ~text-sm/base
                                overflow-hidden transition-all duration-[150ms] ease-in-out
                                ${menuExpanded ? 'max-h-[10rem] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <a className="hover:underline" href="#">Extension</a>
                            <a className="hover:underline" href="#overview">Overview</a>
                            <a className="hover:underline" href="#capabilities">Capabilities</a>
                            <a className="hover:underline" href="#our-vision">Our Vision</a>

                            {/* Mobile CTA */}
                            <button className="sm:hidden flex justify-between items-center bg-foreground mt-1.5 px-4 py-1 rounded-full w-48 text-background uppercase">
                                <span className="font-[400]">Add Extension</span>
                                <Plus className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </nav>
    );
}