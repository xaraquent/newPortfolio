import React from 'react'


export default function Bio() {
    return (
        <div className="mx-auto flex justify-center items-center min-h-screen max-w-5xl">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4'>
                <img src="bio_picture.jpg" alt="" className='rounded-3xl' />
                <div className='md:col-span-2 flex flex-col justify-center bg-purple-900/40 rounded-3xl p-4'>
                    <h1 className='text-xl sm:text-3xl md:text-4xl font-semibold md:text-left'>
                        Hi, my name is Simon and I'm a Fullstack Developer
                    </h1>
                    <p className='text-xs md:text-left mt-2'> I love to create solutions for others and to</p>
                </div>
            </div>
        </div>
    )
}
