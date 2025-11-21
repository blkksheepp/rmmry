import { useState } from 'react';
import { Lightbulb, LightbulbOff } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
    const {
        theme,
        toggleTheme
    } = useTheme();
    const [isHovered, setIsHovered] = useState(true);
    const showLitBulb = theme === 'light' && isHovered || theme === 'dark' && !isHovered;


    return (
        <button
            onClick={toggleTheme}
            onMouseEnter={() => setIsHovered(false)}
            onMouseLeave={() => setIsHovered(true)}
            className="absolute bottom-10 right-10 p-2.5 bg-panel rounded-full transition-all duration-[450ms]">
            <div className=" relative w-4 h-4">
                <Lightbulb 
                    className={`absolute inset-0 w-4 h-4 text-foreground transition-all duration-[400ms] 
                        ${showLitBulb ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} strokeWidth={1.5} />

                <LightbulbOff className={`absolute inset-0 w-4 h-4 text-foreground transition-all duration-[450ms] 
                        ${!showLitBulb ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`} strokeWidth={1.5} />
            </div>
        </button>
    );
}