import React from 'react'


export default function Bio() {
    return (
        <div className="flex justify-center h-screen">
            <div className='flex flex-col items-center p-4 gap-4 sm:flex-row w-full max-w-5xl '>
                <img src="bio_picture.jpg" alt="" className='w-6/12 rounded-3xl' />
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>
                        Hi, my name is Simon and I'm a Fullstack Developer
                    </h1>
                    <p className='text-xs'> I love to create solutions for others and to</p>
                </div>
            </div>
        </div>
    )
}
