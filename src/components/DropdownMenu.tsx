import { useState } from 'react';
import { Transition } from '@headlessui/react';
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
                <Transition
                    show={isOpen}
                    enter="transition duration-300 ease-out"
                    enterFrom="opacity-0 scale-1"
                    enterTo="opacity-100 scale-100"
                    leave="transition duration-200 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-1"
                >
                    <div className="absolute bg-purple-900 z-10">
                        <a href="#" className="block py-3 px-8 text-white flex gap-3 hover:bg-violet-500">
                            <HomeIcon />
                            Home
                        </a>
                        <a href="#" className="block py-3 px-8 text-white flex gap-3 hover:bg-violet-500">
                            <DesignServicesIcon />
                            Skills
                        </a>
                        <a href="#" className="block py-3 px-8 text-white flex gap-3 hover:bg-violet-500">
                            <FolderSpecialIcon />
                            Projects
                        </a>
                        <a href="#" className="block py-3 px-8 text-white flex gap-3 hover:bg-violet-500">
                            <ContactPageIcon />
                            Contact
                        </a>
                    </div>
                </Transition>
            </div>
        </div>
    );
}
