import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import SwipeTwoToneIcon from "@mui/icons-material/SwipeTwoTone";


interface Icon {
    src: string;
    alt: string;
}

const icons: Icon[] = [
    { src: '/next.js.svg', alt: 'Next.js' },
    { src: '/node.js.svg', alt: 'Node.js' },
    { src: '/typescript.svg', alt: 'TypeScript' },
    { src: '/tailwind.svg', alt: 'Tailwind' },
    { src: '/mongodb.svg', alt: 'MongoDB' },
    { src: '/react.svg', alt: 'React' },
    { src: '/sass.svg', alt: 'Sass' },
    { src: '/git.svg', alt: 'Git' },
];

export default function SkillSlider(): JSX.Element {
    const elRef = useRef<HTMLDivElement>(null);

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'free-snap',
        slides: {
            perView: () => Math.ceil(elRef.current?.clientWidth! / 190),
        },
    },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    );

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4 max-w-5xl mx-auto'>
            <div className='sm:col-span-2 md:col-span-3 bg-purple-900/40 rounded-3xl p-4' ref={elRef}>
                <h1 className='text-xl text-center sm:text-3xl md:text-4xl font-semibold mb-4'>Skills</h1>
                <div ref={ref} className="keen-slider">
                    <div className=' absolute flex flex-col gap-2 items-center justify-center z-10 h-full w-full duration-200 opacity-0 hover:opacity-100'>
                        <p className='text-xl'>Swipe left or right</p>
                        <SwipeTwoToneIcon fontSize='large' />
                    </div>
                    {icons.map((icon: Icon, index: number) => (
                        <div key={index} className="keen-slider__slide h-24 flex flex-col gap-2">
                            <Image src={icon.src} alt={icon.alt} width={500} height={500} className="flex-1 h-14 object-contain" />
                            <p className='text-xl text-center'>{icon.alt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
