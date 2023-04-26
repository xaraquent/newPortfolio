import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full sm:w-0'>
            <div className="relative sm:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <CloseIcon className="m-3 h-8 w-8" />
                    ) : (
                        <MenuIcon className="m-3 h-8 w-8" />
                    )}
                </button>
                <div className={`absolute ${isOpen ? 'block' : 'hidden'} bg-violet-900 z-10`}>
                    <a href="#" className="block py-2 px-4 text-white flex gap-2 hover:bg-violet-500">
                        <HomeIcon />
                        Home
                    </a>
                    <a href="#" className="block py-2 px-4 text-white flex gap-2 hover:bg-violet-500">
                        <DesignServicesIcon />
                        Skills
                    </a>
                    <a href="#" className="block py-2 px-4 text-white flex gap-2 hover:bg-violet-500">
                        <FolderSpecialIcon />
                        Projects
                    </a>
                    <a href="#" className="block py-2 px-4 text-white flex gap-2 hover:bg-violet-500">
                        <ContactPageIcon />
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}
