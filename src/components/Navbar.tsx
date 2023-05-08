import { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DropdownMenu from './DropdownMenu';

export default function Navbar() {
    const [isSmScreen, setIsSmScreen] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 640px)'); // Change this to your desired breakpoint
        setIsSmScreen(mediaQuery.matches);

        const handleResize = (event: MediaQueryListEvent) => setIsSmScreen(event.matches);
        mediaQuery.addListener(handleResize);

        return () => mediaQuery.removeListener(handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.pageYOffset > 0);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const bgClass = isSmScreen ? 'bg-purple-900' : 'bg-gradient-to-b from-purple-900 via-purple-900/70 to-purple-900/0';
    const stickyClass = isSticky ? 'fixed top-0 left-0 right-0 bg-purple-900' : '';

    return (
        <div className={`${bgClass} ${stickyClass} z-50 flex justify-center transition-all duration-1000 ease-in-out`}>
            <DropdownMenu />
            <div className="hidden sm:block sm:flex justify-between px-8 py-4 items-center w-full max-w-5xl">
                <div className='space-x-3'>
                    <a href='https://github.com/xaraquent' target='_blank'><GitHubIcon /></a>
                    <a href='https://www.linkedin.com/in/simon-michael-042b23162/' target='_blank'><LinkedInIcon /></a>
                </div>
                <div className="space-x-24 flex justify-center text-lg ">
                    <a className="underline" href="#">Home</a>
                    <a className="underline" href="#skills">Skills</a>
                    <a className="underline" href="#projects">Projects</a>
                    <a className="underline" href="#contact">Contact</a>
                </div>
                <div className='empty-content centers-the-nav-buttons'>
                </div>
            </div>
        </div>
    );
}
