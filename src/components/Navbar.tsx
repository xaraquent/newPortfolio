import { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DropdownMenu from './DropdownMenu';

export default function Navbar() {
    const [isSmScreen, setIsSmScreen] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 640px)'); // Change this to your desired breakpoint
        setIsSmScreen(mediaQuery.matches);

        const handleResize = (event: MediaQueryListEvent) => setIsSmScreen(event.matches);
        mediaQuery.addListener(handleResize);

        return () => mediaQuery.removeListener(handleResize);
    }, []);

    const bgClass = isSmScreen ? 'bg-purple-900' : 'bg-gradient-to-b from-purple-900 via-purple-900/70 to-purple-900/0';


    return (
        <div className={`${bgClass} flex justify-center`}>
            <DropdownMenu />
            <div className="hidden sm:block sm:flex justify-between px-8 py-4 items-center w-full max-w-5xl">
                <div className="space-x-4 show">
                    <a className="underline" href="#">Home</a>
                    <a className="underline" href="#skills">Skills</a>
                    <a className="underline" href="#projects">Projects</a>
                    <a className="underline" href="#contact">Contact</a>
                </div>
                <div className="flex space-x-2">
                    <a href='https://github.com/xaraquent' target='_blank'><GitHubIcon /></a>
                    <a href='https://www.linkedin.com/in/simon-michael-042b23162/' target='_blank'><LinkedInIcon /></a>
                </div>
            </div>
        </div>

    )
}
