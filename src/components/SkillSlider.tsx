import React, { useRef, useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const icons = [
    { src: '/next.js.svg', alt: 'Next.js' },
    { src: '/node.js.svg', alt: 'Node.js' },
    { src: '/typescript.svg', alt: 'TypeScript' },
    { src: '/tailwind.svg', alt: 'Tailwind' },
    { src: '/mongodb.svg', alt: 'MongoDB' },
    { src: '/react.svg', alt: 'React' },
    { src: '/sass.svg', alt: 'Sass' },
    { src: '/git.svg', alt: 'Git' },
];

export default function SkillSlider() {
    const elRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
    }, [elRef.current])
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: () => Math.ceil(elRef.current?.clientWidth! / 225),
        },
    })

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4 max-w-5xl mx-auto'>
            <div className='sm:col-span-2 md:col-span-3 bg-purple-900/40 rounded-3xl p-4' ref={elRef}>
                <h1 className='text-xl text-center sm:text-3xl md:text-4xl font-semibold'>Skills</h1>
                <div ref={ref} className="keen-slider">
                    {icons.map((icon, index) => (
                        <div key={index} className="keen-slider__slide h-32 flex flex-col gap-4">
                            <img src={icon.src} alt={icon.alt} className="flex-1 h-14 object-contain mt-2" />
                            <p className='text-xl text-center'>{icon.alt}</p>
                        </div >
                    ))
                    }
                </div >
            </div>
        </div >
    )
}
