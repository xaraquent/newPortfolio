import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DropdownMenu from './DropdownMenu';

export default function Navbar() {
    return (
        <div className='bg-violet-900 flex justify-center'>
            <DropdownMenu />
            <div className=" hidden sm:block sm:flex justify-between p-4 items-center w-full max-w-5xl">
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
