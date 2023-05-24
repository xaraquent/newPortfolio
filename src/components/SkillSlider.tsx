import React, { useRef, useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import SwipeTwoToneIcon from "@mui/icons-material/SwipeTwoTone";

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
    const elRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'free-snap',
        breakpoints: {
            "(min-width: 300px)": {
                slides: { perView: 2, spacing: 0 },
            },
            "(min-width: 400px)": {
                slides: { perView: 3, spacing: 0 },
            },
            "(min-width: 520px)": {
                slides: { perView: 4, spacing: 0 },
            },
            "(min-width: 640px)": {
                slides: { perView: 5, spacing: 0 },
            },
            "(min-width: 800px)": {
                slides: { perView: 6, spacing: 0 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 7 },
            },
        },
        slides: { perView: 1 },
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

    useEffect(() => {
        let loadedCount = 0;
        const handleLoad = () => {
            loadedCount++;
            if (loadedCount === icons.length) {
                setLoading(false);
            }
        };
        icons.forEach((icon) => {
            const img = new Image();
            img.src = icon.src;
            img.onload = handleLoad;
        });
    }, [sliderRef]);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4 max-w-5xl mx-auto'>
            <div className='sm:col-span-2 md:col-span-3 bg-purple-900/40 rounded-3xl p-4'>
                <h1 className='text-xl text-center sm:text-3xl md:text-4xl font-semibold mb-4'>Skills</h1>

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div ref={sliderRef} className="keen-slider">
                        <div className=' absolute flex flex-col gap-2 items-center justify-center z-10 h-full w-full duration-200 opacity-0 hover:opacity-100'>
                            <p className='text-xl'>Swipe left or right</p>
                            <SwipeTwoToneIcon fontSize='large' />
                        </div>
                        {icons.map((icon, index) => (
                            <div key={index} className="keen-slider__slide h-24 flex flex-col gap-2">
                                <img src={icon.src} alt={icon.alt} className="flex-1 h-14 object-contain" />
                                <p className='text-xl text-center'>{icon.alt}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}