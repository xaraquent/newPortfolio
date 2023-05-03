import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const icons = [
    { src: '/git.svg', alt: 'Git' },
    { src: '/next.js.svg', alt: 'Next.js' },
    { src: '/node.js.svg', alt: 'Node.js' },
    { src: '/react.svg', alt: 'React' },
    { src: '/sass.svg', alt: 'Sass' },
    { src: '/tailwind.svg', alt: 'Tailwind' },
    { src: '/typescript.svg', alt: 'TypeScript' },
    { src: '/mongodb.svg', alt: 'MongoDB' },
];

export default function SkillSlider() {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: "auto",
            spacing: 20,
        },
    })

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4 max-w-5xl mx-auto'>
            <div className='sm:col-span-2 md:col-span-3 bg-purple-900/40 rounded-3xl p-4'>
                <h1 className='text-xl text-center sm:text-3xl md:text-4xl font-semibold p'>Skills</h1>
                <div ref={ref} className="keen-slider grid grid-cols-1 sm:grid-cols-3 justify-center items-center mt-2 sm:mt-4">
                    {icons.map((icon, index) => (
                        <div key={index} className="keen-slider__slide">
                            <img src={icon.src} alt={icon.alt} className='' />
                        </div >
                    ))
                    }
                </div >
            </div>
        </div >
    )
}
